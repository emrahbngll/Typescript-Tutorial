class Vehicle {
  drive(): void {
    console.log('bla bla bla');
  }

  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {}

const car = new Car();
car.drive();
car.honk();
