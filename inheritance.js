Function.prototype.inherits = function(parent, child) {
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate();
  child.prototype.constructor = child;
}

Function.prototype.inherits2 = function (parent, child) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}