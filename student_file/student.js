
/*
  =========  ===   ===  =======  ===         ==     =========  =========  ===     ===  =========  ===      =======
  =========  ===   ===  =======  ===        ====    =========  =========  ====   ====  =========  ===      =======
  =========  ===   ===  ===      ===       ==  ==   ===        =========  ===== =====     ===     ===      ===
     ===     =========  =======  ===      ========  ========      ===     === === ===     ===     ===      =======
     ===     =========  ===      ===      ========       ===      ===     ===  =  ===     ===     ===      ===
     ===     ===   ===  ===      ===      ==    ==       ===      ===     ===     ===     ===     ===      ===
     ===     ===   ===  =======  =======  ==    ==  ========      ===     ===     ===   ========  =======  =======
     ===     ===   ===  =======  =======  ==    ==  ========      ===     ===     ===   ========  =======  =======

Instructions:
	The following exercises are designed to test your knowledge on javaScript.
	Please write your name and the date below and begin the exercises
==========================================================================
*/

// Student Name:
// Test Date:
// CDCR#:


/*
==========================================================================
*/

// Write a function called "modulo".

// Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

// It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

// Notes:
// * Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
// * 0 % ANYNUMBER = 0.
// * ANYNUMBER % 0 = NaN.
// * If either operand is NaN, then the result is NaN.
// * Modulo always returns the sign of the first number.

// var output = modulo(25, 4);
// console.log(output); // --> 1

// Starter Code :
function modulo(num1, num2) {
  // your code here
};

/*
==========================================================================
*/

//Write a function called "countCharacter".

// Given a string input and a character, "countCharacter" returns the number of occurrences of a given character in the given string.

// var output = countCharacter('I am a hacker', 'a');
// console.log(output); // --> 3

// Starter Code :
function countCharacter(str, char) {
  // your code here
};

/*
==========================================================================
*/

// Write a function called "getStringLength".

// Given a string, "getStringLength" returns the length of the given string.

// Notes:
// * Do NOT use any native 'length' methods.
// * You might consider using 'substring' or 'slice' as alternatives.

// var output = getStringLength('hello');
// console.log(output); // --> 5

// Starter Code :
function getStringLength(string) {
  // your code here
 };

/*
==========================================================================
*/

// Write a function called "getIndexOf".

// Given a character and a string, "getIndexOf" returns the first position of the given character in the given string.

// Notes:
// * Strings are zero indexed, meaning the first character in a string is at position 0.
// * When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
// * If the character does not exist in the string, it should return -1.
// * Do not use the native indexOf function in your implementation.

// var output = getIndexOf('a', 'I am a hacker');
// console.log(output); // --> 2

// Starter Code :
function getIndexOf(char, str) {
  // your code here
};

/*
==========================================================================
*/

// var output = sumDigits(1148);
// console.log(output); // --> 14

// If the number is negative, the first digit should count as negative.

// var output = sumDigits(-316);
// console.log(output); // --> 4

// Notes:
// * In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
// * Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

// Starter Code :
function sumDigits(num) {
  // your code here
};

/*
==========================================================================
*/

// Write a function called "getFirstElement".

// Given an array, "getFirstElement" returns the first element of the given array.

// Notes:
// * If the given array has a length of 0, it should return undefined.

// var output = getFirstElement([1, 2, 3, 4, 5]);
// console.log(output); // --> 1

// Starter Code :
function getFirstElement(array) {
  // your code here
};

/*
==========================================================================
*/

// Write a function called "getLastElement".

// Given an array, "getLastElement" returns the last element of the given array.

// Notes:
// * If the given array has a length of 0, it should return 'undefined'.

// var output = getLastElement([1, 2, 3, 4]);
// console.log(output); // --> 4

// Starter Code :
function getLastElement(array) {
  // your code here
};

/*
==========================================================================
*/

// Write a function called "addToBack".

// Given an array and an element, "addToBack" returns the given array with the given element added to the end.

// Note: It should be the SAME array, not a new array.

// var output = addToBack([1, 2], 3);
// console.log(output); // -> [1, 2, 3]

// Starter Code :
function addToBack(arr, element) {
  // your code here
};

/*
==========================================================================
*/

// Write a function called "addToFront".

// Given an array and an element, "addToFront" adds the given element to the front of the given array, and returns the given array.

// Notes:
// * It should be the SAME array, not a new array.

// var output = addToFront([1, 2], 3);
// console.log(output); // -> [3, 1, 2]

// Starter Code :
function addToFront(arr, element) {
  // your code here
};

/*
==========================================================================
*/
// Write a function called "removeFromBack".

// Given an array, "removeFromBack" returns the given array with its last element removed.

// Notes:
// * You should be familiar with the method 'pop'.

// var output = removeFromBack([1, 2, 3]);
// console.log(output); // --> [1, 2]

// Starter Code :
function removeFromBack(array) {
  // your code here
};

/*
==========================================================================
*/

