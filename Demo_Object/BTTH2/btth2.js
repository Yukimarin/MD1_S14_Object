class Dog {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  sua() {
    console.log(`${this.name} gâu gâu`);
  }
  catchMeo(meo) {
    if (this.speed > meo.speed) {
      console.log(`${this.name} bắt được mèo`);
    } else {
      console.log(`${this.name} không bắt được mèo`);
    }
  }
}

class Meo {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
}

// Tạo đối tượng chó và mèo
const dog = new Dog("Alaska", 20);
const meo = new Meo("Tom", 25);
// Chó sủa
dog.sua();
// Chó bắt mèo
dog.catchMeo(meo);
