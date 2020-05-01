class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0
  }
  collectRiddle(riddle) {
    if (this.riddles.length === 3) {
      this.riddles.shift();
    }
    this.riddles.push(riddle)
  }

  attemptAnswer(guess) {
    let correct = this.riddles.filter(riddle => {
      return riddle.answer === guess;
    });

    this.riddles = this.riddles.filter(riddle => {
      return riddle.answer !== guess;
    });

    if (correct.length > 0 && this.riddles.length === 0) {
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${correct[0].answer}"???`
    } else if (correct.length > 0) {
      return 'That wasn\'t that hard, I bet you don\'t get the next one';
    } else {
      this.heroesEaten += 1;
    }

  }
}


module.exports = Sphinx;
