'use strict';

// Require our linked list implementation
const LinkedLilst = require('../index');

describe('Linked List', () => {
  it('test create ll', () => {
    let ll = new LinkedLilst()
    expect(ll).toBeTruthy();
    expect(ll.head).toBeNull()
  });

  it('test 2 node insert in empty ll', () => {
    let ll = new LinkedLilst()
    ll.insert("a")
    expect(ll.head.value).toBe("a");
    expect(ll.head.next).toBeNull()
  });

  it('test 3 node insert in not empty ll', () => {
    let ll = new LinkedLilst()
    ll.insert("a")
    ll.insert("b")
    expect(ll.head.value).toBe("b");
    expect(ll.head.value.next).toBe("a");
    expect(ll.head.next.next).toBeNull()
  });

  it('test 4 include', () => {
    let ll = new LinkedLilst()
    ll.insert("a")
    ll.insert("b")
    ll.include("a")
    ll.include("b")
    ll.include("c")
    expect(ll.include("a")).toBeTruthy();
    expect(ll.include("b")).toBeTruthy();
    expect(ll.include("c")).toBeFalsy()
  });

  it('test 5 toString', () => {
    let ll = new LinkedLilst()
    ll.insert("a")
    ll.insert("b")
    ll.insert("c")

    expect(ll.toString()).toBe("{ a } -> { b } -> { c } -> NULL");

  });


});
