/* DIFFERENT BROWSER CONSOLE COMMAND  */

var output="tu madre";
console.log(output);
console.clear(); /* to clear up the console */

/* LOGGING TO SEE TYPE OF DATA */

let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);/* conosle will show a is number */
console.log(typeof three); /* conosle will show a is a string */

/* CORRECTING AND ENCLOSING CORRECTLY WITH "()" */
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';

/* WEHN FUCNTION EMPTY CLSOING PARATHESIS ERROR */

function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine(); /* if it has no () it will result in an error */
console.log(result);

/* MINDING THE ORDER OF ARGUMENTS WHEN USING MATH FUCNTIONS */

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

/* as arrow function */
const raiseToPower2 = (a, d) => Math.pow(a, d);

let alaju = 2;
let dindong = 4;
let power2 = raiseToPower2(alaju, dindong);
console.log(power2);

/* CORRECTING LOOPS <=*/

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
let alpha = []; /*  this is added by me to try pushing result into an array */
for (let i = 0; i < len; i++) { /* the error is that  */

  console.log(alphabet[i]);
}
for (let j = 0; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
  alpha.push(alphabet[k]); /* I added this line to try how would I push the result of loop []K */
}


/* INITIALITING NEW VARIABLES INISDE A LOOP */

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = [];// Initialize a new row for each iteration of the outer loop

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row,);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

/* BREAKING INFITE LOOPS BY ASSINING CORRECT CONDITION WITH OEPRATORS */

function myFunc() {
  for (let i = 1; i != 4; i += 2) { /* since we strat per one and until index does not reach 4 it will keep adding +2 so it will jump over 4 and never stop */
    console.log("Still going!");
  }
}