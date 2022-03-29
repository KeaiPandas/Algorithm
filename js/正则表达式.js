// 利用对象
var regexp = new RegExp(/123/)
console.log(regexp)

// 利用字面量
var rg = /123/

// test方法检测字符串是否符合正则表达式
console.log(rg.test(123))
console.log(rg.test('abc'))

// 边界符号，以^匹配行首的文本（以谁为开始），$匹配行尾的文本，以谁结尾。
var rg = /abc/ // 正则表达式里面不需要引号,
// /abc/ 只要包含有abc字符串返回的都是true
console.log(rg.test('abc'))
console.log(rg.test('abcd'))
console.log(rg.test('aabcd'))
var reg = /^abc/
console.log(reg.test('abc'))
console.log(reg.test('abcd'))
console.log(reg.test('aabcd'))

var reg1 = /^abc$/ // 精确匹配 要求必须是 abc字符串
console.log(reg1.test('abc'))
console.log(reg1.test('abcd'))
console.log(reg1.test('aabcd'))
console.log(reg1.test('abcabc'))

// 字符类: [] 表示有一系列字符可供选择，只要匹配其中一个就可以
var rg = /[abc]/ // 只要包含a或b或c都返回true

console.log(rg.test('andy'))
console.log(rg.test('baby'))
console.log(rg.test('color'))
console.log(rg.test('red'))
var rg = /^[abc]$/ // 三选一 只有a或者b或者c这三个字母才是true
console.log(rg.test('aa'))
console.log(rg.test('a'))
console.log(rg.test('ab'))
console.log(rg.test('c'))
console.log('-----------------')
// -连接匹配字母
var rg = /^[a-z]$/
console.log(rg.test('aa'))
console.log(rg.test('e'))
console.log(rg.test('ab'))
console.log(rg.test('c'))

// 字符组合 如果中括号里有^表示取反
var reg = /^[^a-zA-Z0-9_-]$/ // 26个英文字母（大写和小写都可以）任何一个字母返回true
console.log(reg.test('E'))
console.log(reg.test('Ab'))
console.log(reg.test('D'))
console.log(reg.test('_'))
console.log(reg.test('!'))

// 量词符：用来设定某个模式出现的次数

// * 相当于 x>=0 可以出现0次或很多次
var reg = /^a*$/
console.log(reg.test('aaa'))
console.log(reg.test('abc'))

// + 相当于 x>=1 可以出现1次或很多次
var reg = /^a+$/
console.log(reg.test(''))
console.log(reg.test('abc'))
console.log(reg.test('a'))
console.log(reg.test('aa'))

// ? 相当于 1 || 0
var reg = /^a?$/
console.log(reg.test(''))
console.log(reg.test('abc'))
console.log(reg.test('a'))
console.log(reg.test('aa'))

// {3 } 就是重复3次
var reg = /^a{3}$/
console.log(reg.test(''))
console.log(reg.test('abc'))
console.log(reg.test('aaa'))
console.log(reg.test('aaaa'))

// {4, } 就是大于4次
var reg = /^a{4,}$/
console.log(reg.test('aa'))
console.log(reg.test('abc'))
console.log(reg.test('aaa'))
console.log(reg.test('aaaa'))

// {4, 8} 就是大于4次小于8次
var reg = /^a{4,8}$/
console.log(reg.test('aa'))
console.log(reg.test('abc'))
console.log(reg.test('aaa'))
console.log(reg.test('aaaa'))
console.log(reg.test('aaaaaaaaa'))

// 设定模式，只能输入英文字母，数字，下划线，短横线且大于等于8
var reg = /^[a-zA-Z0-9_-]{8,}$/
console.log(reg.test('aa'))
console.log(reg.test('abc'))
console.log(reg.test('aaadsad1234124'))
console.log(reg.test('--dw-q2412@'))
console.log(reg.test('a--_ed12qead-a21'))

// 中括号 字符集合 匹配方括号中的任意字符
var reg = /^[abc]$/  // 表示a也可以b也可以c也可以

// 大括号 量词符 里面表示重复的次数
var reg = /^abc{3}$/ // 它只是让c重复三次 abccc
console.log(reg.test('abc'))
console.log(reg.test('abcabcabc'))
console.log(reg.test('abccc'))

// 小括号 表示优先级
var reg = /^(abc){3}$/ // 它是让abc重复三次
console.log(reg.test('abc'))
console.log(reg.test('abcabcabc'))
console.log(reg.test('abccc'))
parseInt
