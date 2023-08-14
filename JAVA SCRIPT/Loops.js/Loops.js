/* WHILE LOOP || USED WEHN UNDER CERTAIN CODITIONS YOU WANT LOOP TO BE EXECUTED */

const myArray = [];

var i = 10;
while(i >= 0) { /* mind >= to include 0 */
  myArray.push(i); /* every action is delimited with ; */
  i--;/* this action delimitates the count */
}
console.log(myArray); /* this will loop code until reachin 0 [5,4,3,2,1,0] */

const myArray1 = [1,2,3,4,5,6,7,8,9,10];

var i = 10;
while(i >= 0) { /* mind >= to include 0 */
  myArray.unshift(i); /* every action is delimited with ; */
  i++;/* this action delimitates the count */
}
console.log(myArray1);

/* WHILE For FUN APOLLO COUNT DOWN*/
let countDown = ["Hueston ready..."];
let x = 10

while (x >= 0){
  countDown.push(x);
  x--;
}

/* FOR LOOP  || USED WHEN KNOWN HOW MANY TIMES YOU WANT LOOP TO BE DONE */
const myArray2 = [];

/* let xi =1; --> Declaring it in Global scope will not affect the loop but it can be already declared insed it*/

for(let xi =1; xi <= 5; xi++){ /* Declaring X could be done inside the FOR loop no need to declare in or outside the fucntion */
  myArray.push(xi);
}
 console.log(myArray);

 /* ITERATING ODS NUMBERS with FOR LOOP*/

 const myArray3 = [];

for(var a = 1; a <= 9; a += 2){
  myArray3.push(a);
}

console.log(myArray3);

/* COUNTING BACKWARDS WITH FOR LOOP */
const myArray4 = [];

for(var b = 9; b > 0; b -= 2){
  myArray4.push(b);

  /* ITARATING TRHOUGH ARRAY FOR LOOP */
  const myArr = [2, 3, 4, 5, 6];
var total = 0;
for(let d = 0 ; d < myArr.length; d ++){ /* This loop will add every number inside the array until length condition is false no more numbers  */
 total += myArr[d];
}

console.log(total); /* It will show 20  */
}

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

/* DO.... WHILE */

const myArray5 = [];
let w = 10;

do {  
  myArray5.push(w);
  w ++;
} while (w < 10);

console.log(myArray5);/* IT pints value 10 as condition is not met but the Do while still runs even if conditions fails */
