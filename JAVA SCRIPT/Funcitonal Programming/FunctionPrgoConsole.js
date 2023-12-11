/* STORING FUCNTION VALUES IN A VARIABLE */

const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC);

/* TYPES OF FUNCTIONS */ // IN JS all Funcitons are 1st Class


//................................................................................................CALBACKS FUCNTIONS
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Function that takes a callback
function performTask(task, callback) {
  console.log("Performing task...");
  task(); // calling the callback function
  callback(); // calling another callback function
}

// Using the functions
performTask(() => {
  console.log("Task completed!");
}, () => {
  console.log("Callback after task completion.");
});

//...............................................................................................FIRST CLASS FUCNTIONS (In JS all Functions are 1st class)

// Assigning a function to a variable
const sayHello = function() {
  console.log("Hello!");
};

// Passing a function as an argument
function executeFunction(func) {
  func();
}

// Returning a function from another function
function createMultiplier(factor) {
  return function(x) {
    return x * factor;
  };
}

// Using the functions
sayHello();
executeFunction(sayHello);
const double = createMultiplier(2);
console.log(double(5)); // Outputs: 10

//.................................................................HIGHER ORDER FUNCTIONS => Takes Fucnitons as arguments (manager of FUNC)

// Higher-order function taking a function as an argument
function modifyArray(array, modifierFunction) {
  return array.map(modifierFunction);
}

// Higher-order function returning a function
function createMultiplier(factor) {
  return function(x) {
    return x * factor;
  };
}

// Using the functions
const numbers = [1, 2, 3, 4];
const doubled = modifyArray(numbers, createMultiplier(2));
console.log(doubled); // Outputs: [2, 4, 6, 8]

//...............................................................................LAMBDA FUCNTIONS => Simple Task

const add = (a, b) => a + b;
console.log(add(3, 5)); // Outputs: 8

/* ASSIGNING DIEFFERENT VALUES FROM FUCNTIONS USGINT THE SAME FUCNTION (GREEN TEA & BLACK TEA) */

const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea2 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea2(prepareGreenTea,27); /* The argument is the name of the value of the funciton we need in this case green tea  */
const tea4BlackTeamFCC = getTea2(prepareBlackTea,13); /* "idem above but Black"  */
/* 27 cups of green tea and 13 of black */

console.log(tea4GreenTeamFCC,tea4BlackTeamFCC);

/* UNDESTANDING THE OFBYONE ERROR AND THE USE OF IMPERATIVE CODE (METHODS) TO AVOID POTETNIAL MISTAKES*/

// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.slice(0, index); /* Splice (previous) was exchanged for slice as it extarct the values from 0 upto index without modifying the original array is refeecning to */ 
  const tabsAfterIndex = this.tabs.slice(index + 1); 

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

/* AVOIDING MUTATION BY CALL VAR fROM GLOBAL SCOPE */  /* + */ /* UNDERSTANDING FUCNTIONS WITH DEPENDENCY OF AGLOBAL VAR OR OBJECT*/

let fixedValue = 4;

function incrementer() {
 return (fixedValue +1)
 }

 // The global variable
let fixedValue2 = 4;

function incrementer(variable2) {
return (variable2 + 1);

}

/* CREATING NEW SHALLOW VARIABLES TO DON'T ALTER GLOBAL SCOPE VAR (check Documentation for more info) */

const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(list, bookName) {
  const updatedList = [...list];
  updatedList.push(bookName);
  return updatedList;
}

function remove(list, bookName) {
  const updatedList = [...list];
  const bookIndex = updatedList.indexOf(bookName);
  if (bookIndex >= 0) {
    updatedList.splice(bookIndex, 1);
  }
  return updatedList;
}

const updatedBookListAfterAdd = add(bookList, "A Brief History of Time");
const updatedBookListAfterRemove = remove(bookList, "On The Electrodynamics of Moving Bodies");

console.log(updatedBookListAfterAdd);/* IT will print the orginal plus added book without modifying the original content of the var */
console.log(updatedBookListAfterRemove);
console.log(bookList);