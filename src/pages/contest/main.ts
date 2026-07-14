import '../styles.css';
import { renderHeader } from '../home/main';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper">
            ${renderHeader()}
            <div class="page-container">
                <h1 class="modern-title">Upcoming Contests</h1>

                <div class="modern-card" style="display: flex; justify-content: space-between; align-items: center; background: linear-gradient(90deg, var(--panel-bg) 0%, rgba(255, 161, 22, 0.05) 100%);">
                    <div>
                        <h2 class="modern-subtitle" style="margin-bottom: 0.5rem;">Weekly Contest 402</h2>
                        <p style="color: var(--secondary-text);">Starts in: <span style="color: var(--accent-color); font-weight: bold;">2d 14h 22m</span></p>
                    </div>
                    <button class="header-submit-btn">Register</button>
                </div>

                <div class="modern-card" style="margin-top: 2rem;">
                    <h2 class="modern-subtitle">Contest History</h2>
                    <div class="problem-row">
                        <span>Biweekly Contest 132</span>
                        <span style="color: var(--secondary-text);">Rank: 142/12000</span>
                    </div>
                    <div class="problem-row">
                        <span>Weekly Contest 401</span>
                        <span style="color: var(--secondary-text);">Rank: 562/15400</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}
