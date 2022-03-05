"use strict"
const Node = require('../node')

describe('test class node', () => {
    it('test node', () => {
        let node = new Node('a')
        expect(node).toBeDefined();
        expect(node.value).toEqual('a')
        expect(node.next).toBeNull()
    })
})