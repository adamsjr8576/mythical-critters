class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  change() {
    if(this.human === true && this.wolf === false) {
    this.human = false;
    this.wolf = true;
    this.hungry = true;
  } else {
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  }
  eat(victim) {
    if(this.hungry === true) {
      victim.alive = false;
      this.change();
    } else {
      victim.alive = true;
    }
  }
}


module.exports = Werewolf;
