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

/* **************************************************************************** */
/* TESTING SOME IF CONDITIONS TO ADD 3rd CRITERIA (WEIGHT CONTROL) */

function yourIdealWeight (val) {

  if (val >= 77 && val <= 83) {
   return "You are in your ideal weigth"; 
  }
    return "You start to get fat";  
}

console.log (yourIdealWeight(77));

function testWeightRange (num){

  if (num > 83 || num < 77) {
    return "keep an eye";
  }
    return "all good";
}

console.log(testWeightRange(84));

function testOrOperator (val){
if (val > 83 || val < 77) {
  return "out of weight";
}
return "in weigth";
}
console.log(testOrOperator(82));

/* ********************************************************************* */
  /* ELSE STATEMENT */

  function testElse(val) {
    let result = "";  
    if (val > 5) { 
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }
    return result;
  }
  console.log(testElse(2));

  /* ELSE IF */

  function testElseIf(val) {
    if (val <= 83 && val >= 77) { /* is = not added consol.log undefined */
      return "Your are on ideal wieght";
    } else if (val < 77) {
      return "You are losing to much weight";
    } else if (val > 83) {
    return "You are getting fat";
    } else {
      return "enter the wiehgt, please"
    }
  }

  console.log(testElseIf()); /* this works */

  /* CHAINING ELSE IF  */
  function testSize(num) {
    if (num < 5) {
       return "Tiny";
    } else if (num < 10) {
      return "Small";
    } else if (num < 15) {
      return "Medium";
    } else if (num < 20) {
      return "Large";
    } else if (num >= 20) {
      return "Huge";
    } else {
      return "Change Me";
    }
      
    }
    
    testSize(7);
    console.log(testSize());

    /* GOLF !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

    const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
       return names[0]; /* In order for the fucntion to know wich Array to index we should give the name of the array we want to index */
    } else if (strokes <= par-2) {
      return names[1];
    } else if (strokes == par-1) {
      return names[2];
    } else if (strokes == par) {
      return names[3];
    } else if (strokes == par+1) {
      return names[4];
    } else if (strokes == par+2) {
      return names[5];
    } else if (strokes >= par+3) {
      return names[6];
    } else {
      return "Change Me";

    }
}

golfScore(5, 4);

/* SWITCH STATEMENT AS aLTERNATIVE TO ELSE IF */

function caseInSwitch(val) {
  let answer = ""; /* we define answer variable to at the define not only the return but also the action and the string after aevry case */
switch (val) {
  case 1:
  answer = "alpha";
  break; /* it separates evry case */
  case 2:
  answer = "beta";
  break;
  case 3:
  answer = "gamma";
  break;
  case 4:
  answer = "delta";
  break;
  default:
    answer = "enter data";
    break;
}
  return answer; 
}

caseInSwitch(1);
console.log(caseInSwitch(5));


  

  
    
    