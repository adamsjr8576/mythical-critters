class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }
  receiveBelief() {
    this.dust ++;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(flowers) {
    this.clothes.dresses = this.clothes.dresses.concat(flowers);
  }
  provoke() {
    this.disposition = `Vengeful`
  }
  replaceInfant(child) {
    if(this.disposition === `Vengeful`) {
      child.disposition = `Malicious`;
      this.humanWards.push(child);
    } else {
      return child;
    }
    if (this.humanWards.length > 2) {
      this.disposition = 'Good natured';
    }
  }
  }

module.exports = Fairy;
