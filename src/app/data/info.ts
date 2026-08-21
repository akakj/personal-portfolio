export const skills = {
  "Languages": [
    "TypeScript",
    "JavaScript",
    "Python",
    "C#",
    "Java",
    "Haskell",
    "Assembly",
  ],

  "Frameworks & Frontend": [
    "Next.js",
    "React",
    "Tailwind CSS",
  ],

  "Data & APIs": [
    "PostgreSQL",
    "SQL",
    "Supabase",
    "MongoDB",
    "DynamoDB",
    "REST APIs",
    "GraphQL",
  ],

  "Cloud & DevOps": [
    "AWS",
    "Azure",
    "Docker",
    "CI/CD",
    "Vercel",
  ],

  "Tools": [
    "Git",
    "GitHub",
  ],
};

export const projects = [
  {
    title: "Project One",
    description:
      "A short description explaining what the project does, the problem it solves, and the most interesting part of building it.",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    github: "https://github.com/akakj/Codey",
    live: "https://codey-lyart.vercel.app/",
  },

];

export const experience = [
  {
    role: "Tutor & Coursework Marker",
    company: "University of Edinburgh",
    date: "2025 — Present",
    courses: [
      "Functional Programming & Computational Logic · Haskell",
      "Object-Oriented Programming · Java",
    ],
    highlights: [
      "Deliver interactive tutorials covering programming concepts, debugging and problem-solving techniques.",
      "Mark programming coursework and provide actionable feedback to students.",
      "Collaborate with lecturers to maintain consistent teaching and assessment standards.",
      "Selected to return as a Functional Programming tutor after previously teaching both Functional Programming and Object-Oriented Programming.",
    ],
  },
];

export const education = [
  {
    course: "BSc Computer Science — First-Class",
    institution: "University of Edinburgh",
    date: "2024 — 2028",
    description: "First-year average: 95%.",
    relevantStudy: [
      "Algorithms",
      "Data Science",
      "Computer Security",
      "Software Testing",
      "Foundations of Natural Language Processing",
    ],
    prize: {
      title: "Professor of Moral Philosophy’s Prize",
      date: "2025",
      description:
        "Awarded for the most distinguished work in class essays in First-class Philosophy courses.",
    },
  },
];

export const navigation = [
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const links = [
  {
    name: "Github",
    link:"github.com/akakj"
  },
  {
    name: "LinkedIn",
    link:"linkedin.com/in/anna-kandyba"
  }
]

export const slides = [
  {
    lightSrc: "/projects/codey/light/ProblemWorkspace.png",
    darkSrc: "/projects/codey/dark/ProblemWorkspace.png",
    title: "Integrated coding workspace",
    description:
      "Write, execute and submit solutions directly in the browser using an integrated Monaco editor and test-case runner.",
  },
  {
    lightSrc: "/projects/codey/light/AnalyticsDashboard.png",
    darkSrc: "/projects/codey/dark/AnalyticsDashboard.png",
    title: "Performance analytics",
    description:
      "Track completion, acceptance rates, language usage, submission activity and problem-solving performance.",
  },
  {
    lightSrc: "/projects/codey/light/ProblemList.png",
    darkSrc: "/projects/codey/dark/ProblemList.png",
    title: "Problem library",
    description:
      "Search and work through algorithm problems while tracking difficulty and completion status.",
  },
  {
    lightSrc: "/projects/codey/light/SubmissionHistory.png",
    darkSrc: "/projects/codey/dark/SubmissionHistory.png",
    title: "Submission history",
    description:
      "Review previous attempts, results, language, runtime, memory usage and test-case performance.",
  },
];

export const features = [
  "Multi-language code execution",
  "Public and hidden test-case evaluation",
  "Persistent submissions and progress tracking",
  "Personalised performance analytics",
];