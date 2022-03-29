"use strict";
const Node = require('./node');
class binary_tree {
    constructor(root = null) {
        this.root = root;
    }

    // perOrder >>root>>left>>right
    per_Order() {
        let result = [];
        function traverse(node) {
            result.push(node.value);
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(this.root);
        return result;
    }


    // inOrder>>left>>root>>right
    in_Order() {
        let result = [];
        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            result.push(node.value);
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(this.root);
        return result;
    }


    // postOrder>>left>>right>>root
    post_Order() {
        let result = [];
        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }
}

//===========================new class =======================================
class BinarySearchTree extends binary_tree {
    constructor(root = null) {
        super()
    }
    add(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        }

        else {
            this.insertNode(this.root, newNode);
        }

    }

    insertNode(node, newNode) {

        if (newNode.value < node.value) {

            if (node.left === null) {
                node.left = newNode;
            }

            else {
                this.insertNode(node.left, newNode);
            }

        }
        else {

            if (node.right === null) {
                node.right = newNode;
            }

            else { this.insertNode(node.right, newNode); }

        }
    }

    Contains(value) {
        if (this.root === null) {
            return undefined;
        }
        let current = this.root;

        while (current) {
            if (current.value === value) {
                return true;
            }
            if (value < current.value) {
                current = current.left;
            }

            if (value > current.value) {
                current = current.right;
            }

        }
        return false;
    }
}



module.exports = {
    binary_tree: binary_tree,
    BinarySearchTree: BinarySearchTree
}















