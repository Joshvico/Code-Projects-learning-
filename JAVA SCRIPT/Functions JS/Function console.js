

  function checkScope() {
    let i = 'function scope'; /* i is declared here with this value as is let is in this function {}scope the we can declare i again with another value as the scoend let i is on inside expresion scope */
    if (true) {
      let i = 'block scope'; /* The scoep of i value is inside this boolean */
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  console.log ( checkScope());
