"use strict";
const Node = require('../node');
const k_ary_tree = require('../k-ary');
const { it } = require('eslint/lib/rule-tester/rule-tester');


describe('test for k_ary', () => {
    let k_tree = null;
    // [1,2,3,4,5,6,7,8,9,10]
    beforeAll(() => {

        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(15);
        let ten = new Node(10);
        one.children.push(two)
        one.children.push(three)
        one.children.push(four)
        two.children.push(five)
        two.children.push(six)
        two.children.push(seven)
        three.children.push(eight)
        three.children.push(nine)
        four.children.push(ten)
        k_tree = new k_ary_tree(one)
    })
    // it('test k_tree', () => {
    //     let out = [1, 2, 3, 4, 5, 6, 7, 8, 15, 10]
    //     let output = k_tree.tree_fizz_buzz()
    //     console.log(output);
    //     expect(output).toEqual(out)
    // })
    it('return words', () => {
        let words = ['1', '2', 'fizz', '4', 'buzz', 'fizz', '7', '8', 'fizzbuzz', 'buzz']
        console.log(k_tree.tree_fizz_buzz());
        expect(k_tree.tree_fizz_buzz()).toEqual(words)
    })
})