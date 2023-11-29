
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck2= Object.create(Animal.prototype);
let beagle7 = Object.create(Animal.prototype);

