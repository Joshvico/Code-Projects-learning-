/* MANIPULATING ARRAYS WITH SHIFT. and PUSH. */

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX'); /* puts in front [ *XIX*, *XX*, 'XXI', 'XXII' ] */

romanNumerals.push(twentyThree); /* puts behind [ 'XIX', 'XX', 'XXI', 'XXII', *XXIII* ] */

console.log(romanNumerals);

/* PRACTICING MORE ARRAY MANIPULAITON WITH PUSH AND UNSHIFT */

let mixingnumbers = [];

function mixedNumbers(arr) {
  arr.unshift("I", 2, "three"); /* mind the parenthesis  */ 
  arr.push(7, 'VIII', 9); /* mind the parenthesis  */ 
  mixingnumbers.push(...arr); /* You added this to push the end result of mixedNumber to the let mixingnumbers*/
}

console.log (mixedNumbers(['IV', 5, 'six']));
console.log(mixingnumbers);

/* POP() and SHIFT () */
function popShift(arr) {
  let popped = arr.pop(); /* reomves the last one  */ 
  let shifted = arr.shift(); /* removes the first */
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete'])); /* [ 'challenge', 'complete' ] */

/* REMOVE FROM THE MIDDLE with SPLICE() */

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(0,1)/* you can add many splice to sleect spefici ranges */
arr.splice(3,4)
// Only change code above this line
console.log(arr); /* The goal is to remove to make an array that sums 10 */

/*ADDING NUMS USING SPLICE (x,x,x) 3 arguments position, elements to splice and new agurment to add */

/*splice (position, amount to delete form position, new arguments to add…) */

function htmlColorNames(arr) {
 arr.splice(0,2,"DarkSalmon","BlanchedAlmond") /* This removes the first 2 elements and add from starting/deleting position the 2 new parameters added or any amount you want!! */   
return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick'])); /* it will console.lof this [ 'DarkSalmon','BlanchedAlmond','LavenderBlush','PaleTurquoise','FireBrick' ] */

/* EXTRACTING ELEMENTS FROM ARRAY WITH SLICE (X,X) */

function forecast(arr) { /* slice only take 2 paramenters that act like a selector range */
  return arr.slice(2, 4); /*  we are extracting elements from enetered arrays from 2nd posiiton to 4th // this only includes intialia element and element in betweenand the */
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); /*  it will return "warm and sunny" nooooooot "cool" */

/* COPIY ARRAY WITH SPREAD AOPERATOR "..." */

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr])
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

/* COMBINING ARRAYS WITH SPREAD OPERATOR ... */
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence =  ['learning',...fragment, 'is', 'fun']; /* ...fragment will include arrays values as part of the sentence array */
  return sentence;
}

console.log(spreadOut());

/* INDEX OF () to CHECK PRRSENCE OF ELEMENT -1 = NO EXIST  ANY NUM >=0 EXIST */

function quickCheck(arr, elem) {
  return arr.indexOf(elem) > -1; 
 }

 console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
 
 /* INDEX OF () to CHECK PRRSENCE OF ELEMENT -1 = NO EXIST  ANY NUM >=0 EXIST */
 
 function quickCheck(arr, elem) {
   return arr.indexOf(elem) > -1; 
  }
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
 
  /* ITERATE TRHOGH ARRAYS THROUGH ALL ARRAYS ITEMS TO FILTER  */
 
  function filteredArray(arr, elem) {
   let newArr = [];
   for(let i= 0; i < arr.length; i++) {
     if(arr[i].indexOf(elem) == -1 ){ 
             newArr.push(arr[i])
     } 
   }
   return newArr;
 }
 
 console.log(filteredArray([[3, 2, 3], [1, 6, 3], [2, 13, 26], [19, 3, 9]], 3));