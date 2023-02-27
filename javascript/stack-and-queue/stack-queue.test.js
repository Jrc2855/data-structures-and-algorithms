'use strict';

const { Stack, Queue } = require('./index.js');


describe('Stack', () => {
  it('Pushes onto the top of a stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  });
  it('Can push several things onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });
  it('Can pop something off the top of the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);

    let poppedValue = stack.pop();
    expect(poppedValue).toEqual(3);
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
    expect(stack.top.next.next.value).toBeNull();
  });
  it('Can peek at the top of the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    let peekedValue = stack.peek();
    expect(peekedValue).toEqual(3);
  });
  it('Can instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.top).toBeNull();
  });
  test('Can call pop or peek on an empty stack and raising an exception', () => {
    let stack = new Stack();
    let peekedValue = stack.peek();
    expect(peekedValue).toBeNull();
  });
});

describe('Queue', () => {
  it('Enqueues onto the front of our Queue', () => {
    let q = new Queue();
    q.enqueue(1);

    expect(q.front.value).toEqual(1);
  });
  it('Enqueues multiple items onto the front of our Queue', () => {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    
    expect(q.front.value).toEqual(1);
    expect(q.front.next.value).toEqual(2);
    expect(q.front.next.next.value).toEqual(3);
  });
  test('DeQueues an expected value out of a queue', () => {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    q.dequeue(q.front);
    
    expect(q.front.value).toEqual(2);
    expect(q.front.next.value).toEqual(3);
  });
  test('Can peek into a queue, and see the expected value', () => {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    let peekedValue = q.peek();

    expect(peekedValue).toEqual(1);
  });
  it('Can sucessfully empty a queue after multiple dequeues', () => {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    q.dequeue(q.front.value);
    q.dequeue(q.front.next.value);
    q.dequeue(q.front.next.next.value);

    expect(q.front.value).toBeNull();
  });
});
