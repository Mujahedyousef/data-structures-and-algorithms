"use strict"
const Stack = require("./stack");

class pesudoQueue {
    constructor() {
        this.firstStack = new Stack()
        this.socendStack = new Stack()
    }

    enqueue(value) {
        this.firstStack.pushItem(value)
    }

    dequeue() {

        if (this.firstStack.top == null) {
            return 'exception'
        } else {
            while (this.firstStack.top !== null) {
                this.socendStack.pushItem(this.firstStack.popItem())

            }
            return this.socendStack.popItem()
            //    console.log(this.socendStack.popItem());
        }
    }

}


module.exports = pesudoQueue;