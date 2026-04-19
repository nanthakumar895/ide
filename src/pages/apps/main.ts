import '../styles.css';
export {};
const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="ui container" style="margin-top: 50px;">
            <h1 class="ui header">Apps & Integrations</h1>
            <div class="ui four cards">
                <div class="card">
                    <div class="content">
                        <div class="header">GitHub</div>
                        <div class="description">Sync your projects with GitHub.</div>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="header">VS Code</div>
                        <div class="description">Export and open in VS Code.</div>
                    </div>
                </div>
            </div>
            <a href="/" class="ui button" style="margin-top: 20px;">Back to Editor</a>
        </div>
    `;
}
