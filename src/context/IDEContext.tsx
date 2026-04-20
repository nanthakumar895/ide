import React, { createContext, useContext, useState, useEffect } from 'react';
import { Problem, ExecutionResult } from '../types';
import { useProblem } from '../hooks/useProblem';

interface Language {
  id: number;
  name: string;
  flavor: 'CE' | 'EXTRA_CE';
}

interface IDEContextType {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  languages: Language[];
  selectedLanguage: Language | null;
  setSelectedLanguage: (lang: Language) => void;
  currentProblem: Problem;
  selectProblem: (id: number) => void;
  allProblems: Problem[];
  isRunning: boolean;
  runCode: (source: string, stdin: string) => Promise<void>;
  executionResult: ExecutionResult | null;
  isProblemListOpen: boolean;
  setIsProblemListOpen: (open: boolean) => void;
}

const IDEContext = createContext<IDEContextType | undefined>(undefined);

export const IDEProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<'dark' | 'light'>('dark');
  const [languages, setLanguages] = useState<Language[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const { currentProblem, selectProblem, allProblems } = useProblem(1);
  const [isRunning, setIsRunning] = useState(false);
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [isProblemListOpen, setIsProblemListOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('procode.theme') as 'dark' | 'light' || 'dark';
    setThemeState(savedTheme);
    document.body.className = savedTheme === 'dark' ? 'inverted' : '';

    const fetchLanguages = async () => {
      try {
        const [ceRes, extraRes] = await Promise.all([
          fetch('https://ce.judge0.com/languages'),
          fetch('https://extra-ce.judge0.com/languages')
        ]);
        const ceLangs = await ceRes.json();
        const extraLangs = await extraRes.json();

        const formattedCe = ceLangs.map((l: any) => ({ ...l, flavor: 'CE' }));
        const formattedExtra = extraLangs.map((l: any) => ({ ...l, flavor: 'EXTRA_CE' }));

        const combined = [...formattedCe, ...formattedExtra].sort((a: any, b: any) => a.name.localeCompare(b.name));
        setLanguages(combined);

        const defaultLang = combined.find((l: any) => l.id === 105) || combined[0];
        setSelectedLanguage(defaultLang);
      } catch (err) {
        console.error("Failed to fetch languages", err);
      }
    };

    fetchLanguages();
  }, []);

  const setTheme = (t: 'dark' | 'light') => {
    setThemeState(t);
    localStorage.setItem('procode.theme', t);
    document.body.className = t === 'dark' ? 'inverted' : '';
  };

  const runCode = async (source: string, stdin: string) => {
    if (!selectedLanguage) return;
    setIsRunning(true);
    setExecutionResult(null);

    try {
      const baseUrl = selectedLanguage.flavor === 'CE' ? 'https://ce.judge0.com' : 'https://extra-ce.judge0.com';
      const response = await fetch(`${baseUrl}/submissions?base64_encoded=false&wait=true`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source_code: source,
          language_id: selectedLanguage.id,
          stdin: stdin,
        })
      });

      const result = await response.json();
      setExecutionResult(result);
    } catch (err) {
      console.error("Execution failed", err);
      setExecutionResult({
        status: { id: 0, description: 'Error' },
        stderr: 'Network error or service unavailable.'
      });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <IDEContext.Provider value={{
      theme, setTheme,
      languages, selectedLanguage, setSelectedLanguage,
      currentProblem, selectProblem, allProblems,
      isRunning, runCode, executionResult,
      isProblemListOpen, setIsProblemListOpen
    }}>
      {children}
    </IDEContext.Provider>
  );
};

export const useIDE = () => {
  const context = useContext(IDEContext);
  if (!context) throw new Error('useIDE must be used within IDEProvider');
  return context;
};