//Write a function called "getAllElementsButFirst".

// Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.

// var input = [1, 2, 3, 4];
// var output = getAllElementsButFirst(input);
// console.log(output); // --> [2, 3, 4]

// Starter Code :
function getAllElementsButFirst(array) {
  // your code here
};

/*
==========================================================================
*/

// Write a function called "getElementsUpTo".

// Given an array and a index, "getElementsUpTo", returns an array with all the elements up until, but not including, the element at the given index.

// Notes:
// * In order to do this you should be familiar with the 'slice' method.

// var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
// console.log(output); // --> ['a', 'b', 'c']

// Starter Code :
function getElementsUpTo(array, n) {
  // your code here
};

/*
==========================================================================
*/

// Write a function called "getElementsAfter".

// Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.

// var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
// console.log(output); // --> ['d', 'e']

// Starter Code :
function getElementsAfter(array, n) {
  // your code here
};

/*
==========================================================================
*/

//Write a function called "getNthElement".

// Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array.

// Notes:
// * If the array has a length of 0, it should return 'undefined'.

// var output = getNthElement([1, 3, 5], 1);
// console.log(output); // --> 3

// Starter Code :
function getNthElement(array, n) {
  // your code here
};

/*
==========================================================================
*/
// Write a function called "joinArrays".

// Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elementsin "arr2".

// var output = joinArrays([1, 2], [3, 4]);
// console.log(output); // --> [1, 2, 3, 4]

// You should be familiar with the "concat" method for this problem.

// Starter Code :
function joinArrays(arr1, arr2) {
  // your code here
};

/*
==========================================================================
*/

// Write a function called "getAllElementsButLast".

// Given an array, "getAllElementsButLast" returns an array with all the elements but the last.

// var input = [1, 2, 3, 4];
// var output = getAllElementsButLast(input);
// console.log(output); // --> [1, 2 , 3]

// Starter Code :
function getAllElementsButLast(array) {
  // your code here
};

/*
==========================================================================
*/

// Write a function called "removeFromFront".

// Given an array, "removeFromFront" returns the given array with its first element removed.

// Notes:
// * You should be familiar with the method 'shift'.

// var output = removeFromFront([1, 2, 3]);
// console.log(output); // --> [2, 3]

// Starter Code :
function removeFromFront(arr) {
  // your code here
};
/*
==========================================================================
*/

// Write a function called "computeSumOfAllElements".

// Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

// var output = computeSumOfAllElements([1, 2, 3])
// console.log(output); // --> 6

// Starter Code :
function computeSumOfAllElements(arr) {
  //your code here
};

/*
==========================================================================
*/

// Write a function called "joinArrayOfArrays".

// Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.

// var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
// console.log(output); // --> [1, 4, true, false, 'x', 'y']

// You should be familiar with the "concat" method for this problem.

// Starter Code :
function joinArrayOfArrays(arr) {
  //your code here
};

/*
==========================================================================
*/

// Write a function called "getAllElementsButNth".

// Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

// var output = getAllElementsButNth(['a', 'b', 'c'], 1);
// console.log(output); // --> ['a', 'c']

// Starter Code :
function getAllElementsButNth(array, n) {
  // your code here
};

/*
==========================================================================
*/

//Write a function called "addToBackNew".

// Given an array and an element, "addToBackNew" returns a clone of the given array, with the given element added to the end.

// Important: It should be a NEW array instance, not the original array instance.

// var input = [1, 2];
// var output = addToBackOfNew(input, 3);
// console.log(input); // --> [1, 2]
// console.log(output); // --> [1, 2, 3]

// Starter Code :
function addToBackOfNew(arr, element) {
  // your code here
};

/*
==========================================================================
*/

// Write a function called "addToFrontOfNew".

// Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.

// Important: It should be a NEW array instance, not the original array instance.

// var input = [1, 2];
// var output = addToFrontOfNew(input, 3);
// console.log(output); // --> [3, 1, 2];
// console.log(input); --> [1, 2]

// Starter Code :
function addToFrontOfNew(arr, element) {
  // your code here
};

/*
==========================================================================
*/

// Write a function called "removeFromBackOfNew".

// Given an array, "removeFromBackOfNew" returns a new array containing all but the last element of the given array.

// Notes:
// * You should be familiar with the 'slice' method.

// var arr = [1, 2, 3];
// var output = removeFromBackOfNew(arr);
// console.log(output); // --> [1, 2]
// console.log(arr); // --> [1, 2, 3]

// Starter Code :
function removeFromBackOfNew(arr) {
  // your code here
};

/*
==========================================================================
*/

// Write a function called "joinArrayOfArrays".

//Write a function called "joinThreeArrays".

// Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.

// var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
// console.log(output); // --> [1, 2, 3, 4, 5, 6]

// You should be familiar with the "concat" method for this problem.

// Starter Code :
function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
};

/*
==========================================================================
*/
// Good Job!
// Don't forget to write you name at the top of this page.


