'''
时间比较快
空间用爆的写法
'''
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        for i in range(nums.count(val)):
            nums.remove(val)
        return len(nums)
'''
时间稍慢
空间很节省
'''
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        if not nums:
            return None

        n = len(nums)
        fast = slow = 0
        while fast < n:
            if nums[fast] != val:
                nums[slow] = nums[fast]
                slow += 1
            fast += 1
        return slow