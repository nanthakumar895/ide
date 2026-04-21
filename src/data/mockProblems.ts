import { Problem } from '../types';

export const MOCK_PROBLEMS: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    topics: "Array, Hash Table",
    description: "<p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p><p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p><p>You can return the answer in any order.</p>",
    testcases: [
      { input: "2 7 11 15\n9", expected: "0 1" }
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9"
    ]
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    topics: "Linked List, Math",
    description: "<p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.</p><p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>",
    testcases: [
      { input: "2 4 3\n5 6 4", expected: "7 0 8" }
    ]
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    topics: "Hash Table, String, Sliding Window",
    description: "<p>Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.</p>",
    testcases: [
      { input: "abcabcbb", expected: "3" }
    ]
  }
];
