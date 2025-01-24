// Base class
class SimpleCar {
    drive() {
        return "Driving a simple car.";
    }
}

// Decorators
function addSportsMode(car) {
    const baseDrive = car.drive;
    car.drive = function () {
        return `${baseDrive.call(this)} Sports mode enabled!`;
    };
}

function addLuxuryInterior(car) {
    const baseDrive = car.drive;
    car.drive = function () {
        return `${baseDrive.call(this)} Luxury interior added!`;
    };
}

// Using decorators
const myCar = new SimpleCar();
console.log(myCar.drive()); // Driving a simple car.

addSportsMode(myCar);
console.log(myCar.drive()); // Driving a simple car. Sports mode enabled!

addLuxuryInterior(myCar);
console.log(myCar.drive()); // Driving a simple car. Sports mode enabled! Luxury interior added!
