const {binary_tree}=require('../../binary_tree');
const Node=require('../../node')
const tree_intersection=require('../tree-intersection')


describe('testing the tree_intersection function', () => {
  it('returns an array of all the repeated', () => {
    let node7 = new Node(7);
    let node6 = new Node(6);
    let node5 = new Node(5);
    let node4 = new Node(4);
    let node3 = new Node(3, node6, node7);
    let node2 = new Node(2, node4, node5);
    let root_1 = new Node(1, node2, node3);
    let tree_1 = new binary_tree(root_1);
    let secNode7 = new Node(7);
    let secNode6 = new Node(20);
    let secNode5 = new Node(50);
    let secNode4 = new Node(4);
    let secNode3 = new Node(1, secNode6, secNode7);
    let secNode2 = new Node(9, secNode4, secNode5);
    let root_2 = new Node(8, secNode2, secNode3);
    let tree_2 = new binary_tree(root_2);
    expect(tree_intersection(tree_1, tree_2)).toEqual([ 4, 1, 7 ]);
  });
  it('returns an empty array if no elements were repeated', () => {
    let node7 = new Node(7);
    let node6 = new Node(6);
    let node5 = new Node(5);
    let node4 = new Node(4);
    let node3 = new Node(3, node6, node7);
    let node2 = new Node(2, node4, node5);
    let root_1 = new Node(1, node2, node3);
    let tree_1 = new binary_tree(root_1);
    let secnode7 = new Node(70);
    let secnode6 = new Node(20);
    let secnode5 = new Node(50);
    let secnode4 = new Node(40);
    let secnode3 = new Node(10, secnode6, secnode7);
    let secnode2 = new Node(9, secnode4, secnode5);
    let root_2 = new Node(8, secnode2, secnode3);
    let tree_2 = new binary_tree(root_2);
    expect(tree_intersection(tree_1, tree_2)).toStrictEqual([]);
  });
  it('returns null if any of the function arguments was not a tree', () => {
    let test1 = 3;
    let test2 = 'hello';
    expect(tree_intersection(test1, test2)).toBe(null);
  });
});