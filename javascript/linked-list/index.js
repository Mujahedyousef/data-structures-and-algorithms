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
    Kth(k) {
        let current = this.head
        let i = 0
        while (current != null) {
            current = current.next;
            i++
        }
        if (k < 0 || k > i) {
            return "exception"
        } else {
            i = i - 1 - k
            current = this.head;
            while (i > 0) {
                current = current.next;
                i--
            }
            return current.value;
        }

    }

    zip(LLOne, LLTwo) {
        let dummy = new Node();
        let tail = dummy;
        let current_1 = LLOne.head;
        let current_2 = LLTwo.head;
        while (current_1 || current_2) {
            if (current_1 == null) {
                tail.next = current_2;
            } else if (current_2 == null) {
                tail.next = current_1;
            } else {
                tail.next = current_1;
                tail = current_1;
                current_1 = current_1.next;

                tail.next = current_2;
                tail = current_2;
                current_2 = current_2.next
            }
        }
        const result = new LinkedList();
        result.head = dummy.next;
        return result;
    }
      }










module.exports = LinkedList;
