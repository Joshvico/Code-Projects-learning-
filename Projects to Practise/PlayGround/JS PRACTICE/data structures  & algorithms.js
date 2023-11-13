/* Exercise 1: Iterate and Modify Nested Objects */
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42,
    'offline power': 67,
    'test Array': ["melocton", "pecador", 4]
  }
};

const updateuserActivity = (newdata,newArray) => {
userActivity.data.online = newdata; /*  no need for "()" */
userActivity.data["test Array"][2]= newArray;
return userActivity;
  
}

console.log (updateuserActivity(74,"hello there"));


/* Exercise 2: Check and Add Properties */

let inventory = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  'strawberries forever': 27
};

const checkInventory = (key) => {
  if (inventory.hasOwnProperty(key)) {
    return `${key} are available. Current units: ${inventory[key]}. How many ${key} would you like to get?`;
  }
  return `The entered item "${key}" does not exist or is not available.`;
}

console.log(checkInventory("bananas"));

const addInventory = (key, quant) => {
  if (inventory.hasOwnProperty(key)) {
    if (quant <= inventory[key]) {
      return `${quant} ${key}? Yes, we have enough. There are ${inventory[key]} available. How many ${key} would you like to get?`;
    } else {
      return `Sorry, we currently have ${inventory[key]}. We don't have ${quant} you're asking for.`;
    }
  } else {
    return `The entered item "${key}" does not exist or is not available.`;
  }
}

console.log(addInventory("bananas", 3));

/* Exercise 3: Delete and Check Properties */

let foodPreferences = {
  vegetarian: true,
  glutenFree: false,
  nutFree: true,
  dairyFree: false
};

const newObject = (keys) => {
  delete foodPreferences[keys];
  return foodPreferences;
}
 

 console.log(newObject("nutFree"));

/*  const checkParameter = (param) => {
  if (foodPreferences.hasOwnProperty(param)) {
    return true;
  }
  return false;
 }

console.log (checkParameter("puto"));
 */
/* 
const checkParameter = (param) => {
  return foodPreferences.hasOwnProperty(param);
} */

const checkParameter = (param) => foodPreferences.hasOwnProperty(param); /* this is the shortes version of this function */

console.log (checkParameter("dairyFree"));

/* Exercise 4: Iterating through Objects */

let userData = {
  Alice: {
    age: 25,
    email: 'alice@email.com',
    active: true
  },
  Bob: {
    age: 32,
    email: 'bob@email.com',
    active: false
  },
  Charlie: {
    age: 28,
    email: 'charlie@email.com',
    active: true
  }
};

const fromObjToArray = (prop) => {
 if (userData[prop].active === true) {
  return [userData[prop]]; /*  this line will return the obj into in form of an array every time conditions is set to true */
 }
 return `${prop} not active`;
}
 console.log(fromObjToArray("Alice"));
