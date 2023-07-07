
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

function isLess(a, b) {
  return (a < b);
}
console.log (isLess(20, 70));
console.log(testEqual(16)); 

  /* STRIC EQUALITY OPERATOR === */

  function testStrict(val) {
    if (val === 7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
/* EX practical */
  function compareEquality(a, b) {
    if (a === b) { 
      return "Equal"; /* Statement when creteria are met / TRUE */
    }
    return "Not Equal"; /* statement when criteria are not met / FLASE */
  }
  compareEquality (10,"10");
  console.log (compareEquality (10,"10")); /* The console log will print not equal */


  /* ANEQUALITY OPERATOR != */
  function testNotEqual(val) {
    if (val != 99) {
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
