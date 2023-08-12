/* WHILE LOOP */

const myArray = [];

var i = 10;
while(i >= 0) { /* mind >= to include 0 */
  myArray.push(i); /* every action is delimited with ; */
  i--;/* this action delimitates the count */
}
console.log(myArray); /* this will loop code until reachin 0 [5,4,3,2,1,00] */

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

/* FOR LOOP */
const myArray2 = [];

/* let xi =1; --> Declaring it in Global scope will not affect the loop but it can be already declared insed it*/

for(let xi =1; xi <= 5; xi++){ /* Declaring X could be done inside the FOR loop no need to declare in or outside the fucntion */
  myArray.push(xi);
}
 console.log(myArray);

 /* ITERATING ODS NUMBERS with FOR LOOP  */