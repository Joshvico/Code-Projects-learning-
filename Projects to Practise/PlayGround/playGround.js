
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

/* BOOLEANS AND COMPARISON OPERATORS */

/* EX 1 */
const number = (num) => {
  if (num % 2 === 0 ) { /* % is the modulo operator, which calculates the remainder when number is divided by 2. */
    return `The number ${num}, is even`
  } 

  return `The number ${num}, is even`;
}

console.log (number (3));

/* EX 2 */
const LEGALAGETOVOTE = 18;

const votingPermission = (name, age) => {
  if (age < 18) {
    return `${name} is minor as his/her ${age}, less than legal age`;
  } else if (age >= 18  && age <= 100) {
    return `${name}'s age is ${age}, is over ${LEGALAGETOVOTE}, he/she can vote`;
  } else if (age >= 100) {
    return `${name} is provably a dead person, please double check the system`;
  }
}

console.log (votingPermission("Pearson",130));

/* EX 3 */

/* EX 4 */
/* const chekingGrade = (grade) => {
  let answer = "";
  switch (grade) {
    case 1:
    case 2:
    case 3:
    case 4:
      answer = `With a ${grade}, you failed the exam`;
      break;
    case 4.9:
      answer = "almost there, but failed";
      break;
    case 5:
    case 6:
      answer = `With a ${grade}, you passed the exam, but keep working hard!`;
      break;
    case 7:
    case 8:
    case 9:
    case 10:
      answer = `With a ${grade}, you passed the exam, very good!`;
      break;
    default:
      answer = "No grade? You probably forgot to put your name.";
  }
  return answer;
}

console.log(chekingGrade(4.9)); */

/* IMRPOVIEMENT VERSION OF SWITCH ESTAMENT WITH INTERVALS */
const chekingGrade2 = (grade) => {
  let answer = "";

  switch (true) {
    case grade >= 1 && grade <= 4:
      answer = `With a ${grade}, you failed the exam`;
      break;
      case grade >= 4.5 && grade <= 4.9:
        answer = `With a ${grade} is almost there but you failed`;
        break;
    case grade >= 5 && grade <= 6:
      answer = `With a ${grade}, you passed the exam, but keep working hard!`;
      break;
    case grade >= 7 && grade <= 10:
      answer = `With a ${grade}, you passed the exam, very good!`;
      break;
    default:
      answer = "No grade? You probably forgot to put your name.";
  }

  return answer;
}

console.log(chekingGrade2(4.7));

/* EX 5 */

/* const chekingNum = (numero) => {
  if (numero >= 1) {
    return `${numero} is a positive number`;
  } else if (numero === 0) {
    return `The number entered is ${numero} `;
  } else {
    return `${numero} is negative`;
  }

}

console.log (chekingNum(-5)); */

const chekingNum = (numero) => {
  if (numero >= 1) {
    return `${numero} is a positive number`;
  } else if (numero === 0) {
    return `The number entered is ${numero} `;
  } else { /* El else va sense conditions as is the remaining posibility */
    return `${numero} is negative`; /* For negative there is no need to cover it a condition as is already the last posibility */
  }

}

console.log (chekingNum(-5));

/* EX 6 */
/* 
function dayOfTheWeek (day) {

  let weekDay = "";

  switch (true){
  case day == 1:
    weekDay = "Monday";
    break;
    case day == 2:
    weekDay = "Tuesday";
    break;
    case day == 3:
    weekDay = "Wednesday";
    break;
    case day == 4:
    weekDay = "Thursday";
    break;
    case day == 5:
    weekDay = "Friday";
    break;
    case day == 6:
    weekDay = "Saturday";
    break;
    case day == 7:
    weekDay = "Sunday";
    break;
    default:
    weekDay = "enter a valid day"
  
}
 return weekDay;
}

console.log (dayOfTheWeek(3)); */

/* simplified version */
function dayOfTheWeek(day) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  if (day >= 1 && day <= 7) {
    return days[day - 1]; // Subtract 1 to match the array index
  } else {
    return "Enter a valid day";
  }
}

console.log(dayOfTheWeek(3)); // Outputs "Wednesday"

/* EX7 */


const palindrome = (word) => {

  if (word)

}
