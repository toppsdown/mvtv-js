Array.prototype.random = function() {
  return this[Math.floor(Math.random()*this.length)];
};

Array.prototype.popRandom = function() {
  randIndex = Math.floor(Math.random()*this.length);
  return this.splice(randIndex, 1)[0];
};
