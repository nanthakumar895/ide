import { useState, useEffect } from 'react'
import { Problem } from '../types'

const MOCK_PROBLEMS: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    topics: "Array, Hash Table",
    description: "<p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>",
    testcases: [{ input: "[2,7,11,15]\n9", expected: "[0,1]" }]
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    topics: "Linked List, Math",
    description: "<p>You are given two non-empty linked lists representing two non-negative integers...</p>",
    testcases: [{ input: "[2,4,3]\n[5,6,4]", expected: "[7,0,8]" }]
  }
]

export const useProblem = (initialId: number = 1) => {
  const [currentProblem, setCurrentProblem] = useState<Problem>(MOCK_PROBLEMS[0])

  const selectProblem = (id: number) => {
    const found = MOCK_PROBLEMS.find(p => p.id === id)
    if (found) setCurrentProblem(found)
  }

  return { currentProblem, selectProblem, allProblems: MOCK_PROBLEMS }
}
