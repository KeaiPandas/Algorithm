function Parent(name, id) {
  this.name = name
  this.id = id
  this.list = ['a']
  this.printName = function () {
    console.log(this.name)
  }
}

Parent.prototype.sayName = function () {
  console.log(this.name)
}

function Child(name, id) {
  Parent.call(this, name, id)
}

Child.prototype = new Parent()

var child = new Child('小b娃娃', 1)
child.printName()
child.sayName()

var a = new Child()
var b = new Child()
a.list.push('b')
console.log(b.list)
console.log(a.list)

// 原型式继承
var parent = {
  names: ['a']
}
function copy(object) {
  function F() {}
  F.prototype = object
  return new F()
}

var child = copy(parent)

function createObject(obj) {
  var o = copy(obj)
  o.getNames = function() {
    console.log(this.names)
    return this.names
  }
  return o
}