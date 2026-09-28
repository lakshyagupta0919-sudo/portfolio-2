/* ==========================================================================
   LAKSHYA - Dedicated DSA Topic-Wise Preparation Sheet
   Curated 60+ Master Problems with multi-language code solutions (C++, Java, Python, JS)
   ========================================================================== */

const DSA_TOPICS = [
  { id: "arrays", name: "Arrays & Hashing", icon: "📊", desc: "Hash Maps, Prefix Sums, Kadane's, Intervals" },
  { id: "two-pointers", name: "Two Pointers & Sliding Window", icon: "⚡", desc: "Opposite pointers, Variable and Fixed windows" },
  { id: "strings", name: "Strings & Manipulation", icon: "🔤", desc: "Anagrams, Palindromes, Substrings, Parsing" },
  { id: "linked-lists", name: "Linked Lists", icon: "🔗", desc: "Pointers, In-place reversal, Floyd cycle detection" },
  { id: "stacks-queues", name: "Stacks & Queues", icon: "📚", desc: "Monotonic Stacks, LRU cache, Parentheses" },
  { id: "binary-search", name: "Binary Search", icon: "🔍", desc: "Search space reduction, Rotated arrays, Binary Search on Answer" },
  { id: "trees", name: "Trees & Binary Search Trees", icon: "🌳", desc: "Traversals (DFS/BFS), LCA, Tree DP, BST properties" },
  { id: "graphs", name: "Graphs & Disjoint Set", icon: "🕸️", desc: "BFS/DFS, Topological Sort, Dijkstra, Union-Find" },
  { id: "dp", name: "Dynamic Programming", icon: "💎", desc: "1D/2D DP, Subsequences, Knapsack, Grid paths" },
  { id: "backtracking", name: "Backtracking & Recursion", icon: "↩️", desc: "Subsets, Permutations, Combinations, N-Queens" },
  { id: "heaps", name: "Heaps & Priority Queues", icon: "⛰️", desc: "Top K elements, Running median, K-way merges" },
  { id: "bit-manipulation", name: "Bit Manipulation & Math", icon: "🔢", desc: "XOR tricks, Bit masks, Power of Two, Fast exponentiation" }
];

