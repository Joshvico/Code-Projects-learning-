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

/* OWN PROPERTY */

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let prop in canary) {
  if(canary.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
}

console.log(ownProps);

/* PROTOTYPE of PROPERTIES TO REDUCE DUPLICAE CODE */

function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

console.log(beagle)

/* ITARATE OVER ALL PROPERTIES WITH FOR IN LOOP TO DEVIDE OWNPROP AND PROTOTYPE  */

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle2 = new Dog("Snoopy");

let ownProps2 = [];
let prototypeProps2 = [];
/****************/
for (let prop in beagle) { 
  if(beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop); 
  }
}

console.log(ownProps2);
console.log(prototypeProps2);


/* COSNTRUCTOR PROPERTY TO CHECK WHAT TYPE OF OBJECT */

function Dog(name) {
  this.name = name;
}

let streetDog = new Dog ("luna");

function joinDogFraternity(candidate) {
 if (candidate.constructor === Dog) {
   return true;
 } else {
   return false;
 }
}

console.log(joinDogFraternity(streetDog));

/* CHANEG PROTOTYPE TO A NEW OBJECT INT HE OPTIMIZE WAY */

function Dog(name) {
  this.name = name;
}

let luna = new Dog("luna");

Dog.prototype = {
    numLegs: 4,
eat: function () {
  console.log("yummi");
},
  describe: function () {
    console.log(`My name is ${this.name}`)
}
};

/* AVOIDING OVERWRTTING ORIGN OBJ INSTANCES AND PROPTIPYES (from a new created obj) BY DEFINING " COSNTRUCTOR: xxxxx," */

function Dog(nome) {
  this.nome = nome;
}

Dog.prototype = {
  constructor:Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.nome);
  }
};

/* WEHRE OBJ PROTOIPES COME FROM with "ISPROTOTYPEOF" */

function Dog(name) {
  this.name = name;
}

let beagle3 = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle3);