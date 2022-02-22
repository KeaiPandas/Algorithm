/*
两数之和
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (let x = 0; x < nums.length; x++) {
        for (let y = x + 1; y < nums.length; y++) {
            if (nums[x] + nums[y] == target) {
                return [x, y]
            }
        }
    }
    return null
};


/** 哈希表
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (hash[target - nums[i]] !== undefined) {
            return [i, hash[target - nums[i]]]
        }
        hash[nums[i]] = i
    }
    return []
};
/*
题目：二分查找
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
     // 注意right要减一才是下标
    let left = 0, right = nums.length - 1
    // 左闭右闭做法，因此当left=right时候还有一个元素需要查找
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
};

/*
题目：存在重复元素
给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
*/

/**
 * 排序做法
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b)
    for (let x = 0; x < nums.length - 1; x++) {
        if (nums[x] === nums[x+1]) {
            return true
        }
    }
    return false
   };

/**
 * 哈希哈一个
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let set = new Set()
    for(let x = 0; x < nums.length; x++) {
        if(set.has(nums[x])) {
           return true
        }
        set.add(nums[x])
    }
    return false
   };

/**
 * 题目最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * 
 */


/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if (!strs.length) return ""
    // 定义横纵坐标的界限用于遍历
    const cols = strs[0].length
    const rows = strs.length
    for (let i = 0; i < cols; i++) {
        // 取得第一个行的某一列的字符串
        let firstChar = strs[0][i]
        // 从第二行开始遍历
        for (let j = 1; j < rows; j++) {
            // 设定返回条件
            if (strs[j].length < i || firstChar !== strs[j][i]) {
                return strs[0].substr(0, i)
            }
        }
    }
    return strs[0]
};


/**
 * 题目：字母的异位词
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return 0
    // 用Array来模拟哈希表
    let resArr = new Array(26).fill(0)
    const base = 'a'.charCodeAt()
    // 填充哈希表的相应位置
    for (let i of s) {
        resArr[i.charCodeAt() - base]++
    }
    // 相应位置的字母删除指针
    for (let j of t) {
        // 注意这个边界条件,只有在上一个遍历累积到值得时候才能通过，隐含了最后一个遍历如果不一样就被false掉的条件
        if (!resArr[j.charCodeAt() - base]) return false
        resArr[j.charCodeAt() - base] --
    }
    return true
};

/*
题目：链表相交
给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 定义一个函数去测量链表的长度
 var getListNodeLen = function(head) {
  let len = 0, cur = head
  while (cur) {
      cur = cur.next
      len++
  }
  return len
}

var getIntersectionNode = function(headA, headB) {
  // 链表的关键，拿一个cur变量去接
  let curA = headA,curB = headB, 
      lenA = getListNodeLen(headA),
      lenB = getListNodeLen(headB);
  // 保证lenA永远大于lenB
  if(lenA < lenB) {
      [curA, curB] = [curB, curA];
      [lenA, lenB] = [lenB, lenA];
  }
  let i = lenA - lenB;
  // 将长的链表缩短到和短的那个一样长
  while(i-- > 0) {
      curA = curA.next
  }
  while(curA && curA !== curB) {
      curA = curA.next;
      curB = curB.next;
  }
  return curA;
};


/**
给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案。

*/
// 用的api整了个巧劲儿
var commonChars = function(words) {
    let result = []
    let firstChar = words[0]
    for (const char of firstChar) {
        if (words.every(item => item.includes(char))) {
            result.push(char)
            words = words.map(item => item.replace(char, ""))
        }
    }

    return result
};

// 题目两个数组的交集
// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 

/** api爽局
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let result = [...set1].filter(item => set2.has(item))
    return result
};


/**
 * 
 * 编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」 定义为：

对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果这个过程 结果为 1，那么这个数就是快乐数。
如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
 */

/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {

    // 定义一个函数求分别获取各个位置上的数，注意是从前往后取值
    const getSum = function(nums) {
        let sum = 0
        while (nums) {
            sum += (nums % 10) ** 2
            nums = Math.floor(nums/10)
        }
        return sum
    }
    let set = new Set()
    while (true) {
        n = getSum(n)
        if (set.has(n)) return false
        if (n === 1) return true
        set.add(n)
    }
};

// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。如果可以，返回 true ；否则返回 false 。magazine 中的每个字符只能在 ransomNote 中使用一次。

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// 一定要注意magazine是提供弹药的，ransomNote是消耗弹药的
 var canConstruct = function(ransomNote, magazine) {
    let strArr = new Array(26).fill(0)
    let base = 'a'.charCodeAt()
    for (const i of magazine) {
        strArr[i.charCodeAt() - base]++
    }
    for (const j of ransomNote) {
        if (strArr[j.charCodeAt() - base] === 0) return false
        strArr[j.charCodeAt() - base]--
    }
    return true
};


/**
 * 二叉树的训练
 */

// 二叉树节点

class treeNode {
    constructor(val, left, right) {
        this.val = val
        this.left = left
        this.right = right
    }
}

// 前序遍历

var preOrderTraversal = function(root, res = []) {
    if (!root) return res
    res.push(root.val)
    preOrderTraversal(root.left, res)
    preOrderTraversal(root.right, res)
    return res
}

// 中序遍历

var midOrderTraversal = function(root, res = []) {
    if (!root) return res
    midOrderTraversal(root.left, res)
    res.push(root.val)
    midOrderTraversal(root.right, res)
    return res
}

// 后序遍历

var postOrderTraversal = function(root, res = []) {
    if (!root) return res
    postOrderTraversal(root.left, res)
    postOrderTraversal(root.right, res)
    res.push(root.val)
    return res
}