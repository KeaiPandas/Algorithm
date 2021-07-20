class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ''

        strs.sort()
        start = strs[0]
        end = strs[-1]
        for i,s in enumerate(start):
            if start[i] == end[i]:
                continue
            else:
                break
        return start[:i]