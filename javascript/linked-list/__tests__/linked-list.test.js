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


});
