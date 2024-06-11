class Vehicle {
  constructor(dimension, brand, model, manufactureDate) {
    this.dimension = dimension;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = manufactureDate;
  }
  getFullInfo() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const Vehicle1 = new Vehicle("25, 3, 5", "Voikswagen", "T-Roc R", "2018");

class PassengerTransport {
  constructor(brand, model, age, passengerLimit) {
    this.brand = brand;
    this.model = model;
    this.age = age;
    this.passengerLimit = passengerLimit;
  }
  getFullInfo() {
    return `${firstName} ${lastName}`;
  }
}
const PassengerTransport1 = new PassengerTransport(
  "Volkswagen",
  "T-Roc R",
  5,
  "20"
);
