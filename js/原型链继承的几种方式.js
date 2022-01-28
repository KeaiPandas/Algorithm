function Parent() {
  this.name = "parent"
  this.list = ['a']
}

Parent.prototype.sayHi = function () {
  console.log('hi')
}

function Child() {
  
}

Child.prototype = new Parent()

var child = new Child()
console.log(child.name)
child.sayHi()
console.log(child.__proto__)

var a = new Child()
var b = new Child()

a.list.push('b')
console.log(b.list)