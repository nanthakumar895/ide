const problems = [
    { id: 1, title: "Two Sum", topics: "Array / Hashmap", difficulty: "Easy" },
    { id: 2, title: "Add Two Numbers", topics: "Linked List", difficulty: "Medium" },
    { id: 3, title: "Longest Substring Without Repeating Characters", topics: "String / Sliding Window", difficulty: "Medium" },
    { id: 4, title: "Median of Two Sorted Arrays", topics: "Array / Binary Search", difficulty: "Hard" },
    { id: 5, title: "Longest Palindromic Substring", topics: "String / DP", difficulty: "Medium" },
    { id: 6, title: "Zigzag Conversion", topics: "String", difficulty: "Medium" },
    { id: 7, title: "Reverse Integer", topics: "Math", difficulty: "Medium" },
    { id: 8, title: "String to Integer (atoi)", topics: "String / Math", difficulty: "Medium" },
    { id: 9, title: "Palindrome Number", topics: "Math", difficulty: "Easy" },
    { id: 10, title: "Regular Expression Matching", topics: "String / DP", difficulty: "Hard" },
    { id: 11, title: "Container With Most Water", topics: "Array / Two Pointers", difficulty: "Medium" },
    { id: 12, title: "Integer to Roman", topics: "Math / String", difficulty: "Medium" },
    { id: 13, title: "Roman to Integer", topics: "Math / String", difficulty: "Easy" },
    { id: 14, title: "Longest Common Prefix", topics: "String", difficulty: "Easy" },
    { id: 15, title: "3Sum", topics: "Array / Two Pointers", difficulty: "Medium" },
    { id: 16, title: "3Sum Closest", topics: "Array / Two Pointers", difficulty: "Medium" },
    { id: 17, title: "Letter Combinations of a Phone Number", topics: "Backtracking", difficulty: "Medium" },
    { id: 18, title: "4Sum", topics: "Array / Two Pointers", difficulty: "Medium" },
    { id: 19, title: "Remove Nth Node From End of List", topics: "Linked List", difficulty: "Medium" },
    { id: 20, title: "Valid Parentheses", topics: "Stack", difficulty: "Easy" },
    { id: 21, title: "Merge Two Sorted Lists", topics: "Linked List", difficulty: "Easy" },
    { id: 22, title: "Generate Parentheses", topics: "Backtracking", difficulty: "Medium" },
    { id: 23, title: "Merge k Sorted Lists", topics: "Linked List / Heap", difficulty: "Hard" },
    { id: 24, title: "Swap Nodes in Pairs", topics: "Linked List", difficulty: "Medium" },
    { id: 25, title: "Reverse Nodes in k-Group", topics: "Linked List", difficulty: "Hard" },
    { id: 26, title: "Remove Duplicates from Sorted Array", topics: "Array / Two Pointers", difficulty: "Easy" },
    { id: 27, title: "Remove Element", topics: "Array / Two Pointers", difficulty: "Easy" },
    { id: 28, title: "Find the Index of the First Occurrence in a String", topics: "String", difficulty: "Easy" },
    { id: 29, title: "Divide Two Integers", topics: "Math", difficulty: "Medium" },
    { id: 30, title: "Substring with Concatenation of All Words", topics: "String / Hashmap", difficulty: "Hard" },
    { id: 31, title: "Next Permutation", topics: "Array", difficulty: "Medium" },
    { id: 32, title: "Longest Valid Parentheses", topics: "Stack / DP", difficulty: "Hard" },
    { id: 33, title: "Search in Rotated Sorted Array", topics: "Array / Binary Search", difficulty: "Medium" },
    { id: 34, title: "Find First and Last Position of Element in Sorted Array", topics: "Array / Binary Search", difficulty: "Medium" },
    { id: 35, title: "Search Insert Position", topics: "Array / Binary Search", difficulty: "Easy" },
    { id: 36, title: "Valid Sudoku", topics: "Array / Hashmap", difficulty: "Medium" },
    { id: 37, title: "Sudoku Solver", topics: "Backtracking", difficulty: "Hard" },
    { id: 38, title: "Count and Say", topics: "String", difficulty: "Medium" },
    { id: 39, title: "Combination Sum", topics: "Backtracking", difficulty: "Medium" },
    { id: 40, title: "Combination Sum II", topics: "Backtracking", difficulty: "Medium" },
    { id: 41, title: "First Missing Positive", topics: "Array / Hashing", difficulty: "Hard" },
    { id: 42, title: "Trapping Rain Water", topics: "Array / Two Pointers", difficulty: "Hard" },
    { id: 43, title: "Multiply Strings", topics: "String / Math", difficulty: "Medium" },
    { id: 44, title: "Wildcard Matching", topics: "String / DP", difficulty: "Hard" },
    { id: 45, title: "Jump Game II", topics: "Array / Greedy", difficulty: "Medium" },
    { id: 46, title: "Permutations", topics: "Backtracking", difficulty: "Medium" },
    { id: 47, title: "Permutations II", topics: "Backtracking", difficulty: "Medium" },
    { id: 48, title: "Rotate Image", topics: "Matrix", difficulty: "Medium" },
    { id: 49, title: "Group Anagrams", topics: "String / Hashmap", difficulty: "Medium" },
    { id: 50, title: "Pow(x, n)", topics: "Math / Recursion", difficulty: "Medium" }
].map(p => ({
    ...p,
    solved: p.id % 7 === 0,
    description: `
        <p>This is a detailed description for <strong>${p.title}</strong> which focuses on <strong>${p.topics}</strong>.</p>
        <p>You are expected to solve this problem within the specified time and memory limits.</p>

        <h3>Example 1:</h3>
        <div class="ui segment example-block">
            <p><strong>Input:</strong> mock_input_${p.id}</p>
            <p><strong>Output:</strong> mock_output_${p.id}</p>
        </div>

        <h3>Constraints:</h3>
        <ul>
            <li>1 &le; input.length &le; 10<sup>5</sup></li>
            <li>All inputs are valid according to problem specifications.</li>
        </ul>
    `,
    testcases: [
        { input: `input_data_${p.id}`, expected: `output_data_${p.id}` }
    ]
}));

