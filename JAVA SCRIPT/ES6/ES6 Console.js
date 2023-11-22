/* CONDITIONAL OPERATOR */

function checkEqual(a, b) { /* this is a way to use conditional operator to wirht if else statmenet   */
  return a == b ? "Equal" : "Not Equal";   /* first part is condition finnished wiht ? and the the rest is the return if true and the return if false */
  }

  checkEqual(1, 2);
  console.log (checkEqual(1, 2));

  /* MUTLIPLE CONDITONAL OPERATOR */

  function checkSign(num) {
    return (num > 0) ? "positive" /* separating statmenet is best practice for reaidng porposes */
    : (num < 0) ? "negative"
    : "zero"; /* this will execute when above conditions is false */
   }
   console.log (checkSign());


   /* RECURSION COUNT DOWN */
function countdown(n){
  if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1); 
      countArray.unshift(n); /* unshift is to remove so countdown will start from bigger to minor */
      return countArray;}
  function checkScope() {
    let i = 'function scope'; /* i is declared here with this value as is let is in this function {}scope the we can declare i again with another value as the scoend let i is on inside expresion scope */
    if (true) {
      let i = 'block scope'; /* The scoep of i value is inside this boolean */
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
}

  console.log (countdown(10)); /* ^[10......1] */

    /* RECURSIVE COUNTDOWN WITH 2 PARAMETERS */

  function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
      } else {
        const rangeArray = rangeOfNumbers(startNum,endNum - 1); 
        rangeArray.push(endNum); 
        return rangeArray;
      }
  }  

  console.log (rangeOfNumbers(1,5));
  function checkScope() {
    let i = 'function scope'; /* i is declared here with this value as is let is in this function {}scope the we can declare i again with another value as the scoend let i is on inside expresion scope */
    if (true) {
      let i = 'block scope'; /* The scoep of i value is inside this boolean */
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  console.log ( checkScope());

    /* MUTING CONST WITHN CONST (ARRAYS) */

    const s = [5, 7, 2];
    function editInPlace() {
    s[0] = 2; /* const is mutable only when the declaration of the Array value points to himself like here
    */
    s[1] = 5;
    s[2] = 7;
    return s;
    }
    console.log (editInPlace()); /* it will return 2,5,7 as the new assignation could done by potinting him self*/
    
    
/* FREEZING VALUES WITH Objct.freeze TO PREVENT OBJ MUTAITON */

    function freezeObj() {
      const MATH_CONSTANTS = {
        PI: 3.14
      };
        Object.freeze(MATH_CONSTANTS); /* This funciton prevenet PI to be assigned for 99 as you can see below, so it will always print PI= 3.14 */
      try {
        MATH_CONSTANTS.PI = 99;
      } catch(ex) {
        console.log(ex);
      }
      return MATH_CONSTANTS.PI;
      }
      const PI = freezeObj();

      
    console.log (freezeObj(PI)); /* it will always print 3.14 */

/* ARROW FUNCTIONS */
 /*
var magic = function() {
  return new Date();
}; 
*/
const magic = () => new Date; /* the variable should be const in order to create arrow functions */ 


/* PASSING PARAMETERS TO ARROW FUCNTIONS */

const myConcat = (arr1, arr2) => arr1.concat(arr2); /* important to not forget that var is not accepted as variavle is should be const / local scope */

console.log(myConcat([1, 2], [3, 4, 5])); /* as per above the contact fucntion will concatenate the arr1 or arr 2 with the values you enters as one big ARRAY */

/* SETTING DEFAULT PARAMENTERS IN CASE NOT DEFINED */
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting()); /* 1st it will print John and second will print anonymous as default since is not defined  */

const increment = (number, value = 1) => number + value; /* in case value is not defined with put the parameter 1 that will ve added as default */

/* REST PARAMETERS THAT TAKE A VARIABLE NUM OF ARGUMENTS  ...ARGS */

/* EX FROM CHALLENGE */
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { })); /* it will consol.log the number strings passesd ask defined in funciton with args.lenght  */
 

