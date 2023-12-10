/* STORING FUCNTION VALUES IN A VARIABLE */

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';
/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];/* variable to store llop push values */

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea(); /* this asisgned the value given above with greenTea */
    teaCups.push(teaCup); /* TeaCup value (prepareTea) is being pushed as many time as condition in loop breaks  */
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40); /* this store the returned value of the funciton */
console.log(tea4TeamFCC); /* ["green Tea","green Tea","green Tea",... *40] */

/* ASSIGNING DIEFFERENT VALUES FROM FUCNTIONS USGINT THE SAME FUCNTION (GREEN TEA & BLACK TEA) */

const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea2 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea2(prepareGreenTea,27);
const tea4BlackTeamFCC = getTea2(prepareBlackTea,13);

console.log(tea4GreenTeamFCC,tea4BlackTeamFCC); /* prints 27 greenTeas and 13 black inside array */



/* UNDESTANDING THE "OFBYONE ERROR" AND THE USE OF IMPERATIVE CODE (METHODS) TO AVOID CHAGING VALUES/ MUTATE TO AVOID BUGS*/

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

  const tabsBeforeIndex = this.tabs.slice(0, index);/* Splice (previous) was exchanged for slice as it extarct the values from 0 upto index without modifying the original array is refeecning to */ 
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
 return (fixedValue +1) /* we increment the value fixedValue so we get 5 as outcome without altering the it */

 }

 // The global variable
let fixedValue2 = 4;

function incrementer(variable2) { /* since it depends on a global variable is important to ncluded in parameters which argument needs to be entered as it connects with the global var */
return (variable2 + 1);

}
