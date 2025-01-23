const ScientificDepartment = {
    name: "Physics Department",
    location: "Building A, Floor 3",
    address: {
      city: "Egypt",
      street: "5th nasr city",
      zipCode: "10001",
    },
    display() {
      console.log(`Scientific Department Details:
        Name: ${this.name}
        Location: ${this.location}
        Address:
          City: ${this.address.city}
          Street: ${this.address.street}
          Zip Code: ${this.address.zipCode}`);
    },
  };
  
  // Test the display function
  ScientificDepartment.display();

  /**
   * Why Do We Need Literal Objects?
   * 1- Quick and Simple Structure
   * 2- Ease of Initialization
   * 3- No Overhead
   * 4- Dynamic Structure
   */

  /**
   * Differences Between Literal Objects and normal Classes
   * liter objects
   * 1-Created using object literal syntax ({})
   * 2-Created directly (no new keyword required).
   * 3-Ideal for a single object with no need for reusability.
   * 4-Not reusable as-is. You must manually duplicate or use prototypes for reuse.
   * 5-Cannot inherently use inheritance.
   * 6-Methods are defined directly as properties.
   * 7- Easy to modify at runtime (add/remove properties).
   * 
   * normal classes
   * 1-Defined using class keyword or constructor functions.
   * 2-Requires instantiation using new.
   * 3-Used to define reusable object blueprints.
   * 4-Easily reusable by creating multiple instances.
   * 5-Supports inheritance and polymorphism.
   * 6-Methods are defined within the class and shared via the prototype.
   * 7-Can be modified but less commonly done at runtime.
   */
  