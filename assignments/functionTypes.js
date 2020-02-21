// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration

function convertToString(n) {
  return String(n);
}

// Function Expression

let convertToString1 = function(n) {
  return String(n);
}

// Arrow Function

let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
}

// Function Invocation

convertToString(21); // "21"

// Example End


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

//Function Decleration

function addNum (n) {
  return (n + 1);
}

// Function Expression

let addNum = function(n) {
  return(n + 1);
}

// Arrow Function

let addNum = n => (n + 1);

// Arrow Function With Curly Bracket

let addNum = n => {
  return(n + 1);
}

// Function Invocation

addNum(33);


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

//Function Decleration

function subNum (n) {
  return(n - 1);
}

// Function Expression

let subNum= function(n) {
  return(n - 1);
}

// Arrow Function

let subNum = n => (n - 1);

// Arrow Function With Curly Bracket

let subNum = n => {
  return(n - 1);
}

// Function Invocation

subNum(20);


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

//Function Decleration

function addTwoNum (x, y) {
  return(x + y);
}

// Function Expression

let addTwoNum = function(x, y) {
  return(x + y);
}

// Arrow Function

let addTwoNum = (x, y) => (x + y);

// Arrow Function With Curly Bracket

let addTwoNum = (x, y) => {
  return(x + y);
}

// Function Invocation

addTwoNum(20, 30);


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

//Function Decleration
function subTwoNum (x, y) {
  return(x - y);
}

// Function Expression

let subTwoNum = function(x, y) {
  return(x - y);
}

// Arrow Function

let subTwoNum = (x, y) => (x - y);

// Arrow Function With Curly Bracket

let subTwoNum = (x, y) => {
  return(x - y);
}

// Function Invocation

subTwoNum(30, 20);


/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

//Function Decleration

function mulTwoNum (x, y) {
  return(x * y);
}

// Function Expression

let mulTwoNum = function(x, y) {
  return(x * y);
}

// Arrow Function

let mulTwoNum = (x, y) => (x * y);

// Arrow Function With Curly Bracket

let mulTwoNum = (x, y) => {
  return(x * y);
}

// Function Invocation

mulTwoNum(30, 20);


/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

//Function Decleration

function divTwoNum (x, y) {
  return(x / y);
}

// Function Expression

let divTwoNum = function(x, y) {
  return(x / y);
}

// Arrow Function

let divTwoNum = (x, y) => (x / y);

// Arrow Function With Curly Bracket

let divTwoNum = (x, y) => {
  return(x / y);
}

// Function Invocation

divTwoNum(20, 10);


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

//Function Decleration

function squNum (x) {
  return(x ** 2);
}

// Function Expression

let squNum = function(x) {
  return(x ** 2);
}

// Arrow Function

let squNum = (x) => (x ** 2);

// Arrow Function With Curly Bracket

let squNum = (x) => {
  return(x ** 2);
}

// Function Invocation

squNum(2);



/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

//Function Decleration

function oprAdd (x, y) {
  let res = x + y;
  return(`${x} + ${y} = ${res}`);
}
// Function Invocation

oprAdd(2,3)

// Function Expression

let oprSub = function(x, y) {
  let res = x - y;
  return(`${x} - ${y} = ${res}`);
}

// Function Invocation

oprSub(3, 2);

// Arrow Function

// Arrow Function With Curly Bracket

let oprDiv = (x, y) => {
  let res = x / y;
  return(`${x} / ${y} = ${res}`);
}

// Function Invocation

oprDiv(4, 2);



/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

 //Function Decleration

function greaterThan(a, b) {
  if (a > b) {
    return true;
  }
}

// Function Expression

let greaterThan = function(a, b) {
  if (a > b) {
    return true;
  }
}

// Arrow Function

var greaterThan = (a, b) => (a > b) ? true : false;


// Arrow Function With Curly Bracket

let greaterThan = (a , b) => {
  if (a > b) {
    return true;
  }
}


