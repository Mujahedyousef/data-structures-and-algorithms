"use strict";
class k_ary_tree {
    constructor(root = null) {
        this.root = root;
    }
    tree_fizz_buzz() {
        if (!this.root) return;
        let queue = [this.root]
        let output = [];
        while (queue.length) {
            // let size = queue.length;
            output.push(queue.map(node => node.value))
            while (queue.length>0) {
                let node = queue.shift()
                for (let child of node.children) {
                    queue.push(child)
                    output.push(child.value)
                }
            }

        }
        return output
    }
}
module.exports=k_ary_tree;