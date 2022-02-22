function Person(name) {
  this.name = name
  this.sum = function() {
    alert(this.name)
  }
}

function Per() {
  this.name = "ker"
}

Per.prototype = new person() // 主要是把一个实例绑到继承者的原型链上
var per1 = new Per()


// 构造函数继承
function Con() {
  Person.call(this, "jer") // 用.call的方式把Person指向这里
  this.age = 12
}
var con1 = new Con()

// 只继承了父类构造函数的属性，没有继承父类原型的属性
// 可以多继承也可以向父实例传参

function SubType(name) {
  Person.call(this, name)
}
SubType.prototype = new Person()
var sub = new SubType("gar")


function content(obj) {
  function F(){}
  F.prototype = obj
  return new F()
}
var sup = new Person()

function subobject(obj) {
  var sub = content(obj)
  sub.name = "gar"
  return sub
}

var con = content(Person.prototype)

function Sub() {
  Person.call(this)
}

Sub.prototype = con
con.construcor = Sub
