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
   product = arr[a][b] ; /* Remmeber we are working with a function so we have to define consider de parameter we delcaring in the fucntion */
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

/* RECURASION */
function sum(arr, n) {

  if(n <= 0) { /* This is the Base case of our Russinan Doll the last contains what we need */
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n -1];
  }
  
  }
  console.log (sum([1,2,3,4],3,"hello"));/* the N representa les posicions que seran sumades es per això que 4 no esta inclos en la suma */

  /* DEBUGGING SECTIION INTERESTING TO HAVE IN MIND **************************************************************************** */

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

/* COPIY ARRAY WITH SPREAD AOPERATOR "..." ///////////////////// from DATAALGO MODULE*/

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr])
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

/* ITERATE TRHOGH ARRAYS THROUGH ALL ARRAYS ITEMS TO FILTER ///////////////////// from DATAALGO MODULE  */

function filteredArray(arr, elem) {
  let newArr = [];
  for(let i= 0; i < arr.length; i++) {
    if(arr[i].indexOf(elem) == -1 ){ /* if current index of array (number in this case) is not matching element / element does not exist (-1) psuh this arrays element ito the newArr variable defined above    */
      newArr.push(arr[i])
    } 
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [2, 13, 26], [19, 3, 9]], 3));