'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
  test('should create an instance of an empty linked list', () => {
    let emptyList = new LinkedList();
    expect(emptyList.head).toBeNull();
  });
  it('should insert at beginning of empty list', () => {
    const linked = new LinkedList();
    linked.insert('apple');

    expect(linked.head.value).toEqual('apple');
    expect(linked.head.next).toBeNull();
  });
  it('should insert at beginning of populated list', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    expect(linked.head.value).toEqual('banana');
    expect(linked.head.next.value).toEqual('apple');
    expect(linked.head.next.next).toBeNull();
  });
  it('should display as string properly', () => {
    let linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    let numString = linked.toString();
    expect(numString).toEqual('{ banana } -> { apple } -> NULL');
  });
  test('should return true when finding a value within the linked list that exists', () => {
    let linked = new LinkedList();
    linked.insert('cherries');
    expect(linked.includes('cherries')).toBe(true);
  });
  test('should return false when finding a value within the linked that doesnt exist', () => {
    let linked = new LinkedList();
    expect(linked.includes('dates')).toBe(false);
  });
  test('should return a collection of all the values that exist in the linked list', () => {
    let linked = new LinkedList();
    linked.insert('apples');
    linked.insert('bananas');
    linked.insert('cherries');

    return linked;
  });

});
