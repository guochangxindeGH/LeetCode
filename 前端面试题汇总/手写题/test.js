
class Subject {
  observers = []
  addObserver(observer) {
    this.observers.push(observer)
  }
  removeObserver(observer) {
    let index = this.observers.indexOf(observer)
    if(index > -1){
      this.observers.splice(index, 1)
    }
  }
  notify() {
    this.observers.forEach(observer => {
      observer.update()
    })
  }
}

class Observer{
  update() {
    console.log('observer update')
  }
} 


let subject = new Subject()
let observer = new Observer()

subject.addObserver(observer)
subject.notify()