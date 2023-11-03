/* .TEST () METHOD USING REGULAR EXP */

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);/* test function will check if /hello/ defined in the var above is inside the string from var myString */

/* .TEST () OF MULTPLE STING POSIBILITIES WITH  OR | operator */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; /* the | acts like OR to include other possiblities you could be lloking for */ 
let result2 = petRegex.test(petString); 

console.log (result2);

/* MATCH STINGS BY IGNORING CASES WITH "/i" */

let myString2 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; /* /i will ignore the case in any of the match it finds */
let result3 = fccRegex.test(myString2);

/* EXTRACTING MATCHES WITH .MATCH() */

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result4 = extractStr.match(codingRegex); 

console.log (result4);


/* GLOBAL FLAG /G + flag combination posiblity*/
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig;/* flag combinaiton to ignore and check global (to check more than one time) */
let result5 = twinkleStar.match(starRegex); 

console.log (result5);

/* WILDCARD PERIOD OR DOT TO MATCH ANY PART OF A STRING */

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; /* it will look for all word that match this 2 characters together */
let result6 = unRegex.test(exampleStr);

console.log (result6);

/* CHARACTER CLASS to MATCH MULTIPLE CHARACTERS */

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; /* it willl seach all vowels ignoring case and globally  */
let result7 = quoteSample.match(vowelRegex); 

console.log (result7);

/* MATCH ALL LETTERS IN THE ALPHABET WITH "-" */

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; /* This will check all characters from a to z in aplhabetic order and with flags for the whole string and ignoring case */
let result8 = quoteSample2.match(alphabetRegex); /* sting.match(regex) */

console.log (result8);

/* MATCH NUMBERS with "-" */

let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex3 = /[h-s2-6]/ig; 
let result9 = quoteSample3.match(myRegex3); 

console.log (result9);

/* IGNORING CHRACTAES with "^" */

let quoteSample4 = "3 blind mice.";
let myRegex4 = /[^3ie ]/ig; 
let result10 = quoteSample4.match(myRegex4); // Change this line

console.log (result10);

/* MATCHING ONE OR  MULTPLE CONSECUTIVE CASES  with + */
let difficultSpelling = "Mississippi";
let myRegex5 = /s+/ig; 
let result11 = difficultSpelling.match(myRegex5);

console.log (result11);

/* MATCHING 0 MORE TIMES WITH "*" */
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; /* it will check for 0 or more cases that start with Aa */

let result12 = chewieQuote.match(chewieRegex);

console.log (result12);

/* LAZY MATCHING with ?*/

let text = "<h1>Winter is coming</h1>";
let myRegex8 = /<.*?>/; /* it will look for shortes pattern that contains <> inlduing what ever is inside in this case h1  */
let result13 = text.match(myRegex8);

console.log(result13);

/* USING ^ at THE BEGINNING OF THE STRING ^ with no [] */

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/ /* this will find the first pattern of letters Carl in the beginning of the string */
let result14 = calRegex.test(rickyAndCal);

console.log(result14);

/* SERCHING BY THE END WITH $ */

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result15 = lastRegex.test(caboose);

console.log(result15);


/* MATCHING NUMBERS 0-9, "_" , LETTERS FROM A-Z with \W */
let quoteSample5 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result16 = quoteSample5.match(alphabetRegexV2).length;

console.log(result16); /*31*/


/* MATCHING NON ALPAH NUMERIC with \W (capital) */

let quoteSample6 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result17 = quoteSample.match(nonAlphabetRegex).length;

console.log(result17);

/* SHORTHAND TO FIND NUMBER \d */

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; /* non capital */
let result18 = movieName.match(numRegex).length;

console.log(result18);

/* MATCHING ALL NON-NUMBERS */

let movieName2 = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result19 = movieName2.match(noNumRegex).length;

console.log(result19);

/* RESTRICTING POSSIBLE USERNAME */

let username = "JackOfAllTrades";
let userCheck = /^[a-z][A-Z]+\d*$|^[a-z]\d\d+$/i; // Updated regular expression
let result20 = userCheck.test(username);

console.log(result20);

/* MATCHING WHITE SPACES *********************************************** "\s" (space)*/

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result21 = sample.match(countWhiteSpace);

console.log(result21);

/* MATCHING WHITE SPACES *********************************************** "\S" (capital)*/

let sample2 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let result22 = sample.match(countNonWhiteSpace);

console.log(result22);

/* QUANTITY SPECIFIERS ******************************************************** { } (only one letter) */

let ohStr = "OOOOOOhhh no";
let ohRegex = /O{4,7}h{3,6} no/; /* Quanty specificiations only applies for  the letter that is at the left of the specifier and the times range is create with "," */ 
result23 = ohRegex.test(ohStr);

console.log(result23);

/* QUANTITY SPECIFIERS ******************************************************** {X, } (setting no max range) */

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; /* pattern from 4 to infinit amount of z */
let result25 = haRegex.test(haStr);

console.log(result25);

/* SPECIIC QUATITY SPEICIFER *************************************************** {X} (exatc number of times)  */

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
let result26 = timRegex.test(timStr);

console.log(result26);

/* ALL OF NONE / OPTIONAL *************************************************** / xxxxy?xxx/ (OPTINAL CHARACTER)  */

let favWord = "favorite";
let favRegex = /favou?rite/; /* this is very useful for American english and english words */
let result27 = favRegex.test(favWord);

console.log(result27);

/* LOOKAHEAD good for PASSWROD CONDIGITONS ***************************************** (?=xxxxx // positive (!= XXXXX)) */

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/;
let result28 = pwRegex.test(sampleWord);

console.log(result28);

/* GROUPING CHARACTERS with ***************************************************** ( ) or (xxx|xxxxx) /P(engu|umpk)in/g */

let myString3 = "Eleanor Roosevelt";
let myRegex6 = /(Franklin|Eleanor)(\s[A-Za-z]+.)?\sRoosevelt/;
let result29 = myRegex6.test(myString);

console.log(result29);














