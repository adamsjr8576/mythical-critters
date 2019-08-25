class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.amIHungry = 0;
  }
  eat() {
    this.amIHungry += 1;
    if (this.amIHungry >= 3) {
      this.hungry = false;
    }
  }
}


module.exports = Dragon;
