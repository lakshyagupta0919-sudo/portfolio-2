/* ==========================================================================
   LAKSHYA - Jobs & Internships Dataset
   ========================================================================== */

const JOBS_DATA = [
  {
    id: "job-1",
    title: "Software Development Engineer - 1",
    company: "Google",
    monogram: "G",
    logoBg: "linear-gradient(135deg, #4285F4, #34A853)",
    location: "Bengaluru, Karnataka (Hybrid)",
    type: "Full-time",
    roleCategory: "SDE",
    experience: "Fresher / 0-1 Yr",
    salary: "₹32 - ₹42 LPA",
    salaryNum: 35,
    mode: "Hybrid",
    postedDaysAgo: 2,
    applicantsCount: 342,
    skills: ["C++", "Java", "DSA", "Distributed Systems", "Algorithms"],
    overview: "Google is hiring Software Engineers to build scalable web services, storage infrastructure, and high-performance algorithms for Google Search and Cloud platforms.",
    responsibilities: [
      "Design, implement, test, deploy, and maintain large-scale software solutions.",
      "Manage individual project priorities, deadlines, and deliverables.",
      "Collaborate with cross-functional teams including product managers and UX designers.",
      "Optimize algorithms for latency, scalability, and high concurrency."
    ],
    requirements: [
      "B.Tech / B.E / M.Tech in Computer Science or related STEM field.",
      "Solid foundations in Data Structures, Algorithms, and Object-Oriented Design.",
      "Proficiency in one or more languages: C++, Java, Python, or Go.",
      "Strong analytical and problem-solving abilities."
    ],
    perks: ["Relocation Assistance", "Comprehensive Health Insurance", "Stock Grants (GSUs)", "Free Gourmet Meals", "Learning Stipend"]
  },
  {
    id: "job-2",
    title: "Graduate Software Engineer (Freshers 2026)",
    company: "Microsoft",
    monogram: "MS",
    logoBg: "linear-gradient(135deg, #00A4EF, #7FBA00)",
    location: "Hyderabad, Telangana (Hybrid)",
    type: "Full-time",
    roleCategory: "SDE",
    experience: "Fresher / 0-1 Yr",
    salary: "₹28 - ₹36 LPA",
    salaryNum: 30,
    mode: "Hybrid",
    postedDaysAgo: 1,
    applicantsCount: 512,
    skills: ["C#", "C++", "Azure", "DSA", "System Design"],
    overview: "Join Microsoft Azure and Developer Division to craft next-generation enterprise cloud platforms and AI-infused productivity developer tools.",
    responsibilities: [
      "Develop reliable, high-throughput microservices for Azure Cloud infrastructure.",
      "Participate in design reviews and implement resilient API architectures.",
      "Work closely with senior principal engineers to diagnose production bottlenecks."
    ],
    requirements: [
      "Graduating in 2025/2026 with a degree in CSE, IT, or allied fields.",
      "Minimum 7.0 CGPA throughout academic career with 0 active backlogs.",
      "Hands-on expertise with C++, C#, Java, or Python."
    ],
    perks: ["Annual Bonus", "Azure Credits & Tech Gadgets", "Wellness Allowance", "Flexible Working Hours"]
  },
  {
    id: "job-3",
    title: "Software Development Engineer Intern",
    company: "Amazon",
    monogram: "AMZ",
    logoBg: "linear-gradient(135deg, #FF9900, #146EB4)",
    location: "Bengaluru, Karnataka (Onsite)",
    type: "Internship",
    roleCategory: "SDE",
    experience: "Fresher / 0-1 Yr",
    salary: "₹80,000 / month Stipend (PPO: ₹30-44 LPA)",
    salaryNum: 32,
    mode: "Onsite",
    postedDaysAgo: 3,
    applicantsCount: 780,
    skills: ["Java", "AWS", "DSA", "OOP", "SQL"],
    overview: "Amazon is looking for passionate Software Development Engineer Interns (6-month internship with high Pre-Placement Offer conversion) for its Prime Video and eCommerce teams.",
    responsibilities: [
      "Collaborate with senior software engineers to solve real customer business problems.",
      "Write high-quality, unit-tested, clean production code.",
      "Build tooling and telemetry pipelines using AWS services."
    ],
    requirements: [
      "Current pre-final or final year B.Tech/M.Tech student.",
      "Strong computer science fundamentals (OS, DBMS, Networks, OOP).",
      "Demonstrated ability to solve LeetCode medium/hard DSA questions."
    ],
    perks: ["Free Cab Pickup & Drop", "Housing Stipend / Hotel Stay", "Direct PPO Path", "Amazon Prime Membership"]
  },
  {
    id: "job-4",
    title: "Full Stack Developer",
    company: "Atlassian",
    monogram: "ATL",
    logoBg: "linear-gradient(135deg, #0052CC, #2684FF)",
    location: "Remote (India)",
    type: "Full-time",
    roleCategory: "Full Stack",
    experience: "1-3 Yrs",
    salary: "₹26 - ₹34 LPA",
    salaryNum: 28,
    mode: "Remote",
    postedDaysAgo: 4,
    applicantsCount: 290,
    skills: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
    overview: "Help build the collaboration tools loved by millions of teams globally (Jira, Confluence, Trello) with high emphasis on modern frontend and resilient backends.",
    responsibilities: [
      "Deliver smooth, accessible web UI components with modern React and TypeScript.",
      "Design robust backend microservices handling millions of events daily.",
      "Contribute to code review guidelines and frontend build pipeline optimizations."
    ],
    requirements: [
      "1+ years of full-stack engineering experience.",
      "Fluency in JavaScript/TypeScript, React, Node.js, and REST/GraphQL APIs.",
      "Deep understanding of browser performance and state management."
    ],
    perks: ["Work from Anywhere policy", "Home Office Setup Grant ($1000)", "Health & Well-being Subsidy", "Unlimited PTO"]
  },
  {
    id: "job-5",
    title: "Frontend Engineer (React / Next.js)",
    company: "Razorpay",
    monogram: "RZP",
    logoBg: "linear-gradient(135deg, #0C2340, #3395FF)",
    location: "Bengaluru, Karnataka (Hybrid)",
    type: "Full-time",
    roleCategory: "Frontend",
    experience: "1-3 Yrs",
    salary: "₹20 - ₹28 LPA",
    salaryNum: 22,
    mode: "Hybrid",
    postedDaysAgo: 1,
    applicantsCount: 195,
    skills: ["React", "JavaScript", "Redux", "TailwindCSS", "Web Security"],
    overview: "Power frictionless payments for millions of businesses across the globe. Join Razorpay's Checkout & Payment Gateway core frontend engineering team.",
    responsibilities: [
      "Architect lightning-fast checkout experiences with sub-second loading metrics.",
      "Ensure airtight payment security and PCI-DSS compliance.",
      "Implement design system tokens across merchant and consumer web suites."
    ],
    requirements: [
      "Strong JavaScript / TypeScript fundamentals (Closures, Event Loop, DOM).",
      "Demonstrated experience with React, state management, and web vitals.",
      "Eye for pixel-perfect UI and responsive cross-browser compatibility."
    ],
    perks: ["ESOP Grants", "Health Insurance covering Parents", "Book Reimbursement", "Skill Upgrades Program"]
  },
  {
    id: "job-6",
    title: "Backend Engineer (Go / Distributed Systems)",
    company: "Swiggy",
    monogram: "SWG",
    logoBg: "linear-gradient(135deg, #FC8019, #E23744)",
    location: "Bengaluru, Karnataka (Remote / Hybrid)",
    type: "Full-time",
    roleCategory: "Backend",
    experience: "1-3 Yrs",
    salary: "₹22 - ₹30 LPA",
    salaryNum: 25,
    mode: "Hybrid",
    postedDaysAgo: 5,
    applicantsCount: 310,
    skills: ["Golang", "Kafka", "Redis", "PostgreSQL", "Docker"],
    overview: "Swiggy engineering tackles hyper-scale routing, real-time tracking, and lightning-fast logistics with over 2 million orders delivered daily.",
    responsibilities: [
      "Design high-throughput, low-latency microservices in Go.",
      "Manage message brokers (Kafka/RabbitMQ) for real-time driver allocation.",
      "Ensure 99.99% uptime during peak dinner rushes and mega IPL events."
    ],
    requirements: [
      "Solid knowledge of Go, Java, or C++ with relational and NoSQL databases.",
      "Hands-on experience with caching strategies (Redis) and event streaming.",
      "Deep understanding of concurrency, threads, and distributed locks."
    ],
    perks: ["Swiggy One Gold Free", "Medical Insurance", "Flexible Leaves", "Gym Reimbursement"]
  },
  {
    id: "job-7",
    title: "Systems Engineer (Prime / Digital Track)",
    company: "Tata Consultancy Services (TCS)",
    monogram: "TCS",
    logoBg: "linear-gradient(135deg, #001F3F, #17A2B8)",
    location: "Pan India (Pune, Mumbai, Bengaluru, Chennai)",
    type: "Full-time",
    roleCategory: "SDE",
    experience: "Fresher / 0-1 Yr",
    salary: "₹7.2 - ₹9.0 LPA",
    salaryNum: 8,
    mode: "Onsite",
    postedDaysAgo: 1,
    applicantsCount: 1450,
    skills: ["Java", "Python", "SQL", "Cloud Computing", "DSA"],
    overview: "TCS is inviting top engineering graduates for Prime and Digital cadre via TCS National Qualifier Test (NQT). Selected candidates work on leading AI and enterprise modernization projects.",
    responsibilities: [
      "Participate in client project development cycles using Java or Python frameworks.",
      "Implement database schemas, automated testing, and CI/CD pipelines.",
      "Collaborate in agile sprints across Fortune 500 enterprise migrations."
    ],
    requirements: [
      "B.E / B.Tech / M.E / M.Tech / MCA with minimum 60% or 6.0 CGPA.",
      "No active backlogs at the time of joining.",
      "Strong aptitude, reasoning, and foundational coding abilities."
    ],
    perks: ["Higher education sponsorship (TCS Ignite)", "Overseas opportunities", "Health Insurance"]
  },
  {
    id: "job-8",
    title: "Specialist Programmer (SP) & DSE",
    company: "Infosys",
    monogram: "INF",
    logoBg: "linear-gradient(135deg, #007CC3, #003366)",
    location: "Mysuru / Bengaluru / Pune",
    type: "Full-time",
    roleCategory: "SDE",
    experience: "Fresher / 0-1 Yr",
    salary: "₹9.5 - ₹12.5 LPA",
    salaryNum: 11,
    mode: "Onsite",
    postedDaysAgo: 3,
    applicantsCount: 920,
    skills: ["Java", "Python", "DSA", "Dynamic Programming", "Graph Theory"],
    overview: "The Specialist Programmer (SP) role is the highest technical cadre for fresh engineering graduates at Infosys, designated for elite competitive coders.",
    responsibilities: [
      "Develop complex algorithmic modules and high-speed data pipelines.",
      "Tackle challenging distributed systems and cloud-native solutions.",
      "Mentor junior team members on coding standards and design best practices."
    ],
    requirements: [
      "Graduating in 2025/2026 across any engineering branch.",
      "Exceptional competitive programming credentials (CodeChef/Codeforces/LeetCode).",
      "Mastery in Dynamic Programming, Graphs, and Advanced Data Structures."
    ],
    perks: ["World-class Mysuru Global Training Campus", "Fast-track Promotion Track", "Relocation bonus"]
  },
  {
    id: "job-9",
    title: "AI / ML Research & Engineering Intern",
    company: "Microsoft Research (MSR)",
    monogram: "MSR",
    logoBg: "linear-gradient(135deg, #6B21A8, #3B82F6)",
    location: "Bengaluru, Karnataka (Hybrid)",
    type: "Internship",
    roleCategory: "AI/ML",
    experience: "Fresher / 0-1 Yr",
    salary: "₹95,000 / month Stipend",
    salaryNum: 25,
    mode: "Hybrid",
    postedDaysAgo: 2,
    applicantsCount: 430,
    skills: ["PyTorch", "Python", "Transformers", "LLMs", "Linear Algebra"],
    overview: "Work alongside leading computer scientists in Deep Learning, Large Language Models, Multi-modal representations, and Efficient AI systems.",
    responsibilities: [
      "Implement and train novel neural network architectures on GPU clusters.",
      "Benchmark model accuracy and inference speed on benchmark datasets.",
      "Write research papers and open-source models for the community."
    ],
    requirements: [
      "Pursuing Bachelor's or Master's in CS, AI, Statistics, or Math.",
      "Strong background in Linear Algebra, Probability, and Deep Learning.",
      "Proficiency in PyTorch or JAX."
    ],
    perks: ["Access to Azure H100 Superclusters", "Mentorship from Top AI Scientists", "Publication support"]
  },
  {
    id: "job-10",
    title: "DevOps & Cloud Infrastructure Engineer",
    company: "BrowserStack",
    monogram: "BST",
    logoBg: "linear-gradient(135deg, #00A651, #00773A)",
    location: "Mumbai / Remote",
    type: "Full-time",
    roleCategory: "DevOps",
    experience: "1-3 Yrs",
    salary: "₹18 - ₹26 LPA",
    salaryNum: 20,
    mode: "Remote",
    postedDaysAgo: 6,
    applicantsCount: 160,
    skills: ["Kubernetes", "Docker", "Terraform", "AWS", "Prometheus"],
    overview: "BrowserStack operates a fleet of over 20,000 real mobile devices and desktop browsers. Manage massive cloud scale infrastructure with automation.",
    responsibilities: [
      "Manage multi-cloud Kubernetes clusters handling millions of automated tests.",
      "Automate infrastructure provisioning using Terraform and Ansible.",
      "Build real-time monitoring and alerting dashboards using Grafana and Prometheus."
    ],
    requirements: [
      "1+ years operating Linux systems and container orchestration (K8s).",
      "Scripting skills in Python, Bash, or Go.",
      "Strong foundation in networking, VPC, DNS, and cloud security."
    ],
    perks: ["Remote stipend", "Home office budget", "Comprehensive family insurance", "Generous equity"]
  },
  {
    id: "job-11",
    title: "Associate Software Engineer (ASE)",
    company: "Accenture",
    monogram: "ACN",
    logoBg: "linear-gradient(135deg, #A100FF, #000000)",
    location: "Gurugram / Pune / Bengaluru / Hyderabad",
    type: "Full-time",
    roleCategory: "SDE",
    experience: "Fresher / 0-1 Yr",
    salary: "₹4.5 - ₹6.5 LPA",
    salaryNum: 5,
    mode: "Hybrid",
    postedDaysAgo: 1,
    applicantsCount: 2200,
    skills: ["Java", "SQL", "Cloud Basics", "Testing", "Agile"],
    overview: "Kickstart your technology career with Accenture's industry-leading technology consulting and application development teams.",
    responsibilities: [
      "Develop and configure software applications according to client specifications.",
      "Perform unit testing, system integration testing, and bug tracking.",
      "Collaborate in cross-functional agile teams."
    ],
    requirements: [
      "BE / B.Tech / MCA with minimum 65% aggregate score.",
      "No active backlogs.",
      "Good communication skills and problem-solving mindset."
    ],
    perks: ["Certification allowances", "Global career mobility", "Health coverage"]
  },
  {
    id: "job-12",
    title: "Software Engineer (FinTech & Trading Platforms)",
    company: "Goldman Sachs",
    monogram: "GS",
    logoBg: "linear-gradient(135deg, #003865, #2196F3)",
    location: "Bengaluru, Karnataka (Onsite)",
    type: "Full-time",
    roleCategory: "SDE",
    experience: "Fresher / 0-1 Yr",
    salary: "₹25 - ₹35 LPA",
    salaryNum: 28,
    mode: "Onsite",
    postedDaysAgo: 4,
    applicantsCount: 640,
    skills: ["Java", "C++", "DSA", "Distributed Systems", "SQL"],
    overview: "Goldman Sachs engineering builds ultra-low-latency electronic trading systems, financial asset modeling, and high-security global banking networks.",
    responsibilities: [
      "Write high-frequency transactional code with strict microsecond SLAs.",
      "Develop risk management computation engines and portfolio models.",
      "Ensure financial transaction integrity and regulatory adherence."
    ],
    requirements: [
      "Strong proficiency in Java, C++, or Python with object-oriented principles.",
      "Superior problem-solving skills in algorithms and data structures.",
      "Knowledge of database internals and multithreading."
    ],
    perks: ["Exceptional Year-End Performance Bonus", "Full Medical Coverage", "Gym & Cafeteria on site"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { JOBS_DATA };
}
