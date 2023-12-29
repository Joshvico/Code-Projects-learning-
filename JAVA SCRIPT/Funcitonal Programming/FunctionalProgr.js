/* STORING FUCNTION VALUES IN A VARIABLE */

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';
/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];/* variable to store llop push values */

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea(); /* this asisgned the value given above with greenTea */
    teaCups.push(teaCup); /* TeaCup value (prepareTea) is being pushed as many time as condition in loop breaks  */
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40); /* this store the returned value of the funciton */
console.log(tea4TeamFCC); /* ["green Tea","green Tea","green Tea",... *40] */

/* ASSIGNING DIEFFERENT VALUES FROM FUCNTIONS USGINT THE SAME FUCNTION (GREEN TEA & BLACK TEA) */

const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea2 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea2(prepareGreenTea,27);
const tea4BlackTeamFCC = getTea2(prepareBlackTea,13);

console.log(tea4GreenTeamFCC,tea4BlackTeamFCC); /* prints 27 greenTeas and 13 black inside array */



/* UNDESTANDING THE "OFBYONE ERROR" AND THE USE OF IMPERATIVE CODE (METHODS) TO AVOID CHAGING VALUES/ MUTATE TO AVOID BUGS*/

// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.slice(0, index);/* Splice (previous) was exchanged for slice as it extarct the values from 0 upto index without modifying the original array is refeecning to */ 
  const tabsAfterIndex = this.tabs.slice(index + 1); 

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);


/* AVOIDING MUTATION BY CALL VAR fROM GLOBAL SCOPE */  /* + */ /* UNDERSTANDING FUCNTIONS WITH DEPENDENCY OF AGLOBAL VAR OR OBJECT*/

let fixedValue = 4;

function incrementer() {
 return (fixedValue +1) /* we increment the value fixedValue so we get 5 as outcome without altering the it */

 }

 // The global variable
let fixedValue2 = 4;

function incrementer(variable2) { /* since it depends on a global variable is important to ncluded in parameters which argument needs to be entered as it connects with the global var */
return (variable2 + 1);

}

/* CREATING NEW SHALLOW VARIABLES TO DON'T ALTER GLOBAL SCOPE VAR (check Documentation for more info) */

const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(list, bookName) { /* Adding this new parameter on this new code will allow us to reference the original list "bookList" that then will be completing the value of the shallow variable created below */
  const updatedList = [...list]; /* we create a varaible with spread operator to spread the values of the "bookList" and retunr the argument passed */
  updatedList.push(bookName);
  return updatedList;
}

function remove(list, bookName) { /* notice that parameter is the same name as it only affects the funcitoin */
  const updatedList = [...list]; /* same mechanics as before */
  const bookIndex = updatedList.indexOf(bookName); /* pending to know how this index part works*/
  if (bookIndex >= 0) {
    updatedList.splice(bookIndex, 1);
  }
  return updatedList; /* returning the list outside the if stament is key */
}

const updatedBookListAfterAdd = add(bookList, "A Brief History of Time"); /* Creating this variable that take as value the function creates a shallow copy that points at bookList but does not modify the ofiginal varaible */
const updatedBookListAfterRemove = remove(bookList, "On The Electrodynamics of Moving Bodies");

console.log(updatedBookListAfterAdd); /* IT will print the orginal plus added book without modifying the original content of the var */
console.log(updatedBookListAfterRemove);
console.log(bookList);

/* USING MAP METHOD TO CREATE NEW ARRAYS OF FILTERED INF */
// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line
/*  ...........................................This is part of the original code where we passed a for loop to iterate through the array
const ratings = [];
for (let i = 0; i < watchList.length; i++) {
  ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
} */

const ratings = watchList.map(item => ({ title: item["Title"], rating: item["imdbRating"] })); /* In order to access the info we mapping with and map trhough it we use a callbakc function */

console.log(JSON.stringify(ratings)); /* it will print a new array with movie titles and reating */

/* ITERATING TRHOUGH A CALL BACK FUCNTION */

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Loop through the original array
  for (let i = 0; i < this.length; i++) {
    // Apply the callback function to each element and push the result into the new array
    newArray.push(callback(this[i], i, this));
  }
  // Return the new array
  return newArray;
};

/* USIGN FILTER AND MAP TOGETHER + CONVERTING DATA TYPE TO FILTER THE RIGHT PROPERTIES  */
// The global variable
const watchList2 = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

