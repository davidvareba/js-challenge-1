'use strict';
//In these first 6 questions, replace `null` with the answer

//1. create a string variable, it can contain anything
const newString = "Test string";

//2. create a number variable, it can be any number
const newNum = 7;

//3. create a boolean variable
const newBool = true;

//4. solve the following math problem
const newSubtract = 10 - 5 === 5;

//5. Solve the following math problem
const newMultiply = 10 * 4 === 40;

//6. Solve the following math problem:
const newModulo = 21 % 5 === 1;

//In the next 22 problems you will compete the function. All of your code will go inside of the function braces.
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work.
//Do not change any of the function names

// 7
function returnString(str) {
  const returnString = ("lets go!");
}
returnString();

// 8
function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
 const add = (10 + 5);

}
add();

// 9
function subtract(x, y) {
  // subtract y from x and return the value
  const subtract = (10 - 5);
  
}
subtract();

// 10
function multiply(x, y) {
  // multiply x by y and return the value
  const multiply = (4 * 2);
  
}
multiply();

// 11
function divide(x, y) {
  // divide x by y and return the value
  const divide = (6 / 3);
  
}
divide();

// 12
function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
 if (5 === 5) {
   return true;
 } else {
   return false;
 }
 }
 areEqual();

// 13
function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  if (str1 === str2) {
    return areSameLength.length;
  } else {
    return false;
  }
  }
  areSameLength();

// 14
function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  if (80 < 90) {
    return true;
  } else {
    return false;
  }
  }

// 15
function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
if (100 > 50) {
  return true;
 } else {
    return false
  }
  }
greaterThanFifty();
// 16
function getRemainder(x, y) {
  // return the remainder from dividing x by y
  const getRemainder = (5 % 2);
}
getRemainder();
// 17
function isEven(num) {
  // return true if num is even
  // otherwise return false
  if (num % 2 === 0) {
    return ("number is even")
  } else {
    return ("number is odd");
  }
  }
isEven();
// 18
function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  if (num % 2 === 0) {
    return ("number is even");
  } else {
    return ("odd number");
  }
  }
  isOdd();

// 19
function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  const square = Math.pow(6, 2);
}
square();
// 20
function cube(num) {
  // cube num and return the new value
  const cube = Math.cube(2);
}
cube();
// 21
function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  const raiseToPower = (2 ** 4);
}
raiseToPower();
// 22
function roundNumber(num) {
  // round num and return it
  // code here
}
// 23
function roundUp(num) {
  // round num up and return it
  // code here
}
// 24
function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  const addExclamationPoint = (`hello world!`);
  return addExclamationPoint
}
// 25
function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Code', 'Tracker' -> 'Code Tracker'
  const combineNames = (firstName + " " + lastName);
  return combineNames;
}
combineNames();
// 26
function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  let name = "Sam";
  return (`Hello ${name}`);
}
getGreeting();
// The next three questions will have you implement math area formulas.
// If you can't remember these area formulas then head over to Google.
//  27
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
}
// 28
function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  return (base * height);
}
getTriangleArea(number);
// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
