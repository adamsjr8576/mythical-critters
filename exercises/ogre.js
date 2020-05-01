class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0;
  }
  encounter(person) {
    person.encounterCounter ++;
    if (person.encounterCounter % 3 === 0) {
      this.swingAt(person)
      person.knockedOut = true;
    }
  }
  swingAt(person) {
    this.swings ++;
  }
  apologize(person) {
    person.knockedOut = false;
  }
}

module.exports = Ogre;
