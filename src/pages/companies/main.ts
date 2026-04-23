import '../styles.css';
import { renderHeader } from '../home/main';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper">
            ${renderHeader()}
            <div class="page-container">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h1 class="modern-title">Trending Companies</h1>
                    <p style="color: var(--secondary-text);">See which companies are hiring and what they are asking.</p>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1.5rem;">
                    ${['Google', 'Meta', 'Amazon', 'Apple', 'Netflix', 'Microsoft', 'Uber', 'Airbnb', 'Adobe', 'ByteDance'].map(company => `
                        <div class="modern-card" style="text-align: center; cursor: pointer;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏢</div>
                            <div style="font-weight: 600; color: var(--text-color);">${company}</div>
                            <div style="font-size: 0.8rem; color: var(--secondary-text); margin-top: 0.5rem;">200+ Questions</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}
