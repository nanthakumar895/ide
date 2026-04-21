import { Problem } from '../types';

export const MOCK_PROBLEMS: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    topics: "Array, Hash Table",
    description: "<p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p><p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>",
    testcases: [{ input: "2 7 11 15\n9", expected: "0 1" }],
    constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9"]
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    topics: "Linked List",
    description: "<p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.</p>",
    testcases: [{ input: "2 4 3\n5 6 4", expected: "7 0 8" }],
    constraints: ["The number of nodes in each linked list is in the range [1, 100].", "0 <= Node.val <= 9"]
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    topics: "String, Sliding Window",
    description: "<p>Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.</p>",
    testcases: [{ input: "abcabcbb", expected: "3" }],
    constraints: ["0 <= s.length <= 5 * 10^4", "s consists of English letters, digits, symbols and spaces."]
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    topics: "Array, Binary Search",
    description: "<p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.</p>",
    testcases: [{ input: "1 3\n2", expected: "2.00000" }],
    constraints: ["nums1.length == m", "nums2.length == n", "0 <= m, n <= 1000"]
  },
  {
    id: 5,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    topics: "String, DP",
    description: "<p>Given a string <code>s</code>, return <em>the longest palindromic substring</em> in <code>s</code>.</p>",
    testcases: [{ input: "babad", expected: "bab" }],
    constraints: ["1 <= s.length <= 1000", "s consists of only digits and English letters."]
  },
  {
    id: 6,
    title: "Zigzag Conversion",
    difficulty: "Medium",
    topics: "String",
    description: "<p>The string <code>\"PAYPALISHIRING\"</code> is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)</p>",
    testcases: [{ input: "PAYPALISHIRING\n3", expected: "PAHNAPLSIIGYIR" }],
    constraints: ["1 <= s.length <= 1000", "1 <= numRows <= 1000"]
  },
  {
    id: 7,
    title: "Reverse Integer",
    difficulty: "Medium",
    topics: "Math",
    description: "<p>Given a signed 32-bit integer <code>x</code>, return <code>x</code> with its digits reversed. If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range <code>[-2^31, 2^31 - 1]</code>, then return <code>0</code>.</p>",
    testcases: [{ input: "123", expected: "321" }],
    constraints: ["-2^31 <= x <= 2^31 - 1"]
  },
  {
    id: 8,
    title: "String to Integer (atoi)",
    difficulty: "Medium",
    topics: "String, Parsing",
    description: "<p>Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer (similar to C/C++'s <code>atoi</code> function).</p>",
    testcases: [{ input: "42", expected: "42" }],
    constraints: ["0 <= s.length <= 200", "s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'."]
  },
  {
    id: 9,
    title: "Palindrome Number",
    difficulty: "Easy",
    topics: "Math",
    description: "<p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a palindrome, and <code>false</code> otherwise.</p>",
    testcases: [{ input: "121", expected: "true" }],
    constraints: ["-2^31 <= x <= 2^31 - 1"]
  },
  {
    id: 10,
    title: "Regular Expression Matching",
    difficulty: "Hard",
    topics: "String, DP",
    description: "<p>Given an input string <code>s</code> and a pattern <code>p</code>, implement regular expression matching with support for <code>'.'</code> and <code>'*'</code> where:</p><ul><li><code>'.'</code> Matches any single character.</li><li><code>'*'</code> Matches zero or more of the preceding element.</li></ul>",
    testcases: [{ input: "aa\na*", expected: "true" }],
    constraints: ["1 <= s.length <= 20", "1 <= p.length <= 20"]
  },
  {
    id: 11,
    title: "Container With Most Water",
    difficulty: "Medium",
    topics: "Array, Two Pointers",
    description: "<p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p>",
    testcases: [{ input: "1 8 6 2 5 4 8 3 7", expected: "49" }],
    constraints: ["n == height.length", "2 <= n <= 10^5", "0 <= height[i] <= 10^4"]
  },
  {
    id: 12,
    title: "Integer to Roman",
    difficulty: "Medium",
    topics: "Math, String",
    description: "<p>Seven different symbols represent Roman numerals: <code>I</code>, <code>V</code>, <code>X</code>, <code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>.</p>",
    testcases: [{ input: "3749", expected: "MMMDCCXLIX" }],
    constraints: ["1 <= num <= 3999"]
  },
  {
    id: 13,
    title: "Roman to Integer",
    difficulty: "Easy",
    topics: "Math, String",
    description: "<p>Roman numerals are represented by seven different symbols: <code>I</code>, <code>V</code>, <code>X</code>, <code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>.</p>",
    testcases: [{ input: "LVIII", expected: "58" }],
    constraints: ["1 <= s.length <= 15", "s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')."]
  },
  {
    id: 14,
    title: "Longest Common Prefix",
    difficulty: "Easy",
    topics: "String",
    description: "<p>Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string <code>\"\"</code>.</p>",
    testcases: [{ input: "flower flow flight", expected: "fl" }],
    constraints: ["1 <= strs.length <= 200", "0 <= strs[i].length <= 200"]
  },
  {
    id: 15,
    title: "3Sum",
    difficulty: "Medium",
    topics: "Array, Two Pointers",
    description: "<p>Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.</p>",
    testcases: [{ input: "-1 0 1 2 -1 -4", expected: "[[-1,-1,2],[-1,0,1]]" }],
    constraints: ["3 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"]
  },
  {
    id: 16,
    title: "3Sum Closest",
    difficulty: "Medium",
    topics: "Array, Two Pointers",
    description: "<p>Given an integer array <code>nums</code> of length <code>n</code> and an integer <code>target</code>, find three integers in <code>nums</code> such that the sum is closest to <code>target</code>.</p>",
    testcases: [{ input: "-1 2 1 -4\n1", expected: "2" }],
    constraints: ["3 <= nums.length <= 500", "-1000 <= nums[i] <= 1000"]
  },
  {
    id: 17,
    title: "Letter Combinations of a Phone Number",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Given a string containing digits from <code>2-9</code> inclusive, return all possible letter combinations that the number could represent. Return the answer in <strong>any order</strong>.</p>",
    testcases: [{ input: "23", expected: "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]" }],
    constraints: ["0 <= digits.length <= 4", "digits[i] is a digit in the range ['2', '9']."]
  },
  {
    id: 18,
    title: "4Sum",
    difficulty: "Medium",
    topics: "Array, Two Pointers",
    description: "<p>Given an array <code>nums</code> of <code>n</code> integers, return an array of all the <strong>unique</strong> quadruplets <code>[nums[a], nums[b], nums[c], nums[d]]</code> such that <code>0 <= a, b, c, d < n</code> and <code>nums[a] + nums[b] + nums[c] + nums[d] == target</code>.</p>",
    testcases: [{ input: "1 0 -1 0 -2 2\n0", expected: "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]" }],
    constraints: ["1 <= nums.length <= 200", "-10^9 <= nums[i] <= 10^9"]
  },
  {
    id: 19,
    title: "Remove Nth Node From End of List",
    difficulty: "Medium",
    topics: "Linked List",
    description: "<p>Given the <code>head</code> of a linked list, remove the <code>n<sup>th</sup></code> node from the end of the list and return its head.</p>",
    testcases: [{ input: "1 2 3 4 5\n2", expected: "1 2 3 5" }],
    constraints: ["The number of nodes in the list is sz.", "1 <= sz <= 30", "0 <= Node.val <= 100"]
  },
  {
    id: 20,
    title: "Valid Parentheses",
    difficulty: "Easy",
    topics: "Stack",
    description: "<p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p>",
    testcases: [{ input: "()[]{}", expected: "true" }],
    constraints: ["1 <= s.length <= 10^4", "s consists of parentheses only '()[]{}'."]
  },
  {
    id: 21,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    topics: "Linked List",
    description: "<p>You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>. Merge the two lists in a one <strong>sorted</strong> list.</p>",
    testcases: [{ input: "1 2 4\n1 3 4", expected: "1 1 2 3 4 4" }],
    constraints: ["The number of nodes in both lists is in the range [0, 50].", "-100 <= Node.val <= 100"]
  },
  {
    id: 22,
    title: "Generate Parentheses",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Given <code>n</code> pairs of parentheses, write a function to <em>generate all combinations of well-formed parentheses</em>.</p>",
    testcases: [{ input: "3", expected: "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]" }],
    constraints: ["1 <= n <= 8"]
  },
  {
    id: 23,
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    topics: "Linked List, Heap",
    description: "<p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order. <em>Merge all the linked-lists into one sorted linked-list and return it.</em></p>",
    testcases: [{ input: "[[1,4,5],[1,3,4],[2,6]]", expected: "1 1 2 3 4 4 5 6" }],
    constraints: ["k == lists.length", "0 <= k <= 10^4", "0 <= lists[i].length <= 500"]
  },
  {
    id: 24,
    title: "Swap Nodes in Pairs",
    difficulty: "Medium",
    topics: "Linked List",
    description: "<p>Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)</p>",
    testcases: [{ input: "1 2 3 4", expected: "2 1 4 3" }],
    constraints: ["The number of nodes in the list is in the range [0, 100].", "0 <= Node.val <= 100"]
  },
  {
    id: 25,
    title: "Reverse Nodes in k-Group",
    difficulty: "Hard",
    topics: "Linked List",
    description: "<p>Given the <code>head</code> of a linked list, reverse the nodes of the list <code>k</code> at a time, and return the modified list.</p>",
    testcases: [{ input: "1 2 3 4 5\n2", expected: "2 1 4 3 5" }],
    constraints: ["The number of nodes in the list is n.", "1 <= k <= n <= 5000", "0 <= Node.val <= 1000"]
  },
  {
    id: 26,
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    topics: "Array, Two Pointers",
    description: "<p>Given an integer array <code>nums</code> sorted in <strong>non-decreasing order</strong>, remove the duplicates <strong>in-place</strong> such that each unique element appears only <strong>once</strong>.</p>",
    testcases: [{ input: "1 1 2", expected: "2, nums = [1,2,_]" }],
    constraints: ["1 <= nums.length <= 3 * 10^4", "-100 <= nums[i] <= 100"]
  },
  {
    id: 27,
    title: "Remove Element",
    difficulty: "Easy",
    topics: "Array, Two Pointers",
    description: "<p>Given an integer array <code>nums</code> and an integer <code>val</code>, remove all occurrences of <code>val</code> in <code>nums</code> <strong>in-place</strong>. The order of the elements may be changed.</p>",
    testcases: [{ input: "3 2 2 3\n3", expected: "2, nums = [2,2,_,_]" }],
    constraints: ["0 <= nums.length <= 100", "0 <= nums[i] <= 50", "0 <= val <= 100"]
  },
  {
    id: 28,
    title: "Find the Index of the First Occurrence in a String",
    difficulty: "Easy",
    topics: "String",
    description: "<p>Given two strings <code>needle</code> and <code>haystack</code>, return the index of the first occurrence of <code>needle</code> in <code>haystack</code>, or <code>-1</code> if <code>needle</code> is not part of <code>haystack</code>.</p>",
    testcases: [{ input: "sadbutsad\nsad", expected: "0" }],
    constraints: ["1 <= haystack.length, needle.length <= 10^4", "haystack and needle consist of only lowercase English characters."]
  },
  {
    id: 29,
    title: "Divide Two Integers",
    difficulty: "Medium",
    topics: "Math",
    description: "<p>Given two integers <code>dividend</code> and <code>divisor</code>, divide two integers without using multiplication, division, and mod operator.</p>",
    testcases: [{ input: "10\n3", expected: "3" }],
    constraints: ["-2^31 <= dividend, divisor <= 2^31 - 1", "divisor != 0"]
  },
  {
    id: 30,
    title: "Substring with Concatenation of All Words",
    difficulty: "Hard",
    topics: "String, Hash Table",
    description: "<p>You are given a string <code>s</code> and an array of strings <code>words</code>. All the strings of <code>words</code> are of <strong>the same length</strong>.</p>",
    testcases: [{ input: "barfoothefoobarman\nfoo bar", expected: "[0,9]" }],
    constraints: ["1 <= s.length <= 10^4", "1 <= words.length <= 5000", "1 <= words[i].length <= 30"]
  },
  {
    id: 31,
    title: "Next Permutation",
    difficulty: "Medium",
    topics: "Array",
    description: "<p>A <strong>permutation</strong> of an array of integers is an arrangement of its members into a sequence or linear order.</p>",
    testcases: [{ input: "1 2 3", expected: "1 3 2" }],
    constraints: ["1 <= nums.length <= 100", "0 <= nums[i] <= 100"]
  },
  {
    id: 32,
    title: "Longest Valid Parentheses",
    difficulty: "Hard",
    topics: "Stack, DP",
    description: "<p>Given a string containing just the characters <code>'('</code> and <code>')'</code>, return <em>the length of the longest valid (well-formed) parentheses substring</em>.</p>",
    testcases: [{ input: "(()", expected: "2" }],
    constraints: ["0 <= s.length <= 3 * 10^4", "s consists of '(' and ')'."]
  },
  {
    id: 33,
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    topics: "Array, Binary Search",
    description: "<p>There is an integer array <code>nums</code> sorted in ascending order (with <strong>distinct</strong> values).</p>",
    testcases: [{ input: "4 5 6 7 0 1 2\n0", expected: "4" }],
    constraints: ["1 <= nums.length <= 5000", "-10^4 <= nums[i] <= 10^4"]
  },
  {
    id: 34,
    title: "Find First and Last Position of Element in Sorted Array",
    difficulty: "Medium",
    topics: "Array, Binary Search",
    description: "<p>Given an array of integers <code>nums</code> sorted in non-decreasing order, find the starting and ending position of a given <code>target</code> value.</p>",
    testcases: [{ input: "5 7 7 8 8 10\n8", expected: "[3,4]" }],
    constraints: ["0 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9"]
  },
  {
    id: 35,
    title: "Search Insert Position",
    difficulty: "Easy",
    topics: "Array, Binary Search",
    description: "<p>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.</p>",
    testcases: [{ input: "1 3 5 6\n5", expected: "2" }],
    constraints: ["1 <= nums.length <= 10^4", "-10^4 <= nums[i] <= 10^4"]
  },
  {
    id: 36,
    title: "Valid Sudoku",
    difficulty: "Medium",
    topics: "Hash Table",
    description: "<p>Determine if a <code>9 x 9</code> Sudoku board is valid. Only the filled cells need to be validated according to the following rules:</p>",
    testcases: [{ input: "board data", expected: "true" }],
    constraints: ["board.length == 9", "board[i].length == 9", "board[i][j] is a digit 1-9 or '.'."]
  },
  {
    id: 37,
    title: "Sudoku Solver",
    difficulty: "Hard",
    topics: "Backtracking",
    description: "<p>Write a program to solve a Sudoku puzzle by filling the empty cells.</p>",
    testcases: [{ input: "board data", expected: "solved board" }],
    constraints: ["board.length == 9", "board[i].length == 9"]
  },
  {
    id: 38,
    title: "Count and Say",
    difficulty: "Medium",
    topics: "String",
    description: "<p>The <strong>count-and-say</strong> sequence is a sequence of digit strings defined by the recursive formula:</p>",
    testcases: [{ input: "4", expected: "1211" }],
    constraints: ["1 <= n <= 30"]
  },
  {
    id: 39,
    title: "Combination Sum",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Given an array of <strong>distinct</strong> integers <code>candidates</code> and a target integer <code>target</code>, return <em>a list of all <strong>unique combinations</strong> of <code>candidates</code> where the chosen numbers sum to <code>target</code>.</em></p>",
    testcases: [{ input: "2 3 6 7\n7", expected: "[[2,2,3],[7]]" }],
    constraints: ["1 <= candidates.length <= 30", "2 <= candidates[i] <= 40", "1 <= target <= 40"]
  },
  {
    id: 40,
    title: "Combination Sum II",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Given a collection of candidate numbers (<code>candidates</code>) and a target number (<code>target</code>), find all unique combinations in <code>candidates</code> where the candidate numbers sum to <code>target</code>.</p>",
    testcases: [{ input: "10 1 2 7 6 1 5\n8", expected: "[[1,1,6],[1,2,5],[1,7],[2,6]]" }],
    constraints: ["1 <= candidates.length <= 100", "1 <= candidates[i] <= 50", "1 <= target <= 30"]
  },
  {
    id: 41,
    title: "First Missing Positive",
    difficulty: "Hard",
    topics: "Array",
    description: "<p>Given an unsorted integer array <code>nums</code>, return the smallest missing positive integer.</p>",
    testcases: [{ input: "1 2 0", expected: "3" }],
    constraints: ["1 <= nums.length <= 10^5", "-2^31 <= nums[i] <= 2^31 - 1"]
  },
  {
    id: 42,
    title: "Trapping Rain Water",
    difficulty: "Hard",
    topics: "Array, Two Pointers",
    description: "<p>Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is <code>1</code>, compute how much water it can trap after raining.</p>",
    testcases: [{ input: "0 1 0 2 1 0 1 3 2 1 2 1", expected: "6" }],
    constraints: ["n == height.length", "1 <= n <= 2 * 10^4", "0 <= height[i] <= 10^5"]
  },
  {
    id: 43,
    title: "Multiply Strings",
    difficulty: "Medium",
    topics: "String, Math",
    description: "<p>Given two non-negative integers <code>num1</code> and <code>num2</code> represented as strings, return the product of <code>num1</code> and <code>num2</code>, also represented as a string.</p>",
    testcases: [{ input: "2\n3", expected: "6" }],
    constraints: ["1 <= num1.length, num2.length <= 200", "num1 and num2 consist of digits only."]
  },
  {
    id: 44,
    title: "Wildcard Matching",
    difficulty: "Hard",
    topics: "String, DP",
    description: "<p>Given an input string (<code>s</code>) and a pattern (<code>p</code>), implement wildcard pattern matching with support for <code>'?'</code> and <code>'*'</code> where:</p>",
    testcases: [{ input: "aa\na", expected: "false" }],
    constraints: ["0 <= s.length, p.length <= 2000"]
  },
  {
    id: 45,
    title: "Jump Game II",
    difficulty: "Medium",
    topics: "Array, Greedy",
    description: "<p>You are given a <strong>0-indexed</strong> array of integers <code>nums</code> of length <code>n</code>. You are initially positioned at <code>nums[0]</code>.</p>",
    testcases: [{ input: "2 3 1 1 4", expected: "2" }],
    constraints: ["1 <= nums.length <= 10^4", "0 <= nums[i] <= 1000"]
  },
  {
    id: 46,
    title: "Permutations",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Given an array <code>nums</code> of distinct integers, return <em>all the possible permutations</em>. You can return the answer in <strong>any order</strong>.</p>",
    testcases: [{ input: "1 2 3", expected: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" }],
    constraints: ["1 <= nums.length <= 6", "-10 <= nums[i] <= 10"]
  },
  {
    id: 47,
    title: "Permutations II",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Given a collection of numbers, <code>nums</code>, that might contain duplicates, return <em>all possible unique permutations <strong>in any order</strong>.</em></p>",
    testcases: [{ input: "1 1 2", expected: "[[1,1,2],[1,2,1],[2,1,1]]" }],
    constraints: ["1 <= nums.length <= 8", "-10 <= nums[i] <= 10"]
  },
  {
    id: 48,
    title: "Rotate Image",
    difficulty: "Medium",
    topics: "Matrix",
    description: "<p>You are given an <code>n x n</code> 2D <code>matrix</code> representing an image, rotate the image by <strong>90</strong> degrees (clockwise).</p>",
    testcases: [{ input: "[[1,2,3],[4,5,6],[7,8,9]]", expected: "[[7,4,1],[8,5,2],[9,6,3]]" }],
    constraints: ["n == matrix.length == matrix[i].length", "1 <= n <= 20"]
  },
  {
    id: 49,
    title: "Group Anagrams",
    difficulty: "Medium",
    topics: "String, Hash Table",
    description: "<p>Given an array of strings <code>strs</code>, group <strong>the anagrams</strong> together. You can return the answer in <strong>any order</strong>.</p>",
    testcases: [{ input: "eat tea tan ate nat bat", expected: "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]" }],
    constraints: ["1 <= strs.length <= 10^4", "0 <= strs[i].length <= 100"]
  },
  {
    id: 50,
    title: "Pow(x, n)",
    difficulty: "Medium",
    topics: "Math, Recursion",
    description: "<p>Implement <code>pow(x, n)</code>, which calculates <code>x</code> raised to the power <code>n</code> (i.e., <code>x<sup>n</sup></code>).</p>",
    testcases: [{ input: "2.00000\n10", expected: "1024.00000" }],
    constraints: ["-100.0 < x < 100.0", "-2^31 <= n <= 2^31-1"]
  }
];
