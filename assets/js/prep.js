/* ==========================================================================
   LAKSHYA - Preparation Hub Controller (DSA, Aptitude, Core CS, HR)
   ========================================================================== */

const PrepController = {
  currentTab: 'dsa', // 'dsa' | 'aptitude' | 'technical' | 'hr'
  currentTechSub: 'os', // 'os' | 'dbms' | 'cn' | 'oop'
  quizCurrentIndex: 0,
  quizScore: 0,
  quizAnswered: false,

  init() {
    this.bindEvents();
    this.render();
  },

  bindEvents() {
    // Prep Tab Pills
    const tabButtons = document.querySelectorAll('.prep-tab-pill');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentTab = btn.dataset.tab;
        this.render();
      });
    });
  },

  render() {
    const container = document.getElementById('prepContentArea');
    if (!container) return;

    if (this.currentTab === 'dsa') {
      this.renderDsaCheatsheets(container);
    } else if (this.currentTab === 'aptitude') {
      this.renderAptitude(container);
    } else if (this.currentTab === 'technical') {
      this.renderTechnical(container);
    } else if (this.currentTab === 'hr') {
      this.renderHR(container);
    }
  },

  // 1. DSA CHEAT SHEETS & PATTERNS
  renderDsaCheatsheets(container) {
    const data = PREP_DATA.dsaCheatsheet;
    container.innerHTML = `
      <div style="margin-bottom: 2rem;">
        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: var(--accent-cyan);"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          Time & Space Complexity Master Sheet
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
          Asymptotic analysis reference for common data structures and sorting algorithms frequently quizzed in technical screening rounds.
        </p>

        <div class="syllabus-table-wrap">
          <table class="syllabus-table">
            <thead>
              <tr>
                <th>Data Structure</th>
                <th>Access</th>
                <th>Search</th>
                <th>Insertion</th>
                <th>Deletion</th>
                <th>Space Complexity</th>
              </tr>
            </thead>
            <tbody>
              ${data.complexities.map(c => `
                <tr>
                  <td><strong>${c.ds}</strong></td>
                  <td><code>${c.access}</code></td>
                  <td><code>${c.search}</code></td>
                  <td><code>${c.insert}</code></td>
                  <td><code>${c.delete}</code></td>
                  <td><code>${c.space}</code></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div style="margin-bottom: 2.5rem;">
        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: var(--accent-purple);"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          Sorting Algorithms Benchmark
        </h3>
        <div class="syllabus-table-wrap">
          <table class="syllabus-table">
            <thead>
              <tr>
                <th>Algorithm</th>
                <th>Best Case</th>
                <th>Average Case</th>
                <th>Worst Case</th>
                <th>Space</th>
                <th>Stable?</th>
              </tr>
            </thead>
            <tbody>
              ${data.sortingAlgorithms.map(s => `
                <tr>
                  <td><strong>${s.name}</strong></td>
                  <td><code>${s.best}</code></td>
                  <td><code>${s.avg}</code></td>
                  <td><code>${s.worst}</code></td>
                  <td><code>${s.space}</code></td>
                  <td><span class="badge-pill" style="background: ${s.stable === 'Yes' ? 'rgba(16,185,129,0.1)' : 'rgba(244,63,94,0.1)'}; color: ${s.stable === 'Yes' ? 'var(--accent-emerald)' : 'var(--accent-rose)'};">${s.stable}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: var(--accent-emerald);"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          Master Coding Patterns Cheatsheet
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
          90% of interview coding problems boil down to these fundamental problem patterns. Learn the trigger keywords!
        </p>

        <div class="notes-grid">
          ${data.codingPatterns.map(pat => `
            <div class="note-card">
              <span class="note-card-badge">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                Pattern
              </span>
              <h3>${pat.title}</h3>
              <p>${pat.explanation}</p>
              
              <div class="note-formula-box">
                <strong style="color: var(--accent-cyan); display: block; margin-bottom: 0.25rem;">Trigger Signal:</strong>
                ${pat.trigger}
              </div>

              <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: auto;">
                <strong>Key LeetCode Problems:</strong><br>
                <span style="color: var(--text-secondary);">${pat.examples}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // 2. APTITUDE & PRACTICE QUIZ
  renderAptitude(container) {
    const data = PREP_DATA.aptitude;
    const questions = data.questions;
    const currentQ = questions[this.quizCurrentIndex];

    container.innerHTML = `
      <!-- Formula Reference Cards -->
      <div style="margin-bottom: 2rem;">
        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: var(--accent-amber);"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
          High-Yield Aptitude Formulas & Shortcuts
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
          Essential formulas required for TCS NQT, Infosys, Accenture, Wipro, and Goldman Sachs quantitative tests.
        </p>

        <div class="notes-grid">
          ${data.formulas.map(f => `
            <div class="note-card">
              <span class="note-card-badge" style="color: var(--accent-amber);">
                ${f.topic}
              </span>
              <h3>${f.topic}</h3>
              <p>${f.summary}</p>
              
              <div class="note-formula-box" style="border-left-color: var(--accent-amber);">
                ${f.formula}
              </div>

              <div style="font-size: 0.82rem; color: var(--text-secondary); background: rgba(245, 158, 11, 0.08); padding: 0.6rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid rgba(245, 158, 11, 0.2);">
                💡 <strong>Speed Tip:</strong> ${f.tips}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Interactive Practice Quiz -->
      <div class="quiz-container">
        <div class="quiz-header">
          <div class="quiz-progress-info">
            <span class="quiz-badge">Question ${this.quizCurrentIndex + 1} of ${questions.length}</span>
            <span class="quiz-badge" style="background: var(--bg-tertiary); color: var(--text-secondary); border-color: var(--border-subtle);">${currentQ.category}</span>
          </div>
          <div class="quiz-score-badge">
            Score: ${this.quizScore} / ${questions.length}
          </div>
        </div>

        <div class="quiz-question-box">
          <div class="quiz-q-title">${currentQ.question.replace(/\n/g, '<br>')}</div>
          
          <div class="quiz-options-list">
            ${currentQ.options.map((opt, i) => `
              <button class="quiz-option-btn" id="quizOpt_${i}" onclick="PrepController.selectQuizOption(${i})">
                <span class="quiz-option-key">${String.fromCharCode(65 + i)}</span>
                <span>${opt}</span>
              </button>
            `).join('')}
          </div>

          <div class="quiz-explanation-box" id="quizExplanation">
            <div class="quiz-exp-title">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Step-by-Step Solution & Derivation:
            </div>
            <div class="quiz-exp-text" style="white-space: pre-line;">${currentQ.explanation}</div>
          </div>
        </div>

        <div class="quiz-footer">
          <button class="btn btn-secondary btn-sm" onclick="PrepController.resetQuiz()">Restart Quiz</button>
          <button class="btn btn-primary btn-sm" id="quizNextBtn" onclick="PrepController.nextQuizQuestion()" style="display: none;">Next Question →</button>
        </div>
      </div>
    `;
  },

  selectQuizOption(selectedIndex) {
    if (this.quizAnswered) return;
    this.quizAnswered = true;

    const currentQ = PREP_DATA.aptitude.questions[this.quizCurrentIndex];
    const isCorrect = selectedIndex === currentQ.answer;

    if (isCorrect) {
      this.quizScore += 1;
      window.lakshyaStore.showToast('Correct! Great job.', 'success');
    } else {
      window.lakshyaStore.showToast('Incorrect! Check the step-by-step derivation.', 'error');
    }

    // Update buttons
    const chosenBtn = document.getElementById(`quizOpt_${selectedIndex}`);
    const correctBtn = document.getElementById(`quizOpt_${currentQ.answer}`);

    if (isCorrect) {
      chosenBtn.classList.add('correct');
    } else {
      chosenBtn.classList.add('wrong');
      correctBtn.classList.add('correct');
    }

    // Disable all options
    currentQ.options.forEach((_, i) => {
      const btn = document.getElementById(`quizOpt_${i}`);
      if (btn) btn.disabled = true;
    });

    // Show explanation
    const expBox = document.getElementById('quizExplanation');
    if (expBox) expBox.classList.add('show');

    // Show next button
    const nextBtn = document.getElementById('quizNextBtn');
    if (nextBtn) nextBtn.style.display = 'inline-flex';
  },

  nextQuizQuestion() {
    this.quizAnswered = false;
    const questions = PREP_DATA.aptitude.questions;
    if (this.quizCurrentIndex < questions.length - 1) {
      this.quizCurrentIndex += 1;
      this.render();
    } else {
      window.lakshyaStore.showToast(`Quiz completed! Final Score: ${this.quizScore}/${questions.length}`, 'success');
      this.quizCurrentIndex = 0;
      this.render();
    }
  },

  resetQuiz() {
    this.quizCurrentIndex = 0;
    this.quizScore = 0;
    this.quizAnswered = false;
    this.render();
  },

  // 3. CORE TECHNICAL CS (OS, DBMS, CN, OOP)
  renderTechnical(container) {
    const subjects = [
      { id: 'os', name: 'Operating Systems', icon: '💻', count: '4 Core Topics' },
      { id: 'dbms', name: 'Database Management (DBMS)', icon: '🗄️', count: '4 Core Topics' },
      { id: 'cn', name: 'Computer Networks', icon: '🌐', count: '3 Core Topics' },
      { id: 'oop', name: 'OOP & System Design', icon: '🧱', count: '2 Core Topics' }
    ];

    const currentSub = PREP_DATA.coreTechnical[this.currentTechSub];

    container.innerHTML = `
      <div class="tech-sub-cards">
        ${subjects.map(s => `
          <div class="tech-sub-card ${this.currentTechSub === s.id ? 'active' : ''}" onclick="PrepController.switchTechSub('${s.id}')">
            <div class="tech-icon-wrap" style="background: var(--bg-tertiary); font-size: 1.3rem;">
              ${s.icon}
            </div>
            <h4>${s.name}</h4>
            <p>${s.count}</p>
          </div>
        `).join('')}
      </div>

      <div style="background: var(--bg-card); border: 1px solid var(--border-medium); border-radius: var(--radius-xl); padding: 2rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-subtle);">
          <div>
            <h3 style="font-size: 1.3rem; margin-bottom: 0.25rem;">${currentSub.title}</h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">${currentSub.summary}</p>
          </div>
          <span class="badge-pill" style="background: var(--primary-light); color: var(--primary);">High Frequency</span>
        </div>

        <div class="qa-accordion">
          ${currentSub.interviewQA.map((item, idx) => `
            <div class="qa-item ${idx === 0 ? 'open' : ''}" id="qaItem_${idx}">
              <div class="qa-header" onclick="PrepController.toggleQa(${idx})">
                <span>Q${idx + 1}: ${item.q}</span>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div class="qa-body" style="white-space: pre-line;">${item.a}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  switchTechSub(subId) {
    this.currentTechSub = subId;
    this.render();
  },

  toggleQa(index) {
    const item = document.getElementById(`qaItem_${index}`);
    if (item) {
      item.classList.toggle('open');
    }
  },

  // 4. HR & BEHAVIORAL ROUND
  renderHR(container) {
    const data = PREP_DATA.hrBehavioral;

    container.innerHTML = `
      <!-- The STAR Framework Banner -->
      <div style="margin-bottom: 2.5rem;">
        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: var(--accent-cyan);"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
          Mastering the STAR Technique
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
          Mandatory format for answering behavioral and situational questions at Amazon, Google, Microsoft, and TCS.
        </p>

        <div class="star-framework-grid">
          ${data.starFramework.steps.map(s => `
            <div class="star-card">
              <span class="star-letter">${s.letter}</span>
              <h4>${s.letter} - ${s.name}</h4>
              <p>${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Top HR Questions with Model Answers -->
      <div>
        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: var(--accent-emerald);"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
          Top HR & Techno-Managerial Questions & Sample Answers
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
          Includes interviewer psychology, battle-tested model answers, and traps to avoid.
        </p>

        <div class="qa-accordion">
          ${data.questions.map((q, idx) => `
            <div class="qa-item ${idx === 0 ? 'open' : ''}" id="hrQa_${idx}">
              <div class="qa-header" onclick="PrepController.toggleHrQa(${idx})">
                <span>Q${idx + 1}: ${q.question}</span>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div class="qa-body">
                <div style="margin-bottom: 0.85rem; font-size: 0.82rem; color: var(--accent-cyan);">
                  🎯 <strong>What the Interviewer Evaluates:</strong> ${q.testing}
                </div>
                
                <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: var(--radius-sm); border-left: 3px solid var(--accent-emerald); margin-bottom: 0.85rem;">
                  <strong style="color: var(--accent-emerald); font-size: 0.84rem; display: block; margin-bottom: 0.35rem;">Sample Winning Answer:</strong>
                  <p style="font-size: 0.86rem; color: var(--text-primary); line-height: 1.6;">${q.answer}</p>
                </div>

                <div style="font-size: 0.82rem; color: var(--accent-rose); background: rgba(244, 63, 94, 0.08); padding: 0.6rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid rgba(244, 63, 94, 0.2);">
                  ⚠️ <strong>Pitfall to Avoid:</strong> ${q.pitfall}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  toggleHrQa(index) {
    const item = document.getElementById(`hrQa_${index}`);
    if (item) {
      item.classList.toggle('open');
    }
  }
};
