import '../styles.css';
import { renderHeader } from '../home/main';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper">
            ${renderHeader()}
            <div class="page-container">
                <div style="text-align: center; margin-bottom: 3rem;">
                    <h1 class="modern-title">ProCode Store</h1>
                    <p style="color: var(--secondary-text);">Redeem your points for exclusive swag and features.</p>
                </div>

                <div class="modern-grid">
                    <div class="modern-card" style="text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">👕</div>
                        <h2 class="modern-subtitle">ProCode T-Shirt</h2>
                        <div style="color: var(--accent-color); font-weight: bold; margin-bottom: 1rem;">5000 Points</div>
                        <button class="header-run-btn" style="width: 100%; justify-content: center;">Redeem</button>
                    </div>
                    <div class="modern-card" style="text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">🧢</div>
                        <h2 class="modern-subtitle">ProCode Cap</h2>
                        <div style="color: var(--accent-color); font-weight: bold; margin-bottom: 1rem;">3000 Points</div>
                        <button class="header-run-btn" style="width: 100%; justify-content: center;">Redeem</button>
                    </div>
                    <div class="modern-card" style="text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">🎫</div>
                        <h2 class="modern-subtitle">Premium (1 Month)</h2>
                        <div style="color: var(--accent-color); font-weight: bold; margin-bottom: 1rem;">8000 Points</div>
                        <button class="header-submit-btn" style="width: 100%; justify-content: center;">Redeem</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
