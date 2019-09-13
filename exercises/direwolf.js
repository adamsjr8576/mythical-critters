class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(name) {
    if (this.home === name.location && this.starksToProtect.length < 2) {
    this.starksToProtect.push(name);
    name.safe = true;
    this.huntsWhiteWalkers = false;
    }
  }
  leave(name) {
    this.starksToProtect.pop();
    name.safe = false;
  }
}


module.exports = Direwolf;
