import '../styles.css';
import { renderHeader } from '../home/main';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper">
            ${renderHeader()}
            <div class="page-container">
                <h1 class="modern-title">Find Friends</h1>
                <div class="modern-card">
                    <div class="ui action input fluid">
                        <input type="text" placeholder="Search by username..." style="background: var(--darker-bg); color: var(--text-color); border: 1px solid var(--border-color);">
                        <button class="header-submit-btn">Search</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
