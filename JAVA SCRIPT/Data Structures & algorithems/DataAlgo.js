/* MANIPULATING ARRAYS WITH UNSHIFT. and PUSH. */

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX'); /* puts in front [ *XIX*, *XX*, 'XXI', 'XXII' ] */

romanNumerals.push(twentyThree); /* puts behind [ 'XIX', 'XX', 'XXI', 'XXII', *XXIII* ] */

console.log(romanNumerals);

/* PRACTICING MORE ARRAY MANIPULAITON WITH PUSH AND UNSHIFT */

let mixingnumbers = [];

function mixedNumbers(arr) {
  arr.unshift("I", 2, "three"); // Corrected syntax for unshift
  arr.push(7, 'VIII', 9); // Corrected syntax for push
  mixingnumbers.push(...arr); // Corrected syntax for pushing the elements of 'arr' into 'mixingnumbers'
}

mixedNumbers(['IV', 5, 'six']);
console.log(mixingnumbers);

