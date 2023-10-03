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

/* ACCESING NESTED OBJECTS */
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

const gloveBoxContents = myStorage.car.inside["glove box"];
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

const secondTree = myPlants[1].list; /* This will print the whole Array */ 
const thirdTree = myPlants[1].list[0]; /* This will print the first value of the arrays nested in object myplays (trees, "fir") */

console.log(secondTree);

/* RECORD COLLECTION */

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
  else if (prop === "tracks" && value !== ""){ /* investigate nestig else if statmenet */
    if(records[id].hasOwnProperty("tracks") === false){
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(recordCollection[1245].artist); /* This is how you will print a specific value of the object */
/* CHATGPT CORRECITON *************************************************/
const recordCollectionchatGPT = {
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
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (!records[id].hasOwnProperty("tracks")) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
}
console.log(recordCollection[1245].artist);


  /*PROFILE LOOKUP excercises*/
  const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
  for (var i= 0; i < contacts.length; i++) { /* here the loop acces the whole object thanks to lenght. */
    if (contacts[i]["firstName"] === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact"; /* here we are exiting the loop + boolen condition and return "No such a contact" */
  }
  
  console.log (lookUpProfile("Akira", "address"));