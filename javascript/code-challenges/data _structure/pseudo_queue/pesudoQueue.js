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

        while (this.firstStack.top !== null) {
            this.socendStack.pushItem(this.firstStack.popItem())

        }
        return this.socendStack.popItem()

    }
}




module.exports = pesudoQueue;