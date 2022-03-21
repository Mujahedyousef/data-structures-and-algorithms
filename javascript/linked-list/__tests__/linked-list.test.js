'use strict';

// Require our linked list implementation
const LinkedList = require('../index.js');

describe('Linked List', () => {
  it('test create empty ll', () => {
    const ll = new LinkedList();
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
})
// we have two cases

describe('insert to the beginning of ll ', () => {
  // if ll is empty
  it('test case 1 add to empty LL', () => {
    const ll = new LinkedList();
    ll.insert('a');
    expect(ll.head.value).toBe('a');
    expect(ll.head.next).toBeNull();
  });
  // if ll isn't empty
  it('test case 2 add to not empty', () => {
    const ll = new LinkedList();
    ll.insert('a');
    ll.insert('b');
    expect(ll.head.value).toBe('b');
    expect(ll.head.next.value).toEqual('a');
    expect(ll.head.next.next).toBeNull();
  });
});

describe('Check if ll is includes value or not', () => {
  it('check includes', () => {
    const ll = new LinkedList();
    ll.insert('b');
    ll.insert('a');
    ll.includes('a');
    ll.includes('b');

    expect(ll.includes('a')).toBeTruthy();
    expect(ll.includes('b')).toBeTruthy();
    expect(ll.includes('c')).toBeFalsy();
  });

});
describe('Check to String', () => {
  it('test 5 toString', () => {
    const ll = new LinkedList()
    ll.insert("c");
    ll.insert("b");
    ll.insert("a");

    expect(ll.toString()).toEqual("{ a } -> { b } -> { c } ->  NULL");

  });
})

describe('Check for append method', () => {
  it('test for append method added 3 node', () => {
    const ll = new LinkedList()
    ll.append("1");
    ll.append("2");
    ll.append("3");

    expect(ll.head.value).toBe("1");
    expect(ll.head.next.value).toBe("2");
    expect(ll.head.next.next.value).toBe("3");
    expect(ll.head.next.next.next).toBeNull();

  });

});
describe('Check for insert before method', () => {
  it('test for insert before added new node  before node is Existing', () => {
    const ll = new LinkedList()

    ll.insert("4");
    ll.insert("2");
    ll.insert("1");

    ll.insertbefore("4", "3")
    expect(ll.head.value).toBe("1");
    expect(ll.head.next.value).toBe("2");
    expect(ll.head.next.next.value).toBe("3");
    expect(ll.head.next.next.next.value).toBe("4");
    expect(ll.head.next.next.next.next).toBeFalsy();

  });

});

describe('Check for insert after method', () => {
  it('test for insert  new node  after node is Existing', () => {
    const ll = new LinkedList()
    ll.insert("2");
    ll.insert("3");
    ll.insert("1")
    ll.insertAfter("3", "5")
    expect(ll.head.value).toBe("1");
    expect(ll.head.next.value).toBe("3");
    expect(ll.head.next.next.value).toBe("5");
    expect(ll.head.next.next.next.value).toBe("2");
    expect(ll.head.next.next.next.next).toBeFalsy();

  });

  
  describe('test zip method for two linked list', () => {
    it('test', () => {
        const LLOne = new LinkedList();
        LLOne.insert('5');
        LLOne.insert('3');
        LLOne.insert('1');
        const LLTwo = new LinkedList();
        LLTwo.insert('6');
        LLTwo.insert('4');
        LLTwo.insert('2');
        const ll = new LinkedList();

        expect(ll.zip(LLOne, LLTwo).toString()).toEqual("{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } ->  NULL");
    })
})
})
