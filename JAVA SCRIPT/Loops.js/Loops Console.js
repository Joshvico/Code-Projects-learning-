
/* WHILE LOOP */
const myArray = [];

var i = 5;
while(i >= 0) { /* mind >= to include 0 */
  myArray.push(i); /* every action is delimited with ; */
  i--;/* this action delimitates the count */
}
console.log(myArray); /* this will loop code until reachin 0 [5,4,3,2,1,00] */

/* * WHILE For FUN APOLLO COUNT DOWN*/
let countDown = ["Hueston ready..."];
let x = 10

while (x >= 0){
  countDown.push(x);
  x--;
}
console.log(countDown);

/* FOR LOOP */

const myArray2 = [];
 
for(let xi =1; xi <= 5; xi++){ /* Declaring X could be done inside the FOR loop no need to declare in or outside the fucntion */
  myArray2.push(xi);
}
console.log(myArray2); /* this will loop code until reachin 0 [5,4,3,2,1,00] */

/* ITERATING FOR LOOP */

const myArray3 = [];

for(var a = 1; a <= 9; a += 2){
  myArray3.push(a);
}

console.log(myArray3);

/* COUTNIN BACKWARD WITH FOR LOOP */

const myArray4 = [];

for(var b = 9; b > 0; b -= 2){
  myArray4.push(b);
}

console.log(myArray4);
  
/* ITARATING TRHOUGH ARRAY FOR LOOP */
const myArr5 = [2, 3, 4, 5, 6];
var total = 0; /* the variable out of the loop must be declkared */
for(let d = 0 ; d < myArr5.length; d ++){
 total += myArr5[d];
}

console.log(total); /* It will show 20  */

/* ITERATING NESTED ARRAYS */
function multiplyAll(arr) {
  let product = 1;

for (let a = 0; a < arr.length; a ++){ /* The plus plus is used to mark the position pushed through the loop, in this case is one after previous positon */
 for(let b = 0; b < arr[a].length; b ++){ /* here is you stablishing loop inside each subarray */
   product *= arr[a][b] ; /* Remmeber we are working with a function so we have to define consider de parameter we delcaring in the fucntion */
 } 
}
  return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7 ]]); /* important declare product as it was not able to console.log as it is only global scope */

console.log(product);
