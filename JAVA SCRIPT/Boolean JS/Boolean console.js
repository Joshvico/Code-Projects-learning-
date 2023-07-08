/*  IF STATEMENTS  */
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);

console.log(test(true));
/* *************************************************** */
function trueOrFalse(wasThatTrue) {
if(wasThatTrue) {
  return "Yes, that was true";
}
 return "No, that was false";

}

/* == OPERATOR  */

function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(16)); 

/* === STRICT EQUALITY OEPRATOR */

function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

/* STRICT EQUALITY OPERATOR */

function compareEquality(a, b) {
  if (a === b) { 
    return "Equal"; /* Statement when creteria are met / TRUE */
  }
  return "Not Equal"; /* statement when criteria are not met / FLASE */
}
compareEquality (10,"10");
console.log (compareEquality (10,"10")); /* The console log will print not equal */

/* != ANEQUAL COMPARISON */

function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
console.log (testNotEqual(99));

/* > COMPARISON */

function testGreaterThan(val) { 
if (val > 100) { 
  return "Over 100";
}
if (val > 10) {  
  return "Over 10";
}
return "10 or Under";
}

testGreaterThan(10);
console.log(testGreaterThan(10));

/* && LOGICAL OPERATOR */

function testLogicalAnd(val) {

  if (val <= 83 && val >= 83 ) { /* THE && make a more efficient statment criteria because you add a range in this case from 25 to 50  */
      return "You are in your ideal weight,  but keep and eye if it is less than 77";
  }
    return "Your are over your weight";
}

testLogicalAnd(10);

/* TESTING SOME IF CONDITIONS TO ADD 3rd CRITERIA (WEIGHT CONTROL) */

function yourIdealWeight (val) {

  if (val <= 83 && val >= 77) {
   return "You are in your ideal weigth"; 
  }
  if (val <= 77) {
    return " keep and eye and eat a bit more"; 
   }

  if (val >= 83) {
    return "You start to get fat";  
  }
  
}

console.log (yourIdealWeight());