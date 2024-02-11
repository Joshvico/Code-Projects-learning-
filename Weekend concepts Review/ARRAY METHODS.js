/* ARROW FUNCTIONS */

function name (paramente) {
return "something" + Parameter 
};

/* arrow => when there is logic before return  */
const funcex = (paramater) => {
  return "something" + Parameter 

}
/* arrow => If no logic before retunr stament */
const func = (paramater) =>  "something" + Parameter;


/* ************************************************* ARRAY METHODS**************************************************************************** */

const food = ["apple", "banana","potatoe", "orange","carrot","avocado", "strawberry", "kiwi", "bread", "mango", "pineapple"]

/* ***************************************************** ForEach --> EXCECUTE THE SAME CODE ON ALL ELEMENTS*/

food.forEach((item) => {console.log(item)}); /* it will print all the items as it applys logic to all items */ 

/* MAP --> is like forEahc it executes same logic to all elements in array but it returna a new element*/

const fruitArray = fruits.Map ((item) => {
  return /*  a new element  */
});

/* ***************************************************** FILTER --> Will filter the elements based on condition in a new element */

Array.filter((element) => {
  /* code */
  return /* return a condition */
}) 

const fruitis = food.filter((item)=> item.type ==='fruit'); /* if the tiem meets condition type the it will retun it into the fuiti filter */

const vegetables = food.filter((item)=> item.type !=='fruit'); /* all vegetables will get filtered to the new element vegetables */

/*  **************************************************** CONCAT --> to add elements simulationouslu */

const concatFood = fruits.concat(veteables) /*  the new variable concatFood will hold all the food alements together as filtered */

/* ***************************************************** FIND --> is like filter to get specific elements  */

Array.find((element) => {
  /* code */
  return /* a condition */
})

const yellowFood = food.find ((item) => item.color ==="yellow"); /* it will return baana as is the only yellow fruit */

const foskitos = food.find ((item) => item.type ==="foskito"); /* it will retunr undefined */

/*  ***************************************************** FINDINDEX --> it is link find but returns index */

array.findIndex((element) => {
  /* code */
  return /* a condition */
})


const bannanFind = food.findIndex ((item) => item.color ==="yellow"); /* it will retunr the index where the first yello item is */

const foskitosFing = food.findIndex ((item) => item.type ==="foskito"); /* since it is not found it will retunr -1 */

/*  ***************************************************** INDEXOF --> is like findIndex but it adds a second paramenter which is the conditions in which to start the iterating for the contions set */

Array.findIndex(element, startIndex);  /* good to find premitve types (boleans, string, numbers) */

const bannanaIndex = food.indexOf(banana, 3); /* it will look for first element that is banana and return index X */ 

/*  ***************************************************** LASTINDEXOF --> same like before but starting form the end of the Array */

array.lastIndexOf(element);

array.lastIndexOf(element, startIndex); /* start index is the last form the array */

const bannanalastIndex = food.indexOf(banana, 3); /* if not found it will retunr -1 */

/* *****************************************************  SOME --> if atleast one of the elemtns satisfy a fucniton*/

array.some((element) => {
  /* code */
  return /* a condition */
})

const isThereABanana = food.some((item) => item ==="banana"); /* once found it will stop to run the logic */
const isThereWatermelon = food.some((item) => item ==="watermelon") /* it will return false if no watermelon is found */

/* *****************************************************  EVERY --> check if all the elements of the array match confition */

array.every((element) => {
  /* code */
  return /* a condition */
})

const allBananas = food.every((item) => item ==="banana"); /* it will retunr false as not all element are bannas  */

/* *****************************************************  INCLUDES -->  */