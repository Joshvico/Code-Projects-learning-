/* .TEST () METHOD USING REGULAR EXP */

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);/* test function will check if /hello/ defined in the var above is inside the string from var myString */

/* .TEST () OF MULTPLE STING POSIBILITIES WITH  ************************************************ OR "|" operator */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; /* the | acts like OR to include other possiblities you could be lloking for */ 
let result2 = petRegex.test(petString); 

/* MATCH STINGS BY IGNORING CASES WITH *************************************** "/i" FLAG */

let myString2 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; /* /i will ignore the case in any of the match it finds */
let result3 = fccRegex.test(myString2);

/* EXTRACTING MATCHES WITH .MATCH() */

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result4 = extractStr.match(codingRegex); 

console.log (result4);

/* ************************************************************************************************** difference from .match() + .test */
'string'.match(/regex/);
/regex/.test('string');


/* GLOBAL FLAG /G + flag combination posiblity*/
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig;/* flag combinaiton to ignore and check global (to check more than one time) */
let result5 = twinkleStar.match(starRegex); 

/* WILDCARD PERIOD OR DOT TO MATCH ANY PART OF A STRING ******************************** "." */

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; /* it will look for all word that match this 2 characters together */
let result6 = unRegex.test(exampleStr);

/* CHARACTER CLASS to MATCH MULTIPLE CHARACTERS ********************************************"ig"  */

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; /* it willl seach all vowels ignoring case and globally  */
let result7 = quoteSample.match(vowelRegex); /* mind the format of match or test as is confusin match (/regex/) test ("strich") */

/* MATCH ALL LETTERS IN THE ALPHABET WITH ************************ ["-"] */

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; /* This will check all characters from a to z in aplhabetic order and with flags for the whole string and ignoring case */
let result8 = quoteSample.match(alphabetRegex); /* sting.match(regex) */

/* MATCH NUMBERS with ************************************** ["-"] */

let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex3 = /[h-s2-6]/ig; 
let result9 = quoteSample.match(myRegex3); 

/* IGNORING CHRACTAES with **************************************["^"] */

let quoteSample4 = "3 blind mice.";
let myRegex4 = /[^3ie]/ig;  /* you ignore the vowels "ie" found in the string and number 3, you can set sets with - */
let result10 = quoteSample4.match(myRegex4); /* If you add space in the regular exp it will also ignore spaces as seen in the console */

/* MATCHING ONE OR  MULTPLE CONSECUTIVE CASES  with *************** "+" */
let difficultSpelling = "Mississippi";
let myRegex5 = /s+/ig; 
let result11 = difficultSpelling.match(myRegex5);

/* MATCHING 0 MORE TIMES WITH ****************************************** "*" */
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; /* it will check for 0 or more cases that start with Aa */

let result12 = chewieQuote.match(chewieRegex);

/* LAZY MATCHING with *************************************** "?" */

let text = "<h1>Winter is coming</h1>";
let myRegex8 = /<.*?>/; /* it will look for shortes pattern that contains <> inlduing what ever is inside in this case h1  */
let result13 = text.match(myRegex8);

console.log(result13);

/* USING ^ at THE BEGINNING OF THE STRING ^ with no [] *************************************** "^xxx or ^[]  (ANCHOR BEGINNING) " */

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/ /* this will find the first pattern of letters Carl in the beginning of the string */
let result14 = calRegex.test(rickyAndCal);
/* 
^Cal = beggining [^Cal]= Negation 
*/

/* SERCHING BY THE END WITH ********************************************************* "$" (ANCHOR END) */

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result15 = lastRegex.test(caboose);

console.log(result15);

/* MATCHING NUMBERS 0-9, "_" , LETTERS FROM A-Z with ************************************** "\w" (NO CAPITAL) */
let quoteSample5 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; /* it will match all apalah numerical characters  + mind the w non capital*/ 
let result16 = quoteSample5.match(alphabetRegexV2).length;/* .lenght will provide the number of the characters that\W icnludes as reviewing the sting = 31 in this case*/

/* MATCHING NON ALPAH NUMERIC with ********************************************************** "\W" (capital) */

