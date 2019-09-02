class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.exercise = 0;
    this.layingDown = false;
  }
  shoot() {
    if (this.exercise <= 1 && this.layingDown === false) {
      this.exercise += 1;
      return 'Twang!!!';
    } else {
      this.cranky = true;
      return 'NO!';
    }
  }
  run() {
    this.exercise += 1;
    if (this.exercise <= 1 && this.layingDown === false) {
      this.exercise += 1;
      return 'Clop clop clop clop!!!';
    } else {
      this.cranky = true;
      return 'NO!';
    }
  }
  sleep() {
    if (this.standing === true) {
      return 'NO!';
    } else if (this.layingDown === true) {
      this.cranky = false;
      this.exercise = 0;
      return 'ZZZZ';
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if (this.standing === true && this.exercise >= 1) {
    this.cranky = false;
  } else {
    this.cranky = true;
    return 'Not while I\'m laying down!';
  }
  }
}

module.exports = Centaur;
