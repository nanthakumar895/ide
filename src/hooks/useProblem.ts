import { useState, useEffect } from 'react'
import { Problem } from '../types'
import { MOCK_PROBLEMS } from '../data/mockProblems'

export const useProblem = () => {
  const [currentProblem, setCurrentProblem] = useState<Problem>(MOCK_PROBLEMS[0])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')
    if (id) {
      const found = MOCK_PROBLEMS.find(p => p.id === parseInt(id))
      if (found) setCurrentProblem(found)
    }
  }, [])

  const selectProblem = (id: number) => {
    const found = MOCK_PROBLEMS.find(p => p.id === id)
    if (found) {
        setCurrentProblem(found)
        // Update URL without refreshing
        const url = new URL(window.location.href);
        url.searchParams.set('id', id.toString());
        window.history.pushState({}, '', url);
    }
  }

  return { currentProblem, selectProblem, allProblems: MOCK_PROBLEMS }
}
