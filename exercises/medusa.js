class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  stare(victim) {
    this.statues.push(victim);
    if (this.statues.length > 3) {
      this.statues.splice(3);
      this.statues[0].stoned = false;
    }
    victim.stoned = true;
    }
};

module.exports = Medusa;
