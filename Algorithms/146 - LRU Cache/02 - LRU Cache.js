/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.obj = {};
    this.arr = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let val = this.obj[key]
    if (val > 0) {
        let index = this.arr.indexOf(key)
        this.arr.splice(index, 1)
        this.arr.unshift(key)
        return val
    } else
        return -1
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.obj[key]) {
        this.obj[key] = value;
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.unshift(key);
        return;
    }

    if (this.capacity === this.arr.length) {
        var k = this.arr.pop();
        this.obj[k] = undefined;
    }

    this.obj[key] = value;
    this.arr.unshift(key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */