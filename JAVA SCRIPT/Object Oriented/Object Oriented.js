/* CREATING OBJECT */

let dog = {
  name: "luna",
  numLegs: 4

};

/* ACCESING OBJ with "." */

let dog2 = {
  name: "Spot",
  numLegs: 4
};
console.log(dog2.name); /* Spot */
console.log(dog2.numLegs); /* 4 */

/* METHODS IN OBJECTS */

let dog3 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() { return `This dog has ${dog3.numLegs} legs.`;} /* a key value can store a fucntion as vaulue  */

};

console.log(dog3.sayLegs()); /* This is how to access the fucntion with "." */

/* THIS. KEYWORD TO MAKE CODE REUSABLE */

let dog4 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return `This dog has ${this.numLegs} legs.`;} /* THIS KW allows terminal to access even if the name of object has changed */
};

console.log (dog4.sayLegs()); 

/* MAKING CONSTURCTOR FUCNTION with THIS.  */


function Dog() { /* keep in mind mayus of fucniton name */
  this.name = "Luna"; /* keep in mind that even if it seems and object it is separted like fucntion statement with ";" */
  this.color = "Brown-Orange";
  this.numLegs = 4;
}

/* CREATING NEW INSTANCE with NEW OPERATOR */

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog;

console.log(hound); /* Now Hound will have all Dog Properties */


/* AUTOMATE THE CREATION OF NEW OBJECTS WITH CONSTRUCTOR (this. + new + arguments)  */

function Dog(name,color) { /*  with this set paarmeter user can enter updated arguments to create new objects and use this constructor as a template */
  this.name =  name; /* see parameters and assigned here to be updated when creating new object */ 
  this.color = color;
  this.numLegs = 4;

}
let terrier = new Dog("luna", "orange"); /*  This creates a new object stored in let terrier with same key values as Dog but with name and color updated */

console.log (terrier);

/* VERIFYING IF OBJECT IS FROM A SPECIFIC CONSTRUCTOR WITH "INSTANCEOF" */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(3); /* When new object is created with new operator is called "new" instance of Xobject */

myHouse instanceof House; /* this is used to check if that instance is using the named constructo, it will return true or false */

console.log (myHouse); /* willl print 3 */
console.log (myHouse instanceof House); /* this is the way to console.log the instance of */

