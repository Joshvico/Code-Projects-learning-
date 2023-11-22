/* METHODS IN OBJECTS */

let dog3 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() { return `This dog has ${dog3.numLegs} legs.`;}
};

console.log(dog3.sayLegs());

/* THIS. KEYWORD TO MAKE CODE REUSABLE */

let dog4 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return `This dog has ${this.numLegs} legs.`;}
};

console.log (dog4.sayLegs()); 

/* MAKING CONSTURCTOR FUCNTION with THIS.  */

function Dog5() {
  this.name = "Luna"; 
  this.color = "Brown-Orange";
  this.numLegs = 4;
}

/* CREATING NEW INSTANCE with NEW OPERATOR */


function Dog7() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
let hound = new Dog7;

console.log(hound); 

/* AUTOMATE THE CREATION OF NEW OBJECTS WITH CONSTRUCTOR (this. + new + arguments)  */

function Dog8(name,color) {
  this.name =  name;
  this.color = color;
  this.numLegs = 4;

}
let terrier = new Dog8("luna", "orange"); 
console.log (terrier);

/* VERIFYING IF OBJECT IS FROM A SPECIFIC CONSTRUCTOR WITH "INSTANCEOF" */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(3);

myHouse instanceof House;

console.log (myHouse);
console.log (myHouse instanceof House);