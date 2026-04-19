import '../styles.css';
export {};
const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="ui container" style="margin-top: 50px;">
            <h1 class="ui header">Add User / Friends</h1>
            <div class="ui action input" style="width: 100%;">
                <input type="text" placeholder="Search by username or email...">
                <button class="ui button primary">Search</button>
            </div>
            <div class="ui segment" style="margin-top: 20px;">
                <p>No results found. Start searching for your friends!</p>
            </div>
            <a href="/" class="ui button" style="margin-top: 20px;">Back to Editor</a>
        </div>
    `;
}
