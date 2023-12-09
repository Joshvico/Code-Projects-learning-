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