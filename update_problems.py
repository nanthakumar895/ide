import json

base_problems = [
    # 51 - 60
    (51, "N-Queens", "Hard", "Backtracking", "Place n queens on an n x n chessboard such that no two queens attack each other.", [{"input": "4", "expected": "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]"}], ["1 <= n <= 9"]),
    (52, "N-Queens II", "Hard", "Backtracking", "Return the number of distinct solutions to the n-queens puzzle.", [{"input": "4", "expected": "2"}], ["1 <= n <= 9"]),
    (53, "Maximum Subarray", "Medium", "Array / DP", "Find the contiguous subarray with the largest sum.", [{"input": "-2 1 -3 4 -1 2 1 -5 4", "expected": "6"}], ["1 <= nums.length <= 10^5"]),
    (54, "Spiral Matrix", "Medium", "Matrix", "Return all elements of the matrix in spiral order.", [{"input": "[[1,2,3],[4,5,6],[7,8,9]]", "expected": "[1,2,3,6,9,8,7,4,5]"}], ["m == matrix.length"]),
    (55, "Jump Game", "Medium", "Array / Greedy", "Determine if you are able to reach the last index.", [{"input": "2 3 1 1 4", "expected": "true"}], ["1 <= nums.length <= 10^4"]),
    (56, "Merge Intervals", "Medium", "Array / Sorting", "Merge all overlapping intervals.", [{"input": "[[1,3],[2,6],[8,10],[15,18]]", "expected": "[[1,6],[8,10],[15,18]]"}], ["1 <= intervals.length <= 10^4"]),
    (57, "Insert Interval", "Medium", "Array", "Insert a new interval into a set of non-overlapping intervals.", [{"input": "[[1,3],[6,9]]\n[2,5]", "expected": "[[1,5],[6,9]]"}], ["0 <= intervals.length <= 10^4"]),
    (58, "Length of Last Word", "Easy", "String", "Return the length of the last word in the string.", [{"input": "Hello World", "expected": "5"}], ["1 <= s.length <= 10^4"]),
    (59, "Spiral Matrix II", "Medium", "Matrix", "Generate a square matrix filled with elements from 1 to n^2 in spiral order.", [{"input": "3", "expected": "[[1,2,3],[8,9,4],[7,6,5]]"}], ["1 <= n <= 20"]),
    (60, "Permutation Sequence", "Hard", "Math / Backtracking", "Return the kth permutation sequence of numbers from 1 to n.", [{"input": "3\n3", "expected": "213"}], ["1 <= n <= 9"]),

    # 61 - 70
    (61, "Rotate List", "Medium", "Linked List", "Rotate the list to the right by k places.", [{"input": "1 2 3 4 5\n2", "expected": "4 5 1 2 3"}], ["0 <= n <= 500"]),
    (62, "Unique Paths", "Medium", "DP", "Find the number of possible unique paths from top-left to bottom-right.", [{"input": "3\n7", "expected": "28"}], ["m, n <= 100"]),
    (63, "Unique Paths II", "Medium", "DP", "Unique paths in a grid with obstacles.", [{"input": "[[0,0,0],[0,1,0],[0,0,0]]", "expected": "2"}], ["m, n <= 100"]),
    (64, "Minimum Path Sum", "Medium", "DP", "Find a path from top left to bottom right that minimizes the sum of numbers along its path.", [{"input": "[[1,3,1],[1,5,1],[4,2,1]]", "expected": "7"}], ["m, n <= 200"]),
    (65, "Valid Number", "Hard", "String / Parsing", "Check if a string is a valid number.", [{"input": "0", "expected": "true"}, {"input": "e", "expected": "false"}], ["1 <= s.length <= 20"]),
    (66, "Plus One", "Easy", "Array", "Increment the large integer represented as an array of digits.", [{"input": "1 2 3", "expected": "1 2 4"}], ["1 <= digits.length <= 100"]),
    (67, "Add Binary", "Easy", "String / Math", "Return the sum of two binary strings.", [{"input": "11\n1", "expected": "100"}], ["1 <= a.length, b.length <= 10^4"]),
    (68, "Text Justification", "Hard", "String", "Format the text such that each line has exactly maxWidth characters and is fully justified.", [{"input": "This is an example of text justification.\n16", "expected": "[\"This    is    an\",\"example  of text\",\"justification.  \"]"}], ["1 <= words.length <= 300"]),
    (69, "Sqrt(x)", "Easy", "Math / Binary Search", "Compute and return the square root of x.", [{"input": "4", "expected": "2"}], ["0 <= x <= 2^31 - 1"]),
    (70, "Climbing Stairs", "Easy", "DP", "How many distinct ways can you climb to the top of n stairs?", [{"input": "2", "expected": "2"}, {"input": "3", "expected": "3"}], ["1 <= n <= 45"]),

    # 71 - 80
    (71, "Simplify Path", "Medium", "Stack", "Convert an absolute path for a Unix-style file system to the canonical path.", [{"input": "/home/", "expected": "/home"}], ["1 <= s.length <= 3000"]),
    (72, "Edit Distance", "Hard", "DP", "Return the minimum number of operations to convert word1 to word2.", [{"input": "horse\nros", "expected": "3"}], ["0 <= word1.length, word2.length <= 500"]),
    (73, "Set Matrix Zeroes", "Medium", "Matrix", "If an element is 0, set its entire row and column to 0. Do it in place.", [{"input": "[[1,1,1],[1,0,1],[1,1,1]]", "expected": "[[1,0,1],[0,0,0],[1,0,1]]"}], ["m, n <= 200"]),
    (74, "Search a 2D Matrix", "Medium", "Matrix / Binary Search", "Search for a target value in an m x n integer matrix.", [{"input": "[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3", "expected": "true"}], ["m, n <= 100"]),
    (75, "Sort Colors", "Medium", "Array / Two Pointers", "Sort an array with 0s, 1s, and 2s in place.", [{"input": "2 0 2 1 1 0", "expected": "0 0 1 1 2 2"}], ["1 <= n <= 300"]),
    (76, "Minimum Window Substring", "Hard", "String / Sliding Window", "Find the minimum window in s which will contain all the characters in t.", [{"input": "ADOBECODEBANC\nABC", "expected": "BANC"}], ["1 <= s.length, t.length <= 10^5"]),
    (77, "Combinations", "Medium", "Backtracking", "Return all possible combinations of k numbers chosen from 1 to n.", [{"input": "4\n2", "expected": "[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]"}], ["1 <= n <= 20"]),
    (78, "Subsets", "Medium", "Backtracking", "Return all possible subsets (the power set) of an array.", [{"input": "1 2 3", "expected": "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"}], ["1 <= n <= 10"]),
    (79, "Word Search", "Medium", "Backtracking", "Determine if the word exists in the grid.", [{"input": "[[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]]\nABCCED", "expected": "true"}], ["m, n <= 6"]),
    (80, "Remove Duplicates from Sorted Array II", "Medium", "Array / Two Pointers", "Remove duplicates in place such that each unique element appears at most twice.", [{"input": "1 1 1 2 2 3", "expected": "5"}], ["1 <= n <= 3 * 10^4"]),

    # 81 - 90
    (81, "Search in Rotated Sorted Array II", "Medium", "Array / Binary Search", "Search for a target in a rotated sorted array that may contain duplicates.", [{"input": "2 5 6 0 0 1 2\n0", "expected": "true"}], ["1 <= n <= 5000"]),
    (82, "Remove Duplicates from Sorted List II", "Medium", "Linked List", "Delete all nodes that have duplicate numbers.", [{"input": "1 2 3 3 4 4 5", "expected": "1 2 5"}], ["0 <= n <= 300"]),
    (83, "Remove Duplicates from Sorted List", "Easy", "Linked List", "Delete all duplicates such that each element appears only once.", [{"input": "1 1 2", "expected": "1 2"}], ["0 <= n <= 300"]),
    (84, "Largest Rectangle in Histogram", "Hard", "Stack", "Find the area of the largest rectangle in the histogram.", [{"input": "2 1 5 6 2 3", "expected": "10"}], ["1 <= n <= 10^5"]),
    (85, "Maximal Rectangle", "Hard", "DP / Stack", "Find the largest rectangle containing only 1's and return its area.", [{"input": "[[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]", "expected": "6"}], ["m, n <= 200"]),
    (86, "Partition List", "Medium", "Linked List", "Partition a list such that all nodes less than x come before nodes greater than or equal to x.", [{"input": "1 4 3 2 5 2\n3", "expected": "1 2 2 4 3 5"}], ["0 <= n <= 200"]),
    (87, "Scramble String", "Hard", "DP", "Determine if s2 is a scrambled string of s1.", [{"input": "great\nrgeat", "expected": "true"}], ["1 <= s1.length <= 30"]),
    (88, "Merge Sorted Array", "Easy", "Array / Two Pointers", "Merge two sorted arrays nums1 and nums2 into nums1 as one sorted array.", [{"input": "1 2 3 0 0 0\n3\n2 5 6\n3", "expected": "1 2 2 3 5 6"}], ["0 <= m, n <= 200"]),
    (89, "Gray Code", "Medium", "Backtracking", "Return any valid n-bit gray code sequence.", [{"input": "2", "expected": "[0,1,3,2]"}], ["1 <= n <= 16"]),
    (90, "Subsets II", "Medium", "Backtracking", "Return all possible unique subsets of an array that may contain duplicates.", [{"input": "1 2 2", "expected": "[[],[1],[1,2],[1,2,2],[2],[2,2]]"}], ["1 <= n <= 10"]),

    # 91 - 100
    (91, "Decode Ways", "Medium", "DP", "Return the number of ways to decode the message.", [{"input": "12", "expected": "2"}], ["1 <= s.length <= 100"]),
    (92, "Reverse Linked List II", "Medium", "Linked List", "Reverse the nodes of the list from position left to position right.", [{"input": "1 2 3 4 5\n2\n4", "expected": "1 4 3 2 5"}], ["1 <= n <= 500"]),
    (93, "Restore IP Addresses", "Medium", "Backtracking", "Return all possible valid IP addresses that can be formed by inserting dots into s.", [{"input": "25525511135", "expected": "[\"255.255.11.135\",\"255.255.111.35\"]"}], ["1 <= s.length <= 20"]),
    (94, "Binary Tree Inorder Traversal", "Easy", "Tree", "Return the inorder traversal of its nodes' values.", [{"input": "1 null 2 3", "expected": "[1,3,2]"}], ["0 <= n <= 100"]),
    (95, "Unique Binary Search Trees II", "Medium", "Tree / DP", "Return all structurally unique BST's that store values 1 to n.", [{"input": "3", "expected": "5 solutions"}], ["1 <= n <= 8"]),
    (96, "Unique Binary Search Trees", "Medium", "DP", "Return the number of structurally unique BST's that store values 1 to n.", [{"input": "3", "expected": "5"}], ["1 <= n <= 19"]),
    (97, "Interleaving String", "Medium", "DP", "Determine whether s3 is formed by an interleaving of s1 and s2.", [{"input": "aabcc\ndb bca\naadbbcbcac", "expected": "true"}], ["0 <= n <= 200"]),
    (98, "Validate Binary Search Tree", "Medium", "Tree", "Determine if it is a valid binary search tree (BST).", [{"input": "2 1 3", "expected": "true"}], ["1 <= n <= 10^4"]),
    (99, "Recover Binary Search Tree", "Medium", "Tree", "Recover the tree without changing its structure.", [{"input": "1 3 null null 2", "expected": "3 1 null null 2"}], ["2 <= n <= 1000"]),
    (100, "Same Tree", "Easy", "Tree", "Check if two binary trees are the same.", [{"input": "1 2 3\n1 2 3", "expected": "true"}], ["0 <= n <= 100"]),

    # 101 - 110
    (101, "Symmetric Tree", "Easy", "Tree", "Check whether a binary tree is a mirror of itself.", [{"input": "1 2 2 3 4 4 3", "expected": "true"}], ["1 <= n <= 1000"]),
    (102, "Binary Tree Level Order Traversal", "Medium", "Tree / BFS", "Return the level order traversal of its nodes' values.", [{"input": "3 9 20 null null 15 7", "expected": "[[3],[9,20],[15,7]]"}], ["0 <= n <= 2000"]),
    (103, "Binary Tree Zigzag Level Order Traversal", "Medium", "Tree / BFS", "Return the zigzag level order traversal of its nodes' values.", [{"input": "3 9 20 null null 15 7", "expected": "[[3],[20,9],[15,7]]"}], ["0 <= n <= 2000"]),
    (104, "Maximum Depth of Binary Tree", "Easy", "Tree", "Return its maximum depth.", [{"input": "3 9 20 null null 15 7", "expected": "3"}], ["0 <= n <= 10^4"]),
    (105, "Construct Binary Tree from Preorder and Inorder Traversal", "Medium", "Tree", "Return the binary tree.", [{"input": "3 9 20 15 7\n9 3 15 20 7", "expected": "[3,9,20,null,null,15,7]"}], ["1 <= n <= 3000"]),
    (106, "Construct Binary Tree from Inorder and Postorder Traversal", "Medium", "Tree", "Return the binary tree.", [{"input": "9 3 15 20 7\n9 15 7 20 3", "expected": "[3,9,20,null,null,15,7]"}], ["1 <= n <= 3000"]),
    (107, "Binary Tree Level Order Traversal II", "Medium", "Tree / BFS", "Return the bottom-up level order traversal.", [{"input": "3 9 20 null null 15 7", "expected": "[[15,7],[9,20],[3]]"}], ["0 <= n <= 2000"]),
    (108, "Convert Sorted Array to Binary Search Tree", "Easy", "Tree", "Convert to a height-balanced BST.", [{"input": "-10 -3 0 5 9", "expected": "[0,-3,9,-10,null,5]"}], ["1 <= n <= 10^4"]),
    (109, "Convert Sorted List to Binary Search Tree", "Medium", "Linked List / Tree", "Convert to a height-balanced BST.", [{"input": "-10 -3 0 5 9", "expected": "[0,-3,9,-10,null,5]"}], ["0 <= n <= 2*10^4"]),
    (110, "Balanced Binary Tree", "Easy", "Tree", "Determine if it is height-balanced.", [{"input": "3 9 20 null null 15 7", "expected": "true"}], ["0 <= n <= 5000"]),

    # 111 - 120
    (111, "Minimum Depth of Binary Tree", "Easy", "Tree", "Return its minimum depth.", [{"input": "3 9 20 null null 15 7", "expected": "2"}], ["0 <= n <= 10^5"]),
    (112, "Path Sum", "Easy", "Tree / DFS", "Return true if the tree has a root-to-leaf path such that adding up all the values equals targetSum.", [{"input": "5 4 8 11 null 13 4 7 2 null null null 1\n22", "expected": "true"}], ["0 <= n <= 5000"]),
    (113, "Path Sum II", "Medium", "Tree / DFS", "Return all root-to-leaf paths where each path's sum equals targetSum.", [{"input": "5 4 8 11 null 13 4 7 2 null null 5 1\n22", "expected": "[[5,4,11,2],[5,8,4,5]]"}], ["0 <= n <= 5000"]),
    (114, "Flatten Binary Tree to Linked List", "Medium", "Tree", "Flatten the tree into a linked list in-place.", [{"input": "1 2 5 3 4 null 6", "expected": "[1,null,2,null,3,null,4,null,5,null,6]"}], ["0 <= n <= 2000"]),
    (115, "Distinct Subsequences", "Hard", "DP", "Return the number of distinct subsequences of s which equals t.", [{"input": "rabbbit\nrabbit", "expected": "3"}], ["1 <= s.length <= 1000"]),
    (116, "Populating Next Right Pointers in Each Node", "Medium", "Tree", "Populate each next pointer to point to its next right node.", [{"input": "1 2 3 4 5 6 7", "expected": "[1,#,2,3,#,4,5,6,7,#]"}], ["0 <= n <= 4096"]),
    (117, "Populating Next Right Pointers in Each Node II", "Medium", "Tree", "Populate each next pointer in a general binary tree.", [{"input": "1 2 3 4 5 null 7", "expected": "[1,#,2,3,#,4,5,7,#]"}], ["0 <= n <= 6000"]),
    (118, "Pascal’s Triangle", "Easy", "Array", "Return the first numRows of Pascal's triangle.", [{"input": "5", "expected": "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]"}], ["1 <= numRows <= 30"]),
    (119, "Pascal’s Triangle II", "Easy", "Array", "Return the rowIndex-th row of the Pascal's triangle.", [{"input": "3", "expected": "[1,3,3,1]"}], ["0 <= rowIndex <= 33"]),
    (120, "Triangle", "Medium", "DP", "Return the minimum path sum from top to bottom.", [{"input": "[[2],[3,4],[6,5,7],[4,1,8,3]]", "expected": "11"}], ["1 <= n <= 200"]),

    # 121 - 130
    (121, "Best Time to Buy and Sell Stock", "Easy", "Array / DP", "Return the maximum profit you can achieve from this transaction.", [{"input": "7 1 5 3 6 4", "expected": "5"}], ["1 <= n <= 10^5"]),
    (122, "Best Time to Buy and Sell Stock II", "Medium", "Array / Greedy", "Return the maximum profit you can achieve.", [{"input": "7 1 5 3 6 4", "expected": "7"}], ["1 <= n <= 3 * 10^4"]),
    (123, "Best Time to Buy and Sell Stock III", "Hard", "DP", "Return the maximum profit you can achieve (max 2 transactions).", [{"input": "3 3 5 0 0 3 1 4", "expected": "6"}], ["1 <= n <= 10^5"]),
    (124, "Binary Tree Maximum Path Sum", "Hard", "Tree / DFS", "Return the maximum path sum of any non-empty path.", [{"input": "1 2 3", "expected": "6"}], ["1 <= n <= 3 * 10^4"]),
    (125, "Valid Palindrome", "Easy", "String", "Check if it is a palindrome, considering only alphanumeric characters and ignoring cases.", [{"input": "A man, a plan, a canal: Panama", "expected": "true"}], ["1 <= s.length <= 2 * 10^5"]),
    (126, "Word Ladder II", "Hard", "Graph / BFS", "Return all the shortest transformation sequences from beginWord to endWord.", [{"input": "hit\ncog\nhot dot dog lot log cog", "expected": "[[\"hit\",\"hot\",\"dot\",\"dog\",\"cog\"],[\"hit\",\"hot\",\"lot\",\"log\",\"cog\"]]"}], ["1 <= beginWord.length <= 5"]),
    (127, "Word Ladder", "Hard", "Graph / BFS", "Return the number of words in the shortest transformation sequence.", [{"input": "hit\ncog\nhot dot dog lot log cog", "expected": "5"}], ["1 <= beginWord.length <= 5"]),
    (128, "Longest Consecutive Sequence", "Medium", "Array / Hash Table", "Return the length of the longest consecutive elements sequence.", [{"input": "100 4 200 1 3 2", "expected": "4"}], ["0 <= n <= 10^5"]),
    (129, "Sum Root to Leaf Numbers", "Medium", "Tree", "Return the total sum of all root-to-leaf numbers.", [{"input": "1 2 3", "expected": "25"}], ["1 <= n <= 1000"]),
    (130, "Surrounded Regions", "Medium", "Matrix / DFS", "Capture all regions that are 4-directionally surrounded by 'X'.", [{"input": "[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"O\",\"X\"],[\"X\",\"X\",\"O\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]", "expected": "[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]"}], ["m, n <= 200"]),

    # 131 - 140
    (131, "Palindrome Partitioning", "Medium", "Backtracking", "Return all possible palindrome partitioning of s.", [{"input": "aab", "expected": "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]"}], ["1 <= s.length <= 16"]),
    (132, "Palindrome Partitioning II", "Hard", "DP", "Return the minimum cuts needed for a palindrome partitioning of s.", [{"input": "aab", "expected": "1"}], ["1 <= s.length <= 2000"]),
    (133, "Clone Graph", "Medium", "Graph / DFS", "Return a deep copy (clone) of the connected undirected graph.", [{"input": "[[2,4],[1,3],[2,4],[1,3]]", "expected": "[[2,4],[1,3],[2,4],[1,3]]"}], ["0 <= n <= 100"]),
    (134, "Gas Station", "Medium", "Array / Greedy", "Return the starting gas station's index if you can travel around the circuit once.", [{"input": "1 2 3 4 5\n3 4 5 1 2", "expected": "3"}], ["1 <= n <= 10^5"]),
    (135, "Candy", "Hard", "Array / Greedy", "Return the minimum number of candies you need to have to distribute to the children.", [{"input": "1 0 2", "expected": "5"}], ["1 <= n <= 2 * 10^4"]),
    (136, "Single Number", "Easy", "Array / Bit Manipulation", "Find that single one.", [{"input": "2 2 1", "expected": "1"}], ["1 <= n <= 3 * 10^4"]),
    (137, "Single Number II", "Medium", "Array / Bit Manipulation", "Find the element that appears exactly once.", [{"input": "2 2 3 2", "expected": "3"}], ["1 <= n <= 3 * 10^4"]),
    (138, "Copy List with Random Pointer", "Medium", "Linked List / Hash Table", "Construct a deep copy of the list.", [{"input": "[[7,null],[13,0],[11,4],[10,2],[1,0]]", "expected": "[[7,null],[13,0],[11,4],[10,2],[1,0]]"}], ["0 <= n <= 1000"]),
    (139, "Word Break", "Medium", "DP", "Return true if s can be segmented into a space-separated sequence of one or more dictionary words.", [{"input": "leetcode\nleet code", "expected": "true"}], ["1 <= s.length <= 300"]),
    (140, "Word Break II", "Hard", "DP / Backtracking", "Return all such possible sentences.", [{"input": "catsanddog\ncat cats and sand dog", "expected": "[\"cats and dog\",\"cat sand dog\"]"}], ["1 <= s.length <= 20"]),

    # 141 - 150
    (141, "Linked List Cycle", "Easy", "Linked List / Two Pointers", "Determine if the linked list has a cycle in it.", [{"input": "3 2 0 -4\n1", "expected": "true"}], ["0 <= n <= 10^4"]),
    (142, "Linked List Cycle II", "Medium", "Linked List / Two Pointers", "Return the node where the cycle begins.", [{"input": "3 2 0 -4\n1", "expected": "tail connects to node index 1"}], ["0 <= n <= 10^4"]),
    (143, "Reorder List", "Medium", "Linked List", "Reorder the list to L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …", [{"input": "1 2 3 4", "expected": "1 4 2 3"}], ["1 <= n <= 5 * 10^4"]),
    (144, "Binary Tree Preorder Traversal", "Easy", "Tree", "Return the preorder traversal of its nodes' values.", [{"input": "1 null 2 3", "expected": "[1,2,3]"}], ["0 <= n <= 100"]),
    (145, "Binary Tree Postorder Traversal", "Easy", "Tree", "Return the postorder traversal of its nodes' values.", [{"input": "1 null 2 3", "expected": "[3,2,1]"}], ["0 <= n <= 100"]),
    (146, "LRU Cache", "Medium", "Design / Hash Table", "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.", [{"input": "LRUCache 2, put 1 1, put 2 2, get 1, put 3 3, get 2", "expected": "null, null, null, 1, null, -1"}], ["1 <= capacity <= 3000"]),
    (147, "Insertion Sort List", "Medium", "Linked List / Sorting", "Sort a linked list using insertion sort.", [{"input": "4 2 1 3", "expected": "1 2 3 4"}], ["1 <= n <= 5000"]),
    (148, "Sort List", "Medium", "Linked List / Merge Sort", "Sort the linked list in O(n log n) time and O(1) memory.", [{"input": "4 2 1 3", "expected": "1 2 3 4"}], ["0 <= n <= 5 * 10^4"]),
    (149, "Max Points on a Line", "Hard", "Geometry / Hash Table", "Return the maximum number of points that lie on the same straight line.", [{"input": "[[1,1],[2,2],[3,3]]", "expected": "3"}], ["1 <= n <= 300"]),
    (150, "Evaluate Reverse Polish Notation", "Medium", "Stack", "Evaluate the value of an arithmetic expression in Reverse Polish Notation.", [{"input": "2 1 + 3 *", "expected": "9"}], ["1 <= n <= 10^4"]),
]

