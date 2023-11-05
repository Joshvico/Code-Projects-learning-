/* Exercise 1: While Loop*/

let i= 1;

while (i<=5){
 console.log (i);
 i++;
} 

let countdown = 10;

while (countdown >= 0) {
  console.log (countdown);
  --countdown;
}

let character = 1;

while (character <= 5) {
  console.log("A");
  character ++;
}


const correctPassword = "secret"; // Define the correct password
let attempts = 3; // Number of password attempts allowed

while (attempts > 0) {
  const userPassword = ("Enter the password:"); // Prompt the user for the password
  if (userPassword === correctPassword) {
    console.log("Access granted. Welcome!");
    break; // Exit the loop if the password is correct
  } else if (userPassword !== correctPassword) {
    console.log(`Incorrect password. You have ${attempts} attempts left.`);
    attempts--;
    } else {
      console.log("Access denied. No more attempts left.");
    }
  }

  