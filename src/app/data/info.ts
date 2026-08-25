export const skills = {
  Languages: [
    "TypeScript",
    "JavaScript",
    "Python",
    "C#",
    "C",
    "Java",
    "Haskell",
    "Assembly",
  ],

  "Frameworks & Frontend": ["Next.js", "React", "Tailwind CSS"],

  "Data & APIs": [
    "PostgreSQL",
    "SQL",
    "Supabase",
    "MongoDB",
    "DynamoDB",
    "REST APIs",
    "GraphQL",
  ],

  "Cloud & DevOps": ["AWS", "Azure", "Docker", "CI/CD", "Vercel"],

  Tools: ["Git", "GitHub"],
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
    link: "github.com/akakj",
  },
  {
    name: "LinkedIn",
    link: "linkedin.com/in/anna-kandyba",
  },
];

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

export const categoryStyles = {
  Languages: {
    symbol: "✦",
    heading: "text-[#655080] dark:text-violet-200",
    container:
      "border-violet-300/70 bg-violet-50/70 dark:border-violet-800/50 dark:bg-violet-950/15",
    pill: "border-violet-300/80 bg-violet-50/80 hover:border-violet-400 hover:bg-violet-50 dark:border-violet-700/50 dark:bg-violet-950/30 dark:hover:border-violet-400/60 dark:hover:bg-violet-900/40",
    sparkle: "text-violet-500 dark:text-violet-300",
    shadow: "hover:shadow-[0_6px_20px_rgba(139,92,246,0.15)]",
  },

  "Frameworks & Frontend": {
    symbol: "❋",
    heading: "text-[#70445F] dark:text-rose-200",
    container:
      "border-rose-300/50 bg-rose-50/55 dark:border-rose-800/35 dark:bg-rose-950/15",
    pill: "border-rose-300/80 bg-rose-50/60 hover:border-rose-400 hover:bg-rose-100/60 dark:border-rose-700/50 dark:bg-rose-950/30 dark:hover:border-rose-400/60 dark:hover:bg-rose-900/40",
    sparkle: "text-rose-700 dark:text-rose-300",
    shadow: "hover:shadow-[0_6px_20px_rgba(190,24,93,0.14)]",
  },

  "Data & APIs": {
    symbol: "◇",

    heading: "text-[#405A78] dark:text-blue-200",

    container:
      "border-blue-300/70 bg-blue-50/60 dark:border-blue-800/50 dark:bg-blue-950/20",

    pill: "border-blue-300/80 bg-blue-50/65 hover:border-blue-400 hover:bg-blue-100/60 dark:border-blue-700/50 dark:bg-blue-950/30 dark:hover:border-blue-400/60 dark:hover:bg-blue-900/40",

    sparkle: "text-blue-700 dark:text-blue-300",

    shadow: "hover:shadow-[0_6px_20px_rgba(37,99,235,0.14)]",
  },

  "Cloud & DevOps": {
    symbol: "☼",
    heading: "text-[#755b45] dark:text-amber-200",
    container:
      "border-amber-400/50 bg-amber-50/50 dark:border-amber-900/40 dark:bg-amber-950/15",
    pill: "border-amber-300/80 bg-amber-50/55 hover:border-amber-400 hover:bg-amber-50 dark:border-amber-800/50 dark:bg-amber-950/25 dark:hover:border-amber-400/60 dark:hover:bg-amber-900/35",
    sparkle: "text-amber-700 dark:text-amber-300",
    shadow: "hover:shadow-[0_6px_20px_rgba(245,158,11,0.14)]",
  },

  Tools: {
    symbol: "✧",
    heading: "text-[#536b62] dark:text-emerald-200",
    container:
      "border-emerald-300/65 bg-emerald-50/50 dark:border-emerald-900/50 dark:bg-emerald-950/20",
    pill: "border-emerald-300/75 bg-emerald-50/45 hover:border-emerald-400 hover:bg-emerald-50 dark:border-emerald-800/50 dark:bg-emerald-950/25 dark:hover:border-emerald-400/60 dark:hover:bg-emerald-900/35",
    sparkle: "text-emerald-700 dark:text-emerald-300",
    shadow: "hover:shadow-[0_6px_20px_rgba(16,185,129,0.13)]",
  },
};

