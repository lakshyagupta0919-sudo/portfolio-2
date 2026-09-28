/* ==========================================================================
   LAKSHYA - Companies Hiring Process Dataset
   ========================================================================== */

const COMPANIES_DATA = [
  {
    id: "comp-google",
    name: "Google",
    tier: "Tier 1 (FAANG / Big Tech)",
    category: "Product Giant",
    monogram: "G",
    logoBg: "linear-gradient(135deg, #4285F4, #34A853)",
    headquarters: "Mountain View, CA / India (Bengaluru, Hyderabad)",
    rating: 4.5,
    ctcRange: "₹32 - ₹50 LPA (Base: ₹18-22L, Stocks: ~$40k, Bonus: 15%)",
    hiringModes: ["Campus Recruitment (Tier 1/2)", "Off-Campus via Career Portal", "Google Girl Hackathon", "Code Jam / Kick Start archives"],
    eligibility: {
      minCgpa: "No strict CGPA cutoff (6.5+ recommended for shortlisting)",
      backlogs: "No active backlogs allowed at joining",
      branches: "B.Tech/M.Tech in CSE, IT, ECE, EE, Mathematics & Computing",
      gapYear: "Up to 1-2 years allowed with valid justification"
    },
    overview: "Google's hiring process is famously rigorous and standardized, focusing heavily on problem-solving ability, algorithmic efficiency (Time/Space complexities), clean code, and 'Googleyness' (culture alignment).",
    rounds: [
      {
        roundNumber: 1,
        title: "Online Assessment (OA)",
        duration: "90 Minutes",
        platform: "Google Internal Test Platform / HackerEarth",
        description: "Contains 2 medium-to-hard algorithmic coding problems. Topics primarily focus on Dynamic Programming, Graph algorithms, Trees, and Sliding Window.",
        focus: ["Graphs", "Dynamic Programming", "Sliding Window", "Data Structures"]
      },
      {
        roundNumber: 2,
        title: "Technical Interview Round 1",
        duration: "45-60 Minutes",
        platform: "Google Meet + Google Docs / Code Editor",
        description: "Focuses on deep algorithmic problem solving. You write raw code in a shared editor without auto-completion. Expect 1 LeetCode Medium/Hard question with follow-ups for edge cases and optimal constraints.",
        focus: ["Trees", "Binary Search", "Time Complexity", "Clean Code"]
      },
      {
        roundNumber: 3,
        title: "Technical Interview Round 2",
        duration: "45-60 Minutes",
        platform: "Google Meet + Code Editor",
        description: "Algorithmic problem solving and edge case analysis. Interviewer will introduce dynamic constraints (e.g., streaming data, massive input sizes, memory limits) to test adaptability.",
        focus: ["Heaps", "Hash Tables", "Prefix Sum", "Recursion"]
      },
      {
        roundNumber: 4,
        title: "Googliness & Leadership (Behavioral)",
        duration: "45 Minutes",
        platform: "Google Meet",
        description: "Assesses cultural fit, bias for action, handling ambiguity, navigating conflicts, ethics, and intellectual humility. Utilizes the STAR framework.",
        focus: ["Googleyness", "STAR Method", "Collaboration", "Ethics"]
      }
    ],
    syllabus: [
      { section: "Data Structures", topics: "Binary Trees, BST, Heaps, Disjoint Set Union (DSU), Trie, Graphs", weightage: "High" },
      { section: "Algorithms", topics: "Dynamic Programming, Dijkstra, BFS/DFS, Binary Search, Two Pointers", weightage: "High" },
      { section: "CS Core Fundamentals", topics: "Process Synchronization, Virtual Memory, Distributed Caching, Network Protocols", weightage: "Medium" }
    ],
    pastQuestions: [
      { q: "Serialize and Deserialize a Binary Tree (LeetCode 297)", type: "Coding" },
      { q: "Alien Dictionary / Course Schedule II - Topological Sort", type: "Coding" },
      { q: "Trapping Rain Water II (2D Elevation Map using Heap)", type: "Coding" },
      { q: "Tell me about a time you worked on a project with vague requirements.", type: "Googleyness" },
      { q: "How would you design a rate limiter for Google Search API?", type: "System Design" }
    ],
    tips: [
      "Always communicate your thoughts out loud before writing a single line of code.",
      "Ask clarifying questions regarding input bounds, duplicates, negative numbers, and null values.",
      "Write modular, clean code with descriptive variable names — Google penalizes hacky shortcuts."
    ],
    careerUrl: "https://careers.google.com"
  },
  {
    id: "comp-microsoft",
    name: "Microsoft",
    tier: "Tier 1 (Big Tech)",
    category: "Product Giant",
    monogram: "MS",
    logoBg: "linear-gradient(135deg, #00A4EF, #7FBA00)",
    headquarters: "Redmond, WA / India (Hyderabad, Bengaluru, Noida)",
    rating: 4.4,
    ctcRange: "₹28 - ₹42 LPA (Base: ₹16-19L, Stocks: ~$35k, Joining Bonus: ₹5L)",
    hiringModes: ["Campus Drives (Engage / Future Ready)", "Off-campus Opportunities", "Imagine Cup", "Career Portal"],
    eligibility: {
      minCgpa: "7.0 CGPA or 70% in Graduation",
      backlogs: "0 active backlogs allowed",
      branches: "B.Tech/M.Tech (CSE, IT, ECE, EE, Mathematics)",
      gapYear: "Max 1 year allowed"
    },
    overview: "Microsoft evaluates candidates on strong algorithmic thinking, object-oriented software engineering principles, system architecture, and growth mindset.",
    rounds: [
      {
        roundNumber: 1,
        title: "Online Assessment (Codility)",
        duration: "70-90 Minutes",
        platform: "Codility",
        description: "Usually 2 to 3 coding problems ranging from LeetCode Easy to Medium-Hard. String manipulation, arrays, bit manipulation, and greedy approaches are frequent.",
        focus: ["Strings", "Greedy", "Bit Manipulation", "Arrays"]
      },
      {
        roundNumber: 2,
        title: "Technical Interview 1 (DSA & Coding)",
        duration: "45-60 Minutes",
        platform: "Microsoft Teams",
        description: "Live coding focusing on Data Structures (Linked Lists, Binary Trees, Stacks/Queues) and Object Oriented Design.",
        focus: ["Linked Lists", "Trees", "OOPs Design", "Recursion"]
      },
      {
        roundNumber: 3,
        title: "Technical Interview 2 (DSA + CS Core)",
        duration: "45-60 Minutes",
        platform: "Microsoft Teams",
        description: "Deeper problem solving, OS concepts (multithreading, deadlock, mutex), DBMS indexing, and Low-Level Design (LLD).",
        focus: ["Low Level Design", "OS & Multithreading", "DBMS", "Graphs"]
      },
      {
        roundNumber: 4,
        title: "AA Round (As-Appropriate / Partner Director Round)",
        duration: "45-60 Minutes",
        platform: "Microsoft Teams",
        description: "Conducted by a Partner Engineering Manager. High focus on past projects, architecture choices, leadership, and Microsoft culture (Growth Mindset).",
        focus: ["Growth Mindset", "Past Projects", "Architecture", "Cultural Fit"]
      }
    ],
    syllabus: [
      { section: "Coding & DSA", topics: "Linked Lists, Binary Trees & BST, Dynamic Programming, Arrays & Strings", weightage: "High" },
      { section: "CS Core Fundamentals", topics: "Threads vs Processes, Mutex & Semaphores, Indexing, ACID, SOLID Principles", weightage: "High" },
      { section: "System Design", topics: "Design Parking Lot, Design URL Shortener, LRU Cache implementation", weightage: "Medium" }
    ],
    pastQuestions: [
      { q: "LRU Cache Implementation with O(1) Get and Put", type: "Coding" },
      { q: "Lowest Common Ancestor in Binary Tree & BST", type: "Coding" },
      { q: "Reverse Nodes in k-Group in Linked List", type: "Coding" },
      { q: "Explain Virtual Memory, Paging, and Page Fault handling in Windows/Linux.", type: "CS Fundamentals" },
      { q: "Tell me about a time you failed and what you learned from the experience.", type: "Behavioral" }
    ],
    tips: [
      "Pay special attention to Linked Lists, Binary Trees, and OOP design patterns.",
      "Emphasize growth mindset — explain how you learn from bugs and mistakes.",
      "Be prepared to explain every single project listed on your resume in architectural depth."
    ],
    careerUrl: "https://careers.microsoft.com"
  },
  {
    id: "comp-amazon",
    name: "Amazon",
    tier: "Tier 1 (FAANG)",
    category: "Product Giant",
    monogram: "AMZ",
    logoBg: "linear-gradient(135deg, #FF9900, #146EB4)",
    headquarters: "Seattle, WA / India (Bengaluru, Hyderabad, Chennai, Pune)",
    rating: 4.2,
    ctcRange: "₹30 - ₹44 LPA (Base: ₹16-18L, 1st yr bonus: ₹8L, 2nd yr bonus: ₹6L, RSUs)",
    hiringModes: ["Amazon WoW (Women in Tech)", "Campus Drives", "Off-campus OA invites", "Employee Referrals"],
    eligibility: {
      minCgpa: "6.5 CGPA or 65% aggregate",
      backlogs: "0 active backlogs at time of joining",
      branches: "BE / B.Tech / ME / M.Tech in CS/IT/Circuital branches",
      gapYear: "Up to 2 years allowed"
    },
    overview: "Amazon evaluates candidates on two equal pillars: Algorithmic Rigor and the famous **16 Amazon Leadership Principles (LPs)**. Almost 50% of every interview round is LP behavioral questions!",
    rounds: [
      {
        roundNumber: 1,
        title: "Online Assessment (OA 1, 2 & 3)",
        duration: "105 Minutes",
        platform: "HackerRank",
        description: "2 Coding questions (LeetCode Medium) + Work Style Assessment + Amazon Leadership Principles scenario simulator.",
        focus: ["Arrays", "Sliding Window", "BFS/DFS", "Work Style Assessment"]
      },
      {
        roundNumber: 2,
        title: "Technical Interview 1",
        duration: "60 Minutes",
        platform: "Amazon Chime / LiveCode",
        description: "20 mins on 2 Leadership Principles (Customer Obsession, Bias for Action) + 40 mins on 1-2 medium DSA problems.",
        focus: ["Leadership Principles", "Trees", "Graphs", "HashMaps"]
      },
      {
        roundNumber: 3,
        title: "Technical Interview 2",
        duration: "60 Minutes",
        platform: "Amazon Chime / LiveCode",
        description: "Leadership Principles (Ownership, Deep Dive) + Problem solving on Heaps, Dynamic Programming, or Low Level Design.",
        focus: ["Heaps", "Dynamic Programming", "LLD", "LPs"]
      },
      {
        roundNumber: 4,
        title: "The Bar Raiser Round",
        duration: "60 Minutes",
        platform: "Amazon Chime / LiveCode",
        description: "Conducted by an independent certified Bar Raiser outside the hiring team. Evaluates if the candidate raises the bar of Amazon engineers. Heavy LP interrogation + complex coding problem.",
        focus: ["Bar Raiser", "Leadership Principles", "Edge Cases", "Scalability"]
      }
    ],
    syllabus: [
      { section: "DSA Core", topics: "Trees (BFS/DFS), Graphs (Dijkstra/Topological), Heaps (Top K), Dynamic Programming", weightage: "High" },
      { section: "Leadership Principles", topics: "Customer Obsession, Ownership, Invent & Simplify, Bias for Action, Dive Deep, Earn Trust", weightage: "Critical" },
      { section: "System & OOP Design", topics: "Design a File System, Design Parking Lot, SOLID Principles", weightage: "Medium" }
    ],
    pastQuestions: [
      { q: "Rotting Oranges / Multi-source BFS (LeetCode 994)", type: "Coding" },
      { q: "Word Break I & II (Dynamic Programming + Trie)", type: "Coding" },
      { q: "K Closest Points to Origin (Max Heap / QuickSelect)", type: "Coding" },
      { q: "Tell me about a time you took a calculated risk and failed.", type: "Leadership Principles" },
      { q: "Give an example of a time when you went above and beyond for a customer.", type: "Leadership Principles" }
    ],
    tips: [
      "Prepare 2 distinct real stories for each of the 16 Leadership Principles using the STAR method.",
      "Use data metrics in your answers (e.g. 'Improved speed by 35%', 'Reduced memory by 40MB').",
      "Always write optimal code with O(1) or minimal auxiliary space when asked."
    ],
    careerUrl: "https://amazon.jobs"
  },
  {
    id: "comp-tcs",
    name: "Tata Consultancy Services (TCS)",
    tier: "Tier 2 / Mass Recruiter & Digital",
    category: "IT Services & Consulting",
    monogram: "TCS",
    logoBg: "linear-gradient(135deg, #001F3F, #17A2B8)",
    headquarters: "Mumbai, India",
    rating: 3.9,
    ctcRange: "TCS Ninja: ₹3.36 LPA | TCS Digital: ₹7.2 LPA | TCS Prime: ₹9.0 - ₹11.5 LPA",
    hiringModes: ["TCS National Qualifier Test (NQT)", "TCS CodeVita Contest", "TCS HackQuest"],
    eligibility: {
      minCgpa: "Minimum 60% or 6.0 CGPA across 10th, 12th, and B.Tech/Graduation",
      backlogs: "Only 1 active backlog permitted during exam; 0 backlogs at joining",
      branches: "All Engineering Branches eligible (CSE, IT, ECE, EEE, Mechanical, Civil, Chemical, etc.)",
      gapYear: "Maximum 2 years of overall education gap permitted"
    },
    overview: "TCS recruits through its flagship NQT assessment. Scores determine allotment to Ninja (standard IT), Digital (modern digital tech), or Prime (R&D and advanced AI) cadres.",
    rounds: [
      {
        roundNumber: 1,
        title: "TCS NQT Cognitive + Technical Assessment",
        duration: "165 Minutes",
        platform: "TCS iON Test Center / Proctored Online",
        description: "Part A (Cognitive): Numerical Ability, Verbal Ability, Reasoning Ability. Part B (Technical): Advanced Quantitative, Reasoning, and Hands-on Coding (2 problems).",
        focus: ["Aptitude", "Reasoning", "Verbal", "Hands-on Coding"]
      },
      {
        roundNumber: 2,
        title: "Technical Interview",
        duration: "30-45 Minutes",
        platform: "In-person or Microsoft Teams",
        description: "Tests programming fundamentals (C/C++/Java/Python), SQL queries, basic DSA (Arrays, Strings, Searching/Sorting), and Final Year projects.",
        focus: ["C/Java/Python", "SQL Queries", "Final Year Project", "OOP Basics"]
      },
      {
        roundNumber: 3,
        title: "Managerial & HR Interview",
        duration: "20-30 Minutes",
        platform: "In-person or Teams",
        description: "Situational questions, relocation willingness, night shift flexibility, communication skills, and company background knowledge.",
        focus: ["Communication", "Work Relocation", "Behavioral", "Company Knowledge"]
      }
    ],
    syllabus: [
      { section: "Numerical Ability", topics: "Time & Work, Speed Distance, Profit & Loss, Percentages, Probability", weightage: "High" },
      { section: "Verbal Ability", topics: "Reading Comprehension, Sentence Completion, Para Jumbles, Error Spotting", weightage: "Medium" },
      { section: "Reasoning Ability", topics: "Data Arrangements, Syllogisms, Blood Relations, Coding-Decoding", weightage: "High" },
      { section: "Hands-on Coding", topics: "Arrays, Strings, Matrix manipulations, Prime Numbers, Fibonacci, Pattern Printing", weightage: "Critical" }
    ],
    pastQuestions: [
      { q: "Given an array of integers, segregate 0s, 1s, and 2s without sorting.", type: "Coding" },
      { q: "Find the majority element in an array that appears more than n/2 times.", type: "Coding" },
      { q: "Write an SQL query to find the 2nd highest salary from the Employee table.", type: "SQL" },
      { q: "What is the difference between Call by Value and Call by Reference?", type: "Technical" },
      { q: "Are you comfortable relocating to any TCS location in India?", type: "HR" }
    ],
    tips: [
      "No negative marking in TCS NQT — attempt every single question.",
      "Solving both coding questions with 100% test case pass guarantees an upgrade to Digital/Prime cadre.",
      "Prepare your final year project thoroughly; interviewers grill on your specific role."
    ],
    careerUrl: "https://www.tcs.com/careers"
  },
  {
    id: "comp-infosys",
    name: "Infosys",
    tier: "Tier 2 / Mass & Specialist",
    category: "IT Services & Consulting",
    monogram: "INF",
    logoBg: "linear-gradient(135deg, #007CC3, #003366)",
    headquarters: "Bengaluru, India",
    rating: 3.8,
    ctcRange: "System Engineer (SE): ₹3.6 LPA | DSE: ₹6.25 LPA | Specialist Programmer (SP): ₹9.5 - ₹12 LPA",
    hiringModes: ["Infosys On-Campus Drives", "InfyTQ Certification Exam", "HackWithInfy Coding Competition"],
    eligibility: {
      minCgpa: "Minimum 65% or 6.5 CGPA in 10th, 12th, and College",
      backlogs: "0 active backlogs allowed at time of application",
      branches: "B.E / B.Tech / M.E / M.Tech / MCA / M.Sc across all disciplines",
      gapYear: "Max 1 year education gap permitted"
    },
    overview: "Infosys recruits System Engineers via general assessments and Specialist Programmers (elite competitive programmers) via HackWithInfy and InfyTQ competitions.",
    rounds: [
      {
        roundNumber: 1,
        title: "Infosys Online Qualifier Exam",
        duration: "100 Minutes",
        platform: "Infosys Online Platform",
        description: "Reasoning Ability (15 Qs), Technical Ability / Mathematical Thinking (10 Qs), Verbal Ability (20 Qs), Pseudocode (5 Qs), Numerical Puzzle Solving (4 Qs).",
        focus: ["Mathematical Thinking", "Pseudocode", "Puzzles", "Verbal"]
      },
      {
        roundNumber: 2,
        title: "HackWithInfy (For SP & DSE Roles)",
        duration: "180 Minutes",
        platform: "HackerEarth",
        description: "3 Hard competitive programming problems (Dynamic Programming, Graph Theory, Segment Trees, Greedy). Top performers directly get SP (9.5L) interviews.",
        focus: ["Advanced DP", "Graphs", "Competitive Coding"]
      },
      {
        roundNumber: 3,
        title: "Technical + HR Interview",
        duration: "30-40 Minutes",
        platform: "Infosys Meridian / Video Call",
        description: "Covers resume projects, OOPs concepts, DBMS queries, basic algorithms, and behavioral questions.",
        focus: ["OOPs", "DBMS", "Data Structures", "Communication"]
      }
    ],
    syllabus: [
      { section: "Mathematical Ability", topics: "Permutation & Combination, Probability, Series, Mixtures & Alligations", weightage: "High" },
      { section: "Pseudocode & Logic", topics: "Loop traces, recursion output tracing, bitwise operations", weightage: "High" },
      { section: "Verbal Ability", topics: "Fill in blanks, Critical reasoning, Sentence correction", weightage: "Medium" }
    ],
    pastQuestions: [
      { q: "Count pairs in an array with given sum.", type: "Coding" },
      { q: "Longest Increasing Subsequence length using O(N log N) patience sorting.", type: "Coding SP" },
      { q: "Explain Polymorphism with a real-life code example in Java/C++.", type: "OOP" },
      { q: "What is Normalization? Explain 1NF, 2NF, 3NF, and BCNF.", type: "DBMS" },
      { q: "Why do you want to join Infosys?", type: "HR" }
    ],
    tips: [
      "In the Infosys exam, each section has individual sectional cutoffs! Do not neglect Verbal or Pseudocode.",
      "Pseudocode questions have negative marking — be careful when tracing nested loops.",
      "Participate in HackWithInfy; it is the easiest pathway to 9.5 LPA SP role without standard aptitude hurdles."
    ],
    careerUrl: "https://www.infosys.com/careers"
  },
  {
    id: "comp-wipro",
    name: "Wipro",
    tier: "Tier 2 / Mass & Turbo",
    category: "IT Services & Consulting",
    monogram: "WIP",
    logoBg: "linear-gradient(135deg, #FF6F00, #4A148C)",
    headquarters: "Bengaluru, India",
    rating: 3.7,
    ctcRange: "Elite NLTH: ₹3.5 LPA | Turbo: ₹6.5 LPA | Star: ₹10.0 - ₹12.0 LPA",
    hiringModes: ["Wipro Elite National Talent Hunt (NLTH)", "Wipro Turbo Upgrade Test", "Career Portal"],
    eligibility: {
      minCgpa: "60% or 6.0 CGPA in 10th, 12th, and B.Tech",
      backlogs: "Max 1 active backlog permitted at assessment; 0 at joining",
      branches: "All branches of Engineering permitted",
      gapYear: "Maximum 3 years gap permitted"
    },
    overview: "Wipro conducts the Elite NLTH assessment nationwide. Top percentile scorers are invited for Turbo upgrade coding tests offering ₹6.5 LPA packages.",
    rounds: [
      {
        roundNumber: 1,
        title: "Elite NLTH Online Assessment",
        duration: "128 Minutes",
        platform: "Superset / AMCAT",
        description: "Section 1: Aptitude (Quants, Logical, English). Section 2: Written Communication Test (20 min essay writing). Section 3: Online Coding (2 problems in 60 mins).",
        focus: ["Aptitude", "Essay Writing", "AMCAT Coding"]
      },
      {
        roundNumber: 2,
        title: "Technical Interview",
        duration: "30 Minutes",
        platform: "MS Teams / In-person",
        description: "Testing candidate's preferred language fundamentals, basic data structures (Array, Stack, String), and academic projects.",
        focus: ["C/Java Basics", "Array/String Logic", "Project Discussion"]
      },
      {
        roundNumber: 3,
        title: "HR Interview",
        duration: "15-20 Minutes",
        platform: "Video Call",
        description: "Standard HR verification, relocation consent, communication fluency, and background check.",
        focus: ["HR Questions", "Communication", "Relocation"]
      }
    ],
    syllabus: [
      { section: "Quantitative Ability", topics: "Numbers, HCF & LCM, Time and Distance, Simple Interest", weightage: "Medium" },
      { section: "Written Communication", topics: "Grammar, Vocabulary, Punctuation, Essay Structure", weightage: "Medium" },
      { section: "Coding", topics: "Pattern Printing, Palindromes, Matrix Transpose, GCD calculation", weightage: "High" }
    ],
    pastQuestions: [
      { q: "Check whether a given number is an Armstrong number or not.", type: "Coding" },
      { q: "Count vowels and consonants in a string without using built-in methods.", type: "Coding" },
      { q: "What is an abstract class vs interface in Java?", type: "Technical" },
      { q: "Explain the difference between Primary Key and Unique Key.", type: "DBMS" },
      { q: "Where do you see yourself after 3 years at Wipro?", type: "HR" }
    ],
    tips: [
      "In the essay writing test, do not make grammatical errors or use backspace repeatedly; AI grades essay cohesion.",
      "Practice basic C/Java logic questions on AMCAT/Automata platform.",
      "Clear articulation of your engineering project creates a lasting positive impression."
    ],
    careerUrl: "https://careers.wipro.com"
  },
  {
    id: "comp-accenture",
    name: "Accenture",
    tier: "Tier 2 / Tech Consulting",
    category: "Consulting & Services",
    monogram: "ACN",
    logoBg: "linear-gradient(135deg, #A100FF, #000000)",
    headquarters: "Dublin, Ireland / India (Pan India)",
    rating: 4.0,
    ctcRange: "Associate Software Engineer (ASE): ₹4.5 LPA | Advanced ASE (AASE): ₹6.5 - ₹7.0 LPA",
    hiringModes: ["Accenture On-Campus / Off-Campus Drives", "Career Portal Registration"],
    eligibility: {
      minCgpa: "Minimum 65% or 6.5 CGPA in Graduation",
      backlogs: "0 active backlogs during selection process",
      branches: "BE, B.Tech, ME, M.Tech, MCA, M.Sc (CS/IT)",
      gapYear: "Maximum 1 year education gap after 12th"
    },
    overview: "Accenture's recruitment uses an elimination-based online assessment powered by Wheebox or HackerEarth, testing cognitive skills, technical MCQs, coding, and communication fluency.",
    rounds: [
      {
        roundNumber: 1,
        title: "Cognitive & Technical Assessment (Round 1)",
        duration: "90 Minutes",
        platform: "Wheebox",
        description: "Elimination round! Cognitive: English, Critical Thinking, Abstract Reasoning. Technical: Common Tech MCQs, Pseudocode, Networking & Cloud basics.",
        focus: ["Critical Thinking", "Pseudocode", "Cloud & Security Basics", "English"]
      },
      {
        roundNumber: 2,
        title: "Coding Assessment (Round 2)",
        duration: "45 Minutes",
        platform: "Wheebox / HackerEarth",
        description: "Immediately unlocked after passing Round 1. Consists of 2 coding problems (1 easy, 1 medium). Cleared candidates are evaluated for Advanced ASE (6.5 LPA).",
        focus: ["Strings", "Arrays", "Math"]
      },
      {
        roundNumber: 3,
        title: "Communication Assessment",
        duration: "20 Minutes",
        platform: "Pearson / automated speech analyzer",
        description: "Tests spoken English fluency, sentence reading, listening comprehension, story retelling, and open speaking.",
        focus: ["Pronunciation", "Fluency", "Listening Comprehension"]
      },
      {
        roundNumber: 4,
        title: "Technical + HR Interview",
        duration: "25-35 Minutes",
        platform: "Online Video Interview",
        description: "Integrated interview focusing on resume projects, agile basics, problem solving, team conflicts, and organizational adaptability.",
        focus: ["Projects", "Agile", "Behavioral", "Teamwork"]
      }
    ],
    syllabus: [
      { section: "Cognitive", topics: "Critical Reasoning, Syllogisms, Abstract reasoning, Vocabulary", weightage: "High" },
      { section: "Technical Essentials", topics: "Pseudocode, MS Office, Cloud Fundamentals, Network Security", weightage: "Medium" },
      { section: "Hands-on Coding", topics: "Arrays, String algorithms, Math operations", weightage: "High" }
    ],
    pastQuestions: [
      { q: "Calculate total operations to make all array elements equal.", type: "Coding" },
      { q: "Convert binary string to decimal and count set bits.", type: "Coding" },
      { q: "What is Cloud Computing? What are IaaS, PaaS, and SaaS?", type: "Technical" },
      { q: "Describe a challenging situation in a college team project and how you solved it.", type: "Behavioral" },
      { q: "Why Accenture over other technology firms?", type: "HR" }
    ],
    tips: [
      "The Cognitive round is strictly elimination-based — you must clear individual section benchmarks.",
      "Use a good quality headset in a quiet room for the Communication assessment.",
      "Highlight teamwork, fast learning ability, and client-centric attitude during the interview."
    ],
    careerUrl: "https://www.accenture.com/in-en/careers"
  },
  {
    id: "comp-goldman",
    name: "Goldman Sachs",
    tier: "Tier 1 / FinTech Investment Bank",
    category: "FinTech & Investment Banking",
    monogram: "GS",
    logoBg: "linear-gradient(135deg, #003865, #2196F3)",
    headquarters: "New York, NY / India (Bengaluru, Hyderabad)",
    rating: 4.1,
    ctcRange: "₹25 - ₹36 LPA (Base: ₹18-20L, Relocation: ₹2L, Performance Bonus: ₹6-10L)",
    hiringModes: ["Goldman Sachs Engineering Campus Hiring Program", "Off-campus Hackathons", "Women in Tech Program"],
    eligibility: {
      minCgpa: "Minimum 7.0 CGPA throughout college",
      backlogs: "0 active backlogs",
      branches: "B.Tech/M.Tech (All engineering branches eligible; math/stats preferred)",
      gapYear: "Up to 1 year allowed"
    },
    overview: "Goldman Sachs engineering tests rigorous mathematical ability, advanced DSA (DP, Graph, Trees), high-speed computing, and financial curiosity.",
    rounds: [
      {
        roundNumber: 1,
        title: "Aptitude + Math Qualifier",
        duration: "66 Minutes",
        platform: "HackerRank",
        description: "Numerical computation, probability, advanced math, linear algebra, reasoning, and CS fundamentals MCQs.",
        focus: ["Probability", "Permutations", "Linear Algebra", "CS MCQs"]
      },
      {
        roundNumber: 2,
        title: "Technical Coding Round (OA 2)",
        duration: "135 Minutes",
        platform: "HackerRank",
        description: "2-3 complex coding problems (DP, Graph, Hard Math) + subjective CS questions on OS/DBMS.",
        focus: ["Dynamic Programming", "Graph Theory", "Advanced Math"]
      },
      {
        roundNumber: 3,
        title: "Technical Interview Rounds (3 to 4 rounds)",
        duration: "45-60 Mins Each",
        platform: "Zoom / CoderPad",
        description: "Live coding on CoderPad, multithreading, concurrency locks, operating system internals, database normalization, and puzzle solving.",
        focus: ["CoderPad Live Coding", "Multithreading", "Puzzles", "DBMS"]
      }
    ],
    syllabus: [
      { section: "Advanced Mathematics", topics: "Conditional Probability, Bayes Theorem, Matrices, Expectation value", weightage: "Critical" },
      { section: "Algorithms", topics: "Dynamic Programming, Trees, Graphs, HashMaps, Two Pointers", weightage: "Critical" },
      { section: "CS Core", topics: "Deadlock prevention, Mutex/Semaphore, Transactions, B-Trees", weightage: "High" }
    ],
    pastQuestions: [
      { q: "Find the total number of non-overlapping sub-arrays with sum equal to target.", type: "Coding" },
      { q: "Calculate probability of winning in a coin-toss game with biased coins.", type: "Math" },
      { q: "Implement a thread-safe Queue in Java/C++.", type: "CS Systems" },
      { q: "25 Horses 5 Tracks puzzle to find the top 3 fastest horses.", type: "Puzzle" }
    ],
    tips: [
      "Brush up on Probability and Combinatorics; GS loves testing mathematical intuition.",
      "Practice writing thread-safe code and explain concurrency locks clearly.",
      "Solve classic mathematical puzzles (e.g. 25 horses, burning ropes, Monty Hall problem)."
    ],
    careerUrl: "https://www.goldmansachs.com/careers"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COMPANIES_DATA };
}
