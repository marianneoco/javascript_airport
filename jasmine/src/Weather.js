function Weather(){
  this.chance = 0.2;
}

Weather.prototype.isStormy = function(){
  return (Math.random() < this.chance)
}
