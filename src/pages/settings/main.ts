import '../styles.css';
export {};
const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="ui container" style="margin-top: 50px;">
            <h1 class="ui header">Settings</h1>
            <div class="ui segment">
                <form class="ui form">
                    <div class="field">
                        <label>Theme</label>
                        <select class="ui dropdown">
                            <option value="dark">Dark</option>
                            <option value="light">Light</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>Font Size</label>
                        <input type="number" value="13">
                    </div>
                    <button class="ui button primary" type="submit">Save Changes</button>
                    <a href="/" class="ui button">Back to Editor</a>
                </form>
            </div>
        </div>
    `;
}
