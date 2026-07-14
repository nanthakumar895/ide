import '../styles.css';
import { renderHeader } from '../home/main';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper">
            ${renderHeader()}
            <div class="page-container">
                <h1 class="modern-title">Apps & Integrations</h1>
                <div class="modern-grid">
                    <div class="modern-card">
                        <h2 class="modern-subtitle">GitHub</h2>
                        <p style="color: var(--secondary-text);">Sync your solutions.</p>
                        <button class="header-run-btn" style="width: 100%; justify-content: center;">Connect</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
