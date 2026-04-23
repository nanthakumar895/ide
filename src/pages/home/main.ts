import { MOCK_PROBLEMS } from '../../data/mockProblems';
import '../styles.css';

const appElement = document.getElementById('app');

function renderHeader() {
    return `
        <header class="procode-main-header">
            <div class="header-left">
                <button id="open-sidebar" class="header-icon-btn mobile-only-flex"><i class="bars icon"></i></button>
                <div class="logo-box"><span>L</span></div>
                <div class="nav-links-modern desktop-only-flex">
                    <a href="/" class="active">Explore</a>
                    <a href="/interview.html">Problems</a>
                    <a href="/contest.html">Contest</a>
                    <a href="/store.html">Discuss</a>
                </div>
            </div>

            <div class="header-right">
                 <button class="header-icon-btn" id="home-theme-toggle">
                    <i class="sun icon"></i>
                 </button>
                 <button class="header-icon-btn desktop-only-flex" title="Notifications">
                    <i class="bell icon"></i>
                 </button>
                 <div class="streak-info desktop-only-flex" style="display: flex; align-items: center; gap: 6px; color: var(--text-color); font-weight: 600;">
                   <i class="fire icon" style="color: #ffa116; margin: 0;"></i>
                   <span>12</span>
                 </div>
                 <a href="/premium.html" class="header-premium-btn">Premium</a>
                 <div class="header-profile-avatar" onclick="window.location.href='/profile.html'" style="width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; cursor: pointer; border: 1px solid var(--border-color);">
                    <i class="user icon"></i>
                 </div>
            </div>
        </header>
    `;
}

