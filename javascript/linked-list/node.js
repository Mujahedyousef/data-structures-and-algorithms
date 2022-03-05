"use strict";
class Node {
    constructor(value, next = null) {
        this.head = value;
        this.next = next;
    }
}

module.exports = Node;