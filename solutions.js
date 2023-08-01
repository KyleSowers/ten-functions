"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail. **/
  function isTrue(input) {
    if (input === true) {
        return true;
    } else {
        return false;
    }
}

function isFalse(value) {
      if (value === false) {
          return true;
      } else {
          return false;
      }
}

function not(input) {
      return !input;
}

function addOne(number) {
      if (number === Infinity) {
          return Infinity;
      } else {
          return parseInt(number) +1;
      }
}

function isEven(input) {
      if (input === true || input === false) {
          return false;
      } else if (input % 2===0) {
          return true;
      } else {
          return false;
      }
}

function isIdentical(input1, input2) {
      if (input1 === input2) {
          return true;
      } else {
          return false;
      }
}

function isEqual(input1, input2) {
    if (input1 == input2) {
        return true;
    } else {
        return false;
    }
}

function or(value1, value2) {
      return (value1 || value2);
}

function and(value1, value2) {
      return (value1 && value2);
}

function concat(value1, value2) {
      return (value1.toString() + value2.toString())
}


