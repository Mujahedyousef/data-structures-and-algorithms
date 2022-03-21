"use strict";
const Stack = require('../stack')
// const node = require('../node')

describe('test for stack file', () => {
    it('test for create stack', () => {
        const createStack = new Stack()
        expect(createStack).toBeDefined()
        expect(createStack.top).toBeNull()

    })

    it('test for pushItem in stack', () => {
        //FILO
        const createStack = new Stack()
        createStack.pushItem("A")
        createStack.pushItem("B")
        createStack.pushItem("C")
        expect(createStack.top.value).toBe("C")
        expect(createStack.top.next.value).toBe("B")
        / expect(createStack.top.next.next.value).toBe("A")
    })

    it('test for popItem in stack', () => {
        //LIFO
        let createStack = new Stack()
        createStack.pushItem("A")
        createStack.pushItem("B")
        createStack.pushItem("C")
        expect(createStack.popItem()).toBe("C")
        expect(createStack.popItem()).toBe("B")
        // expect(createStack.top.value).toBe(3)
    })


    it('test for peek in stack', () => {
        //LIFO
        let createStack = new Stack()
        createStack.pushItem("A")
        createStack.pushItem("B")
        createStack.pushItem("C")
        expect(createStack.peek().value).toBe("C")
    })
    it('test for isEmpty in stack', () => {
        //LIFO
        let createStack = new Stack()
        let createStack_2 = new Stack()
        createStack.pushItem("A")
        createStack.pushItem("B")

        expect(createStack.isEmpty()).toBeFalsy()
        expect(createStack_2.isEmpty()).toBeTruthy()
    })

})