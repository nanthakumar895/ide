export interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topics: string;
  description: string;
  testcases: { input: string; expected: string }[];
  constraints?: string[];
  sampleInput?: string;
  sampleOutput?: string;
}

export interface ExecutionResult {
  status: { id: number; description: string };
  time?: string;
  memory?: string | number;
  stdout?: string;
  stderr?: string;
  compile_output?: string;
  token?: string;
}
