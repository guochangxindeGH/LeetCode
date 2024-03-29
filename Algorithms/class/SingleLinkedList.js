'use strict';
//定义单向链表的节点类
class Node {
  constructor(val) {
    this.val = val    //节点的数据部分
    this.next = null    //节点的链接部分(指针部分)   
  }
}
//定义单向链表类
class SingleLinked {
  constructor() {
    this.size = 0  //单链表的长度，用来记录链表中的节点个数，为一个空链表
    this.head = new Node('head')  //是链表的头指针：记录链表的起始地址
    this.currentNode = ''  //用来记录当前节点
  }
  //获取链表的长度
  getLength() {
    return this.size
  }
  //判断链表是否为空
  isEmpty() {
    return this.size === 0   //如果this.size为0则说明链表为空，即返回true
  }
  getElementAt(position) {
    if (position < 0 || position >= this.length)
      return null;
    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current.next; // next()获得匹配元素集合中每个元素紧邻的同胞元素。(jQuery)
    }
    return current;
  }
  append(element) {
    let node = new Node(element);
    // 如果当前链表为空,则将head指向node
    if (this.head === null) {
      this.head = node;
    } else {
      // 否则在链表尾部元素后添加新元素
      let current = this.getElementAt(this.length - 1);
      current.next = node;
    }
    this.length++;
  }
  insert(position, element) { // 向链表的指定位置插入节点
    // 判断position是否超出边界
    if (position < 0 || position > this.length)
      return false;
    let node = new Node(element);
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let previous = this.getElementAt(position - 1);
      node.next = previous.next;
      previous.next = node;
    }
    this.length++;
    return true;
  }
  removeAt(position) {
    // 判断position合法
    if (position < 0 || position > this.length)
      return null; // 找不到
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      let previous = this.getElementAt(position - 1);
      current = previous.next;
      previous.next = current.next;
    }
    this.length--;
    return current.element;
  }
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (current.element === element)
        return i;
      current = current.next;
    }
    return -1; // 找不到
  }
  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }
  isEmpty() {
    return this.length === 0; // 也可用head===null
  }
  clear() {
    this.head = null;
    this.length = 0;
  }

  //遍历链表:不重复的访问链表中的每一个节点
  displayList() {
    var list = ''
    var currentNode = this.head  //指向链表的头指针
    while (currentNode) {  //若当前节点不为空，则执行循环
      list += currentNode.val    //连接节点的数据域
      currentNode = currentNode.next  //让当前指针指向当前节点的下一个节点
      if (currentNode) {   //如果currentNode不为空则加上连接符
        list += '->'  //链表节点的连接符
      }
    }
    console.log(list)
  }

  //获取链表的最后一个节点
  findLast() {
    var currNode = this.head
    while (currNode.next) {   //若当前节点的next域为空，则他是链表的最后一个节点，跳出循环
      currNode = currNode.next  //若当前节点的next域不为空则让指针指向当前节点的下一个节点
    }
    return currNode
  }

  //采用尾插法给链表插入元素
  appendNode(element) {
    var currNode = this.findLast()  //找到链表的最后一个节点
    var newNode = new Node(element)  //创建一个新的节点
    currNode.next = newNode
    newNode.next = null
    this.size++   //链表的长度加1
  }

  //删除链表中的一个节点
  delete(element) {
    //this.displayList()
    var currentNode = this.head
    try {
      while ((currentNode.next != null) && (currentNode.next.element != element)) {  //判断，如果节点靠后则节点的next的next为空，不为空时进行删除
        if (currentNode.next.val === element) {
          currentNode.next = currentNode.next.next
          this.size--
        } else {
          currentNode = currentNode.next
        }
      }
    }
    catch (e) {   //测试函数，判断函数的运行错误
      console.log(e)
    }
  }
}

export default SingleLinked

