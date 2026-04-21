import '../styles.css';
import { renderHeader } from '../home/main';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper">
            ${renderHeader()}
            <div class="page-container">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h1 class="modern-title">Interview Preparation</h1>
                    <p style="color: var(--secondary-text);">Master the coding interview with curated paths.</p>
                </div>

                <div class="modern-grid">
                    <div class="modern-card">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏆</div>
                        <h2 class="modern-subtitle">Mock Interview</h2>
                        <p style="color: var(--secondary-text); margin-bottom: 1.5rem;">Practice with real-time pressure.</p>
                        <button class="header-submit-btn" style="width: 100%; justify-content: center;">Start Practice</button>
                    </div>
                    <div class="modern-card">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">📚</div>
                        <h2 class="modern-subtitle">Study Plans</h2>
                        <p style="color: var(--secondary-text); margin-bottom: 1.5rem;">Top pattern-based plans.</p>
                        <button class="header-run-btn" style="width: 100%; justify-content: center;">View Plans</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
