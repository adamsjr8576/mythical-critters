class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.heinousAct = 0;
    this.booty = 0;
  }
  commitHeinousAct() {
    this.heinousAct += 1;
    if (this.heinousAct > 2) {
      this.cursed = true;
    }
  }
  robShip() {
    this.booty = 100;
    return 'YAARRR!'
  }
}

module.exports = Pirate;
