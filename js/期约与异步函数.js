// function double(value) {
//   setTimeout(() => setTimeout(console.log, 0, value*2), 1000)
// }
// double(3)

// promise

// let p1 = new Promise(() => {})
// setTimeout(console.log, 0, p1)

// let p2 = new Promise((resolve, reject) => resolve())
// setTimeout(console.log, 0, p2)

// let p3 = new Promise((resolve, reject) => reject())
// setTimeout(console.log, 0, p3)

// let p1 = Promise.resolve('foo')

// let p2 = p1.then()
// let p3 = p1.then(() => undefined)
// let p4 = p1.then(() => {})
// let p5 = p1.then(() => Promise.resolve())
// setTimeout(console.log, 0, p2)
// setTimeout(console.log, 0, p3)
// setTimeout(console.log, 0, p4)
// setTimeout(console.log, 0, p5)

// promise连锁
// let p = new Promise((resolve, reject) => {
//   console.log('first')
//   setTimeout(resolve, 1000)
// })

// p.then(() => new Promise((resolve, reject) => {
//   console.log('second')
//   setTimeout(resolve, 1000)
// }))
// .then(() => new Promise((resolve, reject) => {
//   console.log('third')
//   setTimeout(resolve, 1000)
// }))
// .then(() => new Promise((resolve, reject) => {
//   console.log('fourth')
//   setTimeout(resolve, 1000)
// }))

// 异步函数async/await
// 声明异步函数
// async function foo() {}

// let bar = async function() {}

// let baz = async () => {}

// class Qux {
//   async qux () {}
// }

async function foo() {
  console.log(1)
  return 3
}
foo().then(console.log)
console.log(2)