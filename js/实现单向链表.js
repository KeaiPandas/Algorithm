// 构建Node节点
class Node {
  constructor(val ,next) {
    this.val = val
    this.next = next
  }
}

// 创建单链表的头尾和大小
var linkNodeList = function () {
  this.size = 0
  this.head = null
  this.tail = null
}