export const fallbackStyle = {
  symbol: "✦",
  heading: "text-[#684f65] dark:text-purple-100",
  container:
    "border-pink-200/50 bg-white/20 dark:border-purple-800/30 dark:bg-purple-950/10",
  pill: "border-pink-300 bg-white/60 hover:border-pink-400 hover:bg-pink-50 dark:border-purple-700/50 dark:bg-purple-950/30 dark:hover:border-fuchsia-400/50 dark:hover:bg-purple-900/50",
  sparkle: "text-pink-500 dark:text-fuchsia-300",
  shadow: "hover:shadow-[0_6px_20px_rgba(236,72,153,0.13)]",
};

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    provider: "AWS",
    year: "2024",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    provider: "Azure",
    year: "2024",
  },
];

export const certificationStyles = {
  AWS: {
    card: `
      border-amber-400/80
      bg-amber-50/45

      hover:border-amber-400
      hover:bg-amber-50/55
      hover:shadow-[0_18px_45px_rgba(180,125,35,0.14)]

      dark:border-amber-500/40
      dark:bg-amber-950/10
      dark:hover:border-amber-400/60
      dark:hover:bg-amber-950/15
      dark:hover:shadow-[0_18px_45px_rgba(251,191,36,0.10)]
    `,

    innerBorder: "border-amber-300/70 dark:border-amber-700/25",

    glow: "bg-amber-300/25 dark:bg-amber-400/10",

    iconWrapper: `
      border-amber-300
      bg-amber-50/70
      shadow-[0_3px_10px_rgba(180,125,35,0.10)]

      dark:border-amber-500/45
      dark:bg-amber-900/20
    `,

    icon: "stroke-amber-600 dark:stroke-amber-200",

    meta: "text-[#6B4A14] dark:text-amber-200",

    issuer: "text-[#6B4A14] dark:text-amber-200",

    sparkle: "text-amber-600 dark:text-amber-300",

    sparkleMuted: "text-amber-500/70 dark:text-amber-300/65",

    divider: `
      from-amber-300
      via-amber-300/70
      to-transparent

      dark:from-amber-500/60
      dark:via-amber-400/40
    `,

    vineStroke: "stroke-amber-400/60 dark:stroke-amber-500/35",

    vineFill: "fill-amber-300/45 dark:fill-amber-500/20",
  },

  Azure: {
    card: `
      border-sky-300/80
      bg-sky-50/70

      hover:border-sky-400
      hover:bg-sky-50/55
      hover:shadow-[0_18px_45px_rgba(56,139,190,0.14)]

      dark:border-sky-500/40
      dark:bg-sky-950/10
      dark:hover:border-sky-400/60
      dark:hover:bg-sky-950/15
      dark:hover:shadow-[0_18px_45px_rgba(56,189,248,0.10)]
    `,

    innerBorder: "border-sky-200/70 dark:border-sky-700/25",

    glow: "bg-sky-300/25 dark:bg-sky-400/10",

    iconWrapper: `
      border-sky-300
      bg-sky-50/70
      shadow-[0_3px_10px_rgba(56,139,190,0.10)]

      dark:border-sky-500/45
      dark:bg-sky-900/20
    `,

    icon: "stroke-sky-700 dark:stroke-sky-200",

    meta: "text-[#315A7D] dark:text-sky-200",

    issuer: "text-[#315A7D] dark:text-sky-200",

    sparkle: "text-sky-700 dark:text-sky-300",

    sparkleMuted: "text-sky-600/70 dark:text-sky-300/65",

    divider: `
      from-sky-300
      via-sky-300/70
      to-transparent

      dark:from-sky-500/60
      dark:via-sky-400/40
    `,

    vineStroke: "stroke-sky-400/60 dark:stroke-sky-500/35",

    vineFill: "fill-sky-300/45 dark:fill-sky-500/20",
  },
};

export type CertificationProvider = keyof typeof certificationStyles;