existing_problems_code = ""
with open("src/data/mockProblems.ts", "r") as f:
    lines = f.readlines()
    # Assume the array starts after some lines and end with ];
    # For safety, I'll just rewrite the whole file with old + new data.

# I need to parse the first 50 problems from the current file if possible,
# or just re-list them. I'll just re-list the first 50 for consistency.
# Wait, I don't want to lose the test cases I already perfected.

# I will use a regex to find the problems.
import re

content = "".join(lines)
# Match individual problem objects
# This is tricky due to nested arrays/objects.
# I'll try to find the slice of MOCK_PROBLEMS and then append.

new_problems = []
for p in base_problems:
    new_problems.append({
        "id": p[0],
        "title": p[1],
        "difficulty": p[2],
        "topics": p[3],
        "description": f"<p>{p[4]}</p>",
        "testcases": p[5],
        "constraints": p[6]
    })

# Format the new problems as JS objects
formatted_new = json.dumps(new_problems, indent=2)
# Remove quotes from keys
formatted_new = re.sub(r'\"(\w+)\":', r'\1:', formatted_new)

with open("src/data/mockProblems.ts", "w") as f:
    f.write("import { Problem } from '../types';\n\n")
    f.write("export const MOCK_PROBLEMS: Problem[] = [\n")
    # Write existing 50
    # I'll just manually define the first 50 if I have to,
    # but I can extract them from the file.
    # Actually, I'll just read the file up to the last ];

    # Let's try to extract everything between [ and ];
    match = re.search(r'MOCK_PROBLEMS: Problem\[\] = \[(.*)\];', content, re.DOTALL)
    if match:
        existing_data = match.group(1).strip()
        f.write(existing_data)
        f.write(",\n")

    # Write new 100 (formatted correctly)
    new_objs = formatted_new.strip().lstrip("[").rstrip("]").strip()
    f.write(new_objs)
    f.write("\n];\n")
