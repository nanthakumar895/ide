import '../styles.css';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper">
            <nav class="page-nav">
                <div style="display: flex; align-items: center; gap: 2rem;">
                    <a href="/" class="nav-brand">θ ProCode IDE</a>
                    <div style="display: flex; gap: 1.5rem;">
                        <a href="/" style="color: var(--secondary-text); text-decoration: none;">Explore</a>
                        <a href="/interview.html" style="color: var(--secondary-text); text-decoration: none;">Interview</a>
                        <a href="/companies.html" style="color: white; text-decoration: none; border-bottom: 2px solid var(--accent-color);">Companies</a>
                    </div>
                </div>
            </nav>
            <div class="page-container">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h1 class="modern-title" style="margin-bottom: 1rem;">Trending Companies</h1>
                    <p style="color: var(--secondary-text); font-size: 1.1rem;">See which companies are hiring and what they are asking.</p>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1.5rem;">
                    ${['Google', 'Meta', 'Amazon', 'Apple', 'Netflix', 'Microsoft', 'Uber', 'Airbnb', 'Adobe', 'ByteDance'].map(company => `
                        <div class="modern-card" style="text-align: center; cursor: pointer;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏢</div>
                            <div style="font-weight: 600;">${company}</div>
                            <div style="font-size: 0.8rem; color: var(--secondary-text); margin-top: 0.5rem;">200+ Questions</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}