const filteredList = watchList2
  .filter(movie => {
    // return true it will keep the item
    // return false it will reject the item
    return parseFloat(movie.imdbRating) >= 8.0; /* here I convert the "value into a float" and filter according the condition*/
  })
  .map(movie => {
    return {
      title: movie.Title, /* when mapping trhough object important to mark the structure need defining the name of the key property and the matianing case of the tdat you acces insed the object without "" ("title would´t wokr") */
      rating: movie.imdbRating
    };
  });

const filteredList3 = filterAndMapMovies(watchList);

console.log(filteredList3);

  /* This is another solution from the same problem wrote as funciton */

  function filterAndMapMovies1(watchList2) {
    return watchList2 
      .filter(movie => parseFloat(movie.imdbRating) >= 8.0) /* after the return you can include all the mthoed needed to filter and map the data */
      .map(movie => ({/* movie is just a variable declared for it */
        title: movie.Title,
        rating: movie.imdbRating
      }));
  }
  console.log(filterAndMapMovies1(watchList2));

    /* CREAITNG A CALLBACK FUCNTION THAT ACTS LIKE "FILTER" WITHOUT USING "FILTER" */
  
    Array.prototype.myFilter = function(callback) {
      const newArray = [];
      for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) { /* : This line checks if the current element this[i], its index i, and the original array this satisfy the condition specified  */
          newArray.push(this[i]);
        }
      }
      return newArray;
    };

/* CREATING A FUCNTION WITH SLICE METHOS // (SLICE (beginign of cut inclusided , end of the cut not included)) */

function sliceArray(anim, beginSlice, endSlice) {
let sliceArray = anim.slice(beginSlice,endSlice); 
return sliceArray;

}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3)); /* it will retunr "Dog" and "Tiger" */


  /* USIGN SLICE INSTEAD OF SPLICE IN A FUCNITON TO DON'T ALTER THE ORGINAL ARRAY */

  let sinCity = ["Tokio","Japan", "Madrid", "tu puta amdre", "joperrens", "un Vladimir"]

function nonMutatingSplice(cities) {

  return cities.slice(0,3);
}

console.log(nonMutatingSplice(sinCity));  /* This will limit any array into a lenght of 3 cities */

/* USIGN (Array x)".CONCAT" (Array y) METHOD to CONCATENATE 2 ARRAYS  */

function nonMutatingConcat(original, attach) {

  return (original).concat(attach) /* this method will concatenate the passed arrays */ /* without a funciton[1, 2, 3].concat([4, 5, 6]); */

}

const first = [1, 2, 3];
const second = [4, 5];
console.log (nonMutatingConcat(first, second)); /* result is [1,2,3,4,5] */

/* PUSH VS CONCAT for NON MUTATON METHODS (CONCAT DOES NOT MUTATE ORGIANL VARIABLES VALUES) */

function nonMutatingPush(original, newItem) {
  
  return original.concat(newItem);
  /* return original.push(newItem);*/

  
}

const first2 = [1, 2, 3];
const second3 = [4, 5];
nonMutatingPush(first, second);

/* USING REDUCE METHOD  to SELECT ESPEFICIF DATA AND CALCULATED ONCE FILTERED*/

// The global variable
const watchList5 = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList5) {
 let nolanMovies = watchList.filter(movie=> movie.Director === "Christopher Nolan"); /*  we first filter the movies directed by Nolan in this variable */
  
  let averageRating = nolanMovies.reduce((sum, movie) => sum + parseFloat(movie.imdbRating), 0) / nolanMovies.length; /* here we reduce the varaible by adding idmb values and deviding by teh number of Nolan movies (nolanmovies.lenght) */

  return averageRating;
}

console.log(getRating(watchList3)); /* it will retunr an average of 8.675 */

/* EX TO COMBINE FILTER REDUCE OR MAP TO SOLVE COMPLEX PROBLEMS // FILTER ARRAY THE INTIGER POSITVE NUMBER + RETURN THE SQUARED VALUES // Filter - Number.asIntiger - Map */

const squareList = arr => {
  
  let intArr = arr.filter(num => Number.isInteger(num) && num > 0); /* this filter the array passed in the function to pass to intiger and to be positive */
  let finalArr = intArr.map(num => num * num); /* it takes filtered arrays and use MAP to trasnform each element of an array by multiplying by itself creating the square values */
  return finalArr; 
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers); /* 5, 3 --> [25, 9] */

/* USIGN SORT METHOD TO ORDER ARRAYELEMENT IN ALPHABETIC ORDER */

