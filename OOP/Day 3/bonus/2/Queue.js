class Queue {
    constructor() {
      this.items = [];
    }
  
    // add an element to the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // remove an element from the queue
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return undefined;
      }
      return this.items.shift();
    }
  
    // Peek at the front element without removing it
    peek() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return undefined;
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.items.length;
    }
  
    // Print the queue
    printQueue() {
      console.log(this.items.join(" <- "));
    }
  }
  
  // Test
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.printQueue(); 
  console.log("Dequeued item:", queue.dequeue()); 
  queue.printQueue(); 
  