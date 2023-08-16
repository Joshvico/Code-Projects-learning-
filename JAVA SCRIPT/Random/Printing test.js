

function insult(name, more){
  
  console.log ("tu puta madre " + name + more);
}

insult("Juan", " tio!");
insult ("Maria");


function dayMessage(hour) {

  if (hour >= 6 &&  hour <= 12) {
    return "good Morning";
  } 
  
  else if (hour > 12 && hour <= 20) {
    return "Good After Noon";
  } else if (hour > 20 && hour < 24){
    return "Good Night";
  } else if (hour >= 1 && hour < 6){
    return "You should be Sleeping";
  } else {
    return "Enter Hour";
  }
}

console.log(dayMessage());





