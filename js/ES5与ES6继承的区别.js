class Foo {
  constructor() {
    this.foo = 42
  }
  static answer() {
    return 42
  }
  print() {
    console.log(this.foo)
  }
}

console.log(Object.keys(Foo))
console.log(Object.keys(Foo.prototype))
