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
    // in this method i can added any where (befor or after)
    insertAt(value, index) {
        //  If index is out of range
        if (index > 0 && index > this.size) {
            return;
        }

        // If first index
        if (index === 0) {
            this.insert(value);
            return;
        }

        const node = new Node(value);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // Node before index
            count++;
            current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }


    insertBefore(value, newValue) {
        const node = new Node(newValue);

        let current = this.head;
        while (current.next.value !== value) {
            current = current.next;
        }
        node.next = current.next;
        current.next = node;
    }





    insertAfter(value, newValue) {
        let node = new Node(newValue);
        let current = this.head;
        while (current) {
            if (current.value === value) {
                node.next = current.next;
                current.next = node;
                break;
            }
            current = current.next;
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
