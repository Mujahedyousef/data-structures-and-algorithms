'use strict';
const { BinarySearchTree } = require('../binary_tree');
const { binary_tree } = require('../binary_tree');
const Breadth_first = require('../Breadth-First')
const Node = require('../node');


describe('Binary Tree', () => {
    let tree = null;
    beforeAll(() => {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);



        // this based on our example that we mentioned in the class
        // see attached image (tree-example.png)
        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;


        // create a tree and pass root to it
        tree = new binary_tree(one);
    });

    it('constructor', () => {
        expect(tree.root.value).toEqual(1);
    });

    it('preOrder', () => {
        let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
        let preOrder = tree.per_Order();
        console.log("preOrder output ---->", preOrder);
        expect(preOrder).toEqual(expectedOutput);
    });

    it('inOrder', () => {
        let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        let inOrder = tree.in_Order();
        console.log("inOrder output ---->", inOrder);
        expect(inOrder).toEqual(expectedOutput);
    });

    it('postOrder', () => {
        let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        let postOrder = tree.post_Order();
        console.log("postOrder output ---->", postOrder);
        expect(postOrder).toEqual(expectedOutput);
    });
    it('max', () => {
        let max = tree.max();
        console.log("max value ---->", max);
        expect(tree.max()).toEqual(9);
    });
});


describe(' test BinarySearchTree ', () => {
    let treeBST = null
    beforeAll(() => {
        treeBST = new BinarySearchTree();
        treeBST.add(30);
        treeBST.add(20);
        treeBST.add(40);
        treeBST.add(10);
        treeBST.add(25);
        treeBST.add(35);
        treeBST.add(50);
    })
    it('the root', () => {
        expect(treeBST.root.value).toEqual(30);
    })

    it('test add method and per_Order', () => {
        let result = [30, 20, 10, 25, 40, 35, 50];

        expect(treeBST.per_Order()).toEqual(result)

    })
    it('test add method and in_Order', () => {

        let result_2 = [10, 20, 25, 30, 35, 40, 50];
        expect(treeBST.in_Order()).toEqual(result_2)

    })
    it('test add method and post_Order', () => {

        let result_3 = [10, 25, 20, 35, 50, 40, 30];
        expect(treeBST.post_Order()).toEqual(result_3)

    })
    it('test Contains method ', () => {
        // expect(treeBST.Contains(null)).toBeUndefined();
        expect(treeBST.Contains(10)).toEqual(true)
        expect(treeBST.Contains(12)).toEqual(false)
    })

})

describe('Breadth first test', () => {
    let treeBF = null;
    beforeAll(() => {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;


        // create a tree and pass root to it
        treeBF = new Breadth_first(one);
    });

    it('constructor', () => {
        console.log(treeBF);
        console.log(treeBF.root.value);
        expect(treeBF.root.value).toEqual(1);
    });


    it('Breadth_first', () => {
        let expectedOutput = [1, 2, 3, 6, 4, 5, 7, 8, 9];
        let traverseBF = treeBF.traverseBF();
        console.log("traverseBF output ---->", traverseBF);
        expect(traverseBF).toEqual(expectedOutput);
    });

});