const sum = (...args) => { /* The args fucntion will allow to put any amount of arguments */
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log (sum(1,1,1,1,1,1)); /* This will print 6 as per loop is sumuning evry argument we enter */

/* SPREAD OPERATOR ...ARG */

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY',];
let arr2;

arr2 = [...arr1];  /* Spread operator unpacks the arrays indidivally ad assignes a copy in another context, in this case to arr2 as defined in this line  */

console.log(arr2,);

/* DESTRUCTURING TO EXTARCT VALULES FORM OBEJECTS */

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const today1 = HIGH_TEMPERATURES.today; /* Extració classica  */ 
const tomorrow1 = HIGH_TEMPERATURES.tomorrow;/* Extració classica  */ 

/* VS */

const {today, tomorrow} = HIGH_TEMPERATURES; /* Extarción de valors del objects moderna ES6 */

/* DESTRUCTURING TO ASSING VARIABLES FORM OBJECTS */

const HIGH_TEMPERATURES2 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const highToday1 = HIGH_TEMPERATURES.today;/*Assignació  classica  */
const highTomorrow1 = HIGH_TEMPERATURES.tomorrow; /*Assignació  classica  */

/* VS */  
const {today:highToday , tomorrow:highTomorrow} = HIGH_TEMPERATURES;/*Assignació de valors del objects moderna ES6  */

/* DESTRCUTURING TO EXTRAT AND REASSIGNE VARIABLES IN A NESTED OBJECT */
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const lowToday = LOCAL_FORECAST.today.low;/*Assignació  classica  */
const highToday2 = LOCAL_FORECAST.today.high;/*Assignació  classica  */

/* VS */  
const { today: {low: lowToday1, high: highToday3}}  = LOCAL_FORECAST; /*You are accesing object, value today and reassigning low to lowtaday1 and high to highToday3  */

/* DESTRUCTURING ARRAYS  */

let a = 8, b = 6;
[a, b] = [b, a];

console.log ([a,b]);

/* DESTRUCTURING WITH REST ELEMENTS */ /* check break down in Funciton theory*/

function removeFirstTwo([, , ...rest]) {
  return rest;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log(sourceWithoutFirstTwo); // [3, 4, 5, 6, 7, 8, 9, 10]


function removeFirstTwo2([, , , , ...list]) {/* ... define DESTRUCTURING ACTION the more comas the more num it will rmeove */
  return list;
}

const source1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo2 = removeFirstTwo2(source1);

console.log(sourceWithoutFirstTwo2); 

 /* DESTRCUCTURING TO PASS OBJ AS FUNTION PARAMETER */ 

 const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({ max, min }) => (max + min) / 2.0; /* {} defines the parts of the object your are intesrested in */
const result = half(stats); /* 28.015 */

console.log (result);/* 28.015 */
console.log (half(stats));/* 28.015 */

/* TEMPALTE LITERAL ${} to CREAT COMPLEX STRINGS */

const result1 = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
  const failureItems = [];
  for (const item of arr) {
    failureItems.push(`<li class="text-warning">${item}</li>`);
  }
  return failureItems;
}

const failuresList = makeList(result1.failure);
console.log(failuresList);

[ '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>' ]

  /* AVOIDING REDUDANCY IN OBJECT WITH EQUIVALENT KEY PAIRS WITH SHORTHAND */

  const createPerson = (name, age, gender) => {
    return ({ name, age, gender});
   
  };
  
  console.log(failuresList); /* This will print and obeject with equivalent key values */
  
  /* SKIPING FUCNTION KEWYORD WITH FUCNITONS INSIDE OBJECTS */

const bicycle = {
  gear: 2,
  setGear (newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear); 

/* CLASS SYNTAXT + CONSTRUCTOR FUNTION */

class Vegetable {
  constructor(vegetableName){
    this.name = "carrot";
  }
}

const carrot = new Vegetable('carrot'); 
console.log(carrot.name); /* it will print carrot */

/* EXPORT FUCNTION TO SHARE CODE */

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {uppercaseString, lowercaseString}; /* with this expression your are exporting both fucntions */

/* THERMOS STATE FARHENHEIT AND CELSIUS CONVERTOR */
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit; // Initialize the temperature in Fahrenheit
  }

  // Create a getter method to obtain the temperature in Celsius
  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }

  // Create a setter method to set the temperature in Celsius
  set temperature(celsius) {
    this._fahrenheit = (celsius * 9) / 5 + 32;
  }
}

/* PROMISES */

const makeServerRequest = new Promise((resolve, reject) => { 

});


/* COMPLET PROMISE THAT RESOLVES OR REJECTS DEPENDING CONDITIONS ENTERED */

const makeServerRequest1 = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve ("We got the data"); /* if condition set here is true it will resolve by printin the string */
  } else {  
    reject ("Data not received");  /* else rejects by printing the string here */
  }
}); 

/* THEN** TO EXECUTE ACITON AFTER PROMISE IS COMPLETE*/

const makeServerRequest2 = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  } makeServerRequest.then(result => { /* This then async action executed after running the promise that When TRUE is allows execution of action defined in THEN */
    console.log (result);
  }); 
});

/* CATCH FOR REJECTED PROMISES */

const makeServerRequest3 = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.catch(error => { /* catch willl execute right after the promises has been rejected */
  console.log(error);
});