import '../styles.css';
import { renderHeader } from '../home/main';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper">
            ${renderHeader()}
            <div class="page-container">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h1 class="modern-title" style="font-size: 3rem;">ProCode Premium</h1>
                    <p style="color: var(--secondary-text); font-size: 1.2rem;">Accelerate your journey to becoming a top engineer.</p>
                </div>

                <div class="modern-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
                    <div class="modern-card" style="border: 1px solid var(--border-color);">
                        <h2 class="modern-subtitle">Monthly</h2>
                        <div style="font-size: 2.5rem; font-weight: bold; margin: 1rem 0;">$35.00</div>
                        <ul style="color: var(--secondary-text); padding-left: 1.5rem; margin-bottom: 2rem;">
                            <li>Unlimited code executions</li>
                            <li>Access to all premium problems</li>
                            <li>Priority support</li>
                            <li>No ads</li>
                        </ul>
                        <button class="header-run-btn" style="width: 100%; justify-content: center;">Subscribe</button>
                    </div>
                    <div class="modern-card" style="border: 2px solid var(--accent-color); position: relative;">
                        <div style="position: absolute; top: -12px; right: 20px; background: var(--accent-color); color: black; padding: 2px 10px; border-radius: 4px; font-weight: bold; font-size: 0.8rem;">BEST VALUE</div>
                        <h2 class="modern-subtitle">Yearly</h2>
                        <div style="font-size: 2.5rem; font-weight: bold; margin: 1rem 0;">$299.00</div>
                        <p style="color: var(--accent-color); font-weight: bold;">Save 30%</p>
                        <ul style="color: var(--secondary-text); padding-left: 1.5rem; margin-bottom: 2rem;">
                            <li>All Monthly features</li>
                            <li>ProCode Hoodie</li>
                            <li>Exclusive badges</li>
                            <li>Early access to new features</li>
                        </ul>
                        <button class="header-submit-btn" style="width: 100%; justify-content: center;">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
