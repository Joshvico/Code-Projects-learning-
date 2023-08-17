
const A = 3;
const B = 4;
const C = 0;

function mySume (num){
if(num <= 3 && num >= 1){
  return num + A;
} else if (num > 3){
  return num + B;
} else {
  return C + " try again";
}
}

console.log(mySume(7));

/* TESTING WHILE LOOP and IF statments for Fun */
let countDown = ["Huoston ready..."];
let x = 10

while (x >= 0){
  countDown.push(x);
  x--;
}

let rocketLaunch = countDown + " all engines running, and... LIFT OFF!";
console.log(rocketLaunch);


function missionApollo11 (status) {
  
  if (status == "landed"){
    return " Small step for men kind and a big step for HUMANITY!";
  }else if (status == "issues" || status == "anomaly"){
    return " Hueston we have a problem! ";
  }else if (status == "explosion"){
    return "mission aboerted";
  }else if (status == "Any News?") {
    return "waiting for data to reach operation control" + "try again later";
  }else {
    return "format not accepted" + " try again";
  }
  
}

console.log (missionApollo11("34"));

"landed"
"issues"
"anomaly"
"explosion"
"Any news?"
""

