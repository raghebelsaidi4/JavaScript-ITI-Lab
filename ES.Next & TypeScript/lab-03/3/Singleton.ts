class Singleton {
    private static instance: Singleton; // The single instance of the class
    private data: string;

    // Private constructor prevents instantiation from outside
    private constructor() {
        this.data = "I am the only instance!";
    }

    // Public static method to provide access to the single instance
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(); // Create the instance if it doesn't exist
        }
        return Singleton.instance;
    }

    // Getter for the data property
    public getData(): string {
        return this.data;
    }

    // Setter for the data property
    public setData(newData: string): void {
        this.data = newData;
    }
}

// Test the Singleton
const singleton1 = Singleton.getInstance();
console.log(singleton1.getData()); // Output: "I am the only instance!"

const singleton2 = Singleton.getInstance();
singleton2.setData("Singleton is awesome!");

// Verify both instances are the same
console.log(singleton1.getData()); // Output: "Singleton is awesome!"
console.log(singleton1 === singleton2); // Output: true
