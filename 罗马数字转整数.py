class Solution:

    sample = {
            'I':1,
            'V':5,
            'X':10,
            'L':50,
            'C':100,
            'D':500,
            'M':1000
        }
        
    def romanToInt(self, s: str) -> int:
        num = 0
        n = len(s)
        for i,ch in enumerate(s):
            value = Solution.sample[ch]
            if i < n-1 and value < Solution.sample[s[i+1]]:
                num -= value
            else:
                num += value
        return num