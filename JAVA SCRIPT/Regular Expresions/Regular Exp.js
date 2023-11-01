/* .TEST () METHOD USING REGULAR EXP */

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);/* test function will check if /hello/ defined in the var above is inside the string from var myString */

/* .TEST () OF MULTPLE STING POSIBILITIES WITH  OR | operator */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; /* the | acts like OR to include other possiblities you could be lloking for */ 
let result2 = petRegex.test(petString); 

/* MATCH STINGS BY IGNORING CASES WITH "/i" FLAG */

let myString2 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; /* /i will ignore the case in any of the match it finds */
let result3 = fccRegex.test(myString2);

/* EXTRACTING MATCHES WITH .MATCH() */

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result4 = extractStr.match(codingRegex); 

console.log (result4);

/* difference from .match() + .test */
'string'.match(/regex/);
/regex/.test('string');


/* GLOBAL FLAG /G + flag combination posiblity*/
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig;/* flag combinaiton to ignore and check global (to check more than one time) */
let result5 = twinkleStar.match(starRegex); 

/* WILDCARD PERIOD OR DOT TO MATCH ANY PART OF A STRING */

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; /* it will look for all word that match this 2 characters together */
let result6 = unRegex.test(exampleStr);

/* CHARACTER CLASS to MATCH MULTIPLE CHARACTERS */

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; /* it willl seach all vowels ignoring case and globally  */
let result7 = quoteSample.match(vowelRegex); /* mind the format of match or test as is confusin match (/regex/) test ("strich") */

/* MATCH ALL LETTERS IN THE ALPHABET WITH "-" */

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; /* This will check all characters from a to z in aplhabetic order and with flags for the whole string and ignoring case */
let result8 = quoteSample.match(alphabetRegex); /* sting.match(regex) */

/* MATCH NUMBERS with "-" */

let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex3 = /[h-s2-6]/ig; 
let result9 = quoteSample.match(myRegex3); 

/* IGNORING CHRACTAES with "^" */

let quoteSample4 = "3 blind mice.";
let myRegex4 = /[^3ie]/ig;  /* you ignore the vowels "ie" found in the string and number 3, you can set sets with - */
let result10 = quoteSample4.match(myRegex4); /* If you add space in the regular exp it will also ignore spaces as seen in the console */
