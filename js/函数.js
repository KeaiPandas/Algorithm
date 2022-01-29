// 函数声明与函数表达式
// console.log(sum(10, 10)) // 函数声明
// function sum(num1, num2) {
//   return num1 + num2
// }

// 函数表达式
console.log(sum(10, 10))
let sum = function (num1, num2) {
  return num1 + num2
}

// 闭包
function createComparisonFunction(propertyName) {
  return function(object1, object2) {
    let value1 = object1[propertyName]
    let value1
  }
}