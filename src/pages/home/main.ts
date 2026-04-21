import '../styles.css';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper">
            <nav class="page-nav">
                <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                    <div style="display: flex; align-items: center; gap: 2rem;">
                        <a href="/" class="nav-brand">θ ProCode IDE</a>
                        <div style="display: flex; gap: 1.5rem;">
                            <a href="/" style="color: white; text-decoration: none; border-bottom: 2px solid var(--accent-color);">Explore</a>
                            <a href="/interview.html" style="color: var(--secondary-text); text-decoration: none;">Interview</a>
                            <a href="/store.html" style="color: var(--secondary-text); text-decoration: none;">Store</a>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1.5rem;">
                         <a href="/premium.html" style="color: #ffa116; text-decoration: none; font-weight: bold;">Premium</a>
                         <div style="width: 32px; height: 32px; background: #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                            <i class="user icon" style="margin: 0; color: white;"></i>
                         </div>
                    </div>
                </div>
            </nav>
            <div class="page-container" style="max-width: 1200px;">
                <div style="display: flex; gap: 2rem;">
                    <!-- Main Content -->
                    <div style="flex: 1; display: flex; flex-direction: column; gap: 2rem;">
                        <!-- Promo Cards -->
                        <div style="display: flex; gap: 1.5rem; overflow-x: auto; padding-bottom: 10px;" class="custom-scrollbar">
                            <div class="modern-card" style="min-width: 300px; background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%); position: relative; overflow: hidden; padding: 1.5rem; cursor: pointer;">
                                <div style="font-weight: bold; font-size: 1.2rem; margin-bottom: 1rem;">ProCode at Your Fingertips</div>
                                <div style="font-size: 0.9rem; color: var(--secondary-text);">Master algorithms on the go.</div>
                                <div style="position: absolute; bottom: -20px; right: -20px; font-size: 5rem; opacity: 0.1; color: var(--accent-color);">θ</div>
                            </div>
                            <div class="modern-card" style="min-width: 300px; background: linear-gradient(135deg, #ff9a00 0%, #ff5100 100%); padding: 1.5rem; color: white; cursor: pointer;">
                                <div style="font-weight: bold; font-size: 1.2rem; margin-bottom: 1rem;">JavaScript 30 Days Challenge</div>
                                <div style="font-size: 0.9rem; opacity: 0.9;">Beginner Friendly</div>
                                <div style="margin-top: 1.5rem; font-weight: bold; font-size: 1.5rem;">DAY 30</div>
                            </div>
                            <div class="modern-card" style="min-width: 300px; background: linear-gradient(135deg, #007bff 0%, #00d4ff 100%); padding: 1.5rem; color: white; cursor: pointer;" onclick="window.location.href='/interview.html'">
                                <div style="font-weight: bold; font-size: 1.2rem; margin-bottom: 1rem;">Top Interview Questions</div>
                                <div style="font-size: 0.9rem; opacity: 0.9;">Cracker coding interviews</div>
                            </div>
                        </div>

                        <!-- Topics Chips -->
                        <div style="display: flex; flex-wrap: wrap; gap: 0.8rem; color: var(--secondary-text);">
                            <span style="background: rgba(255,255,255,0.05); padding: 5px 12px; border-radius: 15px; font-size: 0.85rem;">Array <span style="opacity: 0.5;">2141</span></span>
                            <span style="background: rgba(255,255,255,0.05); padding: 5px 12px; border-radius: 15px; font-size: 0.85rem;">String <span style="opacity: 0.5;">867</span></span>
                            <span style="background: rgba(255,255,255,0.05); padding: 5px 12px; border-radius: 15px; font-size: 0.85rem;">Hash Table <span style="opacity: 0.5;">808</span></span>
                            <span style="background: rgba(255,255,255,0.05); padding: 5px 12px; border-radius: 15px; font-size: 0.85rem;">Math <span style="opacity: 0.5;">666</span></span>
                            <span style="background: rgba(255,255,255,0.05); padding: 5px 12px; border-radius: 15px; font-size: 0.85rem;">Dynamic Programming <span style="opacity: 0.5;">652</span></span>
                            <span style="color: var(--accent-color); font-size: 0.85rem; cursor: pointer; display: flex; align-items: center; gap: 5px;">Expand <i class="chevron down icon" style="font-size: 0.7rem;"></i></span>
                        </div>

                        <!-- Problem Table -->
                        <div class="modern-card" style="padding: 0;">
                            <div style="padding: 1rem 1.5rem; display: flex; align-items: center; border-bottom: 1px solid var(--border-color); color: #2cbb5d; cursor: pointer;" onclick="window.location.href='/editor.html'">
                                <i class="check circle icon"></i>
                                <span style="margin-left: 1rem;">1. Two Sum</span>
                                <span style="margin-left: auto; font-size: 0.85rem; color: #2cbb5d; background: rgba(44, 187, 93, 0.1); padding: 2px 8px; border-radius: 10px;">Easy</span>
                                <span style="margin-left: 2rem; color: var(--secondary-text); width: 60px; text-align: right;">57.4%</span>
                            </div>
                            <div style="padding: 1rem 1.5rem; display: flex; align-items: center; border-bottom: 1px solid var(--border-color); color: white; cursor: pointer;" onclick="window.location.href='/editor.html'">
                                <i class="circle outline icon" style="color: var(--secondary-text);"></i>
                                <span style="margin-left: 1rem;">2. Add Two Numbers</span>
                                <span style="margin-left: auto; font-size: 0.85rem; color: #ffa116; background: rgba(255, 161, 22, 0.1); padding: 2px 8px; border-radius: 10px;">Medium</span>
                                <span style="margin-left: 2rem; color: var(--secondary-text); width: 60px; text-align: right;">48.3%</span>
                            </div>
                            <div style="padding: 1rem 1.5rem; display: flex; align-items: center; color: white; cursor: pointer;" onclick="window.location.href='/editor.html'">
                                <i class="circle outline icon" style="color: var(--secondary-text);"></i>
                                <span style="margin-left: 1rem;">3. Longest Substring Without Repeating Characters</span>
                                <span style="margin-left: auto; font-size: 0.85rem; color: #ffa116; background: rgba(255, 161, 22, 0.1); padding: 2px 8px; border-radius: 10px;">Medium</span>
                                <span style="margin-left: 2rem; color: var(--secondary-text); width: 60px; text-align: right;">34.7%</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right Sidebar -->
                    <div style="width: 300px; display: flex; flex-direction: column; gap: 2rem;">
                        <!-- Calendar Card -->
                        <div class="modern-card" style="padding: 1.5rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                                <span style="font-weight: bold; font-size: 1.1rem;">Day 21</span>
                                <span style="font-size: 0.75rem; color: var(--secondary-text);">23:51:35 left</span>
                            </div>
                            <!-- Mock Calendar -->
                            <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; text-align: center; font-size: 0.75rem; color: var(--secondary-text);">
                                <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                                <div style="color: transparent;">-</div><div style="color: transparent;">-</div><div style="color: transparent;">-</div><div style="color: transparent;">-</div><div style="color: transparent;">-</div><div>1</div><div>2</div>
                                <div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div>
                                <div>10</div><div>11</div><div>12</div><div>13</div><div>14</div><div>15</div><div>16</div>
                                <div>17</div><div>18</div><div>19</div><div>20</div><div style="background: #2cbb5d; color: white; border-radius: 50%; width: 22px; height: 22px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">21</div><div>22</div><div>23</div>
                            </div>
                        </div>

                        <!-- Trending Companies -->
                        <div class="modern-card" style="padding: 1.5rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                                <span style="font-weight: bold; font-size: 1.1rem;">Trending Companies</span>
                                <div style="display: flex; gap: 10px;">
                                    <i class="chevron left icon" style="font-size: 0.7rem; cursor: pointer;"></i>
                                    <i class="chevron right icon" style="font-size: 0.7rem; cursor: pointer;"></i>
                                </div>
                            </div>
                            <div class="ui icon input fluid mini" style="margin-bottom: 1.5rem;">
                                <input type="text" placeholder="Search for a company..." style="background: rgba(255,255,255,0.05); border: 1px solid #333; color: white; border-radius: 8px;">
                                <i class="search icon"></i>
                            </div>
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                <span style="background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; cursor: pointer;" onclick="window.location.href='/companies.html'">Amazon</span>
                                <span style="background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; cursor: pointer;" onclick="window.location.href='/companies.html'">Google</span>
                                <span style="background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; cursor: pointer;" onclick="window.location.href='/companies.html'">Meta</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
