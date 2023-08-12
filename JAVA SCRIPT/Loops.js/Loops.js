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
