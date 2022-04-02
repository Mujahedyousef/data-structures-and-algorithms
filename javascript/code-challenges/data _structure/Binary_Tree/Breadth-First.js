"use strict";
class Breadth_first {
    constructor(root = null) {
        this.root = root;
    }

    traverseBF() {
        if (!this.root) return;
        let queue = [this.root];
        let output = []

        while (queue.length > 0) {
            let node = queue.shift()
            // console.log(node.value);
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)

            }
            output.push(node.value)
        }
        return output;
    }

}
module.exports = Breadth_first;
