export const problems = [
    {
        id: 1,
        title: "Two Sum",
        difficulty: "Easy",
        tags: ["Array", "Hash Table"],
        description: `
            <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <i>indices of the two numbers such that they add up to target</i>.</p>
            <p>You may assume that each input would have <b>exactly one solution</b>, and you may not use the same element twice.</p>
            <p>You can return the answer in any order.</p>
        `
    },
    {
        id: 2,
        title: "Add Two Numbers",
        difficulty: "Medium",
        tags: ["Linked List", "Math", "Recursion"],
        description: `
            <p>You are given two <b>non-empty</b> linked lists representing two non-negative integers. The digits are stored in <b>reverse order</b>, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.</p>
            <p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>
        `
    },
    {
        id: 3,
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        tags: ["Hash Table", "String", "Sliding Window"],
        description: `
            <p>Given a string <code>s</code>, find the length of the <b>longest substring</b> without repeating characters.</p>
        `
    },
    {
        id: 4,
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        tags: ["Array", "Binary Search", "Divide and Conquer"],
        description: `
            <p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <b>the median</b> of the two sorted arrays.</p>
            <p>The overall run time complexity should be <code>O(log (m+n))</code>.</p>
        `
    },
    {
        id: 5,
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        tags: ["String", "Dynamic Programming"],
        description: `
            <p>Given a string <code>s</code>, return <i>the longest palindromic substring</i> in <code>s</code>.</p>
        `
    },
    {
        id: 6,
        title: "Zigzag Conversion",
        difficulty: "Medium",
        tags: ["String"],
        description: `
            <p>The string <code>"PAYPALISHIRING"</code> is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)</p>
            <pre>P   A   H   N
A P L S I I G
Y   I   R</pre>
            <p>And then read line by line: <code>"PAHNAPLSIIGYIR"</code></p>
        `
    },
    {
        id: 7,
        title: "Reverse Integer",
        difficulty: "Medium",
        tags: ["Math"],
        description: `
            <p>Given a signed 32-bit integer <code>x</code>, return <code>x</code> with its digits reversed. If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range <code>[-2^31, 2^31 - 1]</code>, then return <code>0</code>.</p>
        `
    },
    {
        id: 8,
        title: "String to Integer (atoi)",
        difficulty: "Medium",
        tags: ["String"],
        description: `
            <p>Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer (similar to C/C++'s <code>atoi</code> function).</p>
        `
    },
    {
        id: 9,
        title: "Palindrome Number",
        difficulty: "Easy",
        tags: ["Math"],
        description: `
            <p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a palindrome, and <code>false</code> otherwise.</p>
        `
    },
    {
        id: 10,
        title: "Regular Expression Matching",
        difficulty: "Hard",
        tags: ["String", "Dynamic Programming", "Recursion"],
        description: `
            <p>Given an input string <code>s</code> and a pattern <code>p</code>, implement regular expression matching with support for <code>'.'</code> and <code>'*'</code> where:</p>
            <ul>
                <li><code>'.'</code> Matches any single character.</li>
                <li><code>'*'</code> Matches zero or more of the preceding element.</li>
            </ul>
        `
    },
    { id: 11, title: "Container With Most Water", difficulty: "Medium", tags: ["Array", "Two Pointers"], description: "<p>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>" },
    { id: 12, title: "Integer to Roman", difficulty: "Medium", tags: ["Hash Table", "Math", "String"], description: "<p>Convert an integer to a roman numeral.</p>" },
    { id: 13, title: "Roman to Integer", difficulty: "Easy", tags: ["Hash Table", "Math", "String"], description: "<p>Convert a roman numeral to an integer.</p>" },
    { id: 14, title: "Longest Common Prefix", difficulty: "Easy", tags: ["String"], description: "<p>Find the longest common prefix string amongst an array of strings.</p>" },
    { id: 15, title: "3Sum", difficulty: "Medium", tags: ["Array", "Two Pointers", "Sorting"], description: "<p>Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.</p>" },
    { id: 16, title: "3Sum Closest", difficulty: "Medium", tags: ["Array", "Two Pointers", "Sorting"], description: "<p>Find three integers in nums such that the sum is closest to target.</p>" },
    { id: 17, title: "Letter Combinations of a Phone Number", difficulty: "Medium", tags: ["Hash Table", "String", "Backtracking"], description: "<p>Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.</p>" },
    { id: 18, title: "4Sum", difficulty: "Medium", tags: ["Array", "Two Pointers", "Sorting"], description: "<p>Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that they sum to target.</p>" },
    { id: 19, title: "Remove Nth Node From End of List", difficulty: "Medium", tags: ["Linked List", "Two Pointers"], description: "<p>Given the head of a linked list, remove the nth node from the end of the list and return its head.</p>" },
    { id: 20, title: "Valid Parentheses", difficulty: "Easy", tags: ["String", "Stack"], description: "<p>Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.</p>" },
    { id: 21, title: "Merge Two Sorted Lists", difficulty: "Easy", tags: ["Linked List", "Recursion"], description: "<p>Merge two sorted linked lists and return it as a sorted list.</p>" },
    { id: 22, title: "Generate Parentheses", difficulty: "Medium", tags: ["String", "Backtracking"], description: "<p>Given n pairs of parentheses, generate all combinations of well-formed parentheses.</p>" },
    { id: 23, title: "Merge k Sorted Lists", difficulty: "Hard", tags: ["Linked List", "Divide and Conquer", "Heap (Priority Queue)", "Merge Sort"], description: "<p>Merge k sorted linked lists and return it as one sorted list.</p>" },
    { id: 24, title: "Swap Nodes in Pairs", difficulty: "Medium", tags: ["Linked List", "Recursion"], description: "<p>Given a linked list, swap every two adjacent nodes and return its head.</p>" },
    { id: 25, title: "Reverse Nodes in k-Group", difficulty: "Hard", tags: ["Linked List", "Recursion"], description: "<p>Given a linked list, reverse the nodes of a linked list k at a time and return its modified head.</p>" },
    { id: 26, title: "Remove Duplicates from Sorted Array", difficulty: "Easy", tags: ["Array", "Two Pointers"], description: "<p>Remove duplicates from a sorted array such that each element appears only once and returns the new length.</p>" },
    { id: 27, title: "Remove Element", difficulty: "Easy", tags: ["Array", "Two Pointers"], description: "<p>Remove all occurrences of a specified value in an array and return the new length.</p>" },
    { id: 28, title: "Find the Index of the First Occurrence in a String", difficulty: "Easy", tags: ["Two Pointers", "String", "String Matching"], description: "<p>Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.</p>" },
    { id: 29, title: "Divide Two Integers", difficulty: "Medium", tags: ["Math", "Bit Manipulation"], description: "<p>Divide two integers without using multiplication, division, and mod operator.</p>" },
    { id: 30, title: "Substring with Concatenation of All Words", difficulty: "Hard", tags: ["Hash Table", "String", "Sliding Window"], description: "<p>Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once.</p>" },
    { id: 31, title: "Next Permutation", difficulty: "Medium", tags: ["Array", "Two Pointers"], description: "<p>Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.</p>" },
    { id: 32, title: "Longest Valid Parentheses", difficulty: "Hard", tags: ["String", "Dynamic Programming", "Stack"], description: "<p>Find the length of the longest valid (well-formed) parentheses substring.</p>" },
    { id: 33, title: "Search in Rotated Sorted Array", difficulty: "Medium", tags: ["Array", "Binary Search"], description: "<p>Search a target value in a rotated sorted array.</p>" },
    { id: 34, title: "Find First and Last Position of Element in Sorted Array", difficulty: "Medium", tags: ["Array", "Binary Search"], description: "<p>Find the starting and ending position of a given target value.</p>" },
    { id: 35, title: "Search Insert Position", difficulty: "Easy", tags: ["Array", "Binary Search"], description: "<p>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.</p>" },
    { id: 36, title: "Valid Sudoku", difficulty: "Medium", tags: ["Array", "Hash Table", "Matrix"], description: "<p>Determine if a 9 x 9 Sudoku board is valid.</p>" },
    { id: 37, title: "Sudoku Solver", difficulty: "Hard", tags: ["Array", "Hash Table", "Backtracking", "Matrix"], description: "<p>Write a program to solve a Sudoku puzzle by filling the empty cells.</p>" },
    { id: 38, title: "Count and Say", difficulty: "Medium", tags: ["String"], description: "<p>The count-and-say sequence is a sequence of digit strings defined by the recursive formula.</p>" },
    { id: 39, title: "Combination Sum", difficulty: "Medium", tags: ["Array", "Backtracking"], description: "<p>Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.</p>" },
    { id: 40, title: "Combination Sum II", difficulty: "Medium", tags: ["Array", "Backtracking"], description: "<p>Find all unique combinations in candidates where the candidate numbers sum to target.</p>" },
    { id: 41, title: "First Missing Positive", difficulty: "Hard", tags: ["Array", "Hash Table"], description: "<p>Find the smallest missing positive integer.</p>" },
    { id: 42, title: "Trapping Rain Water", difficulty: "Hard", tags: ["Array", "Two Pointers", "Dynamic Programming", "Stack", "Monotonic Stack"], description: "<p>Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.</p>" },
    { id: 43, title: "Multiply Strings", difficulty: "Medium", tags: ["Math", "String", "Simulation"], description: "<p>Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.</p>" },
    { id: 44, title: "Wildcard Matching", difficulty: "Hard", tags: ["String", "Dynamic Programming", "Greedy", "Recursion"], description: "<p>Implement wildcard pattern matching with support for '?' and '*'.</p>" },
    { id: 45, title: "Jump Game II", difficulty: "Medium", tags: ["Array", "Dynamic Programming", "Greedy"], description: "<p>Find the minimum number of jumps to reach the last index.</p>" },
    { id: 46, title: "Permutations", difficulty: "Medium", tags: ["Array", "Backtracking"], description: "<p>Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.</p>" },
    { id: 47, title: "Permutations II", difficulty: "Medium", tags: ["Array", "Backtracking"], description: "<p>Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.</p>" },
    { id: 48, title: "Rotate Image", difficulty: "Medium", tags: ["Array", "Math", "Matrix"], description: "<p>You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).</p>" },
    { id: 49, title: "Group Anagrams", difficulty: "Medium", tags: ["Array", "Hash Table", "String", "Sorting"], description: "<p>Given an array of strings strs, group the anagrams together. You can return the answer in any order.</p>" },
    { id: 50, title: "Pow(x, n)", difficulty: "Medium", tags: ["Math", "Recursion"], description: "<p>Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).</p>" }
];
