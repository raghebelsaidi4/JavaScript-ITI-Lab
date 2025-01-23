class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push an element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop an element from the stack
    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return undefined;
      }
      return this.items.pop();
    }
  
    // Peek at the top element without removing it
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return undefined;
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Print the stack
    printStack() {
      console.log(this.items.join(" <- "));
    }
  }
  
  // Test
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.printStack(); 
  console.log("Popped item:", stack.pop()); 
  stack.printStack(); 
  