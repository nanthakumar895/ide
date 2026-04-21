import '../styles.css';
import { MOCK_PROBLEMS } from '../../data/mockProblems';

const appElement = document.getElementById('app');

function renderHome() {
    if (!appElement) return;

    const problemsHtml = MOCK_PROBLEMS.slice(0, 20).map(p => {
        const diffColor = p.difficulty === 'Easy' ? '#2cbb5d' : p.difficulty === 'Medium' ? '#ffa116' : '#ef4743';
        const diffBg = p.difficulty === 'Easy' ? 'rgba(44, 187, 93, 0.1)' : p.difficulty === 'Medium' ? 'rgba(255, 161, 22, 0.1)' : 'rgba(239, 71, 67, 0.1)';

        return `
            <div class="problem-row" onclick="window.location.href='/editor.html?id=${p.id}'">
                <div class="problem-row-left">
                    <i class="circle outline icon mobile-hidden" style="color: var(--secondary-text); font-size: 0.8rem;"></i>
                    <span class="problem-title">${p.id}. ${p.title}</span>
                </div>
                <div class="problem-row-right">
                    <span class="diff-badge" style="color: ${diffColor}; background: ${diffBg};">${p.difficulty}</span>
                    <span class="acceptance-rate mobile-hidden">${(Math.random() * 40 + 30).toFixed(1)}%</span>
                </div>
            </div>
        `;
    }).join('');

    appElement.innerHTML = `
        <div class="page-wrapper">
            <!-- Mobile Sidebar -->
            <div id="mobile-sidebar" class="mobile-drawer">
                <div class="drawer-content">
                    <div class="drawer-header-internal">
                        <span class="nav-brand">θ ProCode</span>
                        <button id="close-sidebar" class="icon-btn"><i class="x icon"></i></button>
                    </div>
                    <div class="drawer-links">
                        <a href="/" class="active">Explore</a>
                        <a href="/interview.html">Interview</a>
                        <a href="/store.html">Store</a>
                        <a href="/premium.html">Premium</a>
                        <div class="drawer-divider"></div>
                        <a href="/settings.html">Settings</a>
                        <a href="/profile.html">Profile</a>
                        <a href="/apps.html">Apps</a>
                    </div>
                </div>
            </div>
            <div id="sidebar-overlay" class="drawer-overlay"></div>

            <!-- Header -->
            <nav class="page-nav">
                <div class="nav-content">
                    <!-- Left: Logo (Desktop) / Menu (Mobile) -->
                    <div class="nav-left">
                        <button id="open-sidebar" class="icon-btn mobile-only-inline"><i class="bars icon"></i></button>
                        <a href="/" class="nav-brand desktop-only-inline">θ ProCode IDE</a>
                        <div class="nav-links desktop-only-flex">
                            <a href="/" class="active">Explore</a>
                            <a href="/interview.html">Interview</a>
                            <a href="/store.html">Store</a>
                        </div>
                    </div>

                    <!-- Center: Logo (Mobile only) -->
                    <div class="nav-center mobile-only-flex">
                         <a href="/" class="nav-brand">θ ProCode</a>
                    </div>

                    <!-- Right: Profile -->
                    <div class="nav-right">
                         <a href="/premium.html" class="premium-link desktop-only-inline">Premium</a>
                         <div id="profile-btn" class="profile-avatar" onclick="window.location.href='/profile.html'">
                            <i class="user icon"></i>
                         </div>
                    </div>
                </div>
            </nav>

            <div class="page-container">
                <div class="home-layout">
                    <!-- Main Content -->
                    <div class="main-content">
                        <!-- Promo Cards -->
                        <div class="promo-container custom-scrollbar">
                            <div class="modern-card promo-card promo-gradient-1">
                                <div class="promo-title">ProCode Mobile</div>
                                <div class="promo-desc">Master algorithms anywhere.</div>
                                <div class="promo-bg-icon">θ</div>
                            </div>
                            <div class="modern-card promo-card promo-gradient-2">
                                <div class="promo-title">Interview Prep</div>
                                <div class="promo-desc">Top 75 Questions</div>
                                <div class="promo-footer">DAY 21</div>
                            </div>
                        </div>

                        <!-- Topics Chips -->
                        <div class="topics-container">
                            <span class="topic-chip">Array <span>2141</span></span>
                            <span class="topic-chip">String <span>867</span></span>
                            <span class="topic-chip">Hash Table <span>808</span></span>
                            <span class="topic-chip mobile-hidden">Dynamic Programming <span>652</span></span>
                            <span class="topic-chip accent">Expand <i class="chevron down icon"></i></span>
                        </div>

                        <!-- Problem Table -->
                        <div class="modern-card problem-table-card">
                            ${problemsHtml}
                            <div class="table-footer">
                                Showing first 20 problems
                            </div>
                        </div>
                    </div>

                    <!-- Right Sidebar (Desktop only or stack on mobile) -->
                    <div class="side-content">
                        <!-- Calendar Card -->
                        <div class="modern-card calendar-card">
                            <div class="card-header">
                                <span class="card-title">July 2026</span>
                                <span class="card-subtitle">Day 21</span>
                            </div>
                            <!-- Mock Calendar -->
                            <div class="mock-calendar">
                                <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                                <div class="empty">-</div><div class="empty">-</div><div class="empty">-</div><div class="empty">-</div><div class="empty">-</div><div>1</div><div>2</div>
                                <div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div>
                                <div>10</div><div>11</div><div>12</div><div>13</div><div>14</div><div>15</div><div>16</div>
                                <div>17</div><div>18</div><div>19</div><div>20</div><div class="today">21</div><div>22</div><div>23</div>
                            </div>
                        </div>

                        <!-- Trending Companies -->
                        <div class="modern-card trending-card">
                            <div class="card-header">
                                <span class="card-title">Trending Companies</span>
                                <div class="header-icons">
                                    <i class="chevron left icon"></i>
                                    <i class="chevron right icon"></i>
                                </div>
                            </div>
                            <div class="ui icon input fluid mini search-box">
                                <input type="text" placeholder="Search...">
                                <i class="search icon"></i>
                            </div>
                            <div class="company-chips">
                                <span class="company-chip">Amazon</span>
                                <span class="company-chip">Google</span>
                                <span class="company-chip">Meta</span>
                                <span class="company-chip">Microsoft</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile Footer Icons -->
            <footer class="mobile-footer mobile-only-flex">
                <a href="/" class="active"><i class="home icon"></i><span>Home</span></a>
                <a href="/interview.html"><i class="trophy icon"></i><span>Prep</span></a>
                <a href="/store.html"><i class="shopping bag icon"></i><span>Store</span></a>
                <a href="/premium.html"><i class="gem icon"></i><span>Plus</span></a>
            </footer>
        </div>
    `;

    // Event Listeners
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
}

renderHome();
