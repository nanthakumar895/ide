import '../styles.css';
import { renderHeader } from '../home/main';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper">
            ${renderHeader()}
            <div class="page-container">
                <div class="modern-card" style="display: flex; align-items: center; gap: 2rem; padding: 3rem;">
                    <div style="width: 120px; height: 120px; background: var(--accent-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3.5rem; font-weight: bold; color: white;">JD</div>
                    <div>
                        <h1 class="modern-title" style="margin-bottom: 0.5rem;">John Doe</h1>
                        <p style="color: var(--secondary-text);">Member since July 2026</p>
                        <div style="display: flex; gap: 1.5rem; margin-top: 1rem;">
                            <span><strong>124</strong> Solved</span>
                            <span><strong>15</strong> Contests</span>
                            <span><strong>2450</strong> Points</span>
                        </div>
                    </div>
                </div>

                <div class="home-layout" style="margin-top: 2rem;">
                    <div class="main-content">
                        <div class="modern-card">
                            <h3 class="modern-subtitle">Recent Submissions</h3>
                            <div class="problem-row">
                                <span>Two Sum</span>
                                <span style="color: #2cbb5d;">Accepted</span>
                            </div>
                            <div class="problem-row">
                                <span>Add Two Numbers</span>
                                <span style="color: #2cbb5d;">Accepted</span>
                            </div>
                            <div class="problem-row">
                                <span>Longest Substring...</span>
                                <span style="color: #ef4743;">Wrong Answer</span>
                            </div>
                        </div>
                    </div>
                    <div class="side-content">
                        <div class="modern-card">
                            <h3 class="modern-subtitle">Badges</h3>
                            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; font-size: 2rem; text-align: center;">
                                <div>🥇</div><div>🥈</div><div>🥉</div>
                                <div>🚀</div><div>🔥</div><div>🧩</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
