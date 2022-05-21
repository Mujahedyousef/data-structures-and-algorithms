
const Hash_Table = require('../../hash-Table/hash_Table');

function tree_intersection(tree_1, tree_2) {
    if (typeof tree_1 !== 'object' || typeof tree_2 !== 'object' || !tree_1.root || !tree_2.root) {
        return null;
    }
    let tree_1Ele = tree_1.per_Order();
    let tree_2Ele = tree_2.per_Order();
    let size;
    if (tree_1Ele.length > tree_2Ele.length) {
       size= tree_1Ele.length
    } else {
       size= tree_2Ele.length;
    }
    let hashTable = new Hash_Table(size);
    let result = [];
    tree_1Ele.map(element => {
        hashTable.set(`${element}`, element);
    });
    tree_2Ele.map(element => {
        if (hashTable.contain(`${element}`)) {
            result.push(element);
        }
    });
    return result;
}

module.exports = tree_intersection;