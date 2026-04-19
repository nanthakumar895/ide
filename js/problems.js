const problems = [
    { id: 1, title: "Two Sum", difficulty: "Easy", solved: true },
    { id: 2, title: "Add Two Numbers", difficulty: "Medium", solved: false },
    { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", solved: true },
    { id: 4, title: "Median of Two Sorted Arrays", difficulty: "Hard", solved: true },
    { id: 5, title: "Longest Palindromic Substring", difficulty: "Medium", solved: true },
    { id: 6, title: "Zigzag Conversion", difficulty: "Medium", solved: true },
    { id: 7, title: "Reverse Integer", difficulty: "Medium", solved: true },
    { id: 8, title: "String to Integer (atoi)", difficulty: "Medium", solved: true },
    { id: 9, title: "Palindrome Number", difficulty: "Easy", solved: true },
    { id: 10, title: "Regular Expression Matching", difficulty: "Hard", solved: false },
    { id: 11, title: "Container With Most Water", difficulty: "Medium", solved: false },
    { id: 12, title: "Integer to Roman", difficulty: "Medium", solved: false },
    { id: 13, title: "Roman to Integer", difficulty: "Easy", solved: false },
    { id: 14, title: "Longest Common Prefix", difficulty: "Easy", solved: false },
    { id: 15, title: "3Sum", difficulty: "Medium", solved: false },
    { id: 16, title: "3Sum Closest", difficulty: "Medium", solved: false },
    { id: 17, title: "Letter Combinations of a Phone Number", difficulty: "Medium", solved: false },
    { id: 18, title: "4Sum", difficulty: "Medium", solved: false },
    { id: 19, title: "Remove Nth Node From End of List", difficulty: "Medium", solved: false },
    { id: 20, title: "Valid Parentheses", difficulty: "Easy", solved: false },
    { id: 21, title: "Merge Two Sorted Lists", difficulty: "Easy", solved: false },
    { id: 22, title: "Generate Parentheses", difficulty: "Medium", solved: false },
    { id: 23, title: "Merge k Sorted Lists", difficulty: "Hard", solved: false },
    { id: 24, title: "Swap Nodes in Pairs", difficulty: "Medium", solved: false },
    { id: 25, title: "Reverse Nodes in k-Group", difficulty: "Hard", solved: false },
    { id: 26, title: "Remove Duplicates from Sorted Array", difficulty: "Easy", solved: false },
    { id: 27, title: "Remove Element", difficulty: "Easy", solved: false },
    { id: 28, title: "Find the Index of the First Occurrence in a String", difficulty: "Easy", solved: false },
    { id: 29, title: "Divide Two Integers", difficulty: "Medium", solved: false },
    { id: 30, title: "Substring with Concatenation of All Words", difficulty: "Hard", solved: false },
    { id: 31, title: "Next Permutation", difficulty: "Medium", solved: false },
    { id: 32, title: "Longest Valid Parentheses", difficulty: "Hard", solved: false },
    { id: 33, title: "Search in Rotated Sorted Array", difficulty: "Medium", solved: false },
    { id: 34, title: "Find First and Last Position of Element in Sorted Array", difficulty: "Medium", solved: false },
    { id: 35, title: "Search Insert Position", difficulty: "Easy", solved: false },
    { id: 36, title: "Valid Sudoku", difficulty: "Medium", solved: false },
    { id: 37, title: "Sudoku Solver", difficulty: "Hard", solved: false },
    { id: 38, title: "Count and Say", difficulty: "Medium", solved: false },
    { id: 39, title: "Combination Sum", difficulty: "Medium", solved: false },
    { id: 40, title: "Combination Sum II", difficulty: "Medium", solved: false },
    { id: 41, title: "First Missing Positive", difficulty: "Hard", solved: false },
    { id: 42, title: "Trapping Rain Water", difficulty: "Hard", solved: false },
    { id: 43, title: "Multiply Strings", difficulty: "Medium", solved: false },
    { id: 44, title: "Wildcard Matching", difficulty: "Hard", solved: false },
    { id: 45, title: "Jump Game II", difficulty: "Medium", solved: false },
    { id: 46, title: "Permutations", difficulty: "Medium", solved: false },
    { id: 47, title: "Permutations II", difficulty: "Medium", solved: false },
    { id: 48, title: "Rotate Image", difficulty: "Medium", solved: false },
    { id: 49, title: "Group Anagrams", difficulty: "Medium", solved: false },
    { id: 50, title: "Pow(x, n)", difficulty: "Medium", solved: false }
];

function renderProblems(filter = "") {
    const container = document.getElementById("problem-items-container");
    container.innerHTML = "";

    const filteredProblems = problems.filter(p =>
        p.title.toLowerCase().includes(filter.toLowerCase()) ||
        p.id.toString().includes(filter)
    );

    filteredProblems.forEach(p => {
        const item = document.createElement("div");
        item.className = `problem-item ${p.id === 1 ? 'active' : ''}`;

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
            document.querySelectorAll(".problem-item").forEach(el => el.classList.remove("active"));
            item.classList.add("active");
            // Here you would typically load the problem content
            console.log(`Loading problem: ${p.title}`);
        };

        container.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const drawer = document.getElementById("judge0-problem-list-drawer");
    const openBtn = document.getElementById("problem-list-btn");
    const closeBtn = document.getElementById("close-drawer-btn");
    const searchInput = document.getElementById("problem-search");

    openBtn.onclick = () => {
        drawer.classList.add("open");
    };

    closeBtn.onclick = () => {
        drawer.classList.remove("open");
    };

    searchInput.oninput = (e) => {
        renderProblems(e.target.value);
    };

    // Close drawer when clicking outside
    document.addEventListener("mousedown", (e) => {
        if (drawer.classList.contains("open") &&
            !drawer.contains(e.target) &&
            !openBtn.contains(e.target)) {
            drawer.classList.remove("open");
        }
    });

    renderProblems();
});
