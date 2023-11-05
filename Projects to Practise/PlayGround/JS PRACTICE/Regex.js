/* Exercise 1: Match Email Addresses*/
let myemail ="john.doe@example.com";
let theregex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; /* the \. is to scape the properties of "." and inlcude as a normal charcater inside the domancin part */ 
let theregexoptimize = /^\w+@\w+(\.\w{2,})+$/; /* this is the shortes possibility */


/* Exercise 2: Validate Phone Numbers*/
let phonenum = "+34 123-456-789";
let phonenum2 = "+34123456789";
let phoneregex1 = /^\+\d{2}\s\d{3}-\d{3}-\d{3}$/; /*\ is use to skip + properties and treated as charcater [] character class or () captiring is not well used */
let phoneregex2 = /^\+\d{11}$/;/* here is considering the region prefix as part of the whole number */
let regex1And2Combined =/^(\+\d{9}|\d{3}-\d{3}-\d{4})$/; /* This is most unified verison as it accpets or inclused bot formats with "|" */

/* Exercise 3: Extract URLs */
let url =  "https://username/www.example.org";
let url2 = "//xxxx /www.xxx.xxx";
let urlregex = /(https:\/\/\w+\/www\.example\.org)/;/* you have to skip every / with a \other whise it will give you error */
let urlbestpractise = /https?:\/\/[^\s/$.?#].[^\s]*/g;
let standarurl = /https?:\/\/\w+(\.\w+)*\/\w*/g;
let Flexibleurl = /https?:\/\/[^/\s$?#]+(\/[^$?#]*)?/g;

/* Exercise 4: Match Dates */
let date =  "DD/MM/YYYY";
let dateregex = /^\d{2}\/\d{2}\/\d{4}$/;

/* Exercise 5: Match Palindromes*/

let text = "level deed radar hello world civic kayak";
let palindromeRegex = /\b(\w+)\b(?=\s\1\s|\s\1$|$)/g;

let palindromes = text.match(palindromeRegex);
/* ***************************************************** */

let test = theregex.test(myemail); /* regex .test string */
let match = myemail.match(theregex);/* string .match regex */

console.log(test);

/* REGEX APPLIED TO FUCNTION */

let passwordconditions= /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,20}$/;

 function chekingPassword(password) {
  if (passwordconditions.test(password)){
    return  "password accepted";
  }

  return "enter a valid password";
 }

 console.log (chekingPassword("@bLJV0404199345678"));
