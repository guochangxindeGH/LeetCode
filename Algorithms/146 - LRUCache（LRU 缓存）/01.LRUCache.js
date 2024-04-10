/**
 * 146. LRU 缓存
 * 
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
  实现 LRUCache 类：
  LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
  int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
  void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
  函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

  

  示例：

  输入
  ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
  [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
  输出
  [null, null, null, 1, null, -1, null, -1, 3, 4]

  解释
  LRUCache lRUCache = new LRUCache(2);
  lRUCache.put(1, 1); // 缓存是 {1=1}
  lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
  lRUCache.get(1);    // 返回 1
  lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
  lRUCache.get(2);    // 返回 -1 (未找到)
  lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
  lRUCache.get(1);    // 返回 -1 (未找到)
  lRUCache.get(3);    // 返回 3
  lRUCache.get(4);    // 返回 4

 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map();
  // 定义两个虚拟节点，其实就是模拟双向链表的头尾相连节点
  this.head = {
    key: null,
    val: null,
    pre: null,
    next: null
  }
  this.tail = {
    key: null,
    val: null,
    pre: this.head,
    next: null
  }
  this.head.next = this.tail;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    this.moveToHead(node);
    return node.val;
  }
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    node.val = value;
    this.moveToHead(node);
  } else {
    const node = {
      key: key,
      val: value,
      pre: this.head,
      next: this.head.next
    }
    this.map.set(key, node);
    this.head.next.pre = node;
    this.head.next = node;
    if (this.map.size > this.capacity) {
      const removeNode = this.removeTail();
      this.map.delete(removeNode.key);
    }
  }
};


LRUCache.prototype.moveToHead = function(node) {
  this.removeNode(node);
  this.addToHead(node);
}

LRUCache.prototype.removeNode = function(node) {
  node.pre.next = node.next;
  node.next.pre = node.pre;
}

LRUCache.prototype.addToHead = function(node) {
  node.pre = this.head;
  node.next = this.head.next;
  this.head.next.pre = node;
  this.head.next = node;
}

LRUCache.prototype.removeTail = function() {
  const removeNode = this.tail.pre;
  this.removeNode(removeNode);
  return removeNode;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */