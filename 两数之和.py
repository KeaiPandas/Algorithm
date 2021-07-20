class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashtable = dict()
        for i,num in enumerate(nums):
            if target - num in nums:
                return [hashtable[target - num], i]
            hashtable[num[i]] = i
        return []