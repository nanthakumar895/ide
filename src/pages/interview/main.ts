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
                        <a href="/interview.html" style="color: white; text-decoration: none; border-bottom: 2px solid var(--accent-color);">Interview</a>
                        <a href="/store.html" style="color: var(--secondary-text); text-decoration: none;">Store</a>
                    </div>
                </div>
            </nav>
            <div class="page-container">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h1 class="modern-title" style="margin-bottom: 1rem;">Interview Preparation</h1>
                    <p style="color: var(--secondary-text); font-size: 1.1rem;">Master the coding interview with our curated paths and mock assessments.</p>
                </div>

                <div class="modern-grid">
                    <div class="modern-card">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏆</div>
                        <h2 class="modern-subtitle">Mock Interview</h2>
                        <p style="color: var(--secondary-text); margin-bottom: 1.5rem;">Practice with real-time pressure and get instant feedback on your performance.</p>
                        <button class="ui primary button fluid">Start Practice</button>
                    </div>
                    <div class="modern-card">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">📚</div>
                        <h2 class="modern-subtitle">Study Plans</h2>
                        <h3 style="font-size: 0.9rem; color: var(--accent-color); margin-top: -0.5rem; margin-bottom: 1rem;">Top 75 Questions</h3>
                        <p style="color: var(--secondary-text); margin-bottom: 1.5rem;">A 30-day plan covering the most frequent patterns in top-tier interviews.</p>
                        <button class="ui button basic inverted fluid">View Plan</button>
                    </div>
                    <div class="modern-card">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏢</div>
                        <h2 class="modern-subtitle">Company Tracks</h2>
                        <p style="color: var(--secondary-text); margin-bottom: 1.5rem;">Tailored question sets for Google, Meta, Amazon, and Apple interviews.</p>
                        <button class="ui button basic inverted fluid">Explore Tracks</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
