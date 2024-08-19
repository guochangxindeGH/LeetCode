

// 观察者模式
class Subject {
  constructor(name) {
    this.state = 'happy'
    this.observers = [] // 所有的观察者
  }
  // 收集观察者
  attach(o) {
    this.observers.push(o)
  }
  setState(newState) {
    // 更新状态
    this.state = newState
    this.observers.forEach(o => {
      // 通知观察者，更新状态；this指被观察者
      o.update(this)
    })
  }
}

class Observer {
  constructor(name) {
    this.name = name
  }
  update(student) {
    console.log('当前' + this.name + '被通知了', '当前学生的状态是' + student.state)
  }
}

let student = new Subject('学生')
let parent = new Observer('父母')
let teacher = new Observer('老师')

student.attach(parent)
student.attach(teacher)
// student.setState('被欺负了')



// 订阅发布
class EventBus {
  map = {}
  on(type, handler) {
    this.map[type] = this.map[type] || []
    this.map[type].push(handler)
  }
  emit(type, data) {
    this.map[type] && this.map[type].forEach(handler => {
      handler(data)
      // handler.call(this, data);
      // handler.apply(this, [data]);
    })
  }
  off(type, handler) {
    if (this.map[type]) {
      if (!handler) {
        delete this.map[type]
      } else {
        let index = this.map[type].indexOf(handler)
        this.map[type].splice(index, 1)

        // 以下这种方式很多人这样写，但实际上过滤后根本不对
        // this.map[type] = this.map[type].filter((item) => {
        //   item !== handler
        // });
      }
    }
  }
  // 只监听一次，执行回调
  once(type, handler) {
    //注册一个方法，只执行一次，执行完成后直接注销掉
    const func = (...args) => {
      //先把事件监听移除掉，再去执行cb
      this.off(type, func);
      handler(...args);
    };
    this.on(type, func);
    return this;
  }
}

const eventBus = new EventBus()

const func1 = (data) => {
  console.log('第一个事件', data)
}
const func2 = (data) => {
  console.log('第二个事件', data)
}
eventBus.on('click', func1)
eventBus.on('click', func2)

eventBus.emit('click', { a: 1, b: 2 })
eventBus.off('click', func1)
eventBus.emit('click', { a: 1, b: 2 })



eventBus.once('clickOnce', data => {
  console.log('第3个事件', data)
})
eventBus.emit('clickOnce', { a: 1, b: 2 })
eventBus.emit('clickOnce', { a: 1, b: 2 })
