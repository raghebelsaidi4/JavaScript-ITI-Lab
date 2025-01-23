// Node class
class Node {
    constructor(value) {
      this.value = value; 
      this.next = null;   // Pointer to the next node, initialized as null
    }
  }
  
  // LinkedList class
  class LinkedList {
    constructor() {
      this.head = null;   // Head points to the first node in the list
      this.size = 0;   
    }
  
    // Add a new node at the end of the list
    append(value) {
      const newNode = new Node(value);
  
      if (this.head === null) {
        this.head = newNode; 
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next; // Traverse to the end of the list
        }
        current.next = newNode; // Add the new node at the end
      }
  
      this.size++; 
    }
  
    // Add a new node at the beginning of the list
    prepend(value) {
      const newNode = new Node(value);
  
      if (this.head === null) {
        this.head = newNode; 
      } else {
        newNode.next = this.head; // Point the new node's next to the current head
        this.head = newNode;      // Update the head to the new node
      }
  
      this.size++; 
    }
  
    // Print all nodes in the linked list
    printList() {
      let current = this.head;
      let result = "";
  
      while (current !== null) {
        result += `${current.value} -> `;
        current = current.next;
      }
  
      console.log(result + "null");
    }
  
    // Remove a node by value
    remove(value) {
      if (this.head === null) return false; 
  
      if (this.head.value === value) {
        this.head = this.head.next; // Remove the head
        this.size--;
        return true;
      }
  
      let current = this.head;
      let previous = null;
  
      while (current !== null && current.value !== value) {
        previous = current;
        current = current.next;
      }
  
      if (current === null) return false; 
  
      previous.next = current.next; // Remove the node by skipping it
      this.size--;
      return true;
    }
  
    // Get the size of the linked list
    getSize() {
      return this.size;
    }
  
    // Check if the list is empty
    isEmpty() {
      return this.size === 0;
    }
  }
  
  // Testing
  const list = new LinkedList();
  list.append(10);  
  list.append(20);
  list.prepend(5);  
  list.printList(); 
  
  list.remove(10);  
  list.printList(); 
  
  console.log(`Size of list: ${list.getSize()}`); 
  console.log(`Is the list empty? ${list.isEmpty()}`); 
  
