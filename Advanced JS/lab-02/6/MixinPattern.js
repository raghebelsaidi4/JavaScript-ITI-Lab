// Define a mixin with reusable methods
const FlyMixin = {
    fly() {
        console.log(`${this.name} is flying!`);
    }
};

const SwimMixin = {
    swim() {
        console.log(`${this.name} is swimming!`);
    }
};

// Classes
class Bird {
    constructor(name) {
        this.name = name;
    }
}

class Fish {
    constructor(name) {
        this.name = name;
    }
}

// Apply mixins
Object.assign(Bird.prototype, FlyMixin);
Object.assign(Fish.prototype, SwimMixin);

// Using mixins
const eagle = new Bird("Eagle");
eagle.fly(); // Eagle is flying!

const shark = new Fish("Shark");
shark.swim(); // Shark is swimming!
