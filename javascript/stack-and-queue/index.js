'use strict';

// Code taken from in class demo. To avoid copying everything word for word, I'm going to add comments breaking down my understanding of each line.


class Node {    // Initiating our Linked List
  constructor(value) {
    this.value = value; // Value is our argument we're passing through our constructor
    this.next = null; // Next is used to connect our Node to the next Data Node we want to connect it to in our Linked List(LL)
  }
}

class Stack { // Intitiating our Stack
  constructor() {
    this.top = null;  // Essentially the 'head' of our Stack
  }

  push(value) { // We're adding the value to the top of our LL
    let newNode = new Node(value); // Setting newNode as a variable that allows us to create a new Node with our constructor from above
    if(this.top === null){
      this.top = newNode; // Setting the newNode as our 'top' AKA 'head'

    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

  }

  pop() { // Creating our pop function
    let removedValue = null;  // This is a blank variable that gives us a place to put our future removed Nodes
    if (this.top) { //Starting our Conditional Statement which checks if this.top = has a value.
      removedValue = this.top.value;  // If this.top has a value removedValue will take the value of our top stack. OR we are setting the top.value as null
      this.top.next = this.top.next.value; // Moves our next Node in our stack up into place. I imagine this like a sort of shift, like moving 2nd into the 1st index.
    }
    return removedValue; //Returns our removed value which was our 1st Node on the top of the stack.
  }

  peek() { // Starting our peek function which will return the top value from our LL
    return this.top.value;
  }

  isEmpty() { //Lets us know if our LL is empty by attempting to return our 'top' AKA 'first index' of our LL
    return this.top === null;
  }
}

class Queue { //Initiating our Queue
  constructor() { 
    this.front = null; //Essentially the 'Head' of our Queue
    this.back = null; //The 'Tail' of our Queue
  }

  enqueue(value){ //Enqueue is similar to append, it adds something to our Queue
    let newNode = new Node(value); // Establishing a variable to let us create a new Node with our constructor from above
    if(this.front){ // Setting a conditional statement to check if their is a value at the front of our queue.
      this.back.next = newNode; //  Places our new Node at the back of our LL if their is a value already at the front
    } else {
      this.front = newNode; // Places our new Node at the front
    }
    this.back = newNode;  // If our conditional statement from above returns false, that means we already have a value at the front of our queue. So it places our new Node at the back of our LL.
  }

  dequeue() { //Removes something from our Queue
    let removedValue = null; //Gives us a blank variable we can use to put our future removed node into.
    if(this.front){ //Conditional Statement, checks if we have a value at the front of our Queue and runs the following code.
      removedValue = this.front.value;  // Puts our front data node into our removedValue variable.
      if(this.front === this.back){ // If the front is the same as the back (Another way of saying theirs only one index)
        this.back = null; // Then sets our final node as null
      }
      this.front = this.front.next; // Moves the next element up in our LL Queue
    }
    return removedValue;  // Returns the index it removed.
  }
  peek() {
    return this.front.value;
  }


}


let q = new Queue();  // this line helps us make our following code more legible
q.enqueue(1); // Adds the value of 1 to our Queue
q.enqueue(2); // Adds the value of 2 to our Queue
q.enqueue(3); // Adds the value of 3 to our Queue
console.log(JSON.stringify(q)); //Putting our Queue into a string so that we can read it in the terminal
console.log('----------'); // Spacer to help us find our console log in our terminal

q.dequeue();  //Removes the front element from our Queue
console.log('one node removed' ,JSON.stringify(q));
q.dequeue();  //Removes the front element from our Queue
console.log('one node removed' ,JSON.stringify(q));
q.dequeue();  //Removes the front element from our Queue
console.log('one node removed' ,JSON.stringify(q));

module.exports = { Stack, Queue };
