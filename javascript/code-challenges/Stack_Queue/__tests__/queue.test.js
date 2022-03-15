"use strict";
const Queue = require('../queue')


describe('test for Queue file', () => {
    it('test for create Queue', () => {
        const createQueue = new Queue()
        expect(createQueue).toBeDefined()
        expect(createQueue.front).toBeNull()

    })

    it('test for enqueue in Queue', () => {
        //FIFO
        const createQueue = new Queue()
        createQueue.enqueue("A")
        createQueue.enqueue("B")
        createQueue.enqueue("C")
        expect(createQueue.front.value).toEqual("A")
        expect(createQueue.front.next.value).toBe("B")
        expect(createQueue.front.next.next.value).toBe("C")
    })

    it('test for dequeue in Queue', () => {
        //FIFO
        const createQueue = new Queue()
        createQueue.enqueue("A")
        createQueue.enqueue("B")
        createQueue.enqueue("C")
        expect(createQueue.dequeue()).toBe("A")
        expect(createQueue.dequeue()).toBe("B")
        expect(createQueue.front.value).toBe("C")
    })


    it('test for peek in Queue', () => {
        //FIFO
        const createQueue = new Queue()
        createQueue.enqueue("A")
        createQueue.enqueue("B")
        createQueue.enqueue("C")
        expect(createQueue.peek().value).toEqual("A")
    })
    it('test for isEmpty in Queue', () => {
        //FIFO
        const createQueue = new Queue()
        const createQueue_2 = new Queue()
        createQueue.enqueue("A")
        createQueue.enqueue("B")

        expect(createQueue.isEmpty()).toBeFalsy()
        expect(createQueue_2.isEmpty()).toBeTruthy()
    })

})