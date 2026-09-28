/* ==========================================================================
   LAKSHYA - Companies Hiring Process Controller
   ========================================================================== */

const CompaniesController = {
  selectedCategory: 'all',
  searchQuery: '',

  init() {
    this.bindEvents();
    this.render();
  },

  bindEvents() {
    // Search input
    const searchInput = document.getElementById('companySearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.render();
      });
    }

    // Category filter pills
    const filterButtons = document.querySelectorAll('.company-type-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedCategory = btn.dataset.category;
        this.render();
      });
    });
  },

  getFilteredCompanies() {
    return COMPANIES_DATA.filter(comp => {
      if (this.searchQuery) {
        const text = `${comp.name} ${comp.tier} ${comp.category} ${comp.overview}`.toLowerCase();
        if (!text.includes(this.searchQuery)) return false;
      }

      if (this.selectedCategory !== 'all') {
        if (this.selectedCategory === 'product' && !comp.category.toLowerCase().includes('product')) return false;
        if (this.selectedCategory === 'services' && !comp.category.toLowerCase().includes('service')) return false;
        if (this.selectedCategory === 'fintech' && !comp.category.toLowerCase().includes('fintech')) return false;
      }

      return true;
    });
  },

  render() {
    const grid = document.getElementById('companiesGrid');
    if (!grid) return;

    const companies = this.getFilteredCompanies();

    if (companies.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
          <h3>No companies matched your query</h3>
          <p>Try searching for Google, Amazon, Microsoft, TCS, Infosys, or Goldman Sachs.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = companies.map(comp => `
      <div class="company-card" onclick="CompaniesController.openCompanyDetails('${comp.id}')">
        <div>
          <div class="company-card-top">
            <div class="company-logo-badge" style="background: ${comp.logoBg};">
              ${comp.monogram}
            </div>
            <span class="company-tier-tag">${comp.tier}</span>
          </div>

          <h3 class="company-card-title">${comp.name}</h3>
          <p class="company-card-desc">${comp.overview}</p>

          <div class="company-stats-pill-row">
            <div class="comp-pill-item ctc">
              <span>Typical CTC Range</span>
              <strong>${comp.ctcRange.split('|')[0]}</strong>
            </div>
            <div class="comp-pill-item">
              <span>Min CGPA Requirement</span>
              <strong>${comp.eligibility.minCgpa.split('(')[0]}</strong>
            </div>
          </div>
        </div>

        <div class="company-card-footer">
          <span class="rounds-count-badge">
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
            ${comp.rounds.length} Selection Rounds
          </span>
          <button class="btn btn-outline btn-sm">Explore Guide →</button>
        </div>
      </div>
    `).join('');
  },

  openCompanyDetails(companyId) {
    const comp = COMPANIES_DATA.find(c => c.id === companyId);
    if (!comp) return;

    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalFooter = document.getElementById('modalFooter');

    modalTitle.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <div class="company-logo-badge" style="width: 38px; height: 38px; font-size: 1rem; background: ${comp.logoBg};">
          ${comp.monogram}
        </div>
        <div>
          <div>${comp.name} Recruitment Process</div>
          <div style="font-size: 0.78rem; color: var(--text-secondary); font-weight: 500;">${comp.tier} • ${comp.category}</div>
        </div>
      </div>
    `;

    modalBody.innerHTML = `
      <!-- CTC & Package Highlights -->
      <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: var(--radius-md); padding: 1rem 1.25rem; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">Compensation & CTC Packages</span>
          <div style="font-size: 1.1rem; font-weight: 800; color: var(--accent-emerald);">${comp.ctcRange}</div>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 0.75rem; color: var(--text-muted);">Glassdoor Rating</span>
          <div style="font-size: 1.05rem; font-weight: 700; color: #fbbf24;">★ ${comp.rating} / 5.0</div>
        </div>
      </div>

      <!-- Eligibility Criteria Box -->
      <div class="eligibility-box">
        <div class="eligibility-box-title">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Mandatory Eligibility Criteria
        </div>
        <div class="eligibility-grid">
          <div class="eligibility-item">
            <span>Minimum Academic Cutoff</span>
            <strong>${comp.eligibility.minCgpa}</strong>
          </div>
          <div class="eligibility-item">
            <span>Active Backlogs Policy</span>
            <strong>${comp.eligibility.backlogs}</strong>
          </div>
          <div class="eligibility-item">
            <span>Eligible Engineering Branches</span>
            <strong>${comp.eligibility.branches}</strong>
          </div>
          <div class="eligibility-item">
            <span>Education Gap Permitted</span>
            <strong>${comp.eligibility.gapYear}</strong>
          </div>
        </div>
      </div>

      <!-- Round by Round Hiring Timeline -->
      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.15rem; margin-bottom: 0.4rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.4rem;">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: var(--accent-cyan);"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Selection Workflow (${comp.rounds.length} Rounds)
        </h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
          Detailed breakdown of each evaluation stage, platform, duration, and focus areas.
        </p>

        <div class="rounds-timeline">
          ${comp.rounds.map(r => `
            <div class="round-step-item">
              <span class="round-marker"></span>
              <div class="round-title-row">
                <h4>Round ${r.roundNumber}: ${r.title}</h4>
                <span class="round-duration-pill">${r.duration} • ${r.platform}</span>
              </div>
              <p>${r.description}</p>
              <div class="round-focus-tags">
                ${r.focus.map(f => `<span class="round-focus-tag">${f}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Exam Syllabus Table -->
      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--text-primary);">Online Assessment Syllabus Breakdown</h4>
        <div class="syllabus-table-wrap">
          <table class="syllabus-table">
            <thead>
              <tr>
                <th>Section</th>
                <th>Syllabus Topics Covered</th>
                <th>Weightage</th>
              </tr>
            </thead>
            <tbody>
              ${comp.syllabus.map(s => `
                <tr>
                  <td><strong>${s.section}</strong></td>
                  <td>${s.topics}</td>
                  <td>
                    <span class="badge-pill" style="background: ${s.weightage === 'Critical' ? 'rgba(244,63,94,0.15)' : s.weightage === 'High' ? 'rgba(245,158,11,0.15)' : 'rgba(99,102,241,0.15)'}; color: ${s.weightage === 'Critical' ? 'var(--accent-rose)' : s.weightage === 'High' ? 'var(--accent-amber)' : 'var(--primary)'};">
                      ${s.weightage}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Past Real Interview Questions -->
      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--text-primary);">Past Year Real Interview Questions</h4>
        <div class="company-questions-list">
          ${comp.pastQuestions.map(pq => `
            <div class="company-q-card">
              <span>${pq.q}</span>
              <span class="q-type">${pq.type}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Pro Tips -->
      <div style="background: rgba(99, 102, 241, 0.08); border: 1px solid var(--border-glow); border-radius: var(--radius-md); padding: 1.25rem;">
        <h5 style="color: var(--accent-cyan); font-size: 0.95rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
          💡 Insider Strategy & Tips to Crack ${comp.name}
        </h5>
        <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
          ${comp.tips.map(t => `<li style="margin-bottom: 0.35rem;">${t}</li>`).join('')}
        </ul>
      </div>
    `;

    modalFooter.innerHTML = `
      <button class="btn btn-secondary" onclick="App.closeModal()">Close Guide</button>
      <a href="${comp.careerUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Visit Official Careers Page ↗</a>
    `;

    App.openModal(true); // open in large modal format
  }
};
