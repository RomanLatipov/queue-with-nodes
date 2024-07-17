class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor(front = null) {
    this.front = front;
    this.rear = front;
  }

  // ADD NODE TO BACK OF QUEUE
  // USE DATA TO CREATE A NEW NODE AND ADD IT TO THE QUEUE
  enqueue(data) {
    const newNode = new Node(data);
    if (this.front === null) {
      this.front = newNode;
      this.rear = newNode;
    }
    else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  // REMOVE NODE FROM FRONT OF QUEUE AND RETURN IT
  dequeue() {
    if (this.front === null)
      return null;

    const front = this.front;
    this.front = this.front.next;

    if (this.front === null || this.front.next === null)
      this.rear = this.front;

    return front;
  }

  // RETURN NODE AT FRONT WITHOUT REMOVING IT
  peek() {
    return this.front;
  }

  // RETURN TRUE IF QUEUE IS EMPTY, OTHERWISE FALSE
  isEmpty() {
    return !this.front;
  }

  // RETURN NUMBER OF NODES IN QUEUE, E.G. 10
  size() {
    let dummy = this.front;
    let count = 0;

    while (dummy) {
      dummy = dummy.next;
      count++;
    }
    return count;
  }

  // RETURN INTEGER REPRESENTING HOW FAR TARGET IS FROM FRONT OF QUEUE
  // IF TARGET ISN'T IN QUEUE, RETURN -1
  search(target) {
    let found = -1;

    let current = this.front;
    if (current === null) return found;
    while (true) {
      found++;
      if (current.data === target)
        return found;

      if (current.next === null)
        return -1;

      current = current.next;
    }
  }
}

if (require.main === module) {
  // add your own tests in here
 
}

module.exports = {
  Node,
  Queue
};

// Write your Big O findings here

// Optional: Please add your pseudocode to this file
// Optional: And a written explanation of your solution
