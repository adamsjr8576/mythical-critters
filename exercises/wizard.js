class Wizard {
  constructor({ name, bearded }) {
    this.name = name;
    this.bearded = bearded === undefined? true : bearded;
    this.isRested = true;
    this.stamina = 0;
  }

  incantation(spell) {
    return spell.toUpperCase();
  }

  cast() {
    this.stamina += 1;
    if (this.stamina > 2) {
      this.isRested = false;
      return 'I SHALL NOT CAST';
    }
    return 'MAGIC BULLET';
  }
}




























// class Wizard {
//   constructor(obj) {
//     this.name = obj.name;
//     if (obj.bearded === undefined) {
//       this.bearded = true;
//     } else {
//       this.bearded = obj.bearded;
//     }
//     this.isRested = true;
//     this.castCount = 0;
//   }
//   incantation(text) {
//     return text.toUpperCase();
//   }
//   cast() {
//     this.castCount += 1;
//     if (this.castCount > 2) {
//       this.isRested = false;
//       return 'I SHALL NOT CAST';
//     } else {
//       return 'MAGIC BULLET';
//     }
//   }
//   }


module.exports = Wizard;
