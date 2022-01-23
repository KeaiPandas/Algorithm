function debounce(fn) {
  let timeOut = null
  return function () {
    clearTimeout(timeOut)
    timeOut = setTimeout(() => {
      fn.apply(this. arguments)
    }, 500)
  }
}

function sayHi() {
  console.log('防抖成功')
}

var inp = document.getElementById('inp')
inp.addEventListener('input', debounce(sayHi))

function throttle(fn) {
  let canRun = true
  return function () {
    if (!canRun) return
    canRun = false
    setTimeout(() => {
      fn.apply(this.arguments)
      canRun = true
    }, 500)
  }
}

function sayHi(e) {
  console.log(e.target.innerWidth, e.target.innerHeight)
}

window.addEventListener('resize', throttle(sayHi))