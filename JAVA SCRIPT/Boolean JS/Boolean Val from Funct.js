
/* BASIC BOOLEAN VALUES */

function welcomeToBooleans() {
  return (true);
} /* this funciton will return true */

/* CONDITIONAL LOGIC --> IF STATEMENTS */

function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}
/* When conditions are meet defined in () the function will excute function if not it will return false */
test(true);
test(false);

/* == OPERATOR  */

function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(16)); 

/* === STRICT EQUALITY OPERATOR */






function isLess(a, b) {
    return (a < b);
  }
  console.log (isLess(20, 70));