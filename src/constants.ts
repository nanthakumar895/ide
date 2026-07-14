import { ExecutionResult as BaseExecutionResult } from './types';

export interface Language {
  id: number;
  name: string;
  monacoMode: string;
  defaultCode: string;
}

export type ExecutionResult = BaseExecutionResult;

export const SUPPORTED_LANGUAGES: Language[] = [
  {
    id: 105,
    name: "C++ (GCC 14.1.0)",
    monacoMode: "cpp",
    defaultCode: "#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nint main() {\n    // Write your code here\n    string s;\n    if (cin >> s) {\n        cout << \"Hello \" << s << endl;\n    } else {\n        cout << \"Hello World\" << endl;\n    }\n    return 0;\n}"
  },
  {
    id: 103,
    name: "C (GCC 14.1.0)",
    monacoMode: "c",
    defaultCode: "#include <stdio.h>\n\nint main() {\n    char str[100];\n    if (scanf(\"%s\", str) != EOF) {\n        printf(\"Hello %s\\n\", str);\n    } else {\n        printf(\"Hello World\\n\");\n    }\n    return 0;\n}"
  },
  {
    id: 92,
    name: "Python (3.11.2)",
    monacoMode: "python",
    defaultCode: "import sys\n\ndef main():\n    line = sys.stdin.readline().strip()\n    if line:\n        print(f\"Hello {line}\")\n    else:\n        print(\"Hello World\")\n\nif __name__ == \"__main__\":\n    main()"
  },
  {
    id: 91,
    name: "Java (JDK 17.0.6)",
    monacoMode: "java",
    defaultCode: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNext()) {\n            System.out.println(\"Hello \" + sc.next());\n        } else {\n            System.out.println(\"Hello World\");\n        }\n    }\n}"
  },
  {
    id: 102,
    name: "JavaScript (Node.js 22.08.0)",
    monacoMode: "javascript",
    defaultCode: "const fs = require('fs');\n\ntry {\n    const input = fs.readFileSync(0, 'utf8').trim();\n    if (input) {\n        console.log(`Hello ${input}`);\n    } else {\n        console.log(\"Hello World\");\n    }\n} catch (e) {\n    console.log(\"Hello World\");\n}"
  },
  {
    id: 101,
    name: "TypeScript (5.6.2)",
    monacoMode: "typescript",
    defaultCode: "import * as fs from 'fs';\n\ntry {\n    const input: string = fs.readFileSync(0, 'utf-8').trim();\n    if (input) {\n        console.log(`Hello ${input}`);\n    } else {\n        console.log(\"Hello World\");\n    }\n} catch (e) {\n    console.log(\"Hello World\");\n}"
  },
  {
    id: 106,
    name: "Go (1.22.0)",
    monacoMode: "go",
    defaultCode: "package main\n\nimport (\n\t\"fmt\"\n\t\"os\"\n\t\"bufio\"\n)\n\nfunc main() {\n\tscanner := bufio.NewScanner(os.Stdin)\n\tif scanner.Scan() {\n\t\tfmt.Printf(\"Hello %s\\n\", scanner.Text())\n\t} else {\n\t\tfmt.Println(\"Hello World\")\n\t}\n}"
  },
  {
    id: 108,
    name: "Rust (1.85.0)",
    monacoMode: "rust",
    defaultCode: "use std::io::{self, BufRead};\n\nfn main() {\n    let stdin = io::stdin();\n    let mut line = String::new();\n    if stdin.lock().read_line(&mut line).is_ok() && !line.trim().is_empty() {\n        println!(\"Hello {}\", line.trim());\n    } else {\n        println!(\"Hello World\");\n    }\n}"
  },
  {
    id: 51,
    name: "C# (Mono 6.6.0.161)",
    monacoMode: "csharp",
    defaultCode: "using System;\n\npublic class Program\n{\n    public static void Main()\n    {\n        string line = Console.ReadLine();\n        if (!string.IsNullOrEmpty(line)) {\n            Console.WriteLine(\"Hello \" + line);\n        } else {\n            Console.WriteLine(\"Hello World\");\n        }\n    }\n}"
  },
  {
    id: 83,
    name: "Swift (5.2.3)",
    monacoMode: "swift",
    defaultCode: "if let line = readLine() {\n    print(\"Hello \\(line)\")\n} else {\n    print(\"Hello World\")\n}"
  },
  {
    id: 112,
    name: "Scala (3.4.2)",
    monacoMode: "scala",
    defaultCode: "@main def hello() = \n  val line = scala.io.StdIn.readLine()\n  if (line != null && line.nonEmpty) println(s\"Hello $line\")\n  else println(\"Hello World\")"
  },
  {
    id: 113,
    name: "Kotlin (1.9.24)",
    monacoMode: "kotlin",
    defaultCode: "import java.util.Scanner\n\nfun main() {\n    val sc = Scanner(System.`in`)\n    if (sc.hasNext()) {\n        println(\"Hello ${sc.next()}\")\n    } else {\n        println(\"Hello World\")\n    }\n}"
  },
  {
    id: 111,
    name: "Dart (3.4.4)",
    monacoMode: "dart",
    defaultCode: "import 'dart:io';\n\nvoid main() {\n  String? line = stdin.readLineSync();\n  if (line != null && line.isNotEmpty) {\n    print('Hello $line');\n  } else {\n    print('Hello World');\n  }\n}"
  },
  {
    id: 82,
    name: "SQL (SQLite 3.27.2)",
    monacoMode: "sql",
    defaultCode: "-- Write your SQL here\nSELECT 'Hello World';"
  },
  {
    id: 72,
    name: "Ruby (2.7.0)",
    monacoMode: "ruby",
    defaultCode: "input = gets\nif input && !input.strip.empty?\n  puts \"Hello #{input.strip}\"\nelse\n  puts \"Hello World\"\nend"
  },
  {
    id: 98,
    name: "PHP (8.3.11)",
    monacoMode: "php",
    defaultCode: "<?php\n$input = trim(fgets(STDIN));\nif ($input) {\n    echo \"Hello $input\\n\";\n} else {\n    echo \"Hello World\\n\";\n}"
  }
];
