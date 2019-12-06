function Airport(weather = new Weather()){
  this.planes = [];
  this.capacity = 3;
  this.weather = weather
}

Airport.prototype.land = function(plane){
  if(this.planes.indexOf(plane) > -1){
    throw new Error("Plane already in airport");
  }
  else if(this.planes.length >= this.capacity){
    throw new Error("Airport is full");
  }
  else if(this.weather.isStormy()){
    throw new Error("Can't land - stormy weather")
  }
  else {
    this.planes.push(plane);
  }
};

Airport.prototype.takeOff = function(plane){
  if(this.planes.indexOf(plane) === -1){
    throw new Error("Plane not in airport");
  }
  else {
    this.planes.pop(plane);
  }
};
