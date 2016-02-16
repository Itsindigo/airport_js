function Airport(){
  this.planes = [];
  this.airportname = name;
};

Airport.prototype.landed = function(plane) {
  this.planes.push(plane);
  plane.land();
};

Airport.prototype.takenOff = function(plane) {
  this.planes.pop(plane);
  plane.takeOff();
};
