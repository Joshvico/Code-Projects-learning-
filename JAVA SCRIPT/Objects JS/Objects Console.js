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

/* HASOWNPROPERTY() TO CHEK if PROPERTY or OBJ FOUND */
var myObj = {   
  gift:"pony",
  pet:"kitten",
  bed:"sleigh"
};

function checkObj(checkProp) {
 
  var answer = "blank answer";
  
 if (myObj.hasOwnProperty(checkProp)) { /* when asking for return one option or not keep in mind Bolean If/else statement// check consolo to see other way */
  answer = myObj[checkProp];
  } else {
    answer = "Not Found";
  }
  return answer;
}
checkObj ("bed"); /* not sure why is it here.... it does not affect the console.log */
console.log(checkObj("zapatero"));

/* ---> ANOTHER WAY TO OPTIMIZE the PREVIOUS CODE */
var myObj1 = {   
  gift:"pony",
  pet:"kitten",
  bed:"sleigh"
};

function checkObj1(checkProp) {
 
  var answer = "Not found"; /* by declaring not found var here the return could just be this answer if False */
  
 if (myObj1.hasOwnProperty(checkProp)) { /* when asking for return one option or not keep in mind Bolean If/else statement// check consolo to see other way */
  answer = myObj1[checkProp];
  }
  return answer;
}
checkObj ("bed"); /* not sure why is it here.... it does not affect the console.log */
console.log(checkObj1("bed"));

/* ADDING NEW OBJECTS in COMPLEX OBJECTS ARRAYS with OBJ IN ---> PENGIN HOW TO ACCESS IT AN INTERACT */

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },/* MIND THE COMA as if it is not the last array or object it need , to continue the data ddition */      
  { /* THIS is the NEW object */
    "artist": "The WeekEnd",
    "title": "Flahs light",
    "release_year": 2019,
    "formats": [
      "CD",
      "8T",
      "LP" ]
    }
];

