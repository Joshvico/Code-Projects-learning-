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

 /* MAKING 5 LEVELS ARRAY  */
let myNestedArray = [
  // Level 1
  [
    // Level 2
    'unshift', false, 1, 2, 3, 'complex', 'nested', 
    [
      // Level 3
      'loop', 'shift', 6, 7, 1000, 'method', "deep",
      [
        // Level 4
        'concat', false, true, 'spread', 'array',"deeper",
        [
          // Level 5
          'mutate', 1327.98, 'splice', 'slice', 'push',"deepest",
        ]
      ]
    ]
  ]
];

/* ACCESIGN AND MODIFYIN OBJECTS with [] and ¨.¨¨and values initilized in a var */

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
'other things': "cakes" /*  */
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

let others = "pan de masa madre";
foods[others] = "spelta";
    
console.log(foods);

  /* ACCESING + MODIFY NESTED OBJECTS with "." [] and NESTED ARRAYS */

  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42,
      'offline power':67,
      'test Array': ["melocton", "pecador", 4]
    }
  };
  
  userActivity.data.online = 45;
  userActivity.data['offline power'] = 75;
  userActivity.data['test Array'][2] = 89;
  userActivity.data['test Array'][0] = "topo";
      
  console.log(userActivity);

  /* ACCESING + MODIFY NESTED OBJECTS with "." [] and NESTED ARRAYS */

  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: { /* keep in mind nested objects do not need to be initialize with equality operator like userActivity */
      totalUsers: 51,
      online: 42,
      'offline power':67,
      'test Array': ["melocton", "pecador", 4]
    }
  };
  
  userActivity.data.online = 45;
  userActivity.data['offline power'] = 75;
  userActivity.data['test Array'][2] = 89; /* this is how to acces and modify this array */
  userActivity.data['test Array'][0] = "topo";
  
  console.log(userActivity.data['test Array'][2]); /* accesing the nested obj and nested array to assignew value 89 */    
  console.log(userActivity);

  /* CHECK IF ITEM ON LIST WITH OWNPROPERTY AND RETURNING VALUE IF FOUND + SOME OTHER CODE TO MAKE IT MORE USEFUL */

  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    if (foods.hasOwnProperty(scannedItem) && foods[scannedItem] > 0) { /* has own property maps the object lloking for property doesn't matter is property has space the hasownproperty will always be intilize with "." */
      return foods[scannedItem]; /* "[ ]" is used also to acces or retreive info from dynamic object or when accesing it insede a funciton */
    }
    return "not available";
  }
  
  console.log(checkInventory("apples"));

  /* **************************** LITTLE EXTRA CASHIER FUNCTION */

  let foods2 = {
    'Bologna apples': 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory2(scannedItem, num) {/* this will decicrease the numeric value of the cheked item if found and available */
    if (foods2.hasOwnProperty(scannedItem) && foods2[scannedItem] >= num) {
      foods2[scannedItem] -= num;/* this will decicrease the numeric value of the cheked item if found and available */
      return `the ${scannedItem} available, current quantity: ${foods2[scannedItem]} left`;/* accesing obj with string letireal to return current number */
    } else if (foods2.hasOwnProperty(scannedItem) && foods2[scannedItem] > 0) { /* covers possiblity if found only if quantity stays bigger than 0 then returs the mes*/
      return `not enough ${scannedItem} available, current quantity: ${foods2[scannedItem]}`;
    } else {
      return `Item not found or not available`;
    }
  }
  
  console.log(checkInventory2("Bologna apples", 20));

  /* DELETING PROPERTIES with DELETE function */

  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  delete foods.oranges; 
  delete foods.plums;
  delete foods.strawberries;
  
  console.log(foods);