// Enhance some specific ones
problems[0].description = `
    <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>
    <p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the <em>same</em> element twice.</p>

    <h3>Example 1:</h3>
    <div class="ui segment example-block">
        <p><strong>Input:</strong> nums = [2,7,11,15], target = 9</p>
        <p><strong>Output:</strong> [0,1]</p>
        <p><strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].</p>
    </div>
`;
problems[0].testcases = [ { input: "2 7 11 15\n9", expected: "[0,1]" } ];

let currentProblemId = 1;

function loadProblem(id) {
    const problem = problems.find(p => p.id === id);
    if (!problem) return;

    currentProblemId = id;

    const container = document.getElementById("procode-problem-description");
    if (!container) return;

    const difficultyColor = problem.difficulty === "Easy" ? "green" : (problem.difficulty === "Medium" ? "yellow" : "red");

    container.innerHTML = `
        <div class="ui basic segment description-container">
            <h1 class="ui header">${problem.id}. ${problem.title}</h1>
            <div class="ui labels">
                <div class="ui ${difficultyColor} label">${problem.difficulty}</div>
                <div class="ui basic label"><i class="tag icon"></i> ${problem.topics}</div>
                <div class="ui basic label"><i class="lock icon"></i> Companies</div>
            </div>
            <div class="problem-content" style="margin-top: 20px;">
                ${problem.description}
            </div>
        </div>
    `;

    document.querySelectorAll(".problem-item").forEach(el => {
        el.classList.remove("active");
        if (el.dataset.id == id) {
            el.classList.add("active");
        }
    });

    window.dispatchEvent(new CustomEvent("problemLoaded", { detail: problem }));
}

function renderProblems(filter = "") {
    const container = document.getElementById("problem-items-container");
    if (!container) return;
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
            if (window.innerWidth <= 768) {
                document.getElementById("procode-problem-list-drawer").classList.remove("open");
            }
        };

        container.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const drawer = document.getElementById("procode-problem-list-drawer");
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

    document.addEventListener("mousedown", (e) => {
        if (drawer && drawer.classList.contains("open") &&
            !drawer.contains(e.target) &&
            (openBtn && !openBtn.contains(e.target))) {
            drawer.classList.remove("open");
        }
    });

    renderProblems();
    loadProblem(1);
});

export { problems, loadProblem, currentProblemId };
