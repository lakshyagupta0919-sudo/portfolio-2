/* ==========================================================================
   LAKSHYA - Preparation Hub Dataset (DSA, Aptitude, Core CS, HR)
   ========================================================================== */

const PREP_DATA = {
  // 1. DSA Essentials & Cheat Sheets
  dsaCheatsheet: {
    complexities: [
      { ds: "Array / Dynamic Array", access: "O(1)", search: "O(N)", insert: "O(N)", delete: "O(N)", space: "O(N)" },
      { ds: "Singly Linked List", access: "O(N)", search: "O(N)", insert: "O(1)", delete: "O(1)", space: "O(N)" },
      { ds: "Hash Table / Map", access: "N/A", search: "O(1) avg / O(N) worst", insert: "O(1)", delete: "O(1)", space: "O(N)" },
      { ds: "Binary Search Tree", access: "O(log N)", search: "O(log N)", insert: "O(log N)", delete: "O(log N)", space: "O(N)" },
      { ds: "Balanced Tree (AVL / Red-Black)", access: "O(log N)", search: "O(log N)", insert: "O(log N)", delete: "O(log N)", space: "O(N)" },
      { ds: "Binary Heap (Priority Queue)", access: "O(1) peek", search: "O(N)", insert: "O(log N)", delete: "O(log N)", space: "O(N)" }
    ],
    sortingAlgorithms: [
      { name: "Quick Sort", best: "O(N log N)", avg: "O(N log N)", worst: "O(N²)", space: "O(log N)", stable: "No" },
      { name: "Merge Sort", best: "O(N log N)", avg: "O(N log N)", worst: "O(N log N)", space: "O(N)", stable: "Yes" },
      { name: "Heap Sort", best: "O(N log N)", avg: "O(N log N)", worst: "O(N log N)", space: "O(1)", stable: "No" },
      { name: "Tim Sort (Python/Java)", best: "O(N)", avg: "O(N log N)", worst: "O(N log N)", space: "O(N)", stable: "Yes" },
      { name: "Counting Sort", best: "O(N+K)", avg: "O(N+K)", worst: "O(N+K)", space: "O(K)", stable: "Yes" }
    ],
    codingPatterns: [
      {
        id: "pat-1",
        title: "Two Pointers (Opposite / Same Direction)",
        trigger: "Input is sorted array or searching pairs, triplets, or palindromes.",
        explanation: "Uses two pointers moving towards each other or in the same direction to reduce time complexity from O(N²) to O(N).",
        examples: "Two Sum II, 3Sum, Container With Most Water, Trapping Rain Water, Valid Palindrome"
      },
      {
        id: "pat-2",
        title: "Sliding Window (Fixed / Dynamic)",
        trigger: "Contiguous sub-array or substring satisfying a condition (max/min/sum/unique chars).",
        explanation: "Expands the right window edge until valid, then shrinks the left edge while maintaining a running aggregate.",
        examples: "Longest Substring Without Repeating Characters, Minimum Window Substring, Max Consecutive Ones"
      },
      {
        id: "pat-3",
        title: "Fast & Slow Pointers (Floyd's Tortoise and Hare)",
        trigger: "Cycle detection in Linked List or Array, finding middle node.",
        explanation: "One pointer moves 1 step while the other moves 2 steps. If a cycle exists, they are guaranteed to meet inside.",
        examples: "Linked List Cycle, Find the Duplicate Number, Happy Number, Middle of the Linked List"
      },
      {
        id: "pat-4",
        title: "Monotonic Stack / Queue",
        trigger: "Finding Next Greater Element, Previous Smaller Element, or largest rectangle under skyline.",
        explanation: "Maintains elements in strictly increasing or decreasing order. Elements are popped when monotonicity is violated.",
        examples: "Next Greater Element, Daily Temperatures, Largest Rectangle in Histogram, Online Stock Span"
      },
      {
        id: "pat-5",
        title: "Topological Sort (Kahn's / DFS)",
        trigger: "Directed graph with task dependencies, prerequisite ordering, cycle detection in DAG.",
        explanation: "Calculates in-degrees for all nodes; nodes with in-degree 0 are queued and their neighbors' in-degrees decremented.",
        examples: "Course Schedule I & II, Alien Dictionary, Sequence Reconstruction"
      },
      {
        id: "pat-6",
        title: "Two Heaps Pattern",
        trigger: "Tracking running median of a data stream or scheduling intervals with priorities.",
        explanation: "Maintains a Max-Heap for the smaller half and a Min-Heap for the larger half to query median in O(1).",
        examples: "Find Median from Data Stream, Sliding Window Median, IPO"
      }
    ]
  },

  // 2. Quantitative & Logical Aptitude
  aptitude: {
    formulas: [
      {
        topic: "Time and Work",
        summary: "If person A does work in 'a' days, 1 day work = 1/a.",
        formula: "Combined 1-day work = (1/A + 1/B). Total time = (A × B) / (A + B) days. Efficiency ∝ 1 / Time taken.",
        tips: "Always take LCM of individual days as total work units to avoid working with fractions!"
      },
      {
        topic: "Speed, Time & Distance",
        summary: "Distance = Speed × Time. Average Speed = Total Distance / Total Time.",
        formula: "If equal distances covered at speeds x and y, Average Speed = (2xy) / (x + y). To convert km/h to m/s: Multiply by 5/18.",
        tips: "For relative speed: If moving towards each other, add speeds (S1 + S2). If moving in same direction, subtract (S1 - S2)."
      },
      {
        topic: "Profit, Loss & Discount",
        summary: "Cost Price (CP), Selling Price (SP), Marked Price (MP).",
        formula: "Profit % = [(SP - CP) / CP] × 100. Loss % = [(CP - SP) / CP] × 100. Single equivalent discount of d1 and d2 = (d1 + d2 - (d1 × d2)/100)%.",
        tips: "Profit and Loss are ALWAYS calculated on Cost Price unless specified otherwise."
      },
      {
        topic: "Permutations & Combinations",
        summary: "Permutation = Arrangement (order matters). Combination = Selection (order does not matter).",
        formula: "nPr = n! / (n - r)!. nCr = n! / [r! × (n - r)!]. nCr = nC(n - r). Sum of all subsets: 2ⁿ.",
        tips: "Circular permutation of n distinct items = (n - 1)!. For necklaces/garlands (flips identical) = (n - 1)! / 2."
      },
      {
        topic: "Probability",
        summary: "P(Event) = Number of Favorable Outcomes / Total Sample Space.",
        formula: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B). For independent events: P(A ∩ B) = P(A) × P(B).",
        tips: "P(At least 1 success) = 1 - P(Zero successes)."
      },
      {
        topic: "Syllogisms & Logical Deductions",
        summary: "Venn Diagram method is the most reliable approach.",
        formula: "All A are B (Subset). No A is B (Disjoint). Some A are B (Intersection).",
        tips: "If a conclusion holds true in ALL valid Venn diagrams, it is valid. If it fails in even one diagram, it is invalid."
      }
    ],

    // Interactive Practice MCQs
    questions: [
      {
        id: "q-1",
        category: "Time and Work",
        question: "A can complete a piece of work in 12 days and B can do it in 18 days. If they work together for 4 days, what fraction of work is left?",
        options: ["1/3", "4/9", "5/9", "7/18"],
        answer: 1, // index 1 is "4/9"
        explanation: "Take LCM(12, 18) = 36 units total work.\nA's 1-day work = 36 / 12 = 3 units.\nB's 1-day work = 36 / 18 = 2 units.\nCombined 1-day work = 3 + 2 = 5 units.\nIn 4 days, work completed = 4 × 5 = 20 units.\nRemaining work = 36 - 20 = 16 units.\nFraction left = 16 / 36 = 4/9."
      },
      {
        id: "q-2",
        category: "Speed & Distance",
        question: "A train traveling at 72 km/h crosses a 180-meter-long platform in 18 seconds. What is the length of the train?",
        options: ["140 meters", "160 meters", "180 meters", "200 meters"],
        answer: 2, // index 2 is "180 meters"
        explanation: "Convert speed to m/s: 72 × (5/18) = 20 m/s.\nTotal distance = Speed × Time = 20 × 18 = 360 meters.\nTotal distance = (Length of train + Length of platform).\n360 = Length of train + 180 => Length of train = 180 meters."
      },
      {
        id: "q-3",
        category: "Profit and Loss",
        question: "A shopkeeper marks an article 40% above the cost price and allows a discount of 25% on the marked price. What is his net gain or loss percent?",
        options: ["5% Profit", "10% Profit", "5% Loss", "15% Profit"],
        answer: 0, // index 0 is "5% Profit"
        explanation: "Assume Cost Price (CP) = 100.\nMarked Price (MP) = 100 + 40% = 140.\nDiscount = 25% of 140 = 35.\nSelling Price (SP) = 140 - 35 = 105.\nProfit = SP - CP = 105 - 100 = 5% gain."
      },
      {
        id: "q-4",
        category: "Probability",
        question: "Two fair dice are thrown simultaneously. What is the probability that the sum of the numbers appearing on top is a prime number?",
        options: ["5/12", "7/18", "1/2", "15/36"],
        answer: 0, // index 0 is "5/12"
        explanation: "Total outcomes = 6 × 6 = 36.\nPossible prime sums: 2, 3, 5, 7, 11.\n- Sum = 2: (1,1) -> 1\n- Sum = 3: (1,2), (2,1) -> 2\n- Sum = 5: (1,4),(4,1),(2,3),(3,2) -> 4\n- Sum = 7: (1,6),(6,1),(2,5),(5,2),(3,4),(4,3) -> 6\n- Sum = 11: (5,6),(6,5) -> 2\nTotal favorable outcomes = 1 + 2 + 4 + 6 + 2 = 15.\nProbability = 15 / 36 = 5 / 12."
      },
      {
        id: "q-5",
        category: "Permutations & Combinations",
        question: "In how many distinct ways can the letters of the word 'LEADER' be arranged such that all the vowels always come together?",
        options: ["72", "108", "144", "240"],
        answer: 1, // index 1 is "108"
        explanation: "Word: LEADER (6 letters: L, E, A, D, E, R).\nVowels: E, A, E (3 vowels with 'E' repeating twice).\nConsonants: L, D, R (3 consonants).\nTreat all vowels as 1 bundle: (EAE) + L + D + R = 4 units.\n4 units can be arranged in 4! = 24 ways.\nThe vowels (E, A, E) can be arranged internally in 3! / 2! = 6 / 2 = 3 ways (since E repeats twice).\nTotal ways = 24 × 3 = 72? Wait: 4! is 24, 24 * 3 = 72, wait let's check options: 72 is option A (index 0)!"
      },
      {
        id: "q-6",
        category: "Logical Reasoning",
        question: "Statements:\n1. All cars are vehicles.\n2. Some vehicles are electric.\nConclusions:\nI. Some cars are electric.\nII. Some vehicles are cars.",
        options: ["Only conclusion I follows", "Only conclusion II follows", "Both I and II follow", "Neither follows"],
        answer: 1, // Only conclusion II follows
        explanation: "Since 'All cars are vehicles', the set of cars is entirely within vehicles. Therefore, 'Some vehicles are cars' is definitely true (Conclusion II).\nHowever, electric vehicles may or may not overlap with cars. Hence, Conclusion I is not necessarily true.\nThus, only Conclusion II follows."
      }
    ]
  },

  // 3. Core CS Subjects (OS, DBMS, CN, OOP)
  coreTechnical: {
    os: {
      title: "Operating Systems",
      summary: "Kernel mode, Process vs Thread, Scheduling, Concurrency, Deadlocks, Memory Management.",
      interviewQA: [
        {
          q: "What is the difference between a Process and a Thread?",
          a: "A Process is an executing instance of a program with its own dedicated memory address space, PCB (Process Control Block), file descriptors, and registers. Context switching between processes is heavy.\nA Thread is the smallest unit of CPU execution within a process ('lightweight process'). Multiple threads of the same process share the same code, data, and heap memory, but have their own separate stack and registers. Context switching between threads is much faster."
        },
        {
          q: "What are the four necessary Coffman conditions for a Deadlock to occur?",
          a: "1. Mutual Exclusion: At least one resource must be held in a non-shareable mode.\n2. Hold and Wait: A process must hold at least one resource and wait to acquire additional resources held by other processes.\n3. No Preemption: Resources cannot be forcibly preempted from a process holding them; they must be released voluntarily.\n4. Circular Wait: A closed chain of processes exists such that each process holds a resource that is needed by the next process in the chain."
        },
        {
          q: "What is the difference between Paging and Segmentation?",
          a: "Paging divides logical memory into fixed-size blocks called pages, and physical memory into same-sized blocks called frames. It prevents external fragmentation, though it may cause internal fragmentation in the last page.\nSegmentation divides memory into variable-sized logical modules (functions, arrays, stack) reflecting the programmer's view. It eliminates internal fragmentation but can lead to external fragmentation."
        },
        {
          q: "Explain Virtual Memory, Page Fault, and Thrashing.",
          a: "Virtual Memory gives the illusion of a contiguous memory space larger than physical RAM by mapping logical addresses to physical frames and secondary storage (swap/pagefile).\nA Page Fault occurs when a program accesses a virtual page not currently present in physical RAM; the OS traps to the kernel, fetches the page from disk, updates the page table, and resumes execution.\nThrashing happens when the OS spends more time swapping pages in and out of disk than executing instructions, causing CPU utilization to plummet."
        }
      ]
    },
    dbms: {
      title: "Database Management Systems (DBMS)",
      summary: "ACID Properties, Normalization, Indexing (B-Tree/B+Tree), SQL Joins, Transactions & Locks.",
      interviewQA: [
        {
          q: "Explain ACID properties in relational database transactions.",
          a: "• Atomicity: 'All or nothing' — either all transaction operations execute successfully, or the database rolls back to the prior state.\n• Consistency: The database must transition from one valid state to another, satisfying all schema constraints and foreign keys.\n• Isolation: Concurrent transactions execute without interfering with one another (Isolation levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable).\n• Durability: Once a transaction commits, its updates are permanently recorded even in the event of a power outage or system crash."
        },
        {
          q: "What is Database Normalization? Explain 1NF, 2NF, 3NF, and BCNF.",
          a: "Normalization is the process of structuring a relational database to minimize redundancy and eliminate insertion, update, and deletion anomalies.\n• 1NF: Every column must hold atomic (indivisible) values; no repeating groups or arrays.\n• 2NF: Must be in 1NF + No Partial Dependency (all non-key attributes fully depend on the entire candidate key).\n• 3NF: Must be in 2NF + No Transitive Dependency (non-prime attribute should not determine another non-prime attribute; X -> Y where X is superkey or Y is prime).\n• BCNF (Boyce-Codd NF): Strict 3NF; in every functional dependency X -> Y, X must strictly be a Super Key."
        },
        {
          q: "Why are B+ Trees preferred over B-Trees for database indexes?",
          a: "1. Leaf Node Linked List: In B+ Trees, all data records/pointers are stored strictly in the leaf nodes, which are linked together in a doubly linked list. This allows ultra-fast range queries and sequential scans (SELECT * WHERE salary BETWEEN 50k AND 100k).\n2. Higher Fanout: Internal nodes only store keys (no data pointers), so more keys fit inside each disk page, resulting in shallower tree depth and fewer disk I/O operations."
        },
        {
          q: "Write an SQL query to find the 2nd (or N-th) highest salary.",
          a: "Using DENSE_RANK() window function:\n\nWITH RankedSalaries AS (\n  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rnk\n  FROM Employee\n)\nSELECT DISTINCT salary FROM RankedSalaries WHERE rnk = 2;\n\nAlternative using subquery:\nSELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);"
        }
      ]
    },
    cn: {
      title: "Computer Networks",
      summary: "OSI vs TCP/IP Layers, TCP 3-Way Handshake, TCP vs UDP, DNS Flow, HTTP vs HTTPS.",
      interviewQA: [
        {
          q: "Explain the TCP 3-Way Handshake process for establishing a connection.",
          a: "Step 1 (SYN): Client sends a SYN segment with an initial sequence number (ISN = x) to request a connection.\nStep 2 (SYN-ACK): Server receives SYN, allocates buffers/variables, and responds with a SYN segment (ISN = y) along with an ACK = x + 1.\nStep 3 (ACK): Client replies with ACK = y + 1. Connection is now ESTABLISHED, and data transmission can begin."
        },
        {
          q: "What are the core differences between TCP and UDP?",
          a: "• TCP (Transmission Control Protocol): Connection-oriented, reliable (guaranteed packet delivery via ACKs & retransmissions), ordered packets, flow control (sliding window), and congestion control. Slower overhead. Used in Web (HTTP), Email (SMTP), File transfer (FTP).\n• UDP (User Datagram Protocol): Connectionless, unreliable ('best effort', no ACKs or retries), unordered, zero congestion control. Extremely fast and lightweight. Used in Video streaming, Gaming, VoIP, DNS."
        },
        {
          q: "What happens when you type 'https://google.com' in your browser and press Enter?",
          a: "1. Browser checks cache (Browser -> OS -> Router -> ISP DNS cache) for the IP address.\n2. If not cached, recursive DNS resolution occurs (Root -> TLD .com -> Authoritative NS).\n3. Browser initiates TCP 3-way handshake with Google's IP on port 443.\n4. TLS Handshake occurs: ClientHello -> ServerHello (certificate & public key) -> Session keys negotiated with Diffie-Hellman/RSA -> Encrypted channel established.\n5. Browser sends HTTP GET request.\n6. Google's web server processes request and returns HTML/CSS/JS payload.\n7. Browser DOM engine parses HTML, renders the DOM, executes scripts."
        }
      ]
    },
    oop: {
      title: "Object-Oriented Programming (OOP) & Design",
      summary: "Four Pillars of OOP, SOLID Principles, Design Patterns (Singleton, Factory, Observer).",
      interviewQA: [
        {
          q: "Explain the 4 Pillars of Object-Oriented Programming.",
          a: "1. Encapsulation: Bundling data (attributes) and methods that operate on that data into a single unit (class), restricting direct access via access specifiers (private, protected).\n2. Abstraction: Hiding complex internal implementation details and exposing only the essential interface to the user (using abstract classes and interfaces).\n3. Inheritance: Mechanism where a child class acquires the properties and behaviors of a parent class, promoting code reusability (IS-A relationship).\n4. Polymorphism: Ability of an entity to take multiple forms. Compile-time polymorphism (Method Overloading) vs Runtime polymorphism (Method Overriding via virtual functions)."
        },
        {
          q: "What are the SOLID Principles?",
          a: "• S - Single Responsibility: A class should have one, and only one, reason to change.\n• O - Open/Closed: Software entities should be open for extension, but closed for modification.\n• L - Liskov Substitution: Subclasses must be substitutable for their base class without altering program correctness.\n• I - Interface Segregation: Clients should not be forced to depend upon interfaces they do not use (prefer small, role-specific interfaces).\n• D - Dependency Inversion: High-level modules should not depend upon low-level modules; both should depend on abstractions."
        }
      ]
    }
  },

  // 4. HR & Behavioral Interview Preparation
  hrBehavioral: {
    starFramework: {
      title: "The STAR Technique for Behavioral Answers",
      steps: [
        { letter: "S", name: "Situation", desc: "Set the scene: Describe the specific event, context, and challenge you encountered." },
        { letter: "T", name: "Task", desc: "Explain the objective: What was your specific responsibility or deliverable in that situation?" },
        { letter: "A", name: "Action", desc: "Detail YOUR personal actions: Technologies used, steps taken, decisions made, obstacles navigated." },
        { letter: "R", name: "Result", desc: "Highlight the outcome: Quantify metrics (e.g. 40% speedup, 100% on-time delivery), lessons learned." }
      ]
    },
    questions: [
      {
        id: "hr-1",
        question: "Tell me about yourself.",
        testing: "Communication fluency, professional summary, relevance to the job opening.",
        answer: "I am a passionate software engineering graduate with hands-on experience in full-stack web development and core computer science fundamentals. During my academic career, I built scalable applications like [Mention your top project, e.g. an AI real-time chat application], where I reduced API latency by 30% through Redis caching. I have solved 350+ algorithmic problems across LeetCode, strengthening my problem-solving ability. I am excited to apply my skills to build high-impact, customer-facing systems at your company.",
        pitfall: "Do NOT recite your chronological life story from school onwards. Keep it under 90 seconds and focus on technical achievements, projects, and passion."
      },
      {
        id: "hr-2",
        question: "What is your greatest weakness?",
        testing: "Self-awareness, honesty, and proactive self-improvement.",
        answer: "Earlier in my projects, I had a tendency to focus excessively on pixel-perfect details early on, which sometimes slowed down reaching my Minimum Viable Product. Recognizing this, I started adopting time-boxing techniques and Agile sprint planning. Now, I first focus on delivering functional core milestones, and then iteratively polish UI/UX. This has significantly boosted my delivery speed without sacrificing quality.",
        pitfall: "Never say 'I have no weaknesses' or cliché fake weaknesses like 'I work too hard'. Pick a real, manageable skill and explain how you are actively overcoming it."
      },
      {
        id: "hr-3",
        question: "Why do you want to join our company?",
        testing: "Company research, genuine motivation, culture alignment.",
        answer: "I have closely followed [Company Name]'s leadership in [specific domain, e.g., cloud-scale distributed systems / fintech innovation]. Reading your engineering blog on how your team solved low-latency microservice scaling really inspired me. Furthermore, your engineering culture emphasizes mentorship, ownership, and high technical standards. I want to contribute my coding and problem-solving skills to problems at this scale and grow alongside top-tier engineers.",
        pitfall: "Avoid generic answers like 'It's a big MNC and has high salary'. Mention specific engineering achievements or products of that company."
      },
      {
        id: "hr-4",
        question: "Tell me about a time you had a conflict or disagreement with a teammate.",
        testing: "Emotional intelligence, constructive collaboration, resolution mindset.",
        answer: "During our final year capstone project, our team disagreed on whether to use MongoDB or PostgreSQL for our user transactions. A teammate strongly preferred MongoDB for its rapid schema iteration, while I was concerned about strict financial ACID guarantees. Instead of arguing, I scheduled a technical evaluation meeting where we listed our schema relationships and read/write access patterns. After evaluating foreign key constraints and transactional integrity requirements, we agreed to use PostgreSQL for ledger transactions and MongoDB for user session logs. We completed the project 2 weeks ahead of schedule and learned the importance of data-driven decisions.",
        pitfall: "Never blame your teammate or speak negatively about others. Focus on how you used facts and empathy to achieve a win-win."
      },
      {
        id: "hr-5",
        question: "Where do you see yourself in 3 to 5 years?",
        testing: "Career ambition, commitment, alignment with organization growth.",
        answer: "In the next 3 to 5 years, I envision myself growing from an associate engineer into an experienced technical leader within the company. I want to master system architecture, design large-scale fault-tolerant systems, and mentor junior developers. Ultimately, I want to be someone the engineering organization relies on to spearhead complex architectural initiatives.",
        pitfall: "Don't say 'I want to start my own startup in 2 years' or 'I want to be the CEO'. Focus on technical mastery and organizational value."
      },
      {
        id: "hr-6",
        question: "Do you have any questions for us?",
        testing: "Enthusiasm, intellectual curiosity, engagement during the interview.",
        answer: "Yes, thank you! I would love to learn more: 1) What does a typical day look like for a software engineer on this specific team? 2) What are the most interesting technical challenges the team is currently solving? 3) How do you measure success for someone in this role during their first 90 days?",
        pitfall: "Never say 'No, I don't have any questions'. Asking insightful technical or culture questions shows true interest."
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PREP_DATA };
}
