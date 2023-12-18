/* API TEST */
pm.test("Status code is 200", () => {
    pm.response.to.have.status(200);
});

const response1 = pm.response.json();

console.log("status");
console.log(response["status"]);

pm.test("Status should be OK", () => {
    pm.expect(response["status"]).to.eql("OK");
});

/* LIST OF BOOKS */
pm.test("Status code is 200", () => { /* snippet is status 200 or similar namin */
    pm.response2.to.have.status(200); /* this is a snippet from pm that checks if status of the request is good internally speaking, you have to consider update string and intiger to match the conditions andget full correct output --> the patch (204) or Post (201) */
});

const response2 = pm.response2.json(); /* this variable is declared cotaine the response body // Json object */

const noneFictionBooks1 = response2.filter((book) => book.available === true);
/*this is a funciton that filters all books that meet the callback function to filter books that inside the API request (nonfictional) are available(=== true)  */

console.log(noneFictionBooks[0]);/* As filter creates an array call books in arrays index */

const book1 = noneFictionBooks[0];

pm.test("Book found", () => {
    pm.expected(book1).to.be.an('object');
    pm.expect(book1.available).to.eql(true);
    pm.expect(book1.available).to.eql(true);
});

 pm.globals.set("bookId", noneFictionBooks[0].id);
/* set a global variable snippet // this scripts takes to parameters and registers global variables can be accese globaly --> chec the "listeyed icon"  */


/* LIST OF BOOK (CHAGING CONDITION OF TYPE)*/

pm.test("Status code is 200", () => { /* snippet is status 200 or similar namin */
    pm.response.to.have.status(200); /* this is a snippet from pm that checks if status of the request is good internally speaking, you have to consider update string and intiger to match the conditions andget full correct output --> the patch (204) or Post (201) */
});

const response3 = pm.response.json(); /* this variable is declared cotaine the response body // Json object */

const noneFictionBooks = response.filter((book) => book.available === true);
/*this is a funciton that filters all books that meet the callback function to filter books that inside the API request (nonfictional) are available(=== true)  */

console.log(noneFictionBooks[0]);/* As filter creates an array call books in arrays index */

const book = noneFictionBooks[0];

pm.test("Book found", () => {
    pm.expect(book).to.be.an('object');
    pm.expect(book.available).to.true;
    pm.expect(book.available).to.eql(true);
    pm.expect(book.type).to.eql("non-fiction");

});

 pm.globals.set("bookId", noneFictionBooks[0].id);
/* set a global variable snippet // this scripts takes to parameters and registers global variables can be accese globaly --> chec the "listeyed icon"  */

/* GET SINGLE BOOK */

pm.test("Status code is 200", () => {
    pm.response.to.have.status(200);
});

const response4 = pm.response.json(); /* to acces the body inside the fuctino we have to declare a varaible that will hold it */

pm.test("Is in Stock", () => { 
    pm.expect(response4['current-stock']).to.be.above(0); /* this is an expectation that access body / obj property "current-stock" ;;mind the [];; to be above 0  */
});

/* SKYPING REQUEST WEHN RUNNING THE AUTOMATED TEST */
postman.setNextRequest("List of Books"); /* function to skip certain parts while running a test */

 /* FUNCTION TO STOP RUNNING THE AUTOMATED TEST */
pm.test("Status code is 200", () => {
    pm.response.to.have.status(204);
});

postman.setNextRequest(null); /* Stop the test in when running a test */