function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) { /* it comperes 2 values and positions them accroding positions else-if conditions below  */
    return a === b ? 0 : a < b ? -1 : 1; /* Terniary operator a concise form of if-else statmenet check notes */
  });
}  

console.log (alphabeticalOrder(["a", "d", "c", "a", "z", "g"])); /* [ 'a', 'a', 'c', 'd', 'g', 'z' ] */

/* PRACTISING SORT AND SLICE TO SORT WITHOUT MUTATING ORIGINAL ARRAYS */

/* provided code with error for ex as I was not accounting arr argument keep in mind 

 const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {

  let newGlobalArray = globalArray.slice(0);
  return newGlobalArray.sort(function(a, b) {
    return a - b;
  });

}

console.log(nonMutatingSort(globalArray));
console.log(globalArray);
 ***********************************************************/ 

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) { 
  return arr.slice().sort(function(a, b) { /* slice creates ahollow copy of the entered arr then concatnates the sort method that compares 2 elements  */
    return a - b; /* compares 2 elements in ascending order  */
  });
}

console.log(nonMutatingSort(globalArray)); /* [ 2, 3, 5, 6, 9 ] it will retunr this output without overwrtting the original */
console.log(globalArray);

/* USING SPLIT METOHD TO TURN STRING INTO ARRAYS + USING REGULAR EXPRESSIONS */

function splitify(str) {
  let splitifyer = str.split(/\W+/); /* one or more non-alphabetic characters (including punctuation)*/
  return splitifyer;
}

console.log(splitify("Hello World,I-am code")); /* this is the output : [ 'Hello', 'World', 'I', 'am', 'code' ] */

/* USING JOIN METHOD TO TURN ARRAY INTO STRING */

function sentensify(str) {
  let arrNew = str.split(/\W+/); 
  return arrNew.join(" "); 
}

console.log(sentensify("May-the-force-be-with-you")); /* it returns a full string without "-" */

/* CREATING URL PARAMETER BY REPLACING SPACES FOR "-" **************************** SUPER INTERESTING*************************** */

function urlSlug(title) { /* keep in mind that methods can be concatenated like belos */
  return title
    .toLowerCase()    // Convert to lowercase
    .split(" ")       // Split the string into an array of words
    .filter(word => word !== "") // Remove any empty strings (resulting from consecutive spaces) very important use!!!!!
    .join("-");       // Join the words with hyphens ******************* KEEP IN MIND THAT JOIN CAN BE ADDING CHCRACTERS TO JOIN WORDS WITH
}


console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")); /* it will sonlo.log this a-mind-needs-books-like-a-sword-needs-a-whetstone*/

/* "EVERY" METHOD TO DETERMENINE IF ALL ELEMENTS IN THE ARRAY PASS THE CONDITIONS  TRUE OR FALSE  */

function checkPositive(arr) {
  return arr.every(function(currentValue) { /* keep in mind that every applies with with a callback funciton as you need to set the conditions */
    return currentValue > 0;
  });
}

console.log(checkPositive([1, 2, 3, -4, 5])); /* it will return false */

/* *************************************************************************A SIMPLIER WAY TO EXPRESS IT */

const checkPositive2 = arr2 => arr2.every(currentValue => currentValue > 0); /* you need a variable in which to store the currentValue being evaluted to test the condition set */

console.log(checkPositive([1, 2, 3, -4, 5])); /* it will return false */

/* "SOME METHOD" TO CHECK IF ONE OF ELEMENT'S ARRAYS PASSES THE TEST  */

function checkPositive(arr) {
  return arr.some(number => number > 0); 
    
  }
  console.log(checkPositive([1, 2, 3, -4, 5])); /* it will return "true" as atleast one of the elements is bigger than 0 */
  
  /* ***************************************** ANOTHER WAY TO EXPRESS IT******************************* */
  function checkPositive2(arr) {
  
  return arr.some (function (number){
  return number > 0;
  });
  
  }
  
  console.log(checkPositive2([1, 2, 3, -4, 5]));

  /* RECURRING  FUNNCITON (ARITY and CURRYING) */

function add(x) {

  return function (y) {
   return function (z) {
    return x+y+z;
  }
}

}

add(10)(20)(30); /* it will return 60 */


/* ************************************************* easier way to express it same concept */

const curriedFunction = x => y =>z =>x+y+z;

console.log(curriedFunction(11)(22)(33)); /* result is 66 */