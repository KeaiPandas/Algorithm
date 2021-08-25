'''
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
'''

class Solution:
    def isValid(self, s: str) -> bool:
        pairs = {
            '(' : ')',
            '{' : '}',
            '[' : ']',
            '?' : '?'
        }
        stack = ['?']
        for ch in s:
            if ch in pairs:
                stack.append(ch)
            elif pairs[stack.pop()] != ch:
                return False
        return len(stack) == 1