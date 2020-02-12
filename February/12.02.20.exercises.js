// Person Class
//Create a class called Person which accepts the name of a person as a string, and his/her age as a number.
//The Person class should have a method called describe which returns a string with the following syntax: “name, age years old”.
//So, for example, if John is 19 years old, then the function describe of his object will return “John, 19 years old”

class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  describe() {
    console.log(`${this.name}, ${this.age} years old`);
  }
}

const john = new Person("John", 19);
john.describe();

// TV Class
// Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// Add methods to increase and decrease volume. Volume can’t never be below 0 or above 100.
// Add a method to set the channel randomly. Let’s say the TV has only 50 channels.
// Add a method to reset TV so it goes back to channel 1 and volume 50.
// It’s useful to write a status, that returns info about the TV status like: “Panasonic at channel 8, volume 75”.

class Tv {
  constructor(_brand, _channel = 1, _volume = 50) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }

  increaseVol() {
    if (this.volume < 100) {
      this.volume++;
    } else {
      console.log(`Volume is at maximum.`);
    }
  }

  decreaseVol() {
    if (this.volume > 0) {
      this.volume--;
    } else {
      console.log("Volume is at minimum.");
    }
  }

  randomChannel() {
    this.channel = Math.floor(Math.random() * 50) + 1;
  }

  status() {
    console.log(
      `${this.brand} at Channel ${this.channel}, volume ${this.volume}.`
    );
  }

  reset() {
    this.volume = 50;
    this.channel = 1;
  }
}

const sony = new Tv("Sony");
console.log(sony);

const dogs = new Tv("dogs", 5, 0);
console.log(dogs);
sony.status();
sony.randomChannel();
sony.status();
sony.decreaseVol();
sony.decreaseVol();
sony.increaseVol();
sony.status();
sony.reset();
sony.status();
dogs.randomChannel();
dogs.status();
dogs.decreaseVol();
dogs.status();
