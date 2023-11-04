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


/* const palindrome = (word) => {

  if (word)

}
 */

/* EX 8 */

/* const centruyornot = (year) => {

  if (year >= 0 && year <= 1999) {
    return `The ${year} has a century`;
  } else if (year >= 2000){
    return `The ${year} does not has a century yet`
  }

}

console.log (centruyornot(2003)); */

const isCentury = (year) => {
  // Calculate the start and end years of the century
  const startYear = Math.floor(year / 100) * 100;
  const endYear = startYear + 99;

  if (year >= startYear && year <= endYear) {
    return `The year ${year} is in a century (${startYear}-${endYear})`;
  } else {
    return `The year ${year} is not in a century`;
  }
}

console.log(isCentury(2003));