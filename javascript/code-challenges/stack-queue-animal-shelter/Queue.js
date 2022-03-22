const Node = require('./node.js')

class Queue {
    constructor() {
        this.front = null;
        this.last = null;
        this.size = 0
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.front == null) {
            this.front = node;
            this.last = node;
        }
            this.last.next = node
            this.last = node
        }
       
        

    dequeue() {
        
        if (this.front == null) {
            return 'exception'
        } else {
            const current = this.front
            this.front = current.next
            current.next = null
            return current.value
        }
    }


    peek() {
        if (this.front == null) {
            return 'exception'
        } else {
            return this.front;
        }
    }

    isEmpty() {
        if (this.front == null) {
            return true
        } else {
            return false;
        }

    }
}
module.exports = Queue;