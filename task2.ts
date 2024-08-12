// Create an enum Color with values Red, Green, and Blue. Write a function that takes a Color and returns a string describing the color

enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

function getColor(color: Color): string {
  return color;
}

getColor(Color.Blue);
getColor(Color.Green);
getColor(Color.Red);

// Define an interface Car with properties make, model, and year. Then create a class that implements this interface and includes a method to display the car's details

interface Car {
  make: string;
  model: string;
  year: number;
}

class MyCar implements Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  display(): string {
    return `Car Details: ${this.make} ${this.model}, Year: ${this.year}`;
  }
}

const car = new MyCar("Toyota", "Camry", 2021);
console.log(car.display());
