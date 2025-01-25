// Generic Function
function identity<T>(value: T): T {
    return value;
}

// Test
console.log(identity<string>("Hello World"));
console.log(identity<number>(123));

// Generic Class
class DataStore<T> {
     items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getAllItems(): T[] {
        return this.items;
    }
}

// Test
let stringData = new DataStore<string>();
stringData.addItem("Ahmed");
stringData.addItem("Ali");
console.log(stringData.getAllItems());

const numberData = new DataStore<number>();
numberData.addItem(123);
numberData.addItem(456);
console.log(numberData.getAllItems());