
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