function renderHome() {
    if (!appElement) return;

    const problemsHtml = MOCK_PROBLEMS.slice(0, 50).map(p => {
        const diffLabel = p.difficulty.toLowerCase();
        const diffColor = diffLabel === 'easy' ? 'var(--difficulty-easy)' : diffLabel === 'medium' ? 'var(--difficulty-medium)' : 'var(--difficulty-hard)';
        const diffBg = diffLabel === 'easy' ? 'rgba(0, 184, 163, 0.1)' : diffLabel === 'medium' ? 'rgba(255, 192, 30, 0.1)' : 'rgba(255, 55, 95, 0.1)';

        return `
            <div class="problem-row" onclick="window.location.href='/editor.html?id=${p.id}'">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <i class="check circle icon" style="color: var(--success-color); font-size: 0.9rem; opacity: 0.2;"></i>
                    <span class="problem-title">${p.id}. ${p.title}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 20px;">
                    <span class="diff-badge" style="color: ${diffColor}; background: ${diffBg};">${p.difficulty}</span>
                    <span class="acceptance-rate desktop-only-flex" style="color: var(--secondary-text); font-size: 0.85rem; width: 60px; text-align: right;">${(Math.random() * 40 + 30).toFixed(1)}%</span>
                </div>
            </div>
        `;
    }).join('');

    appElement.innerHTML = `
        <div class="page-wrapper">
            <div id="mobile-sidebar" class="mobile-drawer">
                <div style="padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                        <div class="logo-box"><span>L</span></div>
                        <button id="close-sidebar" class="header-icon-btn"><i class="x icon"></i></button>
                    </div>
                    <nav style="display: flex; flexDirection: column; gap: 1rem;">
                        <a href="/" style="display: block; padding: 10px 0; color: var(--accent-color); font-weight: 600; text-decoration: none;">Explore</a>
                        <a href="/interview.html" style="display: block; padding: 10px 0; color: var(--text-color); text-decoration: none;">Problems</a>
                        <a href="/contest.html" style="display: block; padding: 10px 0; color: var(--text-color); text-decoration: none;">Contest</a>
                        <a href="/store.html" style="display: block; padding: 10px 0; color: var(--text-color); text-decoration: none;">Discuss</a>
                        <div style="height: 1px; background: var(--border-color); margin: 1rem 0;"></div>
                        <a href="/premium.html" style="display: block; padding: 10px 0; color: var(--accent-color); text-decoration: none;">Premium</a>
                        <a href="/profile.html" style="display: block; padding: 10px 0; color: var(--text-color); text-decoration: none;">Profile</a>
                    </nav>
                </div>
            </div>
            <div id="sidebar-overlay" class="drawer-overlay"></div>

            ${renderHeader()}

            <div class="page-container">
                <div class="home-layout">
                    <div class="main-content">
                        <div class="promo-container custom-scrollbar">
                            <div class="modern-card promo-card promo-gradient-1">
                                <div class="promo-title">ProCode Mobile</div>
                                <div class="promo-desc">Master algorithms on the go.</div>
                                <div style="position: absolute; right: -10px; bottom: -10px; font-size: 5rem; opacity: 0.1; font-weight: 800;">{ }</div>
                            </div>
                            <div class="modern-card promo-card promo-gradient-2">
                                <div class="promo-title">Dynamic Programming</div>
                                <div class="promo-desc">Top 50 Interview Questions</div>
                                <div style="position: absolute; right: -10px; bottom: -10px; font-size: 5rem; opacity: 0.1; font-weight: 800;">∑</div>
                            </div>
                        </div>

                        <div class="topics-container">
                            <span class="topic-chip">Array <span>2141</span></span>
                            <span class="topic-chip">String <span>867</span></span>
                            <span class="topic-chip">Hash Table <span>808</span></span>
                            <span class="topic-chip">Dynamic Programming <span>652</span></span>
                            <span class="topic-chip" style="background: rgba(255, 161, 22, 0.1); color: var(--accent-color); border: 1px solid rgba(255, 161, 22, 0.2);">Explore More <i class="chevron down icon"></i></span>
                        </div>

                        <div class="modern-card" style="border-bottom: none; border-radius: 12px 12px 0 0;">
                            <div style="padding: 1rem 1.25rem; background: rgba(255,255,255,0.02); border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
                                <div style="display: flex; gap: 20px; font-size: 0.85rem; font-weight: 600; color: var(--secondary-text);">
                                    <span style="color: var(--text-color);">All Problems</span>
                                    <span>Lists</span>
                                </div>
                                <div class="desktop-only-flex" style="gap: 15px;">
                                    <i class="search icon" style="color: var(--secondary-text); cursor: pointer;"></i>
                                    <i class="filter icon" style="color: var(--secondary-text); cursor: pointer;"></i>
                                </div>
                            </div>
                        </div>

                        <div class="modern-card" style="border-top: none; border-radius: 0 0 12px 12px;">
                            ${problemsHtml}
                            <div style="padding: 1.5rem; text-align: center; color: var(--secondary-text); font-size: 0.85rem;">
                                Showing first 50 problems. Subscribe to ProCode Premium for more.
                            </div>
                        </div>
                    </div>

                    <div class="side-content">
                        <div class="modern-card" style="margin-bottom: 1.5rem; padding: 1.25rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                                <span style="font-size: 0.9rem; font-weight: 700;">July 2026</span>
                                <div style="display: flex; gap: 8px;">
                                    <i class="chevron left icon" style="font-size: 0.7rem; cursor: pointer; color: var(--secondary-text);"></i>
                                    <i class="chevron right icon" style="font-size: 0.7rem; cursor: pointer; color: var(--secondary-text);"></i>
                                </div>
                            </div>
                            <div class="mock-calendar">
                                <div style="font-weight: 700; color: var(--secondary-text);">S</div>
                                <div style="font-weight: 700; color: var(--secondary-text);">M</div>
                                <div style="font-weight: 700; color: var(--secondary-text);">T</div>
                                <div style="font-weight: 700; color: var(--secondary-text);">W</div>
                                <div style="font-weight: 700; color: var(--secondary-text);">T</div>
                                <div style="font-weight: 700; color: var(--secondary-text);">F</div>
                                <div style="font-weight: 700; color: var(--secondary-text);">S</div>
                                <div class="empty">30</div><div class="empty">31</div><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
                                <div>6</div><div>7</div><div>8</div><div>9</div><div>10</div><div>11</div><div>12</div>
                                <div>13</div><div>14</div><div>15</div><div>16</div><div>17</div><div>18</div><div>19</div>
                                <div>20</div><div class="today">21</div><div>22</div><div>23</div><div>24</div><div>25</div><div>26</div>
                            </div>
                        </div>

                        <div class="modern-card" style="padding: 1.25rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                                <span style="font-size: 0.9rem; font-weight: 700;">Trending Companies</span>
                                <i class="info circle icon" style="font-size: 0.8rem; color: var(--secondary-text);"></i>
                            </div>
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                <span class="topic-chip" style="font-size: 0.75rem; padding: 4px 10px;">Amazon <span>42</span></span>
                                <span class="topic-chip" style="font-size: 0.75rem; padding: 4px 10px;">Google <span>38</span></span>
                                <span class="topic-chip" style="font-size: 0.75rem; padding: 4px 10px;">Facebook <span>31</span></span>
                                <span class="topic-chip" style="font-size: 0.75rem; padding: 4px 10px;">Microsoft <span>27</span></span>
                                <span class="topic-chip" style="font-size: 0.75rem; padding: 4px 10px;">Uber <span>22</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="mobile-footer mobile-only-flex">
                <a href="/" class="active"><i class="home icon"></i><span>Explore</span></a>
                <a href="/interview.html"><i class="trophy icon"></i><span>Prep</span></a>
                <a href="/store.html"><i class="shopping bag icon"></i><span>Store</span></a>
                <a href="/premium.html"><i class="gem icon"></i><span>Plus</span></a>
                <a href="/profile.html"><i class="user icon"></i><span>Profile</span></a>
            </footer>
        </div>
    `;

    document.getElementById('open-sidebar')?.addEventListener('click', () => {
        document.getElementById('mobile-sidebar')?.classList.add('open');
        document.getElementById('sidebar-overlay')?.classList.add('visible');
    });

    const closeSidebar = () => {
        document.getElementById('mobile-sidebar')?.classList.remove('open');
        document.getElementById('sidebar-overlay')?.classList.remove('visible');
    };

    document.getElementById('close-sidebar')?.addEventListener('click', closeSidebar);
    document.getElementById('sidebar-overlay')?.addEventListener('click', closeSidebar);

    const toggleTheme = () => {
        const isLight = document.documentElement.classList.toggle('light-mode');
        localStorage.setItem('procode-theme', isLight ? 'light' : 'dark');
        const icon = document.querySelector('#home-theme-toggle i');
        if (icon) {
            icon.className = isLight ? 'moon icon' : 'sun icon';
        }
    };
    document.getElementById('home-theme-toggle')?.addEventListener('click', toggleTheme);

    if (localStorage.getItem('procode-theme') === 'light') {
        document.documentElement.classList.add('light-mode');
        const icon = document.querySelector('#home-theme-toggle i');
        if (icon) icon.className = 'moon icon';
    }
}

renderHome();

export { renderHeader };
