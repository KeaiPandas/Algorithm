function debounce(fn, time){
  let timer = null
  return function(){
    clearTimeout(timer)
    
    timer = setTimeout(() => {
      fn.call(this.arguments)
    }, time)
  }
}

function sayHi() {
  console.log('防抖成功')
}

debounce(sayHi, 1000)()


function throttle(fn, time){
  let canRun = true
  return function(){
    if (!canRun) return
    canRun = false
    setTimeout(() => {
      fn.call(this.arguments)
      canRun = true
    }, time)
  }
}
