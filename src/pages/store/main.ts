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
                        <a href="/store.html" style="color: white; text-decoration: none; border-bottom: 2px solid var(--accent-color);">Store</a>
                    </div>
                </div>
            </nav>
            <div class="page-container">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h1 class="modern-title" style="margin-bottom: 1rem;">ProCode Store</h1>
                    <p style="color: var(--secondary-text); font-size: 1.1rem;">Redeem your points for exclusive items and premium features.</p>
                </div>

                <div class="modern-grid">
                    <div class="modern-card">
                        <img src="https://via.placeholder.com/200x150/1a1a1a/2cbb5d?text=T-Shirt" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;" />
                        <h2 class="modern-subtitle">ProCode Tee</h2>
                        <div style="color: #ffa116; font-weight: bold; margin-bottom: 1rem;">5000 Points</div>
                        <button class="ui button basic inverted fluid">Redeem</button>
                    </div>
                    <div class="modern-card">
                        <img src="https://via.placeholder.com/200x150/1a1a1a/2cbb5d?text=Subscription" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;" />
                        <h2 class="modern-subtitle">1-Month Premium</h2>
                        <div style="color: #ffa116; font-weight: bold; margin-bottom: 1rem;">3000 Points</div>
                        <button class="ui primary button fluid">Redeem</button>
                    </div>
                    <div class="modern-card">
                        <img src="https://via.placeholder.com/200x150/1a1a1a/2cbb5d?text=Hoodie" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;" />
                        <h2 class="modern-subtitle">ProCode Hoodie</h2>
                        <div style="color: #ffa116; font-weight: bold; margin-bottom: 1rem;">8000 Points</div>
                        <button class="ui button basic inverted fluid">Redeem</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