let quoteSample6 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; /* this will find evrything that is non alpha numerical*/
let result17 = quoteSample.match(nonAlphabetRegex).length;



/* SHORTHAND TO FIND NUMBER ***************************************************************** "\d" (no capital) */

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; /* non capital */
let result18 = movieName.match(numRegex).length; /* lenght KW funciton provides number of numbers found in the string */

/* MATCHING ALL NON-NUMBERS  ************************************************************************ "\D" (capital)*/

let movieName2 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; /* CAPITAL is = negative [^] in this case exclude all charcaters non numbers*/
let result19 = movieName2.match(noNumRegex).length;

/* RESTRICTING POSSIBLE USERNAME ******************************* (excersises) */

let username = "JackOfAllTrades";
let userCheck = /^[a-z][A-Z]+\d*$|^[a-z]\d\d+$/i;/* check resticitions of notes as is breakdown and expalanined found wiht titel of section*/
let result20 = userCheck.test(username);

/* MATCHING WHITE SPACES *********************************************** "\s" (no capital)*/

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let result21 = sample.match(countWhiteSpace);
/* MATCHING WHITE SPACES *********************************************** "\S" (capital)*/

let sample2 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let result22 = sample.match(countNonWhiteSpace);

/* QUANTITY SPECIFIERS ******************************************************** "{X,X}" (only one letter setting num range) */

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; /* Quanty specificiations only applies for  the letter that is at the left of the specifier and the times range is create with "," */ 
result23 = ohRegex.test(ohStr);

/* exmpale on how to appply more quantity specifier */
let ohStr3 = "OOOOOOhhh no";
let ohRegex3 = /O{4,7}h{3,6} no/; /*  in this case since bot ranges are met and the expression on the string also it willl return ture */
result24 = ohRegex.test(ohStr);

/* QUANTITY SPECIFIERS ******************************************************** "{X, }" (setting no max range) */

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; /* pattern from 4 to infinit amount of z */
let result25 = haRegex.test(haStr);

/* SPECIIC QUATITY SPEICIFER *************************************************** "{X}" (exatc number of times)  */

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; /*  It will only return true when the string meets 4 m in arrow */
let result26 = timRegex.test(timStr);

/* ALL OF NONE / OPTIONAL *************************************************** / "xxxxy?xxx or (xxxx)?" / (OPTINAL CHARACTER)  */

let favWord = "favorite";
let favRegex = /favou?rite/; /* this is very useful for American english and english words */
let result27 = favRegex.test(favWord);

/* LOOKAHEAD good for PASSWROD CONDIGITONS ***************************************** "(?=xxxxx // positive (!= XXXXX))" */

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/; /* passwrod that is more than 5 and 2 consecutive digits the lookahead conditions are separated */
let result28 = pwRegex.test(sampleWord);

/* GROUPING CHARACTERS with ***************************************************** "( ) or (xxx|xxxxx)" /P(engu|umpk)in/g */

let myString3 = "Eleanor Roosevelt";
let myRegex6 = /(Franklin|Eleanor)(\s[A-Za-z]+.)?\sRoosevelt/; /* check if both names and looahed for middfle name (initial capital or non capital) with . and mind separation with \s */
let result29 = myRegex6.test(myString);

/* CAPTURING GROUPS with *************************************************************************************** "( ) \1"  */

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;/* ^the strat of the string (\d+) capture groups of more digits " space" \1 to match the 1st caputre group and $ until the end of the string */
let result30 = reRegex.test(repeatNum);

/* REPLACING WITH ******************************************************************************************** ".replace" function KW  */

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; /* it captures 3 diferent groups with aphanumeric content and the spaces */
let replaceText = "$3 $2 $1"; /* $ is used to represent the captured groups thta are different and their positions */
let result31 = str.replace(fixRegex, replaceText); /* keep in mind that in order to replace you need to put the let that you want to replace with */

/* REMOVING WHITESPACES (start til end) **************************************************************************  */

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; /* it matches spaces by the beggining an the en and separted in two options that are searched globally */
let result32 = hello.replace(wsRegex, ''); /* keep in mind the string replacement to asssigen the actual replacement if not it won't repalce to anaything*/
