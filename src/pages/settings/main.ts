import '../styles.css';
import { renderHeader } from '../home/main';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper">
            ${renderHeader()}
            <div class="page-container" style="max-width: 800px;">
                <h1 class="modern-title">Settings</h1>

                <div class="modern-card">
                    <h2 class="modern-subtitle">Editor Preferences</h2>
                    <form class="ui form">
                        <div class="two fields">
                            <div class="field">
                                <label>Theme</label>
                                <select class="ui dropdown">
                                    <option value="vs-dark">Deep Ocean (Dark)</option>
                                    <option value="light">Cloud (Light)</option>
                                </select>
                            </div>
                            <div class="field">
                                <label>Font Size</label>
                                <input type="number" value="14">
                            </div>
                        </div>
                        <div class="field">
                            <label>Key Bindings</label>
                            <select class="ui dropdown">
                                <option value="default">Standard</option>
                                <option value="vim">Vim</option>
                                <option value="emacs">Emacs</option>
                            </select>
                        </div>
                        <button class="header-submit-btn" style="border-radius: 8px;">Save Changes</button>
                    </form>
                </div>

                <div class="modern-card">
                    <h2 class="modern-subtitle">Account</h2>
                    <form class="ui form">
                        <div class="field">
                            <label>Email Notification</label>
                            <div class="ui toggle checkbox">
                                <input type="checkbox" checked>
                                <label style="color: var(--text-color) !important;">Receive contest reminders</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
}
