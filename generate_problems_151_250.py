import json
import re

problem_names = [
    "Dynamic Window Median Stabilization", "Minimum Circular Shift Cost", "K-Limited Peak Reduction",
    "Balanced Segment Partition Count", "Maximum XOR Path in Grid", "Frequency-Constrained Subarray Length",
    "Adaptive Prefix Compression Score", "Minimum Swap Parity Alignment", "Range Update Consistency Check",
    "Weighted Interval Chain Optimization", "Multi-Source BFS Time Spread", "Longest Alternating Difference Subsequence",
    "Minimum Cost Bit Flip Sequence", "K-Step Reachability in Directed Graph", "Maximum Product Subtree Split",
    "Sliding Window Distinct Power Sum", "Minimum Merge Operations to Palindrome", "Graph Edge Reversal Minimization",
    "K-Partition Equal XOR Groups", "Maximum Stable Increasing Segments", "Circular Array Jump Game Variant",
    "Minimum Cost Path with Teleports", "String Reordering with Distance Constraint", "Range GCD Query Optimization",
    "Maximum Non-Overlapping XOR Subarrays", "K-Limited Decreasing Transformations", "Binary Tree Level Sum Rebalancing",
    "Minimum Deletions for K-Frequency Uniformity", "Subarray Beauty Score Maximization", "Grid Path with Maximum Minimum Value",
    "Dynamic Connectivity Query System", "K-Flip Binary String Optimization", "Minimum Time to Equalize Array",
    "Weighted Graph Cycle Profit Detection", "Prefix-Suffix Match Count", "Maximum Sum of Disjoint Paths",
    "K-Window Maximum Difference Minimization", "String Pattern Compression Length", "Minimum Edge Cut for Balanced Graph",
    "Multi-Array Intersection Strength", "Maximum Alternating Subarray Sum II", "K-Group Rotation Minimization",
    "Shortest Path with Color Constraints", "Array Equalization with Modulo Operations", "Maximum Bitwise AND Subset",
    "K-Removal Increasing Sequence Length", "Minimum Cost Tree Pruning", "Grid Island Value Aggregation",
    "Longest Substring with K Changes", "Directed Graph Safe Node Detection", "K-Step Fibonacci Path Count",
    "Minimum Operations to Zero Matrix", "Maximum Weighted Independent Set Variant", "Range Frequency Mode Query",
    "K-Distance Closest Pair Sum", "Binary Search Tree Merge Cost", "Maximum Consecutive Gap with K Inserts",
    "Graph Component Value Balancing", "Minimum Adjacent Swaps for Grouping", "Subsequence Score Maximization",
    "K-Limited Inversion Reduction", "Maximum Rectangle with Constraints", "Multi-Query Range Sum Adjustment",
    "String Split with Unique Counts", "Minimum Path Cost with Obstacles II", "K-Partition Minimum Difference",
    "Maximum Circular Subarray Product", "Graph Path XOR Queries", "Minimum Replacement for Sorted Order",
    "Sliding Window Median Deviation", "K-Coloring Graph Minimization", "Maximum Sum After K Negations II",
    "Range Bitwise OR Minimization", "Longest Valid Parentheses Variant", "Minimum Cost to Connect Points II",
    "K-Step Array Transformation Stability", "Maximum Frequency After Operations", "Graph Diameter Reduction",
    "Minimum Window Subsequence Variant", "K-Constrained Subtree Sum", "Maximum Sum Path with Skips",
    "Binary Matrix Flip Optimization", "Minimum Time with Parallel Tasks", "K-Limited String Palindromization",
    "Maximum Distinct Subarray Score", "Range Update Maximum Query", "Graph Edge Weight Normalization",
    "Minimum Cost to Equalize Strings", "K-Jump Game Optimization", "Maximum Pair Sum with Difference Constraint",
    "Dynamic Interval Merge Queries", "Minimum Cost to Break Cycles", "K-Alternating Array Transform",
    "Maximum Sum of K Non-Overlapping Subarrays", "Graph Reachability with Constraints", "Minimum Insertions for Balanced String",
    "K-Limited Maximum Difference Partition", "Maximum Product of Disjoint Subtrees", "Range Median Query System",
    "K-Operation Array Stabilization"
]

topics_pool = ["Array", "String", "DP", "Graph", "Tree", "Backtracking", "Greedy", "Math", "Hash Table", "Binary Search", "Sliding Window", "Stack", "Queue", "Heap", "Matrix"]

def get_topics(idx):
    return f"{topics_pool[idx % len(topics_pool)]}, {topics_pool[(idx + 3) % len(topics_pool)]}"

def get_difficulty(idx):
    if idx % 5 == 0: return "Hard"
    if idx % 2 == 0: return "Medium"
    return "Easy"

new_problems = []
for i, name in enumerate(problem_names):
    prob_id = 151 + i
    difficulty = get_difficulty(i)
    topics = get_topics(i)
    description = f"<p>Solve the problem <strong>{name}</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>"

    testcases = [
        {"input": "1 2 3\n10", "expected": "25"},
        {"input": "5 5 5\n5", "expected": "10"}
    ]

    constraints = [
        "1 <= n <= 10^5",
        "0 <= k <= 1000"
    ]

    new_problems.append({
        "id": prob_id,
        "title": name,
        "difficulty": difficulty,
        "topics": topics,
        "description": description,
        "testcases": testcases,
        "constraints": constraints
    })

# Read existing problems
with open("src/data/mockProblems.ts", "r") as f:
    content = f.read()

# Extract problems array content
match = re.search(r'export const MOCK_PROBLEMS: Problem\[\] = \[(.*)\];', content, re.DOTALL)
if not match:
    print("Could not find MOCK_PROBLEMS array")
    exit(1)

existing_problems_str = match.group(1).strip()

# Format new problems
formatted_new = json.dumps(new_problems, indent=2)
# Remove quotes from keys for TS object style
formatted_new = re.sub(r'\"(\w+)\":', r'\1:', formatted_new)
# Strip outer brackets to append to existing list
new_objs_str = formatted_new.strip().lstrip("[").rstrip("]").strip()

# Write back
with open("src/data/mockProblems.ts", "w") as f:
    f.write("import { Problem } from '../types';\n\n")
    f.write("export const MOCK_PROBLEMS: Problem[] = [\n")
    f.write(existing_problems_str)
    if existing_problems_str.endswith(","):
        f.write("\n")
    else:
        f.write(",\n")
    f.write(new_objs_str)
    f.write("\n];\n")

print(f"Added {len(new_problems)} problems (151 to 250)")
