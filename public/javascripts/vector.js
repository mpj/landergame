function Vector(x, y){
  
  this.x = x;
  this.y = y;

  this.scalarMult = function(scalar){
	  return new Vector(this.x * scalar, this.y * scalar);
  }
  this.dot = function(v2) {
    return this.x * v2.x + this.y * v2.y;
  };
  this.perp = function() {
    return new Vector(-1 * this.y, this.x);
  };
  this.subtract = function(v2) {
    return this.add(v2.scalarMult(-1));
  };
  this.add = function(v2) {
	  return new Vector(this.x + v2.x, this.y + v2.y);
  }

}