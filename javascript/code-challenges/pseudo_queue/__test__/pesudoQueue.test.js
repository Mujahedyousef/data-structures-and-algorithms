'use strict';

const pesudoQueue = require('../pesudoQueue');

describe('test the pseudoQueue ', () => {
    const pesudoQueueForTest = new pesudoQueue();
    it('test the new create of pesudoQueueForTest', () => {
        expect(pesudoQueueForTest).toBeInstanceOf(pesudoQueue);

    })

    it('test enqueue ', () => {
        pesudoQueueForTest.enqueue(20);
        expect(pesudoQueueForTest.firstStack.peek().value).toBe(20);
        pesudoQueueForTest.enqueue(15);
        expect(pesudoQueueForTest.firstStack.peek().value).toBe(15);
        pesudoQueueForTest.enqueue(10);
        expect(pesudoQueueForTest.firstStack.peek().value).toBe(10);
        pesudoQueueForTest.enqueue(5);
        expect(pesudoQueueForTest.firstStack.peek().value).toBe(5);
        expect(pesudoQueueForTest.firstStack.top.value).toBe(5);
        expect(pesudoQueueForTest.socendStack.top).toBeNull();
    })


    it('test dequeue', () => {

        expect(pesudoQueueForTest.dequeue()).toEqual(20);
        expect(pesudoQueueForTest.dequeue()).toEqual(15);
        expect(pesudoQueueForTest.dequeue()).toEqual(10);
        expect(pesudoQueueForTest.dequeue()).toEqual(5);
    })


})