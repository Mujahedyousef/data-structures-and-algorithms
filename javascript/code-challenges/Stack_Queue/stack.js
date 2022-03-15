"use strict";
const Node = require("./node");

class Stack {
    constructor() {
        this.top = null;
        this.size = 0
    }
    pushItem(value) {
        const node = new Node(value)
        if (this.top == null) {
            this.top = node
            this.size++
        } else {
            node.next = this.top
            this.top = node
        }

    }

    popItem() {
         
        if (this.top == null) {
            return 'exception'
        } else {
            let current = this.top
            this.top = current.next
            current.next = null
            this.size--
            return current.value
        }

    }
    peek() {
        if (this.top == null) {
            return 'exception'
        } else {
            return this.top
        }
    }

    isEmpty() {
        if (this.top == null) {
            return true
        } else {
            return false
        }

    }

}

module.exports = Stack