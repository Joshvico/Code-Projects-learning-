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