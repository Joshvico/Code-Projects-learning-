/* OBJECTS IN JS */
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat; /* . is used when knowing the name of the property even if it is a string you can call it like if not */
const shirtValue = testObj.shirt;

console.log(testObj.shirt); /* it will print value of the right (ball cap) */

/* ACCESING PRPERTIES OF OBJECTS with SPACE with [] */

const testObj1 = {
  "an entree": "hamburger", /* As you can see this property has a space so to access it we need[] */
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj1["an entree"]; /* when accessing since it has space we have to quoted with one or doble */   
const drinkValue = testObj1["the drink"]; 

console.log (entreeValue);

/*CHAIGIN PROPERTIES WITH VARIABLES ursing  . or []  */

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

console.log (ourDog);

/* ADDING NEW PROPERTIES --> same as accesing them but new property */

const ourDog1 = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog1.bark = "bow-wow";
ourDog1["race"] = "perro mamao";
 
console.log (ourDog1);

/* DELETING PRoPERTIES WITH DELETE */

const myDog3 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog3.tails; 
console.log(myDog3);