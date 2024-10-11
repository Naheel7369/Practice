const LinkedList = require("./tail");

class LinkListQueue{
    constructor(){
        this.list=new LinkedList()

    }
    enqueue(value){
       this.list.append(value)
    }
    dequeue(){
      return this.list.removefromend()
    }
    peek(){
       return this.list.head.value
    }
    isEmpty(){
     return this.list.isEmpty()
    }
    getSize(){
     return this.list.getSize()
    }
    print(){
        return this.list.print()
    }
}
const queue= new LinkListQueue()
console.log("hi")
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(40)
queue.enqueue(90)
console.log(queue.dequeue())
queue.print()
console.log(queue.peek())