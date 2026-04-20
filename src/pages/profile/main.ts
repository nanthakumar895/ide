import '../styles.css';
export {};
const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="ui container" style="margin-top: 50px;">
            <h1 class="ui header">User Profile</h1>
            <div class="ui card" style="width: 100%;">
                <div class="content">
                    <div class="header">John Doe</div>
                    <div class="meta">Joined in 2024</div>
                    <div class="description">
                        Level 5 Coder | 150 Problems Solved
                    </div>
                </div>
                <div class="extra content">
                    <i class="user icon"></i>
                    22 Friends
                </div>
            </div>
            <a href="/" class="ui button" style="margin-top: 20px;">Back to Editor</a>
        </div>
    `;
}
