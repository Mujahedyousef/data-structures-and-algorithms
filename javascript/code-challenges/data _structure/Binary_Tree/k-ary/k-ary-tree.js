"use strict";
// const Node = require('./node')
class k_ary_tree {
    constructor(root = null) {
        this.root = root;
    }
    tree_fizz_buzz() {
        if (!this.root) return;
        let queue = [this.root];
        // let output = []
        let child = []
        while (queue.length > 0) {
            let node = queue.shift()
            // console.log(node);

            if (node.value % 5 == 0 && node.value % 3 == 0) {
                node.value='fizzbuzz'
                child.push(node.value)
            } else if (node.value % 3 == 0) {
                node.value='fizz'
                child.push(node.value)
            } else if (node.value % 5 == 0) {
                node.value='buzz'
                child.push(node.value)
            } else {
                node.value=node.value.toString()
                child.push(node.value)
            }

            node.children.map(node => {
                queue.push(node)
            })
            // output.push(node.value)

        }

        return  child ;
    }

}

module.exports = k_ary_tree;