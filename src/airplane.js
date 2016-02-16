function Airplane(){
  this.airborne = false;
}


Airplane.prototype.land = function() {
  this.airborne = false;
};

Airplane.prototype.takeOff = function() {
  this.airborne = true;
};
