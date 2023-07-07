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