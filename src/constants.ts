export interface Language {
  id: number;
  name: string;
  monacoMode: string;
  defaultCode: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  {
    id: 105,
    name: "C++ (GCC 14.1.0)",
    monacoMode: "cpp",
    defaultCode: "#include <iostream>\n\nint main() {\n    std::cout << \"Hello World\";\n    return 0;\n}"
  },
  {
    id: 103,
    name: "C (GCC 14.1.0)",
    monacoMode: "c",
    defaultCode: "#include <stdio.h>\n\nint main() {\n    printf(\"Hello World\");\n    return 0;\n}"
  },
  {
    id: 92,
    name: "Python (3.11.2)",
    monacoMode: "python",
    defaultCode: "print(\"Hello World\")"
  },
  {
    id: 91,
    name: "Java (JDK 17.0.6)",
    monacoMode: "java",
    defaultCode: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World\");\n    }\n}"
  },
  {
    id: 102,
    name: "JavaScript (Node.js 22.08.0)",
    monacoMode: "javascript",
    defaultCode: "console.log(\"Hello World\");"
  },
  {
    id: 101,
    name: "TypeScript (5.6.2)",
    monacoMode: "typescript",
    defaultCode: "console.log(\"Hello World\");"
  },
  {
    id: 106,
    name: "Go (1.22.0)",
    monacoMode: "go",
    defaultCode: "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello World\")\n}"
  },
  {
    id: 108,
    name: "Rust (1.85.0)",
    monacoMode: "rust",
    defaultCode: "fn main() {\n    println!(\"Hello World\");\n}"
  },
  {
    id: 72,
    name: "Ruby (2.7.0)",
    monacoMode: "ruby",
    defaultCode: "puts \"Hello World\""
  },
  {
    id: 98,
    name: "PHP (8.3.11)",
    monacoMode: "php",
    defaultCode: "<?php\necho \"Hello World\";"
  },
  {
    id: 51,
    name: "C# (Mono 6.6.0.161)",
    monacoMode: "csharp",
    defaultCode: "using System;\n\npublic class HelloWorld\n{\n    public static void Main(string[] args)\n    {\n        Console.WriteLine(\"Hello World\");\n    }\n}"
  },
  {
    id: 83,
    name: "Swift (5.2.3)",
    monacoMode: "swift",
    defaultCode: "print(\"Hello World\")"
  },
  {
    id: 78,
    name: "Kotlin (1.3.70)",
    monacoMode: "kotlin",
    defaultCode: "fun main(args: Array<String>) {\n    println(\"Hello World\")\n}"
  },
  {
    id: 112,
    name: "Scala (3.4.2)",
    monacoMode: "scala",
    defaultCode: "@main def hello() = println(\"Hello World\")"
  },
  {
    id: 82,
    name: "SQL (SQLite 3.27.2)",
    monacoMode: "sql",
    defaultCode: "CREATE TABLE hello (name TEXT);\nINSERT INTO hello VALUES ('Hello World');\nSELECT * FROM hello;"
  }
];
