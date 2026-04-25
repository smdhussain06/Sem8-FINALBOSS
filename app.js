document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();
});

function renderDashboard() {
    const grid = document.getElementById('subject-grid');
    if (!grid) return;
    grid.innerHTML = '';

    subjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.innerHTML = `
            <span class="subject-code">${subject.id}</span>
            <h2 class="subject-name">${subject.name}</h2>
            <p>${subject.description}</p>
        `;
        card.onclick = () => showSubjectDetail(subject);
        grid.appendChild(card);
    });
}

function showSubjectDetail(subject) {
    if (subject.id === 'PH3151') {
        renderPH3151Questions(subject);
        return;
    }
    
    // Generic fallback for other subjects
    const dashboard = document.getElementById('dashboard');
    const detail = document.getElementById('subject-detail');
    const content = document.getElementById('detail-content');

    dashboard.classList.add('hidden');
    detail.classList.remove('hidden');

    content.innerHTML = `
        <div class="detail-header">
            <span class="subject-code">${subject.id}</span>
            <h1>${subject.name}</h1>
            <p>${subject.description}</p>
        </div>
        <p style="text-align:center; padding: 2rem;">Full question database for this subject is being populated.</p>
    `;
    window.scrollTo(0, 0);
}

function renderPH3151Questions(subject) {
    const dashboard = document.getElementById('dashboard');
    const detail = document.getElementById('subject-detail');
    const content = document.getElementById('detail-content');

    dashboard.classList.add('hidden');
    detail.classList.remove('hidden');

    content.innerHTML = `
        <div class="detail-header">
            <span class="subject-code">PH3151 | Regulation 2021</span>
            <h1>Engineering Physics</h1>
            <p>Complete Question Database (All 4 Previous Papers)</p>
        </div>

        <div class="section-container">
            <h2 class="section-title">Part A: 2-Mark Questions</h2>
            ${ph3151_data.part_a.map((q, i) => renderQuestionCard(q, 'A', i + 1)).join('')}
        </div>

        <div class="section-container">
            <h2 class="section-title">Part B: 13/16-Mark Questions</h2>
            ${ph3151_data.part_b.map((q, i) => renderQuestionCard(q, 'B', i + 1)).join('')}
        </div>

        <div class="section-container">
            <h2 class="section-title">Part C: 15-Mark Questions</h2>
            ${ph3151_data.part_c.map((q, i) => renderQuestionCard(q, 'C', i + 1)).join('')}
        </div>
    `;
    window.scrollTo(0, 0);
}

function renderQuestionCard(q, part, num) {
    const frequencyText = q.question.includes('Repeated') ? q.question.match(/\((.*?)\)/)[1] : 'Appeared once';
    const mainQuestion = q.question.split('(')[0].trim();

    return `
        <div class="question-card">
            <div class="question-header">
                <div class="question-text">
                    <span class="q-number">#${part}${num}</span>
                    <div>${part === 'A' ? '' : ''} ${mainQuestion}</div>
                </div>
                <span class="frequency-tag">${frequencyText}</span>
            </div>
            <div class="question-body">
                ${q.image ? `<img src="${q.image}" alt="Concept Diagram" class="question-image">` : ''}
                
                <div class="answer-section">
                    <span class="answer-label">AU Exam Format Answer</span>
                    <div class="au-answer">${q.au_answer}</div>
                </div>

                <div class="answer-section">
                    <span class="answer-label">Simple Learning Concept</span>
                    <div class="easy-explain">${q.easy_explanation}</div>
                </div>
            </div>
        </div>
    `;
}

function showView(viewId) {
    if (viewId === 'dashboard') {
        document.getElementById('dashboard').classList.remove('hidden');
        document.getElementById('subject-detail').classList.add('hidden');
        renderDashboard();
    }
    window.scrollTo(0, 0);
}

window.showView = showView;
window.showSubjectDetail = showSubjectDetail;
