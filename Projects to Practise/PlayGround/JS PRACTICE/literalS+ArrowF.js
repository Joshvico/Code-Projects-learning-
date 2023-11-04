
/* LITERALT TEMPLAES $ + ARROW FUNCTIONS */

/* Exercise 1:*/
const name = "John";
const greeting = `Hello, ${name}!`;

console.log (greeting);

/* *******************************************************************************  */
const greeting2 = (personName) => {

  if (personName === "Edu" && "Pol") {
    return `Que pasa ${personName} fill de puta, estic molt content de veure't`;
  } 
  return `Hola ${personName}, tot bé?`;

}

/* with an Array (which is a lot easier) + with swithc boolena  */

const greeting3 = (personName) => {
  const specialPeople = ["Edu", "Pol", "Enric", "Joan", "Joan"];

  if (specialPeople.includes(personName)) { /* includes is a KW fucniton to  */
    return `Que pasa ${personName}, estic molt content de veure't!`;
  } 
  return `Hola ${personName}, tot bé?`;
}


function greeting4(personName) {
  switch (personName) {
    case "Edu":
    case "Pol":
    case "Enric":
    case "Joan":
    case "Gerard":
      return `Que pasa ${personName}, estic molt content de veure't!`;
    default:
      return `Hola ${personName}, tot bé?`;
  }
}


console.log(greeting4 ("Edu"));
/* Exercise 2:*/

const width = 20;
const height = 39;
const areaOfRectangle = width * height;

const message = `The are of a rectangle is ${areaOfRectangle} square unites`;

/* ********************************* try to make as function */
console.log(message);


function calculateRectangleArea(width2, height2) {
  const area = width2 * height2;
  return area;
}

const width2 = 5; // Replace with the actual width value
const height2 = 10; // Replace with the actual height value

const area = calculateRectangleArea(width, height);

const message2 = `The area of the rectangle is ${area} square units.`;

console.log(message2);


/* Exercise 3:*/
const day = 4;

const month = 4;

const year = 1993;

const whatDayIsToday = `Today is ${day}/${month}/${year}.`;

console.log (whatDayIsToday);


/* ************************************************* try to make it as a function */

function addDaySuffix(day) {
  if (day === 1) {
    return day + "st";
  } else if (day === 2) {
    return day + "nd";
  } else if (day === 3) {
    return day + "rd";
  } else {
    return day + "th";
  }
}

const day2 = 2; // Remove the quotes to make it a number
const month2 = "April";
const year2 = 1993;

const daySuffix = addDaySuffix(day2);
const whatDayIsToday2 = `Today is the ${daySuffix} of ${month2} ${year2}.`;

console.log(whatDayIsToday2);


/* Exercise 4:*/

const bookTitle = "Libertad de expresion" 
const author = "Dani Daortiz"
const genre = "Magic"

const recomendation = `If you want to improve your magic, I recommend reading "${bookTitle}" by ${author}.
 It's a great ${genre} book.`; /* in ES6 when doing  this strins no need to use skipper like \n to create a line*/
console.log(recomendation);

const bookRecomendation = (bookTitle2,author2,genre2) => { 
  return `If you want to improve your magic, I recommend reading "${bookTitle2}" by ${author2}
  It's a great ${genre2} book.`;

}
console.log (bookRecomendation("libertad de expresion", "Dani Daortiz", "magic"));


/* Exercise 5:*/

const userName = "loco69";
const webSiteName = "isfuckingcool.com";

const url = `Visit https://${webSiteName}/${userName} for more.`;

console.log (url);

/* ****************************************************** Funciton proposed */
const url2 = (user) => {
  const webSiteName2 = "yourfuckingmother.com"

  
  return `Visit https://${webSiteName2}/${user} for more.`;
}

console.log (url2("pepillo"));

