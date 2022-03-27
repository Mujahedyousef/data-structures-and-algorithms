'use strict'

const AnimalShelter = require('./AnimalShelter.js.js');


describe('Test Queue method)', () => {
   it('Can successfully enqueue a cat', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('cat');
    expect(newQueue.catQueue.front.value).toEqual('cat');
  });

  it('Can successfully enqueue multiple cats', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('cat');
    newQueue.enqueue('cat');
    expect(newQueue.catQueue.front.value).toEqual('cat');
    expect(newQueue.catQueue.last.value).toEqual('cat');
  });

  it('Can successfully dequeue a cat', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('cat');
    newQueue.enqueue('cat');
    newQueue.dequeue('cat');
    expect(newQueue.catQueue.last.next).toBeNull();
  });

  it('Can successfully dequeue a dog', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('dog');
    newQueue.enqueue('dog');
    newQueue.dequeue('dog');
    expect(newQueue.dogQueue.last.next).toBeNull();
  });

  it('Can successfully enqueue a dog', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('dog');
    expect(newQueue.dogQueue.last.value).toEqual('dog');
  });

  it('Can successfully enqueue multiple dogs', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('dog');
    newQueue.enqueue('dog');
    expect(newQueue.dogQueue.front.value).toEqual('dog');
    expect(newQueue.dogQueue.last.value).toEqual('dog');
  });

  it('Can successfully enqueue a mix of dogs and cats', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('dog');
    newQueue.enqueue('cat');
    newQueue.enqueue('dog');
    newQueue.enqueue('cat');
    expect(newQueue.catQueue.front.value).toEqual('cat');
    expect(newQueue.catQueue.last.value).toEqual('cat');
    expect(newQueue.dogQueue.front.value).toEqual('dog');
    expect(newQueue.dogQueue.last.value).toEqual('dog');
  });

  it('Can successfully dequeue a mixture of dogs and cats', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('dog');
    newQueue.enqueue('dog');
    newQueue.enqueue('dog');
    newQueue.enqueue('cat');
    newQueue.enqueue('cat');
    newQueue.enqueue('cat');
    newQueue.dequeue('dog');
    newQueue.dequeue('cat');
    newQueue.dequeue('dog');
    newQueue.dequeue('cat');
    expect(newQueue.dogQueue.last.next).toBeNull();
    expect(newQueue.dogQueue.last.value).toBe('dog');
    expect(newQueue.catQueue.last.next).toBeNull();
    expect(newQueue.catQueue.last.value).toBe('cat');
  });

  it('enqueue cannot accept a value other than cat or dog', () => {
    const newQueue = new AnimalShelter();
    expect(newQueue.enqueue('Duck')).toBe("we do not accept that animal at our shelter");
  });

  

  });