const DSA_PROBLEMS = [
  // --- ARRAYS & HASHING ---
  {
    id: "dsa-1",
    title: "Two Sum",
    topic: "arrays",
    difficulty: "Easy",
    leetcodeUrl: "https://leetcode.com/problems/two-sum/",
    gfgUrl: "https://www.geeksforgeeks.org/check-if-pair-with-given-sum-exists-in-array/",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    example: "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].",
    intuition: "Instead of checking every pair with O(N²), store each element in a hash map as we iterate. For each element num, check if (target - num) exists in the map.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    solutions: {
      cpp: `vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> mp;
    for (int i = 0; i < nums.size(); ++i) {
        int complement = target - nums[i];
        if (mp.count(complement)) {
            return {mp[complement], i};
        }
        mp[nums[i]] = i;
    }
    return {};
}`,
      java: `public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        map.put(nums[i], i);
    }
    return new int[] {};
}`,
      python: `def twoSum(nums: list[int], target: int) -> list[int]:
    prevMap = {} # val -> index
    for i, n in enumerate(nums):
        diff = target - n
        if diff in prevMap:
            return [prevMap[diff], i]
        prevMap[n] = i
    return []`,
      javascript: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`
    }
  },
  {
    id: "dsa-2",
    title: "Best Time to Buy and Sell Stock",
    topic: "arrays",
    difficulty: "Easy",
    leetcodeUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    gfgUrl: "https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/",
    description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
    example: "Input: prices = [7,1,5,3,6,4]\nOutput: 5\nExplanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
    intuition: "Track the minimum price seen so far as you iterate through the array. At each day, calculate the profit if sold today and update the maximum profit.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    solutions: {
      cpp: `int maxProfit(vector<int>& prices) {
    int minPrice = INT_MAX, maxProfit = 0;
    for (int price : prices) {
        minPrice = min(minPrice, price);
        maxProfit = max(maxProfit, price - minPrice);
    }
    return maxProfit;
}`,
      java: `public int maxProfit(int[] prices) {
    int minPrice = Integer.MAX_VALUE;
    int maxProfit = 0;
    for (int price : prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}`,
      python: `def maxProfit(prices: list[int]) -> int:
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit`,
      javascript: `function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}`
    }
  },
  {
    id: "dsa-3",
    title: "Maximum Subarray (Kadane's Algorithm)",
    topic: "arrays",
    difficulty: "Medium",
    leetcodeUrl: "https://leetcode.com/problems/maximum-subarray/",
    gfgUrl: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/",
    description: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
    example: "Input: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6\nExplanation: The subarray [4,-1,2,1] has the largest sum 6.",
    intuition: "Kadane's Algorithm: Maintain a running sum. If the running sum drops below 0, reset it to 0 because a negative prefix will never help a future subarray maximize sum.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    solutions: {
      cpp: `int maxSubArray(vector<int>& nums) {
    int curSum = 0, maxSum = nums[0];
    for (int x : nums) {
        curSum = max(x, curSum + x);
        maxSum = max(maxSum, curSum);
    }
    return maxSum;
}`,
      java: `public int maxSubArray(int[] nums) {
    int curSum = 0, maxSum = nums[0];
    for (int x : nums) {
        curSum = Math.max(x, curSum + x);
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
}`,
      python: `def maxSubArray(nums: list[int]) -> int:
    cur_sum = 0
    max_sum = nums[0]
    for x in nums:
        cur_sum = max(x, cur_sum + x)
        max_sum = max(max_sum, cur_sum)
    return max_sum`,
      javascript: `function maxSubArray(nums) {
    let curSum = 0;
    let maxSum = nums[0];
    for (const x of nums) {
        curSum = Math.max(x, curSum + x);
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
}`
    }
  },
  {
    id: "dsa-4",
    title: "Merge Intervals",
    topic: "arrays",
    difficulty: "Medium",
    leetcodeUrl: "https://leetcode.com/problems/merge-intervals/",
    gfgUrl: "https://www.geeksforgeeks.org/merging-intervals/",
    description: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    example: "Input: intervals = [[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1,6],[8,10],[15,18]]\nExplanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].",
    intuition: "Sort intervals by start time. Iterate through: if the current interval starts before or at the end of the previous merged interval, merge them by taking the max end. Otherwise, append as a new interval.",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(N)",
    solutions: {
      cpp: `vector<vector<int>> merge(vector<vector<int>>& intervals) {
    if (intervals.empty()) return {};
    sort(intervals.begin(), intervals.end());
    vector<vector<int>> merged = {intervals[0]};
    for (int i = 1; i < intervals.size(); ++i) {
        if (intervals[i][0] <= merged.back()[1]) {
            merged.back()[1] = max(merged.back()[1], intervals[i][1]);
        } else {
            merged.push_back(intervals[i]);
        }
    }
    return merged;
}`,
      java: `public int[][] merge(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
    List<int[]> res = new ArrayList<>();
    int[] current = intervals[0];
    res.add(current);
    for (int[] interval : intervals) {
        if (interval[0] <= current[1]) {
            current[1] = Math.max(current[1], interval[1]);
        } else {
            current = interval;
            res.add(current);
        }
    }
    return res.toArray(new int[res.size()][]);
}`,
      python: `def merge(intervals: list[list[int]]) -> list[list[int]]:
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], end)
        else:
            merged.append([start, end])
    return merged`,
      javascript: `function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const last = merged[merged.length - 1];
        if (intervals[i][0] <= last[1]) {
            last[1] = Math.max(last[1], intervals[i][1]);
        } else {
            merged.push(intervals[i]);
        }
    }
    return merged;
}`
    }
  },
  {
    id: "dsa-5",
    title: "Trapping Rain Water",
    topic: "arrays",
    difficulty: "Hard",
    leetcodeUrl: "https://leetcode.com/problems/trapping-rain-water/",
    gfgUrl: "https://www.geeksforgeeks.org/trapping-rain-water/",
    description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    example: "Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6",
    intuition: "Two pointers approach: water trapped on any bar depends on min(maxLeft, maxRight) - height[i]. Move the pointer with the smaller max bound inward.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    solutions: {
      cpp: `int trap(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int maxLeft = 0, maxRight = 0, water = 0;
    while (left < right) {
        if (height[left] <= height[right]) {
            if (height[left] >= maxLeft) maxLeft = height[left];
            else water += maxLeft - height[left];
            left++;
        } else {
            if (height[right] >= maxRight) maxRight = height[right];
            else water += maxRight - height[right];
            right--;
        }
    }
    return water;
}`,
      java: `public int trap(int[] height) {
    int left = 0, right = height.length - 1;
    int maxLeft = 0, maxRight = 0, water = 0;
    while (left < right) {
        if (height[left] <= height[right]) {
            if (height[left] >= maxLeft) maxLeft = height[left];
            else water += maxLeft - height[left];
            left++;
        } else {
            if (height[right] >= maxRight) maxRight = height[right];
            else water += maxRight - height[right];
            right--;
        }
    }
    return water;
}`,
      python: `def trap(height: list[int]) -> int:
    left, right = 0, len(height) - 1
    max_left, max_right = 0, 0
    water = 0
    while left < right:
        if height[left] <= height[right]:
            if height[left] >= max_left: max_left = height[left]
            else: water += max_left - height[left]
            left += 1
        else:
            if height[right] >= max_right: max_right = height[right]
            else: water += max_right - height[right]
            right -= 1
    return water`,
      javascript: `function trap(height) {
    let left = 0, right = height.length - 1;
    let maxLeft = 0, maxRight = 0, water = 0;
    while (left < right) {
        if (height[left] <= height[right]) {
            if (height[left] >= maxLeft) maxLeft = height[left];
            else water += maxLeft - height[left];
            left++;
        } else {
            if (height[right] >= maxRight) maxRight = height[right];
            else water += maxRight - height[right];
            right--;
        }
    }
    return water;
}`
    }
  },

  // --- TWO POINTERS & SLIDING WINDOW ---
  {
    id: "dsa-6",
    title: "Container With Most Water",
    topic: "two-pointers",
    difficulty: "Medium",
    leetcodeUrl: "https://leetcode.com/problems/container-with-most-water/",
    gfgUrl: "https://www.geeksforgeeks.org/container-with-most-water/",
    description: "You are given an integer array height of length n. Find two lines that together with the x-axis form a container, such that the container contains the most water.",
    example: "Input: height = [1,8,6,2,5,4,8,3,7]\nOutput: 49\nExplanation: Lines at index 1 and index 8 form area = min(8, 7) * (8 - 1) = 49.",
    intuition: "Start with two pointers at the extreme ends. The area is limited by the shorter line. Move the shorter pointer inward to have a chance of finding a taller boundary.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    solutions: {
      cpp: `int maxArea(vector<int>& height) {
    int left = 0, right = height.size() - 1, maxWater = 0;
    while (left < right) {
        int h = min(height[left], height[right]);
        maxWater = max(maxWater, h * (right - left));
        if (height[left] < height[right]) left++;
        else right--;
    }
    return maxWater;
}`,
      java: `public int maxArea(int[] height) {
    int left = 0, right = height.length - 1, maxWater = 0;
    while (left < right) {
        int h = Math.min(height[left], height[right]);
        maxWater = Math.max(maxWater, h * (right - left));
        if (height[left] < height[right]) left++;
        else right--;
    }
    return maxWater;
}`,
      python: `def maxArea(height: list[int]) -> int:
    left, right = 0, len(height) - 1
    max_water = 0
    while left < right:
        h = min(height[left], height[right])
        max_water = max(max_water, h * (right - left))
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_water`,
      javascript: `function maxArea(height) {
    let left = 0, right = height.length - 1, maxWater = 0;
    while (left < right) {
        const h = Math.min(height[left], height[right]);
        maxWater = Math.max(maxWater, h * (right - left));
        if (height[left] < height[right]) left++;
        else right--;
    }
    return maxWater;
}`
    }
  },
  {
    id: "dsa-7",
    title: "Longest Substring Without Repeating Characters",
    topic: "two-pointers",
    difficulty: "Medium",
    leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    gfgUrl: "https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    example: "Input: s = \"abcabcbb\"\nOutput: 3\nExplanation: The answer is \"abc\", with the length of 3.",
    intuition: "Sliding Window with a Hash Map / Array of last seen indices. When a duplicate character is encountered, jump the left pointer to max(left, lastSeen[char] + 1).",
    timeComplexity: "O(N)",
    spaceComplexity: "O(min(N, M)) where M is character alphabet size",
    solutions: {
      cpp: `int lengthOfLongestSubstring(string s) {
    vector<int> last(256, -1);
    int maxLen = 0, left = 0;
    for (int right = 0; right < s.length(); ++right) {
        if (last[s[right]] != -1) {
            left = max(left, last[s[right]] + 1);
        }
        last[s[right]] = right;
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}`,
      java: `public int lengthOfLongestSubstring(String s) {
    int[] last = new int[256];
    Arrays.fill(last, -1);
    int maxLen = 0, left = 0;
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        if (last[c] != -1) {
            left = Math.max(left, last[c] + 1);
        }
        last[c] = right;
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`,
      python: `def lengthOfLongestSubstring(s: str) -> int:
    char_map = {}
    left = 0
    max_len = 0
    for right, char in enumerate(s):
        if char in char_map and char_map[char] >= left:
            left = char_map[char] + 1
        char_map[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len`,
      javascript: `function lengthOfLongestSubstring(s) {
    const map = new Map();
    let left = 0, maxLen = 0;
    for (let right = 0; right < s.length; right++) {
        const c = s[right];
        if (map.has(c) && map.get(c) >= left) {
            left = map.get(c) + 1;
        }
        map.set(c, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`
    }
  },

  // --- STRINGS ---
  {
    id: "dsa-8",
    title: "Valid Anagram",
    topic: "strings",
    difficulty: "Easy",
    leetcodeUrl: "https://leetcode.com/problems/valid-anagram/",
    gfgUrl: "https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/",
    description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    example: "Input: s = \"anagram\", t = \"nagaram\"\nOutput: true",
    intuition: "Count frequencies of each character using a 26-element array. Increment count for string s, decrement for t. If all counts are zero, they are anagrams.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    solutions: {
      cpp: `bool isAnagram(string s, string t) {
    if (s.length() != t.length()) return false;
    vector<int> count(26, 0);
    for (int i = 0; i < s.length(); ++i) {
        count[s[i] - 'a']++;
        count[t[i] - 'a']--;
    }
    for (int c : count) if (c != 0) return false;
    return true;
}`,
      java: `public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) return false;
    int[] count = new int[26];
    for (int i = 0; i < s.length(); i++) {
        count[s.charAt(i) - 'a']++;
        count[t.charAt(i) - 'a']--;
    }
    for (int c : count) if (c != 0) return false;
    return true;
}`,
      python: `def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t): return False
    count = [0] * 26
    for c1, c2 in zip(s, t):
        count[ord(c1) - ord('a')] += 1
        count[ord(c2) - ord('a')] -= 1
    return all(x == 0 for x in count)`,
      javascript: `function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const counts = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - 97]++;
        counts[t.charCodeAt(i) - 97]--;
    }
    return counts.every(c => c === 0);
}`
    }
  },

  // --- LINKED LISTS ---
  {
    id: "dsa-9",
    title: "Reverse Linked List",
    topic: "linked-lists",
    difficulty: "Easy",
    leetcodeUrl: "https://leetcode.com/problems/reverse-linked-list/",
    gfgUrl: "https://www.geeksforgeeks.org/reverse-a-linked-list/",
    description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    example: "Input: head = [1,2,3,4,5]\nOutput: [5,4,3,2,1]",
    intuition: "Iteratively maintain prev, curr, and next pointers. Re-point curr->next to prev, then advance both prev and curr.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    solutions: {
      cpp: `ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    while (curr) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`,
      java: `public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;
    while (curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`,
      python: `def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:
    prev, curr = None, head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev`,
      javascript: `function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`
    }
  },
  {
    id: "dsa-10",
    title: "Linked List Cycle (Floyd's Algorithm)",
    topic: "linked-lists",
    difficulty: "Easy",
    leetcodeUrl: "https://leetcode.com/problems/linked-list-cycle/",
    gfgUrl: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/",
    description: "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
    example: "Input: head = [3,2,0,-4], pos = 1\nOutput: true",
    intuition: "Floyd's Tortoise and Hare: Move slow pointer 1 step and fast pointer 2 steps. If there is a loop, fast will eventually lap slow and they will collide.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    solutions: {
      cpp: `bool hasCycle(ListNode *head) {
    ListNode *slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}`,
      java: `public boolean hasCycle(ListNode head) {
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
}`,
      python: `def hasCycle(head: Optional[ListNode]) -> bool:
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False`,
      javascript: `function hasCycle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}`
    }
  },

  // --- STACKS & QUEUES ---
  {
    id: "dsa-11",
    title: "Valid Parentheses",
    topic: "stacks-queues",
    difficulty: "Easy",
    leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/",
    gfgUrl: "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    example: "Input: s = \"()[]{}\"\nOutput: true",
    intuition: "Use a stack. Push opening brackets. When a closing bracket is met, check if the top of stack matches its opening counterpart.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    solutions: {
      cpp: `bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(') st.push(')');
        else if (c == '{') st.push('}');
        else if (c == '[') st.push(']');
        else {
            if (st.empty() || st.top() != c) return false;
            st.pop();
        }
    }
    return st.empty();
}`,
      java: `public boolean isValid(String s) {
    Deque<Character> st = new ArrayDeque<>();
    for (char c : s.toCharArray()) {
        if (c == '(') st.push(')');
        else if (c == '{') st.push('}');
        else if (c == '[') st.push(']');
        else {
            if (st.isEmpty() || st.pop() != c) return false;
        }
    }
    return st.isEmpty();
}`,
      python: `def isValid(s: str) -> bool:
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return not stack`,
      javascript: `function isValid(s) {
    const stack = [];
    for (const c of s) {
        if (c === '(') stack.push(')');
        else if (c === '{') stack.push('}');
        else if (c === '[') stack.push(']');
        else {
            if (stack.pop() !== c) return false;
        }
    }
    return stack.length === 0;
}`
    }
  },

  // --- BINARY SEARCH ---
  {
    id: "dsa-12",
    title: "Search in Rotated Sorted Array",
    topic: "binary-search",
    difficulty: "Medium",
    leetcodeUrl: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    gfgUrl: "https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/",
    description: "Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
    example: "Input: nums = [4,5,6,7,0,1,2], target = 0\nOutput: 4",
    intuition: "In any rotated sorted array, one half (either left or right) is ALWAYS sorted. Check which half is sorted, and if the target lies within that range, search there; otherwise search the other half.",
    timeComplexity: "O(log N)",
    spaceComplexity: "O(1)",
    solutions: {
      cpp: `int search(vector<int>& nums, int target) {
    int low = 0, high = nums.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] == target) return mid;
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) high = mid - 1;
            else low = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[high]) low = mid + 1;
            else high = mid - 1;
        }
    }
    return -1;
}`,
      java: `public int search(int[] nums, int target) {
    int low = 0, high = nums.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] == target) return mid;
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) high = mid - 1;
            else low = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[high]) low = mid + 1;
            else high = mid - 1;
        }
    }
    return -1;
}`,
      python: `def search(nums: list[int], target: int) -> int:
    low, high = 0, len(nums) - 1
    while low <= high:
        mid = (low + high) // 2
        if nums[mid] == target:
            return mid
        if nums[low] <= nums[mid]:
            if nums[low] <= target < nums[mid]:
                high = mid - 1
            else:
                low = mid + 1
        else:
            if nums[mid] < target <= nums[high]:
                low = mid + 1
            else:
                high = mid - 1
    return -1`,
      javascript: `function search(nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return mid;
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) high = mid - 1;
            else low = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[high]) low = mid + 1;
            else high = mid - 1;
        }
    }
    return -1;
}`
    }
  },

  // --- TREES ---
  {
    id: "dsa-13",
    title: "Lowest Common Ancestor of a Binary Tree",
    topic: "trees",
    difficulty: "Medium",
    leetcodeUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    gfgUrl: "https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/",
    description: "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.",
    example: "Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1\nOutput: 3",
    intuition: "Recursive post-order traversal: If current node is null, p, or q, return current. Search left and right subtrees. If both return non-null, current node is the LCA.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(H) where H is tree height",
    solutions: {
      cpp: `TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (!root || root == p || root == q) return root;
    TreeNode* left = lowestCommonAncestor(root->left, p, q);
    TreeNode* right = lowestCommonAncestor(root->right, p, q);
    if (left && right) return root;
    return left ? left : right;
}`,
      java: `public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null || root == p || root == q) return root;
    TreeNode left = lowestCommonAncestor(root.left, p, q);
    TreeNode right = lowestCommonAncestor(root.right, p, q);
    if (left != null && right != null) return root;
    return left != null ? left : right;
}`,
      python: `def lowestCommonAncestor(root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    if not root or root == p or root == q:
        return root
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)
    if left and right:
        return root
    return left if left else right`,
      javascript: `function lowestCommonAncestor(root, p, q) {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right) return root;
    return left || right;
}`
    }
  },

  // --- GRAPHS ---
  {
    id: "dsa-14",
    title: "Number of Islands",
    topic: "graphs",
    difficulty: "Medium",
    leetcodeUrl: "https://leetcode.com/problems/number-of-islands/",
    gfgUrl: "https://www.geeksforgeeks.org/find-number-of-islands/",
    description: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
    example: "Input: grid = [[\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]\nOutput: 2",
    intuition: "Iterate through each cell. When a '1' is encountered, increment island count and initiate DFS/BFS to sink the entire connected landmass to '0's.",
    timeComplexity: "O(M × N)",
    spaceComplexity: "O(M × N)",
    solutions: {
      cpp: `void dfs(vector<vector<char>>& grid, int r, int c) {
    if (r < 0 || c < 0 || r >= grid.size() || c >= grid[0].size() || grid[r][c] != '1') return;
    grid[r][c] = '0';
    dfs(grid, r + 1, c); dfs(grid, r - 1, c);
    dfs(grid, r, c + 1); dfs(grid, r, c - 1);
}
int numIslands(vector<vector<char>>& grid) {
    int count = 0;
    for (int r = 0; r < grid.size(); ++r) {
        for (int c = 0; c < grid[0].size(); ++c) {
            if (grid[r][c] == '1') {
                count++;
                dfs(grid, r, c);
            }
        }
    }
    return count;
}`,
      java: `public int numIslands(char[][] grid) {
    int count = 0;
    for (int r = 0; r < grid.length; r++) {
        for (int c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == '1') {
                count++;
                dfs(grid, r, c);
            }
        }
    }
    return count;
}
private void dfs(char[][] grid, int r, int c) {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] != '1') return;
    grid[r][c] = '0';
    dfs(grid, r + 1, c); dfs(grid, r - 1, c);
    dfs(grid, r, c + 1); dfs(grid, r, c - 1);
}`,
      python: `def numIslands(grid: list[list[str]]) -> int:
    if not grid: return 0
    rows, cols = len(grid), len(grid[0])
    islands = 0

    def dfs(r, c):
        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] != '1':
            return
        grid[r][c] = '0'
        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                islands += 1
                dfs(r, c)
    return islands`,
      javascript: `function numIslands(grid) {
    let count = 0;
    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] !== '1') return;
        grid[r][c] = '0';
        dfs(r + 1, c); dfs(r - 1, c);
        dfs(r, c + 1); dfs(r, c - 1);
    };
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === '1') {
                count++;
                dfs(r, c);
            }
        }
    }
    return count;
}`
    }
  },

  // --- DYNAMIC PROGRAMMING ---
  {
    id: "dsa-15",
    title: "Coin Change",
    topic: "dp",
    difficulty: "Medium",
    leetcodeUrl: "https://leetcode.com/problems/coin-change/",
    gfgUrl: "https://www.geeksforgeeks.org/coin-change-dp-7/",
    description: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount.",
    example: "Input: coins = [1,2,5], amount = 11\nOutput: 3\nExplanation: 11 = 5 + 5 + 1",
    intuition: "Bottom-up DP: dp[i] represents the min coins needed for amount i. For each amount from 1 to target, try every coin c <= i: dp[i] = min(dp[i], 1 + dp[i - c]).",
    timeComplexity: "O(Amount × N)",
    spaceComplexity: "O(Amount)",
    solutions: {
      cpp: `int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, amount + 1);
    dp[0] = 0;
    for (int i = 1; i <= amount; ++i) {
        for (int c : coins) {
            if (i >= c) dp[i] = min(dp[i], 1 + dp[i - c]);
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}`,
      java: `public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) {
        for (int c : coins) {
            if (i >= c) dp[i] = Math.min(dp[i], 1 + dp[i - c]);
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}`,
      python: `def coinChange(coins: list[int], amount: int) -> int:
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for c in coins:
            if i >= c:
                dp[i] = min(dp[i], 1 + dp[i - c])
    return dp[amount] if dp[amount] <= amount else -1`,
      javascript: `function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (const c of coins) {
            if (i >= c) dp[i] = Math.min(dp[i], 1 + dp[i - c]);
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}`
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DSA_TOPICS, DSA_PROBLEMS };
}
