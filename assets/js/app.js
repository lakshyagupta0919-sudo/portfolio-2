/* ==========================================================================
   LAKSHYA - Main Application Coordinator & Navigation Router
   ========================================================================== */

const App = {
  currentView: 'jobs', // 'jobs' | 'prep' | 'companies' | 'dsa'
  cmdPaletteOpen: false,

  init() {
    this.bindNavigation();
    this.bindGlobalShortcuts();
    this.updateHeroStats();
    this.updateStreakBadge();

    // Check URL hash for initial route
    const hash = window.location.hash.replace('#', '');
    if (['jobs', 'prep', 'companies', 'dsa'].includes(hash)) {
      this.switchView(hash);
    } else {
      this.switchView('jobs');
    }

    // Initialize sub-controllers
    JobsController.init();
    PrepController.init();
    CompaniesController.init();
    DsaController.init();

    window.addEventListener('hashchange', () => {
      const h = window.location.hash.replace('#', '');
      if (['jobs', 'prep', 'companies', 'dsa'].includes(h)) {
        this.switchView(h);
      }
    });
  },

  bindNavigation() {
    const navLinks = document.querySelectorAll('.main-nav .nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const view = link.dataset.view;
        this.switchView(view);
      });
    });

    // Mobile nav links
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const view = link.dataset.view;
        this.switchView(view);
        this.toggleMobileMenu(false);
      });
    });

    // Mobile toggle btn
    const mobBtn = document.getElementById('mobileMenuToggle');
    if (mobBtn) {
      mobBtn.addEventListener('click', () => {
        const menu = document.getElementById('mobileMenuDrawer');
        if (menu) menu.classList.toggle('open');
      });
    }

    // Modal Close
    const closeBtn = document.getElementById('modalCloseBtn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal());

    const overlay = document.getElementById('globalModal');
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.closeModal();
      });
    }

    // Quick Search Button
    const searchTrigger = document.getElementById('quickSearchTrigger');
    if (searchTrigger) {
      searchTrigger.addEventListener('click', () => this.openCommandPalette());
    }
  },

  switchView(viewId) {
    this.currentView = viewId;
    window.location.hash = viewId;

    // Update active navbar item
    document.querySelectorAll('.main-nav .nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.view === viewId);
    });

    // Toggle view sections
    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.remove('active');
    });

    const targetSec = document.getElementById(`view-${viewId}`);
    if (targetSec) {
      targetSec.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  updateHeroStats() {
    const totalJobs = JOBS_DATA.length;
    const totalCompanies = COMPANIES_DATA.length;
    const totalDsa = DSA_PROBLEMS.length;

    const jEl = document.getElementById('statTotalJobs');
    const cEl = document.getElementById('statTotalCompanies');
    const dEl = document.getElementById('statTotalDsa');

    if (jEl) jEl.textContent = `${totalJobs}+`;
    if (cEl) cEl.textContent = `${totalCompanies}+`;
    if (dEl) dEl.textContent = `${totalDsa}+`;
  },

  updateStreakBadge() {
    const streakEl = document.getElementById('userStreakCount');
    if (streakEl) {
      streakEl.textContent = `${window.lakshyaStore.streak} Day Streak`;
    }
  },

  // Modal Control
  openModal(isLarge = false) {
    const modal = document.getElementById('globalModal');
    const modalBox = document.getElementById('globalModalBox');
    if (!modal) return;

    if (isLarge && modalBox) {
      modalBox.classList.add('modal-box-large');
    } else if (modalBox) {
      modalBox.classList.remove('modal-box-large');
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  closeModal() {
    const modal = document.getElementById('globalModal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  },

  // Command Palette & Quick Search
  bindGlobalShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.openCommandPalette();
      }
      // Escape
      if (e.key === 'Escape') {
        this.closeModal();
        this.closeCommandPalette();
      }
    });

    const cmdInput = document.getElementById('cmdPaletteInput');
    if (cmdInput) {
      cmdInput.addEventListener('input', (e) => this.handleCmdSearch(e.target.value));
    }

    const cmdOverlay = document.getElementById('cmdPaletteOverlay');
    if (cmdOverlay) {
      cmdOverlay.addEventListener('click', (e) => {
        if (e.target === cmdOverlay) this.closeCommandPalette();
      });
    }
  },

  openCommandPalette() {
    const overlay = document.getElementById('cmdPaletteOverlay');
    const input = document.getElementById('cmdPaletteInput');
    if (!overlay) return;

    overlay.classList.add('open');
    this.cmdPaletteOpen = true;
    if (input) {
      input.value = '';
      input.focus();
      this.handleCmdSearch('');
    }
  },

  closeCommandPalette() {
    const overlay = document.getElementById('cmdPaletteOverlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    this.cmdPaletteOpen = false;
  },

  handleCmdSearch(query) {
    const resultsContainer = document.getElementById('cmdPaletteResults');
    if (!resultsContainer) return;

    const q = query.toLowerCase().trim();

    // 1. Search in Jobs
    const matchedJobs = JOBS_DATA.filter(j => 
      !q || j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q) || j.skills.some(s => s.toLowerCase().includes(q))
    ).slice(0, 3);

    // 2. Search in Companies
    const matchedCompanies = COMPANIES_DATA.filter(c => 
      !q || c.name.toLowerCase().includes(q) || c.tier.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)
    ).slice(0, 3);

    // 3. Search in DSA
    const matchedDsa = DSA_PROBLEMS.filter(p => 
      !q || p.title.toLowerCase().includes(q) || p.topic.toLowerCase().includes(q)
    ).slice(0, 4);

    let html = '';

    if (matchedJobs.length > 0) {
      html += `<div class="cmd-category-title">Job Opportunities</div>`;
      matchedJobs.forEach(job => {
        html += `
          <div class="cmd-item" onclick="App.jumpToJob('${job.id}')">
            <div class="cmd-item-left">
              <span>💼</span>
              <span><strong>${job.title}</strong> at ${job.company}</span>
            </div>
            <span class="cmd-item-badge">${job.salary}</span>
          </div>
        `;
      });
    }

    if (matchedCompanies.length > 0) {
      html += `<div class="cmd-category-title">Company Hiring Guides</div>`;
      matchedCompanies.forEach(comp => {
        html += `
          <div class="cmd-item" onclick="App.jumpToCompany('${comp.id}')">
            <div class="cmd-item-left">
              <span>🏢</span>
              <span><strong>${comp.name}</strong> (${comp.rounds.length} Rounds)</span>
            </div>
            <span class="cmd-item-badge">${comp.tier}</span>
          </div>
        `;
      });
    }

    if (matchedDsa.length > 0) {
      html += `<div class="cmd-category-title">DSA Problems</div>`;
      matchedDsa.forEach(prob => {
        html += `
          <div class="cmd-item" onclick="App.jumpToDsa('${prob.id}')">
            <div class="cmd-item-left">
              <span>⚡</span>
              <span><strong>${prob.title}</strong></span>
            </div>
            <span class="cmd-item-badge" style="color: ${prob.difficulty === 'Easy' ? 'var(--accent-emerald)' : prob.difficulty === 'Medium' ? 'var(--accent-amber)' : 'var(--accent-rose)'};">${prob.difficulty}</span>
          </div>
        `;
      });
    }

    if (!html) {
      html = `<div style="text-align: center; padding: 2rem; color: var(--text-muted); font-size: 0.88rem;">No results found for "${query}"</div>`;
    }

    resultsContainer.innerHTML = html;
  },

  jumpToJob(jobId) {
    this.closeCommandPalette();
    this.switchView('jobs');
    JobsController.showJobDetails(jobId);
  },

  jumpToCompany(compId) {
    this.closeCommandPalette();
    this.switchView('companies');
    CompaniesController.openCompanyDetails(compId);
  },

  jumpToDsa(probId) {
    this.closeCommandPalette();
    this.switchView('dsa');
    DsaController.openSolutionModal(probId);
  }
};

// Auto-run on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
