'use strict';
const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
    }
    include(value) {
        if (this.head) {
            let existingValue = this.head
            while (existingValue) {
                if (existingValue.value === value) {
                    return true
                } else {
                    existingValue = existingValue.next
                }
            }
            return false
        } else {
            return false
        }

    }

    toString() {
        let string = ""
        if (this.head) {
            let existingNode = this.head
            while (existingNode.next) {
                string = string + `{${existingNode.value}} ->`
                existingNode = existingNode.next
            }
            string = string + `{${existingNode.value}} -> NULL`
        } else {
            string = "list empty."
        }
        return string
    }


}

module.exports = LinkedList;
