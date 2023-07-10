
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

  /* STRICT INEQUALITY OEPRATOR !==  */

  function testStrictNotEqual(val) {
    if (val !== 17) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

  /* GREATER THAN COMPARISON > */

  function testGreaterThan(val) { /* In this funciton we are adding a range with 2 TRU critirias that will return Over / TRUE  and the a last critiria that wehn not met returns 10 or Under */
    if (val > 100) { 
      return "Over 100";
    }
    if (val > 10) {  
      return "Over 10";
    }
    return "10 or Under";
  }
  
  testGreaterThan(10);

  /* >= GREATER or EQUAL */

  function testGreaterOrEqual(val) {
    if (val >= 20) { 
      return "20 or Over";
    }
  
    if (val >= 10) {  
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);

  /* < LESS THAN */

  function testLessThan(val) {
    if (val < "25") {  
      return "Under 25";
    }
  
    if (val <"55") { /* keep in mind that it converts data types so it will intiate as if it was a number or same data type */
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);
  
  /* <= LESS OR EQUAL */

  function testLessOrEqual(val) {
    if (val <= 12) {  
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);

  /* MAKE RANGE STATEMENT WITH LOGICAL OPERATOR && */

  function testLogicalAnd(val) {

    if (val >= 25 && val <= 50) { /* THE && make a more efficient statment critiria because you add a range in this case from 25 to 50  */
        return "Yes";
    }
      return "No";
  }
  
  testLogicalAnd(10);
  
  /*INCLUDING RANGE WITH SAME OUTCOME with ||  */

  function testLogicalOr(val) {
  
    if (val < 10 || val > 20) { /* This criteria will include 10 and 20 no need for = // still not sure what is the difference with && **** TIP <inside the range> >Outside range< */
      return "Outside";
    }
    return "Inside";
  }
  
  testLogicalOr(15);

  /* ELSE STATEMENT */

  function testElse(val) {
    let result = "";  
    if (val > 5) { /* IF + ELSE have its own block/ part then the return of the function goes in the end */
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }
    return result;
  }
  testElse(4);

  /* ELSE IF STATMENT FOR MULTPLI CONDITIIONS */

  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
    return "Between 5 and 10";
    }
  }
    