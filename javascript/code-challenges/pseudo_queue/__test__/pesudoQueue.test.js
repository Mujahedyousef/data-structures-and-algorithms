'use strict';

const pesudoQueue = require('../pesudoQueue');

describe('test the pseudoQueue ', () => {
    const pesudoQueueForTest = new pesudoQueue();
    it('test the new create of pesudoQueueForTest', () => {
        expect(pesudoQueueForTest).toBeInstanceOf(pesudoQueue);

    })
    it('test enqueue ', () => {
        pesudoQueueForTest.enqueue('20');
        pesudoQueueForTest.enqueue('15');
        pesudoQueueForTest.enqueue('10');
        pesudoQueueForTest.enqueue('5');
        console.log(pesudoQueueForTest.firstStack);
        expect(pesudoQueueForTest.firstStack.top.value).toBe('5');
        expect(pesudoQueueForTest.socendStack.top).toBeNull();

    })

    it('test dequeue', () => {
        pesudoQueueForTest.dequeue();
        pesudoQueueForTest.dequeue();
        pesudoQueueForTest.dequeue();
        pesudoQueueForTest.dequeue();
        console.log(pesudoQueueForTest.socendStack);
        expect(pesudoQueueForTest.socendStack.top.value).toEqual('20');
        expect(pesudoQueueForTest.firstStack.isEmpty()).toBeTruthy;

    })

})