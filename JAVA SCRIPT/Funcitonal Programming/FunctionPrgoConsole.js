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

/* TYPES OF FUNCTIONS */


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

//...............................................................................................FIRST CLASS FUCNTIONS

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
