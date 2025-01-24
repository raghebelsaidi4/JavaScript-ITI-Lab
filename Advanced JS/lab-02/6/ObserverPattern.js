// Subject (Observable)
class Subject {
    constructor() {
        this.observers = [];
    }

    // Add an observer
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Remove an observer
    removeObserver(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    // Notify all observers
    notifyObservers(message) {
        this.observers.forEach((observer) => observer.update(message));
    }
}

// Observer
class Observer {
    constructor(name) {
        this.name = name;
    }

    // Update method to be called by the subject
    update(message) {
        console.log(`${this.name} received message: ${message}`);
    }
}

// Using the Observer pattern
const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers("Hello Observers!");
// Observer 1 received message: Hello Observers!
// Observer 2 received message: Hello Observers!

subject.removeObserver(observer1);

subject.notifyObservers("Another message!");
// Observer 2 received message: Another message!
