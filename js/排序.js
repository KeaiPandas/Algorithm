arr = [111, 44, 55, 23, 432, 123, 45, 654]
// 冒泡排序

function bubble(arr) {
  const len = arr.length

  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
    }
  }
  return arr
}

// 插入排序
function insertSort(arr){
  if (Array.isArray(arr)) {
    for (let i = 1; i < arr.length; i++) {
      let preIndex = i - 1
      let cur = arr[i]
      while (preIndex >= 0 && arr[preIndex] > cur){
        arr[preIndex + 1] = arr[preIndex]
        preIndex--
      }
      arr[preIndex + 1] = cur
    }
  }
  return arr
}


// 选择排序
function selectSort(arr){
  if (Array.isArray(arr)){
    for (let i = 0; i < arr.length; i++){
      let minIndex = i
      for (let j = i + 1; j < arr.length; j++){
        minIndex = arr[minIndex] > arr[j] ? j : minIndex
      }
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
    return arr
  }
}

// 快速排序
function quickSort(arr) {
    if (!Array.isArray(arr)) return
    if (arr.length <= 1) return arr
    let left = [], right = []
    let index = Math.floor(arr.length / 2)
    let value = arr[index]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < arr[index]){
            left.push(arr[i])
        } else if (arr[i] > arr[index]) {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), value, ...quickSort(right)]
}


console.log(quickSort(arr))