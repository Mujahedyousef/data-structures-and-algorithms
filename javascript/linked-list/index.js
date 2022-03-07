'use strict';
const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }


    includes(value) {
        if (this.head != null) {
            //create new pointer and give him value main pointer
            let currentValue = this.head;
            while (currentValue != null) {
                if (currentValue.value == value) {
                    return true;
                } else {
                    currentValue = currentValue.next;
                }
            }
            return false;
        } else {
            return false;
        }

    }

    toString() {
        let string = "";
        if (this.head != null) {
            let currentNode = this.head;
            while (currentNode != null) {
                string = string + `{ ${currentNode.value} } -> `;
                currentNode = currentNode.next;
            }
            string = string + " NULL";
            return string;
        } else {
            string = "list empty.";
        }
    }


    append(value) {
        const node = new Node(value);
        let current = this.head
        if (this.head == null) {
            //ll is empty
            this.head = node;
        } else {
            //ll is not empty
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
    }

    insertbefore(value, newvalue) {
        const node = new Node(newvalue)
        let currentValue = this.head
        if (currentValue.next != null) {
            currentValue = currentValue.next
            if (currentValue.next.value == value) {
                node.next = currentValue.next
                currentValue.next = node
                return null
            }


        }

    }
    insertAfter(value, newvalue) {
        const node = new Node(newvalue)
        let currentValue = this.head
        if (currentValue.next != null) {
            currentValue = currentValue.next
            if (currentValue.value == value) {
                node.next = currentValue.next
                currentValue.next = node
                return null
            }


        }

    }



}




module.exports = LinkedList;
