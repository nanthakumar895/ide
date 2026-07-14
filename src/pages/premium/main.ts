import '../styles.css';
export {};
const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="ui container" style="margin-top: 50px;">
            <h1 class="ui header">Premium Plans</h1>
            <div class="ui three cards">
                <div class="card">
                    <div class="content">
                        <div class="header">Free</div>
                        <div class="meta">-bash / month</div>
                        <div class="description">Basic features for students.</div>
                    </div>
                </div>
                <div class="card orange">
                    <div class="content">
                        <div class="header">Pro</div>
                        <div class="meta">.99 / month</div>
                        <div class="description">Advanced AI suggestions and more.</div>
                    </div>
                </div>
                <div class="card yellow">
                    <div class="content">
                        <div class="header">Enterprise</div>
                        <div class="meta">Contact us</div>
                        <div class="description">For large teams and schools.</div>
                    </div>
                </div>
            </div>
            <a href="/" class="ui button" style="margin-top: 20px;">Back to Editor</a>
        </div>
    `;
}
