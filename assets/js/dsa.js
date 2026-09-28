/* ==========================================================================
   LAKSHYA - Dedicated DSA Preparation Sheet Controller
   ========================================================================== */

const DsaController = {
  activeDifficultyFilter: 'all', // 'all' | 'Easy' | 'Medium' | 'Hard'
  activeStatusFilter: 'all',     // 'all' | 'solved' | 'unsolved' | 'bookmarked'
  searchQuery: '',
  openTopics: new Set(['arrays', 'two-pointers']), // default open topics
  currentCodeLang: 'cpp', // 'cpp' | 'java' | 'python' | 'javascript'
  activeProblemSolution: null,

  init() {
    this.bindEvents();
    this.render();
  },

  bindEvents() {
    // Search input
    const searchInput = document.getElementById('dsaSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderTopics();
      });
    }

    // Difficulty filter pills
    const diffPills = document.querySelectorAll('.dsa-diff-pill');
    diffPills.forEach(pill => {
      pill.addEventListener('click', () => {
        diffPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.activeDifficultyFilter = pill.dataset.diff;
        this.renderTopics();
      });
    });

    // Status filter pills
    const statusPills = document.querySelectorAll('.dsa-status-pill');
    statusPills.forEach(pill => {
      pill.addEventListener('click', () => {
        statusPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.activeStatusFilter = pill.dataset.status;
        this.renderTopics();
      });
    });
  },

  calculateStats() {
    const total = DSA_PROBLEMS.length;
    let solvedCount = 0;

    let easyTotal = 0, easySolved = 0;
    let medTotal = 0, medSolved = 0;
    let hardTotal = 0, hardSolved = 0;

    DSA_PROBLEMS.forEach(p => {
      const isSolved = window.lakshyaStore.isDsaSolved(p.id);
      if (isSolved) solvedCount++;

      if (p.difficulty === 'Easy') {
        easyTotal++;
        if (isSolved) easySolved++;
      } else if (p.difficulty === 'Medium') {
        medTotal++;
        if (isSolved) medSolved++;
      } else if (p.difficulty === 'Hard') {
        hardTotal++;
        if (isSolved) hardSolved++;
      }
    });

    const percent = total > 0 ? Math.round((solvedCount / total) * 100) : 0;

    return {
      total,
      solvedCount,
      percent,
      easy: { solved: easySolved, total: easyTotal },
      medium: { solved: medSolved, total: medTotal },
      hard: { solved: hardSolved, total: hardTotal }
    };
  },

  render() {
    this.renderStats();
    this.renderTopics();
  },

  renderStats() {
    const stats = this.calculateStats();
    const statsCard = document.getElementById('dsaStatsContainer');
    if (!statsCard) return;

    statsCard.innerHTML = `
      <div class="dsa-overall-info">
        <span class="dsa-overall-title">Overall DSA Mastery</span>
        <div class="dsa-overall-numbers">
          <span class="solved-num">${stats.solvedCount}</span>
          <span class="total-num">/ ${stats.total} Solved</span>
          <span class="dsa-percent-badge">${stats.percent}%</span>
        </div>
        <div class="dsa-progress-bar-wrap">
          <div class="dsa-progress-bar-fill" style="width: ${stats.percent}%;"></div>
        </div>
      </div>

      <div class="dsa-diff-breakdown">
        <div class="diff-metric-box">
          <div class="diff-metric-label easy">
            <span>Easy</span>
            <span>${stats.easy.solved}/${stats.easy.total}</span>
          </div>
          <div class="diff-bar-track">
            <div class="diff-bar-fill easy" style="width: ${stats.easy.total ? (stats.easy.solved / stats.easy.total) * 100 : 0}%;"></div>
          </div>
        </div>

        <div class="diff-metric-box">
          <div class="diff-metric-label medium">
            <span>Medium</span>
            <span>${stats.medium.solved}/${stats.medium.total}</span>
          </div>
          <div class="diff-bar-track">
            <div class="diff-bar-fill medium" style="width: ${stats.medium.total ? (stats.medium.solved / stats.medium.total) * 100 : 0}%;"></div>
          </div>
        </div>

        <div class="diff-metric-box">
          <div class="diff-metric-label hard">
            <span>Hard</span>
            <span>${stats.hard.solved}/${stats.hard.total}</span>
          </div>
          <div class="diff-bar-track">
            <div class="diff-bar-fill hard" style="width: ${stats.hard.total ? (stats.hard.solved / stats.hard.total) * 100 : 0}%;"></div>
          </div>
        </div>
      </div>

      <div class="dsa-quick-actions">
        <button class="btn btn-secondary btn-sm" onclick="DsaController.pickRandomProblem()">
          🎲 Pick Random Problem
        </button>
        <button class="btn btn-outline btn-sm" onclick="DsaController.confirmResetProgress()" style="color: var(--text-muted);">
          Reset Progress
        </button>
      </div>
    `;
  },

  renderTopics() {
    const list = document.getElementById('dsaTopicList');
    if (!list) return;

    list.innerHTML = DSA_TOPICS.map(topic => {
      // Find all problems in this topic
      let problems = DSA_PROBLEMS.filter(p => p.topic === topic.id);
      const totalInTopic = problems.length;
      const solvedInTopic = problems.filter(p => window.lakshyaStore.isDsaSolved(p.id)).length;
      const percentInTopic = totalInTopic ? Math.round((solvedInTopic / totalInTopic) * 100) : 0;

      // Filter problems by search & toolbar
      if (this.searchQuery) {
        problems = problems.filter(p => p.title.toLowerCase().includes(this.searchQuery) || p.description.toLowerCase().includes(this.searchQuery));
      }
      if (this.activeDifficultyFilter !== 'all') {
        problems = problems.filter(p => p.difficulty === this.activeDifficultyFilter);
      }
      if (this.activeStatusFilter === 'solved') {
        problems = problems.filter(p => window.lakshyaStore.isDsaSolved(p.id));
      } else if (this.activeStatusFilter === 'unsolved') {
        problems = problems.filter(p => !window.lakshyaStore.isDsaSolved(p.id));
      } else if (this.activeStatusFilter === 'bookmarked') {
        problems = problems.filter(p => window.lakshyaStore.isDsaBookmarked(p.id));
      }

      if (problems.length === 0 && (this.searchQuery || this.activeDifficultyFilter !== 'all' || this.activeStatusFilter !== 'all')) {
        return ''; // hide topic if no matched problems during filter
      }

      const isOpen = this.openTopics.has(topic.id) || this.searchQuery.length > 0;

      return `
        <div class="dsa-topic-card ${isOpen ? 'open' : ''}" id="topicCard_${topic.id}">
          <div class="dsa-topic-header" onclick="DsaController.toggleTopic('${topic.id}')">
            <div class="dsa-topic-left">
              <div class="dsa-topic-icon">${topic.icon}</div>
              <div class="dsa-topic-title-wrap">
                <h4>${topic.name}</h4>
                <div style="font-size: 0.78rem; color: var(--text-muted);">${topic.desc}</div>
              </div>
            </div>

            <div class="dsa-topic-right">
              <span class="dsa-topic-counter-pill">${solvedInTopic} / ${totalInTopic}</span>
              <div class="dsa-topic-mini-bar">
                <div class="dsa-topic-mini-bar-fill" style="width: ${percentInTopic}%;"></div>
              </div>
              <svg class="dsa-topic-chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </div>

          <div class="dsa-topic-body">
            <table class="problems-table">
              <thead>
                <tr>
                  <th style="width: 48px;">Done</th>
                  <th style="width: 40px;">Star</th>
                  <th>Problem Title</th>
                  <th style="width: 100px;">Difficulty</th>
                  <th style="width: 200px; text-align: right;">Resources</th>
                </tr>
              </thead>
              <tbody>
                ${problems.map(prob => {
                  const isDone = window.lakshyaStore.isDsaSolved(prob.id);
                  const isStar = window.lakshyaStore.isDsaBookmarked(prob.id);
                  const hasNote = Boolean(window.lakshyaStore.getDsaNote(prob.id));

                  return `
                    <tr class="problem-row ${isDone ? 'solved' : ''}">
                      <td>
                        <div class="dsa-checkbox ${isDone ? 'checked' : ''}" onclick="DsaController.toggleProblemSolved('${prob.id}')">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                      </td>
                      <td>
                        <button class="dsa-star-btn ${isStar ? 'bookmarked' : ''}" onclick="DsaController.toggleProblemStar('${prob.id}')" title="Bookmark for Revision">
                          <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                          </svg>
                        </button>
                      </td>
                      <td>
                        <div class="problem-title-cell">
                          <a href="${prob.leetcodeUrl}" target="_blank" rel="noopener noreferrer" class="problem-title-text" title="Open on LeetCode">
                            ${prob.title}
                          </a>
                          <a href="${prob.leetcodeUrl}" target="_blank" rel="noopener noreferrer" title="LeetCode">
                            <svg class="ext-link-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                          </a>
                        </div>
                      </td>
                      <td>
                        <span class="diff-badge ${prob.difficulty.toLowerCase()}">${prob.difficulty}</span>
                      </td>
                      <td style="text-align: right;">
                        <div style="display: inline-flex; align-items: center; gap: 0.4rem;">
                          <button class="btn btn-secondary btn-sm" onclick="DsaController.openSolutionModal('${prob.id}')">
                            Solution
                          </button>
                          <button class="btn btn-outline btn-sm ${hasNote ? 'btn-cyan' : ''}" onclick="DsaController.openNotesModal('${prob.id}')" title="Revision Notes">
                            📝 ${hasNote ? 'Note*' : 'Note'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }).join('');
  },

  toggleTopic(topicId) {
    if (this.openTopics.has(topicId)) {
      this.openTopics.delete(topicId);
    } else {
      this.openTopics.add(topicId);
    }
    const card = document.getElementById(`topicCard_${topicId}`);
    if (card) {
      card.classList.toggle('open');
    }
  },

  toggleProblemSolved(probId) {
    window.lakshyaStore.toggleDsaSolved(probId);
    this.renderStats();
    this.renderTopics();
  },

  toggleProblemStar(probId) {
    window.lakshyaStore.toggleDsaBookmark(probId);
    this.renderTopics();
  },

  pickRandomProblem() {
    const unsolved = DSA_PROBLEMS.filter(p => !window.lakshyaStore.isDsaSolved(p.id));
    const targetPool = unsolved.length > 0 ? unsolved : DSA_PROBLEMS;
    const random = targetPool[Math.floor(Math.random() * targetPool.length)];

    window.lakshyaStore.showToast(`🎯 Random Challenge Picked: ${random.title}`, 'info');
    this.openSolutionModal(random.id);
  },

  confirmResetProgress() {
    if (confirm('Are you sure you want to reset your solved DSA checklist? This action cannot be undone.')) {
      window.lakshyaStore.resetDsaProgress();
      this.render();
    }
  },

  openSolutionModal(probId) {
    const prob = DSA_PROBLEMS.find(p => p.id === probId);
    if (!prob) return;

    this.activeProblemSolution = prob;
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalFooter = document.getElementById('modalFooter');

    modalTitle.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.6rem;">
        <span>${prob.title}</span>
        <span class="diff-badge ${prob.difficulty.toLowerCase()}">${prob.difficulty}</span>
      </div>
    `;

    modalBody.innerHTML = `
      <!-- Description & Intuition -->
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; color: var(--accent-cyan); margin-bottom: 0.35rem;">Problem Description</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 0.75rem;">
          ${prob.description}
        </p>
        <div style="background: var(--bg-tertiary); padding: 0.75rem 1rem; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 0.82rem; white-space: pre-wrap; margin-bottom: 1rem;">
          ${prob.example}
        </div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; color: var(--accent-emerald); margin-bottom: 0.35rem;">Approach & Intuition</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">
          ${prob.intuition}
        </p>
      </div>

      <!-- Complexities -->
      <div class="solution-complexity-grid">
        <div class="complexity-card">
          <span>Time Complexity</span>
          <code>${prob.timeComplexity}</code>
        </div>
        <div class="complexity-card">
          <span>Space Complexity</span>
          <code>${prob.spaceComplexity}</code>
        </div>
      </div>

      <!-- Multi-Language Code Snippet Tabs -->
      <div style="margin-top: 1.5rem;">
        <div class="code-language-tabs">
          <button class="code-lang-btn ${this.currentCodeLang === 'cpp' ? 'active' : ''}" onclick="DsaController.switchCodeLang('cpp')">C++</button>
          <button class="code-lang-btn ${this.currentCodeLang === 'java' ? 'active' : ''}" onclick="DsaController.switchCodeLang('java')">Java</button>
          <button class="code-lang-btn ${this.currentCodeLang === 'python' ? 'active' : ''}" onclick="DsaController.switchCodeLang('python')">Python 3</button>
          <button class="code-lang-btn ${this.currentCodeLang === 'javascript' ? 'active' : ''}" onclick="DsaController.switchCodeLang('javascript')">JavaScript</button>
        </div>

        <div class="code-snippet-container">
          <button class="copy-code-btn" onclick="DsaController.copyCurrentCode()">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            Copy Code
          </button>
          <pre class="code-block" id="solutionCodeDisplay">${this.escapeHtml(prob.solutions[this.currentCodeLang] || '// Solution unavailable')}</pre>
        </div>
      </div>
    `;

    const isSolved = window.lakshyaStore.isDsaSolved(prob.id);

    modalFooter.innerHTML = `
      <button class="btn btn-secondary" onclick="App.closeModal()">Close</button>
      <a href="${prob.leetcodeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Open in LeetCode ↗</a>
      <button class="btn ${isSolved ? 'btn-secondary' : 'btn-primary'}" onclick="DsaController.toggleProblemSolved('${prob.id}'); App.closeModal();">
        ${isSolved ? 'Mark as Unsolved' : '✓ Mark as Solved'}
      </button>
    `;

    App.openModal(true);
  },

  switchCodeLang(lang) {
    this.currentCodeLang = lang;
    const tabButtons = document.querySelectorAll('.code-lang-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));

    const activeBtn = Array.from(tabButtons).find(btn => btn.textContent.toLowerCase().includes(lang.replace('3', '')));
    if (activeBtn) activeBtn.classList.add('active');

    const display = document.getElementById('solutionCodeDisplay');
    if (display && this.activeProblemSolution) {
      display.textContent = this.activeProblemSolution.solutions[lang] || '// Solution unavailable';
    }
  },

  copyCurrentCode() {
    if (!this.activeProblemSolution) return;
    const code = this.activeProblemSolution.solutions[this.currentCodeLang] || '';
    navigator.clipboard.writeText(code).then(() => {
      window.lakshyaStore.showToast('Code copied to clipboard!', 'success');
    }).catch(() => {
      window.lakshyaStore.showToast('Copied to clipboard', 'info');
    });
  },

  openNotesModal(probId) {
    const prob = DSA_PROBLEMS.find(p => p.id === probId);
    if (!prob) return;

    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalFooter = document.getElementById('modalFooter');

    const existingNote = window.lakshyaStore.getDsaNote(probId);

    modalTitle.innerHTML = `Personal Notes: ${prob.title}`;

    modalBody.innerHTML = `
      <div style="margin-bottom: 1rem;">
        <label class="form-label">Write your notes, edge cases to remember, or key tricks for this problem:</label>
        <textarea id="dsaProblemNoteInput" class="form-control" rows="8" placeholder="e.g. Remember to handle negative target and empty array edge case. Sliding window trick: expand right, shrink left when invalid...">${existingNote}</textarea>
      </div>
      <div style="font-size: 0.78rem; color: var(--text-muted);">
        Notes are stored locally in your browser and will persist across sessions.
      </div>
    `;

    modalFooter.innerHTML = `
      <button class="btn btn-secondary" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="DsaController.saveNote('${probId}')">Save Note</button>
    `;

    App.openModal();
  },

  saveNote(probId) {
    const input = document.getElementById('dsaProblemNoteInput');
    if (input) {
      window.lakshyaStore.saveDsaNote(probId, input.value);
    }
    App.closeModal();
    this.renderTopics();
  },

  escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
};