// Function Invocation

greaterThan(5, 3);


/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */


 //Function Decleration

function lessThan(a, b) {
  if (a < b) {
    return true;
  }
}

// Function Expression

let lessThan = function(a, b) {
  if (a < b) {
    return true;
  }
}

// Arrow Function

var lessThan = (a, b) => (a < b) ? true : false;


// Arrow Function With Curly Bracket

let lessThan = (a , b) => {
  if (a < b) {
    return true;
  }
}


// Function Invocation

greaterThan(1, 3);



/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

 //Function Decleration

function equalTo(a, b) {
  if (a == b) {
    return true;
  }
}

// Function Expression

let equalTo = function(a, b) {
  if (a == b) {
    return true;
  }
}

// Arrow Function

var equalTo = (a, b) => (a == b) ? true : false;


// Arrow Function With Curly Bracket

let equalTo = (a , b) => {
  if (a == b){
    return true;
  }
}


// Function Invocation

equalTo(3, 3);



/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

 //Function Decleration

function smallerValue(x, y) {
  if (x > y) {
    return y;
  } else {
    return x;
  }
}

// Function Expression

let smallerValue = function(x, y) {
  if (x > y) {
    return y;
  } else {
    return x;
  }
}

// Arrow Function

var smallerValue = (x, y) => (x > y) ? y : x;


// Arrow Function With Curly Bracket

let smallerValue = (x , y) => {
  if (x > y) {
    return y;
  } else {
    return x;
  }
}


// Function Invocation

smallerValue(5, 3);
smallerValue(2, 3);




/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

//Function Decleration

function largerValue(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

// Function Expression

let largerValue = function(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

// Arrow Function

var largerValue = (x, y) => (x > y) ? x : y;


// Arrow Function With Curly Bracket

let largerValue = (x , y) => {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}


// Function Invocation

largerValue(5, 3);
largerValue(2, 3);




/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

//Function Decleration

function evenNum(n) {
  if (n % 2 == 0) {
    return true;
  }
}

// Function Expression

let evenNum = function(n) {
  if (n % 2 == 0) {
    return true;
  }
}

// Arrow Function

var evenNum = (n) => (n % 2 == 0) ? true : false;


// Arrow Function With Curly Bracket

let evenNum = (n) => {
  if (n % 2 == 0) {
    return true;
  } 
}


// Function Invocation

evenNum(2);
evenNum(3);



/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

//Function Decleration

function oddNum(n) {
  if (n % 2 !== 0) {
    return true;
  }
}

// Function Expression

let oddNum = function(n) {
  if (n % 2 !== 0) {
    return true;
  }
}

// Arrow Function

var oddNum = (n) => (n % 2 !== 0) ? true : false;


// Arrow Function With Curly Bracket

let oddNum = (n) => {
  if (n % 2 !== 0) {
    return true;
  } 
}

// Function Invocation

oddNum(2);
oddNum(3);



/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */


//Function Decleration

function letterGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 0 && score <= 59) {
    return "F";
  }
}

// Function Expression

let letterGrade = function(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 0 && score <= 59) {
    return "F";
  }
}


// Arrow Function




// Arrow Function With Curly Bracket

let letterGrade = (score) => {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 0 && score <= 59) {
    return "F";
  }
}

// Function Invocation

letterGrade(90);
letterGrade(80);
letterGrade(70);
letterGrade(60);
letterGrade(45);


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

 //Function Decleration

function joinTwoString(word1, word2) {
  return String(word1 + " " + word2);
}


// Function Expression

let joinTwoString = function(word1, word2) {
  return String(word1 + " " + word2);
}

// Arrow Function

let joinTwoString = (word1, word2) => (word1 + word2) ? String(word1 + " " + word2): "";


// Arrow Function With Curly Bracket

let joinTwoString = (word1, word2) => {
  return String(word1 + " " + word2);
}

// Function Invocation

joinTwoString("Hello", "World");