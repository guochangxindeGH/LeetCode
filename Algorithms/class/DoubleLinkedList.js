/**
 * 双向链表具体实现
单向链表中每一个元素只有一个next指针，用来指向下一个节点，我们只能从链表的头部开始遍历整个链表，任何一个节点只能找到它的下一个节点，而不能找到它的上一个节点。
双向链表中的每一个元素拥有两个指针，一个用来指向下一个节点，一个用来指向上一个节点。在双向链表中，除了可以像单向链表一样从头部开始遍历之外，还可以从尾部进行遍历。下面是双向链表的数据结构示意图：
*/
class Node {
  constructor(element) {
    this.element = element; // 属性1:保存节点值
    this.next = null; // 属性2:next指针,指向后一个节点
    this.prev = null; // 属性3:prev指针,指向前一个节点
  }
}
class DoubleLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = null;
  }
  append(element) {
    let node = new Node(element);
    // 如果链表为空,则将head和tail都指向当前添加的节点
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      // 否则将当前节点添加到链表的尾部
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }
  getElementAt(position) { // 如果要查找的元素的索引号大于链表长度的一半,则从链表的尾部开始遍历
    if (position < 0 || position >= this.length)
      return null;
    if (position > Math.floor(this.length / 2)) {
      let current = this.tail;
      for (let i = this.length - 1; i > position; i--) {
        current = current.prev;
      }
      return current;
    } else {
      return super.getElementAt(position);
    }
  }
  insert(position, element) {
    if (position < 0 || position > this.length)
      return false;
    if (position === this.length) {
      this.append(element);
    } else {
      let node = new Node(element);
      // 插到头部
      if (position === 0) {
        if (this.head === null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
        }
      } else {
        // 插到中间
        let current = this.getElementAt(position);
        let previous = current.prev;
        node.next = current;
        node.prev = previous;
        previous.next = node;
        current.prev = node;
      }
    }
    this.length++;
    return true;
  }
  removeAt(position) {
    if (position < 0 || position > this.length)
      return null;
    let current = this.head;
    let previous;
    // 移除头部元素
    if (position === 0) {
      this.head = current.next;
      this.head.prev = null;
      if (this.length === 1)
        this.tail = null;
    } else if (position === this.length - 1) {
      // 移除尾部元素
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      // 移除中间元素
      current = this.getElementAt(position);
      previous = current.prev;
      previous.next = current.next;
      current.next.prev = previous;
    }
    this.length--;
    return current.element;
  }
}

