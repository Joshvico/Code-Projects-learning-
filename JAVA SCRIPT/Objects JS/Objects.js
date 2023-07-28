/* CREATING AND OBJECT */
const myDog = {
  "name":"Leo",
  legs: 4, /* watch legs, it should be a string--> if " are not set for strings JS will read them as strings" */
  "tails": 1,
  friends: ["mama", "Manel"] /* if " are not set for strings JS will read them as strings" */
}; /* my the ; to finnish the objects it is like declaring a variable or a statement */

// ACCESING OBJECTS  PROPERTIES with . 

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat; /* . is used when knowing the name of the property even if it is a string you can call it like if not */
const shirtValue = testObj.shirt;

// ACCESING OBJECTS  PROPERTIES with [] 
const testObj1 = {
  "an entree": "hamburger", /* As you can see this property has a space so to access it we need[] */
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj["an entree"]; /* when accessing since it has space we have to quoted with one or doble */   
const drinkValue = testObj["the drink"]; 

/* ACCESING PROPERTIES with VARIABLE [] */

const testObj2 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;
const player = testObj2[playerNumber]; /* You created varaible player that will be equal to playerNumber / no "" need becaus taht is the name of the variable */

/*CHAIGIN PROPERTIES WITH VARIABLES ursing  . or []  */

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

console.log (ourDog);

/* ADDING NEW PROPERTIES --> same as accesing them but new property */


/* DELETING PRoPERTIES WITH DELETE */

const myDog3 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog3.tails; /* IT will print the info without tails */

/* USING OBJECTS FOR LOOK UPS --> LIKE DICTIONARIES and SUBSTITUTE SWITCH STATEMENT */

function phoneticLookup(val) {
  let result = "";

    var lookup = { /* the objects and the assoacited data starts here */
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank" /* last object property does not fennish with  "","" */
};
result = lookup[val]; /* results equals the data that val that is entered in the function phoneticlookup */
return result;
}