'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let oldHead = this.head;
    this.head = new Node(value);
    this.head.next = oldHead;
  }

  toString() {
    let current = this.head;
    let text = '';
    while (current) {
      // do something
      text += `{ ${current.value} } -> `;
      current = current.next;
    }
    // return '{ banana } -> { apple } -> NULL'
    return text + 'NULL';
  }

  includes(value) {
    let current = this.head;
    while(current) {
      if(current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
