/* ==========================================================================
   LAKSHYA - Job Portal Logic & Controller
   ========================================================================== */

const JobsController = {
  currentTab: 'browse', // 'browse' | 'saved' | 'applications'
  filters: {
    keyword: '',
    roleCategory: 'all',
    experience: 'all',
    mode: 'all',
    minSalary: 0
  },

  init() {
    this.bindEvents();
    this.render();
  },

  bindEvents() {
    // Search inputs
    const keywordInput = document.getElementById('jobSearchKeyword');
    if (keywordInput) {
      keywordInput.addEventListener('input', (e) => {
        this.filters.keyword = e.target.value.toLowerCase().trim();
        this.render();
      });
    }

    // Role tags
    const tagButtons = document.querySelectorAll('.filter-tag-btn');
    tagButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tagButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.filters.roleCategory = btn.dataset.category;
        this.render();
      });
    });

    // Experience select
    const expSelect = document.getElementById('jobExpFilter');
    if (expSelect) {
      expSelect.addEventListener('change', (e) => {
        this.filters.experience = e.target.value;
        this.render();
      });
    }

    // Mode select
    const modeSelect = document.getElementById('jobModeFilter');
    if (modeSelect) {
      modeSelect.addEventListener('change', (e) => {
        this.filters.mode = e.target.value;
        this.render();
      });
    }

    // Jobs View sub-tabs
    const tabButtons = document.querySelectorAll('.jobs-tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentTab = btn.dataset.tab;
        this.render();
      });
    });
  },

  getFilteredJobs() {
    return JOBS_DATA.filter(job => {
      // Keyword search (title, company, skills)
      if (this.filters.keyword) {
        const text = `${job.title} ${job.company} ${job.skills.join(' ')} ${job.location}`.toLowerCase();
        if (!text.includes(this.filters.keyword)) return false;
      }

      // Role Category
      if (this.filters.roleCategory !== 'all' && job.roleCategory.toLowerCase() !== this.filters.roleCategory.toLowerCase()) {
        return false;
      }

      // Experience
      if (this.filters.experience !== 'all') {
        if (this.filters.experience === 'fresher' && !job.experience.toLowerCase().includes('fresher')) return false;
        if (this.filters.experience === 'experienced' && job.experience.toLowerCase().includes('fresher')) return false;
      }

      // Mode
      if (this.filters.mode !== 'all' && job.mode.toLowerCase() !== this.filters.mode.toLowerCase()) {
        return false;
      }

      // Saved filter
      if (this.currentTab === 'saved') {
        return window.lakshyaStore.isJobSaved(job.id);
      }

      return true;
    });
  },

  render() {
    const jobsGrid = document.getElementById('jobsGrid');
    const pipelineContainer = document.getElementById('jobsPipelineBoard');
    const countBadge = document.getElementById('jobCountBadge');

    if (!jobsGrid) return;

    if (this.currentTab === 'applications') {
      jobsGrid.style.display = 'none';
      if (pipelineContainer) {
        pipelineContainer.style.display = 'grid';
        this.renderPipeline(pipelineContainer);
      }
      return;
    } else {
      jobsGrid.style.display = 'grid';
      if (pipelineContainer) pipelineContainer.style.display = 'none';
    }

    const filteredJobs = this.getFilteredJobs();
    if (countBadge) {
      countBadge.textContent = `${filteredJobs.length} Positions Available`;
    }

    if (filteredJobs.length === 0) {
      jobsGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <h3>No matching opportunities found</h3>
          <p>Try refining your search keyword or clearing the applied filters.</p>
          <button class="btn btn-primary btn-sm" onclick="JobsController.resetFilters()">Clear Filters</button>
        </div>
      `;
      return;
    }

    jobsGrid.innerHTML = filteredJobs.map(job => {
      const isSaved = window.lakshyaStore.isJobSaved(job.id);
      const isApplied = window.lakshyaStore.appliedJobs.some(a => a.jobId === job.id);

      return `
        <div class="job-card" data-job-id="${job.id}">
          <div class="job-card-header">
            <div class="job-company-badge">
              <div class="company-logo" style="background: ${job.logoBg};">
                ${job.monogram}
              </div>
              <div class="company-meta">
                <h4>${job.title}</h4>
                <span>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                  ${job.company} • ${job.location}
                </span>
              </div>
            </div>
            <button class="job-save-btn ${isSaved ? 'saved' : ''}" onclick="JobsController.toggleSave('${job.id}')" title="Save Job">
              <svg width="18" height="18" fill="${isSaved ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
            </button>
          </div>

          <div class="job-badges-row">
            <span class="badge-pill salary">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              ${job.salary}
            </span>
            <span class="badge-pill exp">${job.experience}</span>
            <span class="badge-pill mode">${job.mode}</span>
          </div>

          <div class="job-skills-tags">
            ${job.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
          </div>

          <div class="job-card-footer">
            <span class="job-posted-time">Posted ${job.postedDaysAgo}d ago • ${job.applicantsCount} applicants</span>
            <div class="job-card-actions">
              <button class="btn btn-outline btn-sm" onclick="JobsController.showJobDetails('${job.id}')">Details</button>
              ${isApplied ? 
                `<span class="badge-pill" style="background: rgba(16, 185, 129, 0.15); color: var(--accent-emerald);">✓ Applied</span>` :
                `<button class="btn btn-primary btn-sm" onclick="JobsController.openApplyModal('${job.id}')">Apply</button>`
              }
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  renderPipeline(container) {
    const statuses = [
      { key: 'Applied', title: 'Applied', color: 'var(--primary)' },
      { key: 'Review', title: 'Under Review', color: 'var(--accent-amber)' },
      { key: 'Interview', title: 'Interviewing', color: 'var(--accent-cyan)' },
      { key: 'Offer', title: 'Offer Received', color: 'var(--accent-emerald)' },
      { key: 'Archived', title: 'Archived / Rejected', color: 'var(--text-muted)' }
    ];

    const applications = window.lakshyaStore.appliedJobs;

    container.innerHTML = statuses.map(st => {
      const items = applications.filter(a => (a.status || 'Applied') === st.key);

      return `
        <div class="pipeline-col">
          <div class="pipeline-col-header">
            <div class="pipeline-title" style="color: ${st.color}">
              <span>●</span> ${st.title}
            </div>
            <span class="pipeline-counter">${items.length}</span>
          </div>

          <div class="pipeline-items-list">
            ${items.length === 0 ? `<div style="color: var(--text-muted); font-size: 0.8rem; text-align: center; margin-top: 2rem;">No applications</div>` : ''}
            ${items.map(app => {
              const job = JOBS_DATA.find(j => j.id === app.jobId);
              if (!job) return '';
              return `
                <div class="pipeline-card">
                  <h5>${job.title}</h5>
                  <div class="comp-name">${job.company} • Applied ${app.appliedAt}</div>
                  <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.4rem;">
                    Candidate: <strong>${app.candidateName || 'You'}</strong>
                  </div>
                  <select class="pipeline-card-status-select" onchange="JobsController.updateStatus('${app.jobId}', this.value)">
                    <option value="Applied" ${app.status === 'Applied' ? 'selected' : ''}>Status: Applied</option>
                    <option value="Review" ${app.status === 'Review' ? 'selected' : ''}>Status: Under Review</option>
                    <option value="Interview" ${app.status === 'Interview' ? 'selected' : ''}>Status: Interviewing</option>
                    <option value="Offer" ${app.status === 'Offer' ? 'selected' : ''}>Status: Offer Received</option>
                    <option value="Archived" ${app.status === 'Archived' ? 'selected' : ''}>Status: Archived / Closed</option>
                  </select>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('');
  },

  resetFilters() {
    this.filters = { keyword: '', roleCategory: 'all', experience: 'all', mode: 'all', minSalary: 0 };
    const keywordInput = document.getElementById('jobSearchKeyword');
    if (keywordInput) keywordInput.value = '';
    const tagButtons = document.querySelectorAll('.filter-tag-btn');
    tagButtons.forEach(b => b.classList.remove('active'));
    if (tagButtons[0]) tagButtons[0].classList.add('active');
    this.render();
  },

  toggleSave(jobId) {
    window.lakshyaStore.toggleSaveJob(jobId);
    this.render();
  },

  updateStatus(jobId, status) {
    window.lakshyaStore.updateJobStatus(jobId, status);
    this.render();
  },

  showJobDetails(jobId) {
    const job = JOBS_DATA.find(j => j.id === jobId);
    if (!job) return;

    const modal = document.getElementById('globalModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalFooter = document.getElementById('modalFooter');

    modalTitle.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <div class="company-logo" style="width: 36px; height: 36px; font-size: 0.9rem; background: ${job.logoBg};">
          ${job.monogram}
        </div>
        <div>
          <div>${job.title}</div>
          <div style="font-size: 0.8rem; font-weight: 500; color: var(--text-secondary);">${job.company} • ${job.location}</div>
        </div>
      </div>
    `;

    modalBody.innerHTML = `
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
        <span class="badge-pill salary">${job.salary}</span>
        <span class="badge-pill exp">${job.experience}</span>
        <span class="badge-pill mode">${job.mode}</span>
        <span class="badge-pill" style="background: var(--bg-tertiary); color: var(--text-secondary);">${job.type}</span>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--accent-cyan);">Role Overview</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">${job.overview}</p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--accent-cyan);">Key Responsibilities</h4>
        <ul style="padding-left: 1.25rem; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">
          ${job.responsibilities.map(r => `<li style="margin-bottom: 0.35rem;">${r}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--accent-cyan);">Eligibility & Qualifications</h4>
        <ul style="padding-left: 1.25rem; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">
          ${job.requirements.map(req => `<li style="margin-bottom: 0.35rem;">${req}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--accent-cyan);">Perks & Benefits</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${job.perks.map(p => `<span class="badge-pill" style="background: rgba(16, 185, 129, 0.1); color: var(--accent-emerald); border: 1px solid rgba(16,185,129,0.2);">✦ ${p}</span>`).join('')}
        </div>
      </div>
    `;

    const isApplied = window.lakshyaStore.appliedJobs.some(a => a.jobId === job.id);

    modalFooter.innerHTML = `
      <button class="btn btn-secondary" onclick="App.closeModal()">Close</button>
      ${isApplied ? 
        `<span style="color: var(--accent-emerald); font-weight: 700; font-size: 0.9rem;">✓ You have applied</span>` :
        `<button class="btn btn-primary" onclick="JobsController.openApplyModal('${job.id}')">Apply Now</button>`
      }
    `;

    App.openModal();
  },

  openApplyModal(jobId) {
    const job = JOBS_DATA.find(j => j.id === jobId);
    if (!job) return;

    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalFooter = document.getElementById('modalFooter');

    modalTitle.innerHTML = `Apply to ${job.title} at ${job.company}`;

    modalBody.innerHTML = `
      <form id="applyJobForm" onsubmit="event.preventDefault(); JobsController.submitApplication('${job.id}');">
        <div class="form-group">
          <label class="form-label">Full Name *</label>
          <input type="text" id="applyFullName" class="form-control" required placeholder="e.g. Lakshya Sharma" value="Lakshya Sharma">
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Email Address *</label>
            <input type="email" id="applyEmail" class="form-control" required placeholder="you@example.com" value="lakshya@student.edu">
          </div>
          <div class="form-group">
            <label class="form-label">Phone Number *</label>
            <input type="tel" id="applyPhone" class="form-control" required placeholder="+91 9876543210" value="+91 98765 43210">
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">LinkedIn Profile URL</label>
            <input type="url" id="applyLinkedin" class="form-control" placeholder="https://linkedin.com/in/username" value="https://linkedin.com/in/lakshya-dev">
          </div>
          <div class="form-group">
            <label class="form-label">GitHub / Portfolio URL</label>
            <input type="url" id="applyGithub" class="form-control" placeholder="https://github.com/username" value="https://github.com/lakshya-coder">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Resume / CV Attachment (Simulated)</label>
          <div style="border: 2px dashed var(--border-medium); border-radius: var(--radius-md); padding: 1rem; text-align: center; background: var(--bg-input);">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: var(--primary); margin-bottom: 0.25rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
            <div style="font-size: 0.85rem; font-weight: 600;">Lakshya_Resume_2026.pdf (Ready to submit)</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">PDF, DOCX up to 5MB</div>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Brief Note to the Recruiter (Why are you a great match?)</label>
          <textarea id="applyNote" class="form-control" rows="3" placeholder="Share why you're interested in this role and your key strengths...">Passionate engineer with hands-on expertise in Data Structures, React, and Java microservices. Excited to solve high-scale challenges at ${job.company}!</textarea>
        </div>
      </form>
    `;

    modalFooter.innerHTML = `
      <button type="button" class="btn btn-secondary" onclick="App.closeModal()">Cancel</button>
      <button type="button" class="btn btn-primary" onclick="document.getElementById('applyJobForm').requestSubmit()">Submit Application</button>
    `;

    App.openModal();
  },

  submitApplication(jobId) {
    const fullName = document.getElementById('applyFullName').value;
    const email = document.getElementById('applyEmail').value;
    const phone = document.getElementById('applyPhone').value;
    const linkedin = document.getElementById('applyLinkedin').value;
    const github = document.getElementById('applyGithub').value;
    const note = document.getElementById('applyNote').value;

    window.lakshyaStore.applyToJob(jobId, {
      candidateName: fullName,
      email,
      phone,
      linkedin,
      github,
      note
    });

    App.closeModal();
    this.render();
  }
};
