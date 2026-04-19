const problems = [
    {
        id: 1,
        title: "Two Sum",
        difficulty: "Easy",
        solved: true,
        description: `
            <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>
            <p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the <em>same</em> element twice.</p>
            <p>You can return the answer in any order.</p>

            <h3>Example 1:</h3>
            <div class="ui segment">
                <p><strong>Input:</strong> nums = [2,7,11,15], target = 9</p>
                <p><strong>Output:</strong> [0,1]</p>
                <p><strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].</p>
            </div>

            <h3>Example 2:</h3>
            <div class="ui segment">
                <p><strong>Input:</strong> nums = [3,2,4], target = 6</p>
                <p><strong>Output:</strong> [1,2]</p>
            </div>
        `
    },
    {
        id: 2,
        title: "Add Two Numbers",
        difficulty: "Medium",
        solved: false,
        description: `
            <p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.</p>
            <p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>

            <h3>Example 1:</h3>
            <div class="ui segment">
                <p><strong>Input:</strong> l1 = [2,4,3], l2 = [5,6,4]</p>
                <p><strong>Output:</strong> [7,0,8]</p>
                <p><strong>Explanation:</strong> 342 + 465 = 807.</p>
            </div>
        `
    },
    {
        id: 29,
        title: "Divide Two Integers",
        difficulty: "Medium",
        solved: false,
        description: `
            <p>Given two integers <code>dividend</code> and <code>divisor</code>, divide two integers <strong>without</strong> using multiplication, division, and mod operator.</p>
            <p>The integer division should truncate toward zero, which means losing its fractional part. For example, <code>8.345</code> would be truncated to <code>8</code>, and <code>-2.7335</code> would be truncated to <code>-2</code>.</p>
            <p>Return <em>the quotient after dividing</em> <code>dividend</code> by <code>divisor</code>.</p>
            <p><strong>Note:</strong> Assume we are dealing with an environment that could only store integers within the <strong>32-bit</strong> signed integer range: [−2<sup>31</sup>, 2<sup>31</sup> − 1]. For this problem, if the quotient is <strong>strictly greater than</strong> 2<sup>31</sup> − 1, then return 2<sup>31</sup> − 1, and if the quotient is <strong>strictly less than</strong> −2<sup>31</sup>, then return −2<sup>31</sup>.</p>

            <h3>Example 1:</h3>
            <div class="ui segment">
                <p><strong>Input:</strong> dividend = 10, divisor = 3</p>
                <p><strong>Output:</strong> 3</p>
                <p><strong>Explanation:</strong> 10/3 = 3.33333.. which is truncated to 3.</p>
            </div>

            <h3>Example 2:</h3>
            <div class="ui segment">
                <p><strong>Input:</strong> dividend = 7, divisor = -3</p>
                <p><strong>Output:</strong> -2</p>
                <p><strong>Explanation:</strong> 7/-3 = -2.33333.. which is truncated to -2.</p>
            </div>
        `
    }
];

// Fill with more mock data if needed
for (let i = 3; i <= 50; i++) {
    if (i === 29) continue;
    problems.push({
        id: i,
        title: `Mock Problem ${i}`,
        difficulty: i % 3 === 0 ? "Hard" : (i % 2 === 0 ? "Medium" : "Easy"),
        solved: i % 5 === 0,
        description: `<p>This is a mock description for problem ${i}.</p>`
    });
}
problems.sort((a, b) => a.id - b.id);

function loadProblem(id) {
    const problem = problems.find(p => p.id === id);
    if (!problem) return;

    const container = document.getElementById("judge0-problem-description");
    if (!container) return;

    const difficultyColor = problem.difficulty === "Easy" ? "green" : (problem.difficulty === "Medium" ? "yellow" : "red");

    container.innerHTML = `
        <div class="ui basic segment description-container">
            <h1 class="ui header">${problem.id}. ${problem.title}</h1>
            <div class="ui labels">
                <div class="ui ${difficultyColor} label">${problem.difficulty}</div>
                <div class="ui basic label"><i class="tag icon"></i> Topics</div>
                <div class="ui basic label"><i class="lock icon"></i> Companies</div>
            </div>
            <div class="problem-content" style="margin-top: 20px;">
                ${problem.description}
            </div>
        </div>
    `;

    // Update active state in drawer
    document.querySelectorAll(".problem-item").forEach(el => {
        el.classList.remove("active");
        if (el.dataset.id == id) {
            el.classList.add("active");
        }
    });
}

function renderProblems(filter = "") {
    const container = document.getElementById("problem-items-container");
    container.innerHTML = "";

    const filteredProblems = problems.filter(p =>
        p.title.toLowerCase().includes(filter.toLowerCase()) ||
        p.id.toString().includes(filter)
    );

    filteredProblems.forEach(p => {
        const item = document.createElement("div");
        item.className = "problem-item";
        item.dataset.id = p.id;

        const difficultyClass = `diff-${p.difficulty.toLowerCase()}`;
        const shortDiff = p.difficulty === "Medium" ? "Med." : p.difficulty;

        item.innerHTML = `
            <div class="problem-left">
                <div class="problem-status">
                    ${p.solved ? '<i class="check icon"></i>' : ''}
                </div>
                <div class="problem-title">${p.id}. ${p.title}</div>
            </div>
            <div class="problem-difficulty ${difficultyClass}">${shortDiff}</div>
        `;

        item.onclick = () => {
            loadProblem(p.id);
            // Optionally close drawer on mobile or small screens
            // if (window.innerWidth < 768) {
            //     document.getElementById("judge0-problem-list-drawer").classList.remove("open");
            // }
        };

        container.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const drawer = document.getElementById("judge0-problem-list-drawer");
    const openBtn = document.getElementById("problem-list-btn");
    const closeBtn = document.getElementById("close-drawer-btn");
    const searchInput = document.getElementById("problem-search");

    if (openBtn) {
        openBtn.onclick = () => {
            drawer.classList.add("open");
        };
    }

    if (closeBtn) {
        closeBtn.onclick = () => {
            drawer.classList.remove("open");
        };
    }

    if (searchInput) {
        searchInput.oninput = (e) => {
            renderProblems(e.target.value);
        };
    }

    // Close drawer when clicking outside
    document.addEventListener("mousedown", (e) => {
        if (drawer && drawer.classList.contains("open") &&
            !drawer.contains(e.target) &&
            (openBtn && !openBtn.contains(e.target))) {
            drawer.classList.remove("open");
        }
    });

    renderProblems();

    // Load first problem by default
    loadProblem(1);
});
