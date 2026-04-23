import { Problem } from '../types';

export const MOCK_PROBLEMS: Problem[] = [
{
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    topics: "Array, Hash Table",
    description: "<p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p><p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>",
    testcases: [
      { input: "2 7 11 15\n9", expected: "0 1" },
      { input: "3 2 4\n6", expected: "1 2" },
      { input: "3 3\n6", expected: "0 1" }
    ],
    constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9"]
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    topics: "Linked List",
    description: "<p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.</p>",
    testcases: [
      { input: "2 4 3\n5 6 4", expected: "7 0 8" },
      { input: "0\n0", expected: "0" },
      { input: "9 9 9 9 9 9 9\n9 9 9 9", expected: "8 9 9 9 0 0 0 1" }
    ],
    constraints: ["The number of nodes in each linked list is in the range [1, 100].", "0 <= Node.val <= 9"]
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    topics: "String, Sliding Window",
    description: "<p>Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.</p>",
    testcases: [
      { input: "abcabcbb", expected: "3" },
      { input: "bbbbb", expected: "1" },
      { input: "pwwkew", expected: "3" }
    ],
    constraints: ["0 <= s.length <= 5 * 10^4", "s consists of English letters, digits, symbols and spaces."]
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    topics: "Array, Binary Search",
    description: "<p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.</p>",
    testcases: [
      { input: "1 3\n2", expected: "2.0" },
      { input: "1 2\n3 4", expected: "2.5" },
      { input: "0 0\n0 0", expected: "0.0" }
    ],
    constraints: ["nums1.length == m", "nums2.length == n", "0 <= m, n <= 1000"]
  },
  {
    id: 5,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    topics: "String, DP",
    description: "<p>Given a string <code>s</code>, return <em>the longest palindromic substring</em> in <code>s</code>.</p>",
    testcases: [
      { input: "babad", expected: "bab" },
      { input: "cbbd", expected: "bb" },
      { input: "a", expected: "a" }
    ],
    constraints: ["1 <= s.length <= 1000", "s consists of only digits and English letters."]
  },
  {
    id: 6,
    title: "Zigzag Conversion",
    difficulty: "Medium",
    topics: "String",
    description: "<p>The string <code>\"PAYPALISHIRING\"</code> is written in a zigzag pattern on a given number of rows like this.</p>",
    testcases: [
      { input: "PAYPALISHIRING\n3", expected: "PAHNAPLSIIGYIR" },
      { input: "PAYPALISHIRING\n4", expected: "PINALSIGYAHRPI" },
      { input: "A\n1", expected: "A" }
    ],
    constraints: ["1 <= s.length <= 1000", "1 <= numRows <= 1000"]
  },
  {
    id: 7,
    title: "Reverse Integer",
    difficulty: "Medium",
    topics: "Math",
    description: "<p>Given a signed 32-bit integer <code>x</code>, return <code>x</code> with its digits reversed. If reversing <code>x</code> causes the value to go outside the range, then return <code>0</code>.</p>",
    testcases: [
      { input: "123", expected: "321" },
      { input: "-123", expected: "-321" },
      { input: "120", expected: "21" }
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"]
  },
  {
    id: 8,
    title: "String to Integer (atoi)",
    difficulty: "Medium",
    topics: "String, Parsing",
    description: "<p>Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer.</p>",
    testcases: [
      { input: "42", expected: "42" },
      { input: "   -42", expected: "-42" },
      { input: "4193 with words", expected: "4193" }
    ],
    constraints: ["0 <= s.length <= 200"]
  },
  {
    id: 9,
    title: "Palindrome Number",
    difficulty: "Easy",
    topics: "Math",
    description: "<p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a palindrome, and <code>false</code> otherwise.</p>",
    testcases: [
      { input: "121", expected: "true" },
      { input: "-121", expected: "false" },
      { input: "10", expected: "false" }
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"]
  },
  {
    id: 10,
    title: "Regular Expression Matching",
    difficulty: "Hard",
    topics: "String, DP",
    description: "<p>Given an input string <code>s</code> and a pattern <code>p</code>, implement regular expression matching with support for <code>'.'</code> and <code>'*'</code>.</p>",
    testcases: [
      { input: "aa\na", expected: "false" },
      { input: "aa\na*", expected: "true" },
      { input: "ab\n.*", expected: "true" }
    ],
    constraints: ["1 <= s.length <= 20", "1 <= p.length <= 20"]
  },
  {
    id: 11,
    title: "Container With Most Water",
    difficulty: "Medium",
    topics: "Array, Two Pointers",
    description: "<p>You are given an integer array <code>height</code> of length <code>n</code>. Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>",
    testcases: [
      { input: "1 8 6 2 5 4 8 3 7", expected: "49" },
      { input: "1 1", expected: "1" }
    ],
    constraints: ["2 <= n <= 10^5", "0 <= height[i] <= 10^4"]
  },
  {
    id: 12,
    title: "Integer to Roman",
    difficulty: "Medium",
    topics: "Math, String",
    description: "<p>Seven different symbols represent Roman numerals. Convert a given integer to a Roman numeral.</p>",
    testcases: [
      { input: "3", expected: "III" },
      { input: "58", expected: "LVIII" },
      { input: "1994", expected: "MCMXCIV" }
    ],
    constraints: ["1 <= num <= 3999"]
  },
  {
    id: 13,
    title: "Roman to Integer",
    difficulty: "Easy",
    topics: "Math, String",
    description: "<p>Convert a Roman numeral string to an integer.</p>",
    testcases: [
      { input: "III", expected: "3" },
      { input: "LVIII", expected: "58" },
      { input: "MCMXCIV", expected: "1994" }
    ],
    constraints: ["1 <= s.length <= 15"]
  },
  {
    id: 14,
    title: "Longest Common Prefix",
    difficulty: "Easy",
    topics: "String",
    description: "<p>Write a function to find the longest common prefix string amongst an array of strings.</p>",
    testcases: [
      { input: "flower flow flight", expected: "fl" },
      { input: "dog racecar car", expected: "" }
    ],
    constraints: ["1 <= strs.length <= 200"]
  },
  {
    id: 15,
    title: "3Sum",
    difficulty: "Medium",
    topics: "Array, Two Pointers",
    description: "<p>Given an integer array nums, return all unique triplets that sum to zero.</p>",
    testcases: [
      { input: "-1 0 1 2 -1 -4", expected: "[[-1,-1,2],[-1,0,1]]" },
      { input: "0 1 1", expected: "[]" },
      { input: "0 0 0", expected: "[[0,0,0]]" }
    ],
    constraints: ["3 <= nums.length <= 3000"]
  },
  {
    id: 16,
    title: "3Sum Closest",
    difficulty: "Medium",
    topics: "Array, Two Pointers",
    description: "<p>Find three integers in <code>nums</code> such that the sum is closest to <code>target</code>.</p>",
    testcases: [
      { input: "-1 2 1 -4\n1", expected: "2" },
      { input: "0 0 0\n1", expected: "0" }
    ],
    constraints: ["3 <= nums.length <= 500"]
  },
  {
    id: 17,
    title: "Letter Combinations of a Phone Number",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Given a string containing digits from <code>2-9</code>, return all possible letter combinations that the number could represent.</p>",
    testcases: [
      { input: "23", expected: "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]" },
      { input: "", expected: "[]" },
      { input: "2", expected: "[\"a\",\"b\",\"c\"]" }
    ],
    constraints: ["0 <= digits.length <= 4"]
  },
  {
    id: 18,
    title: "4Sum",
    difficulty: "Medium",
    topics: "Array, Two Pointers",
    description: "<p>Return an array of all unique quadruplets that sum to <code>target</code>.</p>",
    testcases: [
      { input: "1 0 -1 0 -2 2\n0", expected: "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]" },
      { input: "2 2 2 2 2\n8", expected: "[[2,2,2,2]]" }
    ],
    constraints: ["1 <= nums.length <= 200"]
  },
  {
    id: 19,
    title: "Remove Nth Node From End of List",
    difficulty: "Medium",
    topics: "Linked List",
    description: "<p>Given the <code>head</code> of a linked list, remove the <code>n<sup>th</sup></code> node from the end of the list and return its head.</p>",
    testcases: [
      { input: "1 2 3 4 5\n2", expected: "1 2 3 5" },
      { input: "1\n1", expected: "" },
      { input: "1 2\n1", expected: "1" }
    ],
    constraints: ["1 <= sz <= 30"]
  },
  {
    id: 20,
    title: "Valid Parentheses",
    difficulty: "Easy",
    topics: "Stack",
    description: "<p>Determine if an input string containing just parentheses is valid.</p>",
    testcases: [
      { input: "()", expected: "true" },
      { input: "()[]{}", expected: "true" },
      { input: "(]", expected: "false" }
    ],
    constraints: ["1 <= s.length <= 10^4"]
  },
  {
    id: 21,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    topics: "Linked List",
    description: "<p>Merge two sorted linked lists into one sorted list.</p>",
    testcases: [
      { input: "1 2 4\n1 3 4", expected: "1 1 2 3 4 4" },
      { input: "", expected: "" }
    ],
    constraints: ["Both lists in range [0, 50]"]
  },
  {
    id: 22,
    title: "Generate Parentheses",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Generate all combinations of well-formed parentheses for <code>n</code> pairs.</p>",
    testcases: [
      { input: "3", expected: "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]" },
      { input: "1", expected: "[\"()\"]" }
    ],
    constraints: ["1 <= n <= 8"]
  },
  {
    id: 23,
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    topics: "Linked List, Heap",
    description: "<p>Merge <code>k</code> sorted linked-lists into one sorted linked-list.</p>",
    testcases: [
      { input: "[[1,4,5],[1,3,4],[2,6]]", expected: "1 1 2 3 4 4 5 6" },
      { input: "[]", expected: "" }
    ],
    constraints: ["0 <= k <= 10^4"]
  },
  {
    id: 24,
    title: "Swap Nodes in Pairs",
    difficulty: "Medium",
    topics: "Linked List",
    description: "<p>Swap every two adjacent nodes in a linked list and return its head.</p>",
    testcases: [
      { input: "1 2 3 4", expected: "2 1 4 3" },
      { input: "1", expected: "1" }
    ],
    constraints: ["[0, 100] nodes"]
  },
  {
    id: 25,
    title: "Reverse Nodes in k-Group",
    difficulty: "Hard",
    topics: "Linked List",
    description: "<p>Reverse nodes of the linked list <code>k</code> at a time.</p>",
    testcases: [
      { input: "1 2 3 4 5\n2", expected: "2 1 4 3 5" },
      { input: "1 2 3 4 5\n3", expected: "3 2 1 4 5" }
    ],
    constraints: ["1 <= k <= n <= 5000"]
  },
  {
    id: 26,
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    topics: "Array, Two Pointers",
    description: "<p>Remove duplicates in-place such that each unique element appears only once.</p>",
    testcases: [
      { input: "1 1 2", expected: "2" },
      { input: "0 0 1 1 1 2 2 3 3 4", expected: "5" }
    ],
    constraints: ["1 <= nums.length <= 3 * 10^4"]
  },
  {
    id: 27,
    title: "Remove Element",
    difficulty: "Easy",
    topics: "Array, Two Pointers",
    description: "<p>Remove all occurrences of <code>val</code> in <code>nums</code> in-place.</p>",
    testcases: [
      { input: "3 2 2 3\n3", expected: "2" },
      { input: "0 1 2 2 3 0 4 2\n2", expected: "5" }
    ],
    constraints: ["0 <= nums.length <= 100"]
  },
  {
    id: 28,
    title: "Find the Index of the First Occurrence in a String",
    difficulty: "Easy",
    topics: "String",
    description: "<p>Return the index of the first occurrence of <code>needle</code> in <code>haystack</code>.</p>",
    testcases: [
      { input: "sadbutsad\nsad", expected: "0" },
      { input: "leetcode\nleeto", expected: "-1" }
    ],
    constraints: ["1 <= haystack.length, needle.length <= 10^4"]
  },
  {
    id: 29,
    title: "Divide Two Integers",
    difficulty: "Medium",
    topics: "Math",
    description: "<p>Divide two integers without using multiplication, division, and mod operator.</p>",
    testcases: [
      { input: "10\n3", expected: "3" },
      { input: "7\n-3", expected: "-2" }
    ],
    constraints: ["32-bit signed integers"]
  },
  {
    id: 30,
    title: "Substring with Concatenation of All Words",
    difficulty: "Hard",
    topics: "String, Hash Table",
    description: "<p>Find all starting indices of substring(s) that is a concatenation of each word in <code>words</code> exactly once.</p>",
    testcases: [
      { input: "barfoothefoobarman\nfoo bar", expected: "[0,9]" },
      { input: "wordgoodgoodgoodword\nword good best word", expected: "[]" }
    ],
    constraints: ["1 <= s.length <= 10^4"]
  },
  {
    id: 31,
    title: "Next Permutation",
    difficulty: "Medium",
    topics: "Array",
    description: "<p>Rearrange numbers into the lexicographically next greater permutation.</p>",
    testcases: [
      { input: "1 2 3", expected: "1 3 2" },
      { input: "3 2 1", expected: "1 2 3" },
      { input: "1 1 5", expected: "1 5 1" }
    ],
    constraints: ["1 <= nums.length <= 100"]
  },
  {
    id: 32,
    title: "Longest Valid Parentheses",
    difficulty: "Hard",
    topics: "Stack, DP",
    description: "<p>Find the length of the longest well-formed parentheses substring.</p>",
    testcases: [
      { input: "(()", expected: "2" },
      { input: ")()())", expected: "4" },
      { input: "", expected: "0" }
    ],
    constraints: ["0 <= s.length <= 3 * 10^4"]
  },
  {
    id: 33,
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    topics: "Array, Binary Search",
    description: "<p>Search for a target value in an array sorted in ascending order and rotated at some pivot.</p>",
    testcases: [
      { input: "4 5 6 7 0 1 2\n0", expected: "4" },
      { input: "4 5 6 7 0 1 2\n3", expected: "-1" }
    ],
    constraints: ["1 <= nums.length <= 5000"]
  },
  {
    id: 34,
    title: "Find First and Last Position of Element in Sorted Array",
    difficulty: "Medium",
    topics: "Array, Binary Search",
    description: "<p>Find the starting and ending position of a given <code>target</code> value in a sorted array.</p>",
    testcases: [
      { input: "5 7 7 8 8 10\n8", expected: "[3,4]" },
      { input: "5 7 7 8 8 10\n6", expected: "[-1,-1]" }
    ],
    constraints: ["0 <= nums.length <= 10^5"]
  },
  {
    id: 35,
    title: "Search Insert Position",
    difficulty: "Easy",
    topics: "Array, Binary Search",
    description: "<p>Return the index if target is found, otherwise return the index where it would be if inserted in order.</p>",
    testcases: [
      { input: "1 3 5 6\n5", expected: "2" },
      { input: "1 3 5 6\n2", expected: "1" },
      { input: "1 3 5 6\n7", expected: "4" }
    ],
    constraints: ["1 <= nums.length <= 10^4"]
  },
  {
    id: 36,
    title: "Valid Sudoku",
    difficulty: "Medium",
    topics: "Hash Table",
    description: "<p>Determine if a <code>9 x 9</code> Sudoku board is valid.</p>",
    testcases: [
      { input: "board1", expected: "true" },
      { input: "board2", expected: "false" }
    ],
    constraints: ["board.length == 9"]
  },
  {
    id: 37,
    title: "Sudoku Solver",
    difficulty: "Hard",
    topics: "Backtracking",
    description: "<p>Solve a Sudoku puzzle by filling the empty cells.</p>",
    testcases: [
      { input: "board1", expected: "solved1" }
    ],
    constraints: ["board.length == 9"]
  },
  {
    id: 38,
    title: "Count and Say",
    difficulty: "Medium",
    topics: "String",
    description: "<p>The count-and-say sequence is a recursive digit string formula.</p>",
    testcases: [
      { input: "1", expected: "1" },
      { input: "4", expected: "1211" }
    ],
    constraints: ["1 <= n <= 30"]
  },
  {
    id: 39,
    title: "Combination Sum",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Return a list of all unique combinations where the chosen numbers sum to <code>target</code>.</p>",
    testcases: [
      { input: "2 3 6 7\n7", expected: "[[2,2,3],[7]]" },
      { input: "2 3 5\n8", expected: "[[2,2,2,2],[2,3,3],[3,5]]" }
    ],
    constraints: ["1 <= candidates.length <= 30"]
  },
  {
    id: 40,
    title: "Combination Sum II",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Find all unique combinations in <code>candidates</code> where the numbers sum to <code>target</code>.</p>",
    testcases: [
      { input: "10 1 2 7 6 1 5\n8", expected: "[[1,1,6],[1,2,5],[1,7],[2,6]]" },
      { input: "2 5 2 1 2\n5", expected: "[[1,2,2],[5]]" }
    ],
    constraints: ["1 <= candidates.length <= 100"]
  },
  {
    id: 41,
    title: "First Missing Positive",
    difficulty: "Hard",
    topics: "Array",
    description: "<p>Return the smallest missing positive integer from an unsorted array.</p>",
    testcases: [
      { input: "1 2 0", expected: "3" },
      { input: "3 4 -1 1", expected: "2" },
      { input: "7 8 9 11 12", expected: "1" }
    ],
    constraints: ["1 <= nums.length <= 10^5"]
  },
  {
    id: 42,
    title: "Trapping Rain Water",
    difficulty: "Hard",
    topics: "Array, Two Pointers",
    description: "<p>Compute how much water it can trap after raining based on elevation map.</p>",
    testcases: [
      { input: "0 1 0 2 1 0 1 3 2 1 2 1", expected: "6" },
      { input: "4 2 0 3 2 5", expected: "9" }
    ],
    constraints: ["1 <= n <= 2 * 10^4"]
  },
  {
    id: 43,
    title: "Multiply Strings",
    difficulty: "Medium",
    topics: "String, Math",
    description: "<p>Return the product of two non-negative integers represented as strings.</p>",
    testcases: [
      { input: "2\n3", expected: "6" },
      { input: "123\n456", expected: "56088" }
    ],
    constraints: ["length <= 200"]
  },
  {
    id: 44,
    title: "Wildcard Matching",
    difficulty: "Hard",
    topics: "String, DP",
    description: "<p>Implement wildcard pattern matching with support for <code>'?'</code> and <code>'*'</code>.</p>",
    testcases: [
      { input: "aa\na", expected: "false" },
      { input: "aa\n*", expected: "true" },
      { input: "cb\n?a", expected: "false" }
    ],
    constraints: ["0 <= s.length, p.length <= 2000"]
  },
  {
    id: 45,
    title: "Jump Game II",
    difficulty: "Medium",
    topics: "Array, Greedy",
    description: "<p>Find the minimum number of jumps to reach the last index.</p>",
    testcases: [
      { input: "2 3 1 1 4", expected: "2" },
      { input: "2 3 0 1 4", expected: "2" }
    ],
    constraints: ["1 <= nums.length <= 10^4"]
  },
  {
    id: 46,
    title: "Permutations",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Return all possible permutations of an array of distinct integers.</p>",
    testcases: [
      { input: "1 2 3", expected: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" },
      { input: "0 1", expected: "[[0,1],[1,0]]" }
    ],
    constraints: ["1 <= nums.length <= 6"]
  },
  {
    id: 47,
    title: "Permutations II",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Return all possible unique permutations of an array that might contain duplicates.</p>",
    testcases: [
      { input: "1 1 2", expected: "[[1,1,2],[1,2,1],[2,1,1]]" },
      { input: "1 2 3", expected: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" }
    ],
    constraints: ["1 <= nums.length <= 8"]
  },
  {
    id: 48,
    title: "Rotate Image",
    difficulty: "Medium",
    topics: "Matrix",
    description: "<p>Rotate an <code>n x n</code> 2D matrix by 90 degrees clockwise.</p>",
    testcases: [
      { input: "[[1,2,3],[4,5,6],[7,8,9]]", expected: "[[7,4,1],[8,5,2],[9,6,3]]" },
      { input: "[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]", expected: "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]" }
    ],
    constraints: ["n <= 20"]
  },
  {
    id: 49,
    title: "Group Anagrams",
    difficulty: "Medium",
    topics: "String, Hash Table",
    description: "<p>Group anagrams together from an array of strings.</p>",
    testcases: [
      { input: "eat tea tan ate nat bat", expected: "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]" },
      { input: "", expected: "[[\"\"]]" }
    ],
    constraints: ["strs.length <= 10^4"]
  },
  {
    id: 50,
    title: "Pow(x, n)",
    difficulty: "Medium",
    topics: "Math, Recursion",
    description: "<p>Calculate <code>x</code> raised to the power <code>n</code>.</p>",
    testcases: [
      { input: "2.00000\n10", expected: "1024.0" },
      { input: "2.10000\n3", expected: "9.261" },
      { input: "2.00000\n-2", expected: "0.25" }
    ],
    constraints: ["-100.0 < x < 100.0"]
  },
{
    id: 51,
    title: "N-Queens",
    difficulty: "Hard",
    topics: "Backtracking",
    description: "<p>Place n queens on an n x n chessboard such that no two queens attack each other.</p>",
    testcases: [
      {
        input: "4",
        expected: "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]"
      }
    ],
    constraints: [
      "1 <= n <= 9"
    ]
  },
  {
    id: 52,
    title: "N-Queens II",
    difficulty: "Hard",
    topics: "Backtracking",
    description: "<p>Return the number of distinct solutions to the n-queens puzzle.</p>",
    testcases: [
      {
        input: "4",
        expected: "2"
      }
    ],
    constraints: [
      "1 <= n <= 9"
    ]
  },
  {
    id: 53,
    title: "Maximum Subarray",
    difficulty: "Medium",
    topics: "Array / DP",
    description: "<p>Find the contiguous subarray with the largest sum.</p>",
    testcases: [
      {
        input: "-2 1 -3 4 -1 2 1 -5 4",
        expected: "6"
      }
    ],
    constraints: [
      "1 <= nums.length <= 10^5"
    ]
  },
  {
    id: 54,
    title: "Spiral Matrix",
    difficulty: "Medium",
    topics: "Matrix",
    description: "<p>Return all elements of the matrix in spiral order.</p>",
    testcases: [
      {
        input: "[[1,2,3],[4,5,6],[7,8,9]]",
        expected: "[1,2,3,6,9,8,7,4,5]"
      }
    ],
    constraints: [
      "m == matrix.length"
    ]
  },
  {
    id: 55,
    title: "Jump Game",
    difficulty: "Medium",
    topics: "Array / Greedy",
    description: "<p>Determine if you are able to reach the last index.</p>",
    testcases: [
      {
        input: "2 3 1 1 4",
        expected: "true"
      }
    ],
    constraints: [
      "1 <= nums.length <= 10^4"
    ]
  },
  {
    id: 56,
    title: "Merge Intervals",
    difficulty: "Medium",
    topics: "Array / Sorting",
    description: "<p>Merge all overlapping intervals.</p>",
    testcases: [
      {
        input: "[[1,3],[2,6],[8,10],[15,18]]",
        expected: "[[1,6],[8,10],[15,18]]"
      }
    ],
    constraints: [
      "1 <= intervals.length <= 10^4"
    ]
  },
  {
    id: 57,
    title: "Insert Interval",
    difficulty: "Medium",
    topics: "Array",
    description: "<p>Insert a new interval into a set of non-overlapping intervals.</p>",
    testcases: [
      {
        input: "[[1,3],[6,9]]\n[2,5]",
        expected: "[[1,5],[6,9]]"
      }
    ],
    constraints: [
      "0 <= intervals.length <= 10^4"
    ]
  },
  {
    id: 58,
    title: "Length of Last Word",
    difficulty: "Easy",
    topics: "String",
    description: "<p>Return the length of the last word in the string.</p>",
    testcases: [
      {
        input: "Hello World",
        expected: "5"
      }
    ],
    constraints: [
      "1 <= s.length <= 10^4"
    ]
  },
  {
    id: 59,
    title: "Spiral Matrix II",
    difficulty: "Medium",
    topics: "Matrix",
    description: "<p>Generate a square matrix filled with elements from 1 to n^2 in spiral order.</p>",
    testcases: [
      {
        input: "3",
        expected: "[[1,2,3],[8,9,4],[7,6,5]]"
      }
    ],
    constraints: [
      "1 <= n <= 20"
    ]
  },
  {
    id: 60,
    title: "Permutation Sequence",
    difficulty: "Hard",
    topics: "Math / Backtracking",
    description: "<p>Return the kth permutation sequence of numbers from 1 to n.</p>",
    testcases: [
      {
        input: "3\n3",
        expected: "213"
      }
    ],
    constraints: [
      "1 <= n <= 9"
    ]
  },
  {
    id: 61,
    title: "Rotate List",
    difficulty: "Medium",
    topics: "Linked List",
    description: "<p>Rotate the list to the right by k places.</p>",
    testcases: [
      {
        input: "1 2 3 4 5\n2",
        expected: "4 5 1 2 3"
      }
    ],
    constraints: [
      "0 <= n <= 500"
    ]
  },
  {
    id: 62,
    title: "Unique Paths",
    difficulty: "Medium",
    topics: "DP",
    description: "<p>Find the number of possible unique paths from top-left to bottom-right.</p>",
    testcases: [
      {
        input: "3\n7",
        expected: "28"
      }
    ],
    constraints: [
      "m, n <= 100"
    ]
  },
  {
    id: 63,
    title: "Unique Paths II",
    difficulty: "Medium",
    topics: "DP",
    description: "<p>Unique paths in a grid with obstacles.</p>",
    testcases: [
      {
        input: "[[0,0,0],[0,1,0],[0,0,0]]",
        expected: "2"
      }
    ],
    constraints: [
      "m, n <= 100"
    ]
  },
  {
    id: 64,
    title: "Minimum Path Sum",
    difficulty: "Medium",
    topics: "DP",
    description: "<p>Find a path from top left to bottom right that minimizes the sum of numbers along its path.</p>",
    testcases: [
      {
        input: "[[1,3,1],[1,5,1],[4,2,1]]",
        expected: "7"
      }
    ],
    constraints: [
      "m, n <= 200"
    ]
  },
  {
    id: 65,
    title: "Valid Number",
    difficulty: "Hard",
    topics: "String / Parsing",
    description: "<p>Check if a string is a valid number.</p>",
    testcases: [
      {
        input: "0",
        expected: "true"
      },
      {
        input: "e",
        expected: "false"
      }
    ],
    constraints: [
      "1 <= s.length <= 20"
    ]
  },
  {
    id: 66,
    title: "Plus One",
    difficulty: "Easy",
    topics: "Array",
    description: "<p>Increment the large integer represented as an array of digits.</p>",
    testcases: [
      {
        input: "1 2 3",
        expected: "1 2 4"
      }
    ],
    constraints: [
      "1 <= digits.length <= 100"
    ]
  },
  {
    id: 67,
    title: "Add Binary",
    difficulty: "Easy",
    topics: "String / Math",
    description: "<p>Return the sum of two binary strings.</p>",
    testcases: [
      {
        input: "11\n1",
        expected: "100"
      }
    ],
    constraints: [
      "1 <= a.length, b.length <= 10^4"
    ]
  },
  {
    id: 68,
    title: "Text Justification",
    difficulty: "Hard",
    topics: "String",
    description: "<p>Format the text such that each line has exactly maxWidth characters and is fully justified.</p>",
    testcases: [
      {
        input: "This is an example of text justification.\n16",
        expected: "[\"This    is    an\",\"example  of text\",\"justification.  \"]"
      }
    ],
    constraints: [
      "1 <= words.length <= 300"
    ]
  },
  {
    id: 69,
    title: "Sqrt(x)",
    difficulty: "Easy",
    topics: "Math / Binary Search",
    description: "<p>Compute and return the square root of x.</p>",
    testcases: [
      {
        input: "4",
        expected: "2"
      }
    ],
    constraints: [
      "0 <= x <= 2^31 - 1"
    ]
  },
  {
    id: 70,
    title: "Climbing Stairs",
    difficulty: "Easy",
    topics: "DP",
    description: "<p>How many distinct ways can you climb to the top of n stairs?</p>",
    testcases: [
      {
        input: "2",
        expected: "2"
      },
      {
        input: "3",
        expected: "3"
      }
    ],
    constraints: [
      "1 <= n <= 45"
    ]
  },
  {
    id: 71,
    title: "Simplify Path",
    difficulty: "Medium",
    topics: "Stack",
    description: "<p>Convert an absolute path for a Unix-style file system to the canonical path.</p>",
    testcases: [
      {
        input: "/home/",
        expected: "/home"
      }
    ],
    constraints: [
      "1 <= s.length <= 3000"
    ]
  },
  {
    id: 72,
    title: "Edit Distance",
    difficulty: "Hard",
    topics: "DP",
    description: "<p>Return the minimum number of operations to convert word1 to word2.</p>",
    testcases: [
      {
        input: "horse\nros",
        expected: "3"
      }
    ],
    constraints: [
      "0 <= word1.length, word2.length <= 500"
    ]
  },
  {
    id: 73,
    title: "Set Matrix Zeroes",
    difficulty: "Medium",
    topics: "Matrix",
    description: "<p>If an element is 0, set its entire row and column to 0. Do it in place.</p>",
    testcases: [
      {
        input: "[[1,1,1],[1,0,1],[1,1,1]]",
        expected: "[[1,0,1],[0,0,0],[1,0,1]]"
      }
    ],
    constraints: [
      "m, n <= 200"
    ]
  },
  {
    id: 74,
    title: "Search a 2D Matrix",
    difficulty: "Medium",
    topics: "Matrix / Binary Search",
    description: "<p>Search for a target value in an m x n integer matrix.</p>",
    testcases: [
      {
        input: "[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3",
        expected: "true"
      }
    ],
    constraints: [
      "m, n <= 100"
    ]
  },
  {
    id: 75,
    title: "Sort Colors",
    difficulty: "Medium",
    topics: "Array / Two Pointers",
    description: "<p>Sort an array with 0s, 1s, and 2s in place.</p>",
    testcases: [
      {
        input: "2 0 2 1 1 0",
        expected: "0 0 1 1 2 2"
      }
    ],
    constraints: [
      "1 <= n <= 300"
    ]
  },
  {
    id: 76,
    title: "Minimum Window Substring",
    difficulty: "Hard",
    topics: "String / Sliding Window",
    description: "<p>Find the minimum window in s which will contain all the characters in t.</p>",
    testcases: [
      {
        input: "ADOBECODEBANC\nABC",
        expected: "BANC"
      }
    ],
    constraints: [
      "1 <= s.length, t.length <= 10^5"
    ]
  },
  {
    id: 77,
    title: "Combinations",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Return all possible combinations of k numbers chosen from 1 to n.</p>",
    testcases: [
      {
        input: "4\n2",
        expected: "[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]"
      }
    ],
    constraints: [
      "1 <= n <= 20"
    ]
  },
  {
    id: 78,
    title: "Subsets",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Return all possible subsets (the power set) of an array.</p>",
    testcases: [
      {
        input: "1 2 3",
        expected: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"
      }
    ],
    constraints: [
      "1 <= n <= 10"
    ]
  },
  {
    id: 79,
    title: "Word Search",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Determine if the word exists in the grid.</p>",
    testcases: [
      {
        input: "[[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]]\nABCCED",
        expected: "true"
      }
    ],
    constraints: [
      "m, n <= 6"
    ]
  },
  {
    id: 80,
    title: "Remove Duplicates from Sorted Array II",
    difficulty: "Medium",
    topics: "Array / Two Pointers",
    description: "<p>Remove duplicates in place such that each unique element appears at most twice.</p>",
    testcases: [
      {
        input: "1 1 1 2 2 3",
        expected: "5"
      }
    ],
    constraints: [
      "1 <= n <= 3 * 10^4"
    ]
  },
  {
    id: 81,
    title: "Search in Rotated Sorted Array II",
    difficulty: "Medium",
    topics: "Array / Binary Search",
    description: "<p>Search for a target in a rotated sorted array that may contain duplicates.</p>",
    testcases: [
      {
        input: "2 5 6 0 0 1 2\n0",
        expected: "true"
      }
    ],
    constraints: [
      "1 <= n <= 5000"
    ]
  },
  {
    id: 82,
    title: "Remove Duplicates from Sorted List II",
    difficulty: "Medium",
    topics: "Linked List",
    description: "<p>Delete all nodes that have duplicate numbers.</p>",
    testcases: [
      {
        input: "1 2 3 3 4 4 5",
        expected: "1 2 5"
      }
    ],
    constraints: [
      "0 <= n <= 300"
    ]
  },
  {
    id: 83,
    title: "Remove Duplicates from Sorted List",
    difficulty: "Easy",
    topics: "Linked List",
    description: "<p>Delete all duplicates such that each element appears only once.</p>",
    testcases: [
      {
        input: "1 1 2",
        expected: "1 2"
      }
    ],
    constraints: [
      "0 <= n <= 300"
    ]
  },
  {
    id: 84,
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    topics: "Stack",
    description: "<p>Find the area of the largest rectangle in the histogram.</p>",
    testcases: [
      {
        input: "2 1 5 6 2 3",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5"
    ]
  },
  {
    id: 85,
    title: "Maximal Rectangle",
    difficulty: "Hard",
    topics: "DP / Stack",
    description: "<p>Find the largest rectangle containing only 1's and return its area.</p>",
    testcases: [
      {
        input: "[[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]",
        expected: "6"
      }
    ],
    constraints: [
      "m, n <= 200"
    ]
  },
  {
    id: 86,
    title: "Partition List",
    difficulty: "Medium",
    topics: "Linked List",
    description: "<p>Partition a list such that all nodes less than x come before nodes greater than or equal to x.</p>",
    testcases: [
      {
        input: "1 4 3 2 5 2\n3",
        expected: "1 2 2 4 3 5"
      }
    ],
    constraints: [
      "0 <= n <= 200"
    ]
  },
  {
    id: 87,
    title: "Scramble String",
    difficulty: "Hard",
    topics: "DP",
    description: "<p>Determine if s2 is a scrambled string of s1.</p>",
    testcases: [
      {
        input: "great\nrgeat",
        expected: "true"
      }
    ],
    constraints: [
      "1 <= s1.length <= 30"
    ]
  },
  {
    id: 88,
    title: "Merge Sorted Array",
    difficulty: "Easy",
    topics: "Array / Two Pointers",
    description: "<p>Merge two sorted arrays nums1 and nums2 into nums1 as one sorted array.</p>",
    testcases: [
      {
        input: "1 2 3 0 0 0\n3\n2 5 6\n3",
        expected: "1 2 2 3 5 6"
      }
    ],
    constraints: [
      "0 <= m, n <= 200"
    ]
  },
  {
    id: 89,
    title: "Gray Code",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Return any valid n-bit gray code sequence.</p>",
    testcases: [
      {
        input: "2",
        expected: "[0,1,3,2]"
      }
    ],
    constraints: [
      "1 <= n <= 16"
    ]
  },
  {
    id: 90,
    title: "Subsets II",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Return all possible unique subsets of an array that may contain duplicates.</p>",
    testcases: [
      {
        input: "1 2 2",
        expected: "[[],[1],[1,2],[1,2,2],[2],[2,2]]"
      }
    ],
    constraints: [
      "1 <= n <= 10"
    ]
  },
  {
    id: 91,
    title: "Decode Ways",
    difficulty: "Medium",
    topics: "DP",
    description: "<p>Return the number of ways to decode the message.</p>",
    testcases: [
      {
        input: "12",
        expected: "2"
      }
    ],
    constraints: [
      "1 <= s.length <= 100"
    ]
  },
  {
    id: 92,
    title: "Reverse Linked List II",
    difficulty: "Medium",
    topics: "Linked List",
    description: "<p>Reverse the nodes of the list from position left to position right.</p>",
    testcases: [
      {
        input: "1 2 3 4 5\n2\n4",
        expected: "1 4 3 2 5"
      }
    ],
    constraints: [
      "1 <= n <= 500"
    ]
  },
  {
    id: 93,
    title: "Restore IP Addresses",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Return all possible valid IP addresses that can be formed by inserting dots into s.</p>",
    testcases: [
      {
        input: "25525511135",
        expected: "[\"255.255.11.135\",\"255.255.111.35\"]"
      }
    ],
    constraints: [
      "1 <= s.length <= 20"
    ]
  },
  {
    id: 94,
    title: "Binary Tree Inorder Traversal",
    difficulty: "Easy",
    topics: "Tree",
    description: "<p>Return the inorder traversal of its nodes' values.</p>",
    testcases: [
      {
        input: "1 null 2 3",
        expected: "[1,3,2]"
      }
    ],
    constraints: [
      "0 <= n <= 100"
    ]
  },
  {
    id: 95,
    title: "Unique Binary Search Trees II",
    difficulty: "Medium",
    topics: "Tree / DP",
    description: "<p>Return all structurally unique BST's that store values 1 to n.</p>",
    testcases: [
      {
        input: "3",
        expected: "5 solutions"
      }
    ],
    constraints: [
      "1 <= n <= 8"
    ]
  },
  {
    id: 96,
    title: "Unique Binary Search Trees",
    difficulty: "Medium",
    topics: "DP",
    description: "<p>Return the number of structurally unique BST's that store values 1 to n.</p>",
    testcases: [
      {
        input: "3",
        expected: "5"
      }
    ],
    constraints: [
      "1 <= n <= 19"
    ]
  },
  {
    id: 97,
    title: "Interleaving String",
    difficulty: "Medium",
    topics: "DP",
    description: "<p>Determine whether s3 is formed by an interleaving of s1 and s2.</p>",
    testcases: [
      {
        input: "aabcc\ndb bca\naadbbcbcac",
        expected: "true"
      }
    ],
    constraints: [
      "0 <= n <= 200"
    ]
  },
  {
    id: 98,
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    topics: "Tree",
    description: "<p>Determine if it is a valid binary search tree (BST).</p>",
    testcases: [
      {
        input: "2 1 3",
        expected: "true"
      }
    ],
    constraints: [
      "1 <= n <= 10^4"
    ]
  },
  {
    id: 99,
    title: "Recover Binary Search Tree",
    difficulty: "Medium",
    topics: "Tree",
    description: "<p>Recover the tree without changing its structure.</p>",
    testcases: [
      {
        input: "1 3 null null 2",
        expected: "3 1 null null 2"
      }
    ],
    constraints: [
      "2 <= n <= 1000"
    ]
  },
  {
    id: 100,
    title: "Same Tree",
    difficulty: "Easy",
    topics: "Tree",
    description: "<p>Check if two binary trees are the same.</p>",
    testcases: [
      {
        input: "1 2 3\n1 2 3",
        expected: "true"
      }
    ],
    constraints: [
      "0 <= n <= 100"
    ]
  },
  {
    id: 101,
    title: "Symmetric Tree",
    difficulty: "Easy",
    topics: "Tree",
    description: "<p>Check whether a binary tree is a mirror of itself.</p>",
    testcases: [
      {
        input: "1 2 2 3 4 4 3",
        expected: "true"
      }
    ],
    constraints: [
      "1 <= n <= 1000"
    ]
  },
  {
    id: 102,
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    topics: "Tree / BFS",
    description: "<p>Return the level order traversal of its nodes' values.</p>",
    testcases: [
      {
        input: "3 9 20 null null 15 7",
        expected: "[[3],[9,20],[15,7]]"
      }
    ],
    constraints: [
      "0 <= n <= 2000"
    ]
  },
  {
    id: 103,
    title: "Binary Tree Zigzag Level Order Traversal",
    difficulty: "Medium",
    topics: "Tree / BFS",
    description: "<p>Return the zigzag level order traversal of its nodes' values.</p>",
    testcases: [
      {
        input: "3 9 20 null null 15 7",
        expected: "[[3],[20,9],[15,7]]"
      }
    ],
    constraints: [
      "0 <= n <= 2000"
    ]
  },
  {
    id: 104,
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    topics: "Tree",
    description: "<p>Return its maximum depth.</p>",
    testcases: [
      {
        input: "3 9 20 null null 15 7",
        expected: "3"
      }
    ],
    constraints: [
      "0 <= n <= 10^4"
    ]
  },
  {
    id: 105,
    title: "Construct Binary Tree from Preorder and Inorder Traversal",
    difficulty: "Medium",
    topics: "Tree",
    description: "<p>Return the binary tree.</p>",
    testcases: [
      {
        input: "3 9 20 15 7\n9 3 15 20 7",
        expected: "[3,9,20,null,null,15,7]"
      }
    ],
    constraints: [
      "1 <= n <= 3000"
    ]
  },
  {
    id: 106,
    title: "Construct Binary Tree from Inorder and Postorder Traversal",
    difficulty: "Medium",
    topics: "Tree",
    description: "<p>Return the binary tree.</p>",
    testcases: [
      {
        input: "9 3 15 20 7\n9 15 7 20 3",
        expected: "[3,9,20,null,null,15,7]"
      }
    ],
    constraints: [
      "1 <= n <= 3000"
    ]
  },
  {
    id: 107,
    title: "Binary Tree Level Order Traversal II",
    difficulty: "Medium",
    topics: "Tree / BFS",
    description: "<p>Return the bottom-up level order traversal.</p>",
    testcases: [
      {
        input: "3 9 20 null null 15 7",
        expected: "[[15,7],[9,20],[3]]"
      }
    ],
    constraints: [
      "0 <= n <= 2000"
    ]
  },
  {
    id: 108,
    title: "Convert Sorted Array to Binary Search Tree",
    difficulty: "Easy",
    topics: "Tree",
    description: "<p>Convert to a height-balanced BST.</p>",
    testcases: [
      {
        input: "-10 -3 0 5 9",
        expected: "[0,-3,9,-10,null,5]"
      }
    ],
    constraints: [
      "1 <= n <= 10^4"
    ]
  },
  {
    id: 109,
    title: "Convert Sorted List to Binary Search Tree",
    difficulty: "Medium",
    topics: "Linked List / Tree",
    description: "<p>Convert to a height-balanced BST.</p>",
    testcases: [
      {
        input: "-10 -3 0 5 9",
        expected: "[0,-3,9,-10,null,5]"
      }
    ],
    constraints: [
      "0 <= n <= 2*10^4"
    ]
  },
  {
    id: 110,
    title: "Balanced Binary Tree",
    difficulty: "Easy",
    topics: "Tree",
    description: "<p>Determine if it is height-balanced.</p>",
    testcases: [
      {
        input: "3 9 20 null null 15 7",
        expected: "true"
      }
    ],
    constraints: [
      "0 <= n <= 5000"
    ]
  },
  {
    id: 111,
    title: "Minimum Depth of Binary Tree",
    difficulty: "Easy",
    topics: "Tree",
    description: "<p>Return its minimum depth.</p>",
    testcases: [
      {
        input: "3 9 20 null null 15 7",
        expected: "2"
      }
    ],
    constraints: [
      "0 <= n <= 10^5"
    ]
  },
  {
    id: 112,
    title: "Path Sum",
    difficulty: "Easy",
    topics: "Tree / DFS",
    description: "<p>Return true if the tree has a root-to-leaf path such that adding up all the values equals targetSum.</p>",
    testcases: [
      {
        input: "5 4 8 11 null 13 4 7 2 null null null 1\n22",
        expected: "true"
      }
    ],
    constraints: [
      "0 <= n <= 5000"
    ]
  },
  {
    id: 113,
    title: "Path Sum II",
    difficulty: "Medium",
    topics: "Tree / DFS",
    description: "<p>Return all root-to-leaf paths where each path's sum equals targetSum.</p>",
    testcases: [
      {
        input: "5 4 8 11 null 13 4 7 2 null null 5 1\n22",
        expected: "[[5,4,11,2],[5,8,4,5]]"
      }
    ],
    constraints: [
      "0 <= n <= 5000"
    ]
  },
  {
    id: 114,
    title: "Flatten Binary Tree to Linked List",
    difficulty: "Medium",
    topics: "Tree",
    description: "<p>Flatten the tree into a linked list in-place.</p>",
    testcases: [
      {
        input: "1 2 5 3 4 null 6",
        expected: "[1,null,2,null,3,null,4,null,5,null,6]"
      }
    ],
    constraints: [
      "0 <= n <= 2000"
    ]
  },
  {
    id: 115,
    title: "Distinct Subsequences",
    difficulty: "Hard",
    topics: "DP",
    description: "<p>Return the number of distinct subsequences of s which equals t.</p>",
    testcases: [
      {
        input: "rabbbit\nrabbit",
        expected: "3"
      }
    ],
    constraints: [
      "1 <= s.length <= 1000"
    ]
  },
  {
    id: 116,
    title: "Populating Next Right Pointers in Each Node",
    difficulty: "Medium",
    topics: "Tree",
    description: "<p>Populate each next pointer to point to its next right node.</p>",
    testcases: [
      {
        input: "1 2 3 4 5 6 7",
        expected: "[1,#,2,3,#,4,5,6,7,#]"
      }
    ],
    constraints: [
      "0 <= n <= 4096"
    ]
  },
  {
    id: 117,
    title: "Populating Next Right Pointers in Each Node II",
    difficulty: "Medium",
    topics: "Tree",
    description: "<p>Populate each next pointer in a general binary tree.</p>",
    testcases: [
      {
        input: "1 2 3 4 5 null 7",
        expected: "[1,#,2,3,#,4,5,7,#]"
      }
    ],
    constraints: [
      "0 <= n <= 6000"
    ]
  },
  {
    id: 118,
    title: "Pascal\u2019s Triangle",
    difficulty: "Easy",
    topics: "Array",
    description: "<p>Return the first numRows of Pascal's triangle.</p>",
    testcases: [
      {
        input: "5",
        expected: "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]"
      }
    ],
    constraints: [
      "1 <= numRows <= 30"
    ]
  },
  {
    id: 119,
    title: "Pascal\u2019s Triangle II",
    difficulty: "Easy",
    topics: "Array",
    description: "<p>Return the rowIndex-th row of the Pascal's triangle.</p>",
    testcases: [
      {
        input: "3",
        expected: "[1,3,3,1]"
      }
    ],
    constraints: [
      "0 <= rowIndex <= 33"
    ]
  },
  {
    id: 120,
    title: "Triangle",
    difficulty: "Medium",
    topics: "DP",
    description: "<p>Return the minimum path sum from top to bottom.</p>",
    testcases: [
      {
        input: "[[2],[3,4],[6,5,7],[4,1,8,3]]",
        expected: "11"
      }
    ],
    constraints: [
      "1 <= n <= 200"
    ]
  },
  {
    id: 121,
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    topics: "Array / DP",
    description: "<p>Return the maximum profit you can achieve from this transaction.</p>",
    testcases: [
      {
        input: "7 1 5 3 6 4",
        expected: "5"
      }
    ],
    constraints: [
      "1 <= n <= 10^5"
    ]
  },
  {
    id: 122,
    title: "Best Time to Buy and Sell Stock II",
    difficulty: "Medium",
    topics: "Array / Greedy",
    description: "<p>Return the maximum profit you can achieve.</p>",
    testcases: [
      {
        input: "7 1 5 3 6 4",
        expected: "7"
      }
    ],
    constraints: [
      "1 <= n <= 3 * 10^4"
    ]
  },
  {
    id: 123,
    title: "Best Time to Buy and Sell Stock III",
    difficulty: "Hard",
    topics: "DP",
    description: "<p>Return the maximum profit you can achieve (max 2 transactions).</p>",
    testcases: [
      {
        input: "3 3 5 0 0 3 1 4",
        expected: "6"
      }
    ],
    constraints: [
      "1 <= n <= 10^5"
    ]
  },
  {
    id: 124,
    title: "Binary Tree Maximum Path Sum",
    difficulty: "Hard",
    topics: "Tree / DFS",
    description: "<p>Return the maximum path sum of any non-empty path.</p>",
    testcases: [
      {
        input: "1 2 3",
        expected: "6"
      }
    ],
    constraints: [
      "1 <= n <= 3 * 10^4"
    ]
  },
  {
    id: 125,
    title: "Valid Palindrome",
    difficulty: "Easy",
    topics: "String",
    description: "<p>Check if it is a palindrome, considering only alphanumeric characters and ignoring cases.</p>",
    testcases: [
      {
        input: "A man, a plan, a canal: Panama",
        expected: "true"
      }
    ],
    constraints: [
      "1 <= s.length <= 2 * 10^5"
    ]
  },
  {
    id: 126,
    title: "Word Ladder II",
    difficulty: "Hard",
    topics: "Graph / BFS",
    description: "<p>Return all the shortest transformation sequences from beginWord to endWord.</p>",
    testcases: [
      {
        input: "hit\ncog\nhot dot dog lot log cog",
        expected: "[[\"hit\",\"hot\",\"dot\",\"dog\",\"cog\"],[\"hit\",\"hot\",\"lot\",\"log\",\"cog\"]]"
      }
    ],
    constraints: [
      "1 <= beginWord.length <= 5"
    ]
  },
  {
    id: 127,
    title: "Word Ladder",
    difficulty: "Hard",
    topics: "Graph / BFS",
    description: "<p>Return the number of words in the shortest transformation sequence.</p>",
    testcases: [
      {
        input: "hit\ncog\nhot dot dog lot log cog",
        expected: "5"
      }
    ],
    constraints: [
      "1 <= beginWord.length <= 5"
    ]
  },
  {
    id: 128,
    title: "Longest Consecutive Sequence",
    difficulty: "Medium",
    topics: "Array / Hash Table",
    description: "<p>Return the length of the longest consecutive elements sequence.</p>",
    testcases: [
      {
        input: "100 4 200 1 3 2",
        expected: "4"
      }
    ],
    constraints: [
      "0 <= n <= 10^5"
    ]
  },
  {
    id: 129,
    title: "Sum Root to Leaf Numbers",
    difficulty: "Medium",
    topics: "Tree",
    description: "<p>Return the total sum of all root-to-leaf numbers.</p>",
    testcases: [
      {
        input: "1 2 3",
        expected: "25"
      }
    ],
    constraints: [
      "1 <= n <= 1000"
    ]
  },
  {
    id: 130,
    title: "Surrounded Regions",
    difficulty: "Medium",
    topics: "Matrix / DFS",
    description: "<p>Capture all regions that are 4-directionally surrounded by 'X'.</p>",
    testcases: [
      {
        input: "[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"O\",\"X\"],[\"X\",\"X\",\"O\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]",
        expected: "[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]"
      }
    ],
    constraints: [
      "m, n <= 200"
    ]
  },
  {
    id: 131,
    title: "Palindrome Partitioning",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Return all possible palindrome partitioning of s.</p>",
    testcases: [
      {
        input: "aab",
        expected: "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]"
      }
    ],
    constraints: [
      "1 <= s.length <= 16"
    ]
  },
  {
    id: 132,
    title: "Palindrome Partitioning II",
    difficulty: "Hard",
    topics: "DP",
    description: "<p>Return the minimum cuts needed for a palindrome partitioning of s.</p>",
    testcases: [
      {
        input: "aab",
        expected: "1"
      }
    ],
    constraints: [
      "1 <= s.length <= 2000"
    ]
  },
  {
    id: 133,
    title: "Clone Graph",
    difficulty: "Medium",
    topics: "Graph / DFS",
    description: "<p>Return a deep copy (clone) of the connected undirected graph.</p>",
    testcases: [
      {
        input: "[[2,4],[1,3],[2,4],[1,3]]",
        expected: "[[2,4],[1,3],[2,4],[1,3]]"
      }
    ],
    constraints: [
      "0 <= n <= 100"
    ]
  },
  {
    id: 134,
    title: "Gas Station",
    difficulty: "Medium",
    topics: "Array / Greedy",
    description: "<p>Return the starting gas station's index if you can travel around the circuit once.</p>",
    testcases: [
      {
        input: "1 2 3 4 5\n3 4 5 1 2",
        expected: "3"
      }
    ],
    constraints: [
      "1 <= n <= 10^5"
    ]
  },
  {
    id: 135,
    title: "Candy",
    difficulty: "Hard",
    topics: "Array / Greedy",
    description: "<p>Return the minimum number of candies you need to have to distribute to the children.</p>",
    testcases: [
      {
        input: "1 0 2",
        expected: "5"
      }
    ],
    constraints: [
      "1 <= n <= 2 * 10^4"
    ]
  },
  {
    id: 136,
    title: "Single Number",
    difficulty: "Easy",
    topics: "Array / Bit Manipulation",
    description: "<p>Find that single one.</p>",
    testcases: [
      {
        input: "2 2 1",
        expected: "1"
      }
    ],
    constraints: [
      "1 <= n <= 3 * 10^4"
    ]
  },
  {
    id: 137,
    title: "Single Number II",
    difficulty: "Medium",
    topics: "Array / Bit Manipulation",
    description: "<p>Find the element that appears exactly once.</p>",
    testcases: [
      {
        input: "2 2 3 2",
        expected: "3"
      }
    ],
    constraints: [
      "1 <= n <= 3 * 10^4"
    ]
  },
  {
    id: 138,
    title: "Copy List with Random Pointer",
    difficulty: "Medium",
    topics: "Linked List / Hash Table",
    description: "<p>Construct a deep copy of the list.</p>",
    testcases: [
      {
        input: "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
        expected: "[[7,null],[13,0],[11,4],[10,2],[1,0]]"
      }
    ],
    constraints: [
      "0 <= n <= 1000"
    ]
  },
  {
    id: 139,
    title: "Word Break",
    difficulty: "Medium",
    topics: "DP",
    description: "<p>Return true if s can be segmented into a space-separated sequence of one or more dictionary words.</p>",
    testcases: [
      {
        input: "leetcode\nleet code",
        expected: "true"
      }
    ],
    constraints: [
      "1 <= s.length <= 300"
    ]
  },
  {
    id: 140,
    title: "Word Break II",
    difficulty: "Hard",
    topics: "DP / Backtracking",
    description: "<p>Return all such possible sentences.</p>",
    testcases: [
      {
        input: "catsanddog\ncat cats and sand dog",
        expected: "[\"cats and dog\",\"cat sand dog\"]"
      }
    ],
    constraints: [
      "1 <= s.length <= 20"
    ]
  },
  {
    id: 141,
    title: "Linked List Cycle",
    difficulty: "Easy",
    topics: "Linked List / Two Pointers",
    description: "<p>Determine if the linked list has a cycle in it.</p>",
    testcases: [
      {
        input: "3 2 0 -4\n1",
        expected: "true"
      }
    ],
    constraints: [
      "0 <= n <= 10^4"
    ]
  },
  {
    id: 142,
    title: "Linked List Cycle II",
    difficulty: "Medium",
    topics: "Linked List / Two Pointers",
    description: "<p>Return the node where the cycle begins.</p>",
    testcases: [
      {
        input: "3 2 0 -4\n1",
        expected: "tail connects to node index 1"
      }
    ],
    constraints: [
      "0 <= n <= 10^4"
    ]
  },
  {
    id: 143,
    title: "Reorder List",
    difficulty: "Medium",
    topics: "Linked List",
    description: "<p>Reorder the list to L0 \u2192 Ln \u2192 L1 \u2192 Ln-1 \u2192 L2 \u2192 Ln-2 \u2192 \u2026</p>",
    testcases: [
      {
        input: "1 2 3 4",
        expected: "1 4 2 3"
      }
    ],
    constraints: [
      "1 <= n <= 5 * 10^4"
    ]
  },
  {
    id: 144,
    title: "Binary Tree Preorder Traversal",
    difficulty: "Easy",
    topics: "Tree",
    description: "<p>Return the preorder traversal of its nodes' values.</p>",
    testcases: [
      {
        input: "1 null 2 3",
        expected: "[1,2,3]"
      }
    ],
    constraints: [
      "0 <= n <= 100"
    ]
  },
  {
    id: 145,
    title: "Binary Tree Postorder Traversal",
    difficulty: "Easy",
    topics: "Tree",
    description: "<p>Return the postorder traversal of its nodes' values.</p>",
    testcases: [
      {
        input: "1 null 2 3",
        expected: "[3,2,1]"
      }
    ],
    constraints: [
      "0 <= n <= 100"
    ]
  },
  {
    id: 146,
    title: "LRU Cache",
    difficulty: "Medium",
    topics: "Design / Hash Table",
    description: "<p>Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.</p>",
    testcases: [
      {
        input: "LRUCache 2, put 1 1, put 2 2, get 1, put 3 3, get 2",
        expected: "null, null, null, 1, null, -1"
      }
    ],
    constraints: [
      "1 <= capacity <= 3000"
    ]
  },
  {
    id: 147,
    title: "Insertion Sort List",
    difficulty: "Medium",
    topics: "Linked List / Sorting",
    description: "<p>Sort a linked list using insertion sort.</p>",
    testcases: [
      {
        input: "4 2 1 3",
        expected: "1 2 3 4"
      }
    ],
    constraints: [
      "1 <= n <= 5000"
    ]
  },
  {
    id: 148,
    title: "Sort List",
    difficulty: "Medium",
    topics: "Linked List / Merge Sort",
    description: "<p>Sort the linked list in O(n log n) time and O(1) memory.</p>",
    testcases: [
      {
        input: "4 2 1 3",
        expected: "1 2 3 4"
      }
    ],
    constraints: [
      "0 <= n <= 5 * 10^4"
    ]
  },
  {
    id: 149,
    title: "Max Points on a Line",
    difficulty: "Hard",
    topics: "Geometry / Hash Table",
    description: "<p>Return the maximum number of points that lie on the same straight line.</p>",
    testcases: [
      {
        input: "[[1,1],[2,2],[3,3]]",
        expected: "3"
      }
    ],
    constraints: [
      "1 <= n <= 300"
    ]
  },
  {
    id: 150,
    title: "Evaluate Reverse Polish Notation",
    difficulty: "Medium",
    topics: "Stack",
    description: "<p>Evaluate the value of an arithmetic expression in Reverse Polish Notation.</p>",
    testcases: [
      {
        input: "2 1 + 3 *",
        expected: "9"
      }
    ],
    constraints: [
      "1 <= n <= 10^4"
    ]
  },
{
    id: 151,
    title: "Dynamic Window Median Stabilization",
    difficulty: "Hard",
    topics: "Array, Graph",
    description: "<p>Solve the problem <strong>Dynamic Window Median Stabilization</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 152,
    title: "Minimum Circular Shift Cost",
    difficulty: "Easy",
    topics: "String, Tree",
    description: "<p>Solve the problem <strong>Minimum Circular Shift Cost</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 153,
    title: "K-Limited Peak Reduction",
    difficulty: "Medium",
    topics: "DP, Backtracking",
    description: "<p>Solve the problem <strong>K-Limited Peak Reduction</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 154,
    title: "Balanced Segment Partition Count",
    difficulty: "Easy",
    topics: "Graph, Greedy",
    description: "<p>Solve the problem <strong>Balanced Segment Partition Count</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 155,
    title: "Maximum XOR Path in Grid",
    difficulty: "Medium",
    topics: "Tree, Math",
    description: "<p>Solve the problem <strong>Maximum XOR Path in Grid</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 156,
    title: "Frequency-Constrained Subarray Length",
    difficulty: "Hard",
    topics: "Backtracking, Hash Table",
    description: "<p>Solve the problem <strong>Frequency-Constrained Subarray Length</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 157,
    title: "Adaptive Prefix Compression Score",
    difficulty: "Medium",
    topics: "Greedy, Binary Search",
    description: "<p>Solve the problem <strong>Adaptive Prefix Compression Score</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 158,
    title: "Minimum Swap Parity Alignment",
    difficulty: "Easy",
    topics: "Math, Sliding Window",
    description: "<p>Solve the problem <strong>Minimum Swap Parity Alignment</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 159,
    title: "Range Update Consistency Check",
    difficulty: "Medium",
    topics: "Hash Table, Stack",
    description: "<p>Solve the problem <strong>Range Update Consistency Check</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 160,
    title: "Weighted Interval Chain Optimization",
    difficulty: "Easy",
    topics: "Binary Search, Queue",
    description: "<p>Solve the problem <strong>Weighted Interval Chain Optimization</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 161,
    title: "Multi-Source BFS Time Spread",
    difficulty: "Hard",
    topics: "Sliding Window, Heap",
    description: "<p>Solve the problem <strong>Multi-Source BFS Time Spread</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 162,
    title: "Longest Alternating Difference Subsequence",
    difficulty: "Easy",
    topics: "Stack, Matrix",
    description: "<p>Solve the problem <strong>Longest Alternating Difference Subsequence</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 163,
    title: "Minimum Cost Bit Flip Sequence",
    difficulty: "Medium",
    topics: "Queue, Array",
    description: "<p>Solve the problem <strong>Minimum Cost Bit Flip Sequence</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 164,
    title: "K-Step Reachability in Directed Graph",
    difficulty: "Easy",
    topics: "Heap, String",
    description: "<p>Solve the problem <strong>K-Step Reachability in Directed Graph</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 165,
    title: "Maximum Product Subtree Split",
    difficulty: "Medium",
    topics: "Matrix, DP",
    description: "<p>Solve the problem <strong>Maximum Product Subtree Split</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 166,
    title: "Sliding Window Distinct Power Sum",
    difficulty: "Hard",
    topics: "Array, Graph",
    description: "<p>Solve the problem <strong>Sliding Window Distinct Power Sum</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 167,
    title: "Minimum Merge Operations to Palindrome",
    difficulty: "Medium",
    topics: "String, Tree",
    description: "<p>Solve the problem <strong>Minimum Merge Operations to Palindrome</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 168,
    title: "Graph Edge Reversal Minimization",
    difficulty: "Easy",
    topics: "DP, Backtracking",
    description: "<p>Solve the problem <strong>Graph Edge Reversal Minimization</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 169,
    title: "K-Partition Equal XOR Groups",
    difficulty: "Medium",
    topics: "Graph, Greedy",
    description: "<p>Solve the problem <strong>K-Partition Equal XOR Groups</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 170,
    title: "Maximum Stable Increasing Segments",
    difficulty: "Easy",
    topics: "Tree, Math",
    description: "<p>Solve the problem <strong>Maximum Stable Increasing Segments</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 171,
    title: "Circular Array Jump Game Variant",
    difficulty: "Hard",
    topics: "Backtracking, Hash Table",
    description: "<p>Solve the problem <strong>Circular Array Jump Game Variant</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 172,
    title: "Minimum Cost Path with Teleports",
    difficulty: "Easy",
    topics: "Greedy, Binary Search",
    description: "<p>Solve the problem <strong>Minimum Cost Path with Teleports</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 173,
    title: "String Reordering with Distance Constraint",
    difficulty: "Medium",
    topics: "Math, Sliding Window",
    description: "<p>Solve the problem <strong>String Reordering with Distance Constraint</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 174,
    title: "Range GCD Query Optimization",
    difficulty: "Easy",
    topics: "Hash Table, Stack",
    description: "<p>Solve the problem <strong>Range GCD Query Optimization</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 175,
    title: "Maximum Non-Overlapping XOR Subarrays",
    difficulty: "Medium",
    topics: "Binary Search, Queue",
    description: "<p>Solve the problem <strong>Maximum Non-Overlapping XOR Subarrays</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 176,
    title: "K-Limited Decreasing Transformations",
    difficulty: "Hard",
    topics: "Sliding Window, Heap",
    description: "<p>Solve the problem <strong>K-Limited Decreasing Transformations</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 177,
    title: "Binary Tree Level Sum Rebalancing",
    difficulty: "Medium",
    topics: "Stack, Matrix",
    description: "<p>Solve the problem <strong>Binary Tree Level Sum Rebalancing</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 178,
    title: "Minimum Deletions for K-Frequency Uniformity",
    difficulty: "Easy",
    topics: "Queue, Array",
    description: "<p>Solve the problem <strong>Minimum Deletions for K-Frequency Uniformity</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 179,
    title: "Subarray Beauty Score Maximization",
    difficulty: "Medium",
    topics: "Heap, String",
    description: "<p>Solve the problem <strong>Subarray Beauty Score Maximization</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 180,
    title: "Grid Path with Maximum Minimum Value",
    difficulty: "Easy",
    topics: "Matrix, DP",
    description: "<p>Solve the problem <strong>Grid Path with Maximum Minimum Value</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 181,
    title: "Dynamic Connectivity Query System",
    difficulty: "Hard",
    topics: "Array, Graph",
    description: "<p>Solve the problem <strong>Dynamic Connectivity Query System</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 182,
    title: "K-Flip Binary String Optimization",
    difficulty: "Easy",
    topics: "String, Tree",
    description: "<p>Solve the problem <strong>K-Flip Binary String Optimization</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 183,
    title: "Minimum Time to Equalize Array",
    difficulty: "Medium",
    topics: "DP, Backtracking",
    description: "<p>Solve the problem <strong>Minimum Time to Equalize Array</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 184,
    title: "Weighted Graph Cycle Profit Detection",
    difficulty: "Easy",
    topics: "Graph, Greedy",
    description: "<p>Solve the problem <strong>Weighted Graph Cycle Profit Detection</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 185,
    title: "Prefix-Suffix Match Count",
    difficulty: "Medium",
    topics: "Tree, Math",
    description: "<p>Solve the problem <strong>Prefix-Suffix Match Count</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 186,
    title: "Maximum Sum of Disjoint Paths",
    difficulty: "Hard",
    topics: "Backtracking, Hash Table",
    description: "<p>Solve the problem <strong>Maximum Sum of Disjoint Paths</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 187,
    title: "K-Window Maximum Difference Minimization",
    difficulty: "Medium",
    topics: "Greedy, Binary Search",
    description: "<p>Solve the problem <strong>K-Window Maximum Difference Minimization</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 188,
    title: "String Pattern Compression Length",
    difficulty: "Easy",
    topics: "Math, Sliding Window",
    description: "<p>Solve the problem <strong>String Pattern Compression Length</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 189,
    title: "Minimum Edge Cut for Balanced Graph",
    difficulty: "Medium",
    topics: "Hash Table, Stack",
    description: "<p>Solve the problem <strong>Minimum Edge Cut for Balanced Graph</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 190,
    title: "Multi-Array Intersection Strength",
    difficulty: "Easy",
    topics: "Binary Search, Queue",
    description: "<p>Solve the problem <strong>Multi-Array Intersection Strength</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 191,
    title: "Maximum Alternating Subarray Sum II",
    difficulty: "Hard",
    topics: "Sliding Window, Heap",
    description: "<p>Solve the problem <strong>Maximum Alternating Subarray Sum II</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 192,
    title: "K-Group Rotation Minimization",
    difficulty: "Easy",
    topics: "Stack, Matrix",
    description: "<p>Solve the problem <strong>K-Group Rotation Minimization</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 193,
    title: "Shortest Path with Color Constraints",
    difficulty: "Medium",
    topics: "Queue, Array",
    description: "<p>Solve the problem <strong>Shortest Path with Color Constraints</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 194,
    title: "Array Equalization with Modulo Operations",
    difficulty: "Easy",
    topics: "Heap, String",
    description: "<p>Solve the problem <strong>Array Equalization with Modulo Operations</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 195,
    title: "Maximum Bitwise AND Subset",
    difficulty: "Medium",
    topics: "Matrix, DP",
    description: "<p>Solve the problem <strong>Maximum Bitwise AND Subset</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 196,
    title: "K-Removal Increasing Sequence Length",
    difficulty: "Hard",
    topics: "Array, Graph",
    description: "<p>Solve the problem <strong>K-Removal Increasing Sequence Length</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 197,
    title: "Minimum Cost Tree Pruning",
    difficulty: "Medium",
    topics: "String, Tree",
    description: "<p>Solve the problem <strong>Minimum Cost Tree Pruning</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 198,
    title: "Grid Island Value Aggregation",
    difficulty: "Easy",
    topics: "DP, Backtracking",
    description: "<p>Solve the problem <strong>Grid Island Value Aggregation</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 199,
    title: "Longest Substring with K Changes",
    difficulty: "Medium",
    topics: "Graph, Greedy",
    description: "<p>Solve the problem <strong>Longest Substring with K Changes</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 200,
    title: "Directed Graph Safe Node Detection",
    difficulty: "Easy",
    topics: "Tree, Math",
    description: "<p>Solve the problem <strong>Directed Graph Safe Node Detection</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 201,
    title: "K-Step Fibonacci Path Count",
    difficulty: "Hard",
    topics: "Backtracking, Hash Table",
    description: "<p>Solve the problem <strong>K-Step Fibonacci Path Count</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 202,
    title: "Minimum Operations to Zero Matrix",
    difficulty: "Easy",
    topics: "Greedy, Binary Search",
    description: "<p>Solve the problem <strong>Minimum Operations to Zero Matrix</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 203,
    title: "Maximum Weighted Independent Set Variant",
    difficulty: "Medium",
    topics: "Math, Sliding Window",
    description: "<p>Solve the problem <strong>Maximum Weighted Independent Set Variant</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 204,
    title: "Range Frequency Mode Query",
    difficulty: "Easy",
    topics: "Hash Table, Stack",
    description: "<p>Solve the problem <strong>Range Frequency Mode Query</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 205,
    title: "K-Distance Closest Pair Sum",
    difficulty: "Medium",
    topics: "Binary Search, Queue",
    description: "<p>Solve the problem <strong>K-Distance Closest Pair Sum</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 206,
    title: "Binary Search Tree Merge Cost",
    difficulty: "Hard",
    topics: "Sliding Window, Heap",
    description: "<p>Solve the problem <strong>Binary Search Tree Merge Cost</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 207,
    title: "Maximum Consecutive Gap with K Inserts",
    difficulty: "Medium",
    topics: "Stack, Matrix",
    description: "<p>Solve the problem <strong>Maximum Consecutive Gap with K Inserts</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 208,
    title: "Graph Component Value Balancing",
    difficulty: "Easy",
    topics: "Queue, Array",
    description: "<p>Solve the problem <strong>Graph Component Value Balancing</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 209,
    title: "Minimum Adjacent Swaps for Grouping",
    difficulty: "Medium",
    topics: "Heap, String",
    description: "<p>Solve the problem <strong>Minimum Adjacent Swaps for Grouping</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 210,
    title: "Subsequence Score Maximization",
    difficulty: "Easy",
    topics: "Matrix, DP",
    description: "<p>Solve the problem <strong>Subsequence Score Maximization</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 211,
    title: "K-Limited Inversion Reduction",
    difficulty: "Hard",
    topics: "Array, Graph",
    description: "<p>Solve the problem <strong>K-Limited Inversion Reduction</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 212,
    title: "Maximum Rectangle with Constraints",
    difficulty: "Easy",
    topics: "String, Tree",
    description: "<p>Solve the problem <strong>Maximum Rectangle with Constraints</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 213,
    title: "Multi-Query Range Sum Adjustment",
    difficulty: "Medium",
    topics: "DP, Backtracking",
    description: "<p>Solve the problem <strong>Multi-Query Range Sum Adjustment</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 214,
    title: "String Split with Unique Counts",
    difficulty: "Easy",
    topics: "Graph, Greedy",
    description: "<p>Solve the problem <strong>String Split with Unique Counts</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 215,
    title: "Minimum Path Cost with Obstacles II",
    difficulty: "Medium",
    topics: "Tree, Math",
    description: "<p>Solve the problem <strong>Minimum Path Cost with Obstacles II</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 216,
    title: "K-Partition Minimum Difference",
    difficulty: "Hard",
    topics: "Backtracking, Hash Table",
    description: "<p>Solve the problem <strong>K-Partition Minimum Difference</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 217,
    title: "Maximum Circular Subarray Product",
    difficulty: "Medium",
    topics: "Greedy, Binary Search",
    description: "<p>Solve the problem <strong>Maximum Circular Subarray Product</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 218,
    title: "Graph Path XOR Queries",
    difficulty: "Easy",
    topics: "Math, Sliding Window",
    description: "<p>Solve the problem <strong>Graph Path XOR Queries</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 219,
    title: "Minimum Replacement for Sorted Order",
    difficulty: "Medium",
    topics: "Hash Table, Stack",
    description: "<p>Solve the problem <strong>Minimum Replacement for Sorted Order</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 220,
    title: "Sliding Window Median Deviation",
    difficulty: "Easy",
    topics: "Binary Search, Queue",
    description: "<p>Solve the problem <strong>Sliding Window Median Deviation</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 221,
    title: "K-Coloring Graph Minimization",
    difficulty: "Hard",
    topics: "Sliding Window, Heap",
    description: "<p>Solve the problem <strong>K-Coloring Graph Minimization</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 222,
    title: "Maximum Sum After K Negations II",
    difficulty: "Easy",
    topics: "Stack, Matrix",
    description: "<p>Solve the problem <strong>Maximum Sum After K Negations II</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 223,
    title: "Range Bitwise OR Minimization",
    difficulty: "Medium",
    topics: "Queue, Array",
    description: "<p>Solve the problem <strong>Range Bitwise OR Minimization</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 224,
    title: "Longest Valid Parentheses Variant",
    difficulty: "Easy",
    topics: "Heap, String",
    description: "<p>Solve the problem <strong>Longest Valid Parentheses Variant</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 225,
    title: "Minimum Cost to Connect Points II",
    difficulty: "Medium",
    topics: "Matrix, DP",
    description: "<p>Solve the problem <strong>Minimum Cost to Connect Points II</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 226,
    title: "K-Step Array Transformation Stability",
    difficulty: "Hard",
    topics: "Array, Graph",
    description: "<p>Solve the problem <strong>K-Step Array Transformation Stability</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 227,
    title: "Maximum Frequency After Operations",
    difficulty: "Medium",
    topics: "String, Tree",
    description: "<p>Solve the problem <strong>Maximum Frequency After Operations</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 228,
    title: "Graph Diameter Reduction",
    difficulty: "Easy",
    topics: "DP, Backtracking",
    description: "<p>Solve the problem <strong>Graph Diameter Reduction</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 229,
    title: "Minimum Window Subsequence Variant",
    difficulty: "Medium",
    topics: "Graph, Greedy",
    description: "<p>Solve the problem <strong>Minimum Window Subsequence Variant</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 230,
    title: "K-Constrained Subtree Sum",
    difficulty: "Easy",
    topics: "Tree, Math",
    description: "<p>Solve the problem <strong>K-Constrained Subtree Sum</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 231,
    title: "Maximum Sum Path with Skips",
    difficulty: "Hard",
    topics: "Backtracking, Hash Table",
    description: "<p>Solve the problem <strong>Maximum Sum Path with Skips</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 232,
    title: "Binary Matrix Flip Optimization",
    difficulty: "Easy",
    topics: "Greedy, Binary Search",
    description: "<p>Solve the problem <strong>Binary Matrix Flip Optimization</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 233,
    title: "Minimum Time with Parallel Tasks",
    difficulty: "Medium",
    topics: "Math, Sliding Window",
    description: "<p>Solve the problem <strong>Minimum Time with Parallel Tasks</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 234,
    title: "K-Limited String Palindromization",
    difficulty: "Easy",
    topics: "Hash Table, Stack",
    description: "<p>Solve the problem <strong>K-Limited String Palindromization</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 235,
    title: "Maximum Distinct Subarray Score",
    difficulty: "Medium",
    topics: "Binary Search, Queue",
    description: "<p>Solve the problem <strong>Maximum Distinct Subarray Score</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 236,
    title: "Range Update Maximum Query",
    difficulty: "Hard",
    topics: "Sliding Window, Heap",
    description: "<p>Solve the problem <strong>Range Update Maximum Query</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 237,
    title: "Graph Edge Weight Normalization",
    difficulty: "Medium",
    topics: "Stack, Matrix",
    description: "<p>Solve the problem <strong>Graph Edge Weight Normalization</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 238,
    title: "Minimum Cost to Equalize Strings",
    difficulty: "Easy",
    topics: "Queue, Array",
    description: "<p>Solve the problem <strong>Minimum Cost to Equalize Strings</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 239,
    title: "K-Jump Game Optimization",
    difficulty: "Medium",
    topics: "Heap, String",
    description: "<p>Solve the problem <strong>K-Jump Game Optimization</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 240,
    title: "Maximum Pair Sum with Difference Constraint",
    difficulty: "Easy",
    topics: "Matrix, DP",
    description: "<p>Solve the problem <strong>Maximum Pair Sum with Difference Constraint</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 241,
    title: "Dynamic Interval Merge Queries",
    difficulty: "Hard",
    topics: "Array, Graph",
    description: "<p>Solve the problem <strong>Dynamic Interval Merge Queries</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 242,
    title: "Minimum Cost to Break Cycles",
    difficulty: "Easy",
    topics: "String, Tree",
    description: "<p>Solve the problem <strong>Minimum Cost to Break Cycles</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 243,
    title: "K-Alternating Array Transform",
    difficulty: "Medium",
    topics: "DP, Backtracking",
    description: "<p>Solve the problem <strong>K-Alternating Array Transform</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 244,
    title: "Maximum Sum of K Non-Overlapping Subarrays",
    difficulty: "Easy",
    topics: "Graph, Greedy",
    description: "<p>Solve the problem <strong>Maximum Sum of K Non-Overlapping Subarrays</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 245,
    title: "Graph Reachability with Constraints",
    difficulty: "Medium",
    topics: "Tree, Math",
    description: "<p>Solve the problem <strong>Graph Reachability with Constraints</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 246,
    title: "Minimum Insertions for Balanced String",
    difficulty: "Hard",
    topics: "Backtracking, Hash Table",
    description: "<p>Solve the problem <strong>Minimum Insertions for Balanced String</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 247,
    title: "K-Limited Maximum Difference Partition",
    difficulty: "Medium",
    topics: "Greedy, Binary Search",
    description: "<p>Solve the problem <strong>K-Limited Maximum Difference Partition</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 248,
    title: "Maximum Product of Disjoint Subtrees",
    difficulty: "Easy",
    topics: "Math, Sliding Window",
    description: "<p>Solve the problem <strong>Maximum Product of Disjoint Subtrees</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 249,
    title: "Range Median Query System",
    difficulty: "Medium",
    topics: "Hash Table, Stack",
    description: "<p>Solve the problem <strong>Range Median Query System</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  },
  {
    id: 250,
    title: "K-Operation Array Stabilization",
    difficulty: "Easy",
    topics: "Binary Search, Queue",
    description: "<p>Solve the problem <strong>K-Operation Array Stabilization</strong> by finding the optimal solution given the constraints.</p><p>Input consists of specific parameters and output should be the requested result.</p>",
    testcases: [
      {
        input: "1 2 3\n10",
        expected: "25"
      },
      {
        input: "5 5 5\n5",
        expected: "10"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "0 <= k <= 1000"
    ]
  }
];
