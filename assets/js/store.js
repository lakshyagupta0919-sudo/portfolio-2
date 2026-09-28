/* ==========================================================================
   LAKSHYA - State Store & LocalStorage Persistence
   ========================================================================== */

const STORAGE_KEYS = {
  SAVED_JOBS: 'lakshya_saved_jobs',
  APPLIED_JOBS: 'lakshya_applied_jobs',
  DSA_SOLVED: 'lakshya_dsa_solved',
  DSA_BOOKMARKS: 'lakshya_dsa_bookmarks',
  DSA_NOTES: 'lakshya_dsa_notes',
  STREAK: 'lakshya_streak',
  LAST_ACTIVE: 'lakshya_last_active',
  QUIZ_PROGRESS: 'lakshya_quiz_progress'
};

class Store {
  constructor() {
    this.savedJobs = new Set(this.load(STORAGE_KEYS.SAVED_JOBS, []));
    this.appliedJobs = this.load(STORAGE_KEYS.APPLIED_JOBS, []);
    this.dsaSolved = new Set(this.load(STORAGE_KEYS.DSA_SOLVED, []));
    this.dsaBookmarks = new Set(this.load(STORAGE_KEYS.DSA_BOOKMARKS, []));
    this.dsaNotes = this.load(STORAGE_KEYS.DSA_NOTES, {});
    this.initStreak();
  }

  load(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.error('Error reading localStorage for', key, e);
      return fallback;
    }
  }

  save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error saving to localStorage for', key, e);
    }
  }

  initStreak() {
    const today = new Date().toDateString();
    const lastActive = localStorage.getItem(STORAGE_KEYS.LAST_ACTIVE);
    let streak = parseInt(localStorage.getItem(STORAGE_KEYS.STREAK) || '1', 10);

    if (lastActive) {
      const lastDate = new Date(lastActive);
      const diffDays = Math.round((new Date(today) - lastDate) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        streak += 1;
      } else if (diffDays > 1) {
        streak = 1;
      }
    }
    localStorage.setItem(STORAGE_KEYS.LAST_ACTIVE, today);
    localStorage.setItem(STORAGE_KEYS.STREAK, streak.toString());
    this.streak = streak;
  }

  // Jobs Actions
  isJobSaved(jobId) {
    return this.savedJobs.has(jobId);
  }

  toggleSaveJob(jobId) {
    if (this.savedJobs.has(jobId)) {
      this.savedJobs.delete(jobId);
      this.save(STORAGE_KEYS.SAVED_JOBS, Array.from(this.savedJobs));
      this.showToast('Removed from saved jobs', 'info');
      return false;
    } else {
      this.savedJobs.add(jobId);
      this.save(STORAGE_KEYS.SAVED_JOBS, Array.from(this.savedJobs));
      this.showToast('Job saved to your bookmarks!', 'success');
      return true;
    }
  }

  applyToJob(jobId, candidateData) {
    const existingIndex = this.appliedJobs.findIndex(app => app.jobId === jobId);
    const newApplication = {
      jobId,
      appliedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Applied', // Stages: Applied, Screening, Interviewing, Offer, Rejected
      ...candidateData
    };

    if (existingIndex > -1) {
      this.appliedJobs[existingIndex] = newApplication;
    } else {
      this.appliedJobs.push(newApplication);
    }
    this.save(STORAGE_KEYS.APPLIED_JOBS, this.appliedJobs);
    this.showToast('Application successfully submitted! Added to Application Tracker.', 'success');
  }

  updateJobStatus(jobId, newStatus) {
    const app = this.appliedJobs.find(a => a.jobId === jobId);
    if (app) {
      app.status = newStatus;
      this.save(STORAGE_KEYS.APPLIED_JOBS, this.appliedJobs);
      this.showToast(`Application status updated to: ${newStatus}`, 'info');
    }
  }

  // DSA Actions
  isDsaSolved(probId) {
    return this.dsaSolved.has(probId);
  }

  toggleDsaSolved(probId) {
    let isSolved = false;
    if (this.dsaSolved.has(probId)) {
      this.dsaSolved.delete(probId);
      isSolved = false;
      this.showToast('Marked as unsolved', 'info');
    } else {
      this.dsaSolved.add(probId);
      isSolved = true;
      this.showToast('🎉 Problem solved! Progress updated.', 'success');
    }
    this.save(STORAGE_KEYS.DSA_SOLVED, Array.from(this.dsaSolved));
    return isSolved;
  }

  isDsaBookmarked(probId) {
    return this.dsaBookmarks.has(probId);
  }

  toggleDsaBookmark(probId) {
    let isBookmarked = false;
    if (this.dsaBookmarks.has(probId)) {
      this.dsaBookmarks.delete(probId);
      isBookmarked = false;
      this.showToast('Removed from revision list', 'info');
    } else {
      this.dsaBookmarks.add(probId);
      isBookmarked = true;
      this.showToast('⭐ Starred for revision!', 'success');
    }
    this.save(STORAGE_KEYS.DSA_BOOKMARKS, Array.from(this.dsaBookmarks));
    return isBookmarked;
  }

  getDsaNote(probId) {
    return this.dsaNotes[probId] || '';
  }

  saveDsaNote(probId, noteText) {
    if (noteText && noteText.trim()) {
      this.dsaNotes[probId] = noteText.trim();
    } else {
      delete this.dsaNotes[probId];
    }
    this.save(STORAGE_KEYS.DSA_NOTES, this.dsaNotes);
    this.showToast('Notes saved successfully!', 'success');
  }

  resetDsaProgress() {
    this.dsaSolved.clear();
    this.save(STORAGE_KEYS.DSA_SOLVED, []);
    this.showToast('DSA progress has been reset.', 'info');
  }

  // Toast Notifications
  showToast(message, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg class="toast-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`;
    } else if (type === 'error') {
      iconSvg = `<svg class="toast-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`;
    } else {
      iconSvg = `<svg class="toast-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
    }

    toast.innerHTML = `${iconSvg}<span class="toast-msg">${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(40px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
}

// Global Store Instance
window.lakshyaStore = new Store();
