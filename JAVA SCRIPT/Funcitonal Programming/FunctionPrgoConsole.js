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