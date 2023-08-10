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
const myDog1 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog1["bark"] = "woof"; /* this is one of the ways */
myDog1.race = "woof"; /* No need for " " when added like this */


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
result = lookup[val]; /* results equals the data that val that is entered in the function phoneticlookup 77 MIND THE BRAKET NOTION for VAL*/
return result;
}

/* HASOWNPROPERTY() TO CHEK if PROPERTY or OBJ FOUND */
var myObj = {   
  gift:"pony",
  pet:"kitten",
  bed:"sleigh"
}

function checkObj(obj, checkProp) {

if (obj.hasOwnProperty(checkProp)){ /* when asking for return one option or not keep in mind Bolean If/else statement// check consolo to see other way */

  return obj [checkProp];
} else {
  return "Not Found";
}
}

/* ADDING NEW OBJECTS in COMPLEX OBJECTS ARRAYS with OBJ IN  */

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

/* ACCESSING NESTED OBJECTS */

const myStorage = {
  "car": { /* car key has 2 nested objects inside and outside */
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     }, /* this coma is linking the two sub-objects */
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"]; /* the property assigned will be "maps" / keep in mind that the "." conect non space keys and [" connect spaced keys"] */console.log(myStorage.car.inside["passenger seat"]); /* console.log will print crumbs no need to apply value to a variable */
console.log(myStorage.car.inside["passenger seat"]); /* console.log will print crumbs no need to apply value to a variable */

/* ACCESING NESTED ARRAYS */

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list;
console.log(secondTree);

/* RECORD COLLECTION PENDING Redo!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  */

// Chek in Java S document for Ex info
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } 
  if (prop !== "tracks" && value !== "") { /* adding if statment por tos laos consultar chat GPT */
     records[id][prop] = value;
  } 
  else if (prop === "tracks" && value !== "") /* investigate nestig else if statmenet */
    if(records[id].hasOwnProperty("tracks") === false){
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
}

