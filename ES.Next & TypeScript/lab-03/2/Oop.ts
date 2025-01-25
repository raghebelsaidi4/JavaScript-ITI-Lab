// interface
interface User {
    id: number;
    name: string;
    isActive: boolean;
}

// implement interface
class Customer implements User {
    id: number;
    name: string;
    isActive: boolean;

    constructor(id: number, name: string, isActive: boolean) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
    }

    displayInfo(): string{
        return `id: ${this.id}, name: ${this.name}, isActive: ${this.isActive}`;
    }
}

// inheritance
class Admin extends Customer {
    role: string;

    constructor(id: number, name: string, isActive: boolean, role: string) {
        super(id, name, isActive);
        this.role = role;
    }

    displayInfo(): string{
        return `${super.displayInfo()}, role: ${this.role}`;
    }
}

// Test
const customer = new Customer(1, "Ahmed", true);
console.log(customer.displayInfo()); // id: 1, name: Ahmed, isActive: true

const admin = new Admin(2, "Ali", true, "Super Admin");
console.log(admin.displayInfo()); // id: 2, name: Ali, isActive: true, role: Super Admin