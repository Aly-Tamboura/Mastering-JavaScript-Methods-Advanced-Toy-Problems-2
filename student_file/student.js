
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
  if(isNaN(num2) || num2 === 0 ||isNaN(num1) || !num1 === 0) {
     return NaN;
 }
 var storage = [];
 var remainder = Math.abs(num1);
 var fin = 0;
 for(var i = 0; i < 100; i++) {
     storage.push(remainder);
    remainder -= Math.abs(num2)
 }

for (var k = storage.length - 1; k >= 0; k--) {
     if(storage[k] >= 0) {
         fin = storage[k]
         break;
     }
 }
 if(num1 < 0) {
    return -(fin);
 } else
 if(num2 < 0) {
     return +fin;
 }
   return fin;
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
   var count = 0;
    for(var i = 0; i < str.length; i++) {
      if(str[i].indexOf(char) > -1) {
          count++
      }
    }
    return count
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
  var count = 0;
  var a = string.split('');
  a.forEach( function(item) {
      count++
  })
  return count;
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
    for(var i = 0; i < str.length; i++) {
    if(str[i] === char) {
        return i;
    }
  }
  return -1;
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
  var sum = 0;
  if(num < 0) {
    var string = num.toString().split('').splice(1);
    sum = -string[0]
    for(var i = 1; i < string.length; i++) {
        sum += Number(string[i]);
    }
  } else {
     var string = num.toString().split('');
    for(var i = 0; i< string.length; i++) {
      sum += Number(string[i]);
    }
  }
  return sum;
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
   if(array.length === 0) {
      return undefined;
  } else {
      return array[0];
  }
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
  if(array.length === 0) {
      return undefined;
  } else {
      return array[array.length - 1];
  }
}

// Tests
// should_return_the_last_element_of_an_array
// should_return_undefined_if_the_array_is_empty

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
  arr.push(element);
  return arr
}

// Tests
// should_return_an_array
// should_add_an_element_to_the_end_of_an_array
// should_add_an_element_to_the_end_of_an_empty_array
// should_be_the_same_array_instance_that_was_passed_in

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
  arr.unshift(element);
  return arr;
}

// Tests
// should_return_an_array
// should_add_an_element_to_the_end_of_an_array
// should_add_an_element_to_the_end_of_an_empty_array
// should_be_the_same_array_instance_that_was_passed_in
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
function removeFromBack(arr) {
  // your code here
  arr.pop();
  return arr;
}

// Tests
// should_return_an_array
// should_return_the_array_with_the_last_element_removed
// should_handle_an_empty_array

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
    return array.slice(1);
}

// Tests
// should_return_an_array
// should_return_an_array_with_all_the_elements_of_the_passed_in_array_except_for_the_first
// should_return_an_empty_array_when_passed_in_a_single_element_array
// should_return_an_empty_array_when_passed_in_an_empty_array


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
  return array.slice(0, n);
}

// Tests
// should_return_an_array
// should_return_an_array_with_all_the_elements_of_the_passed_in_array_up_until_the_nth
// should_return_an_empty_array_when_passed_in_a_single_element_array
// should_return_a_mirror_of_the_original_array_when_passed_an_n_out_of_range
// should_return_an_empty_array_when_passed_in_an_empty_array


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
  if(array.length === 1 ) {
        return [];
  }
  return array.slice(n + 1);
}

// Tests
// should_return_an_array
// should_return_an_array_with_all_the_elements_of_the_passed_in_array_after_the_nth
// should_return_an_empty_array_when_passed_in_a_single_element_array
// should_return_an_empty_array_when_passed_an_n_out_of_range
// should_return_an_empty_array_when_passed_in_an_empty_array


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
  return array.slice(n, n + 1).pop();
}

// Tests
// should_return_the_nth_element_of_an_array
// should_return_undefined_if_the_array_is_empty

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
  return [].concat(arr1, arr2);
}

// Tests
// should_return_an_array
// should_return_an_array_with_the_elements_from_the_first_and_then_the_second_array
// should_handle_empty_arrays_in_the_first_position
// should_handle_empty_arrays_in_the_second_position


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
  return array.slice(0, array.length - 1);
}

// Tests
// should_return_an_array
// should_return_an_array_with_all_the_elements_of_the_passed_in_array_except_for_the_last
// should_return_an_empty_array_when_passed_in_a_single_element_array
// should_return_an_empty_array_when_passed_in_an_empty_array


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
  return arr.slice(1);
}
// Tests
// should_return_an_arrayWrite a function called "computeSumOfAllElements".
/*
==========================================================================
*/

// Write a function called "computeSumOfAllElements".

// Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

// var output = computeSumOfAllElements([1, 2, 3])
// console.log(output); // --> 6

// Starter Code :
function computeSumOfAllElements(arr) {
  // your code here
}
// should_return_the_array_with_the_first_element_removed
// should_handle_an_empty_array
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
  // your code here
}

// Tests
// hould_return_an_array
// should_return_an_array_with_the_elements_from_all_the_nested_arrays
// should_handle_empty_arrays_in_the_first_position
// should_handle_empty_arrays_in_the_second_position
// should_handle_empty_arrays_in_the_third_position
// should_handle_empty_arrays_in_all_positions

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
  var storage = [];
 for(var i = 0; i < array.length; i++) {
  if(i !== n) {
      storage.push(array[i]);
  }
 }
 return storage;
}

// Tests
// should_return_an_array
// should_return_an_array_with_all_the_elements_of_the_passed_in_array_except_for_the_nth
// should_return_an_empty_array_when_passed_in_a_single_element_array
// should_return_a_mirror_of_the_original_array_when_passed_an_n_out_of_range
// should_return_an_empty_array_when_passed_in_an_empty_array

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
  var array = arr.slice(0);
  array.push(element);
  return array;
}

// Tests
// should_return_an_array
// should_add_an_element_to_the_end_of_an_array
// should_add_an_element_to_the_end_of_an_empty_array
// should_leave_arr_unmodified


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
  var array = arr.slice(0);
  array.unshift(element);
  return array;
}

// Tests
// should_return_an_array
// should_add_an_element_to_the_front_of_an_array
// should_add_an_element_to_the_end_of_an_empty_array
// should_leave_arr_unmodified

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
  var array = arr.slice();
  array.pop();
  return array;
}

// Tests
// should_return_an_array
// should_return_an_array_with_the_last_element_of_the_passed_in_array_removed
// should_handle_an_empty_array
// should_leave_arr_unmodified


/*
==========================================================================
*/

// Write a function called "computeSumOfAllElements".

// Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

// var output = computeSumOfAllElements([1, 2, 3])
// console.log(output); // --> 6

// Starter Code :
function computeSumOfAllElements(arr) {
  // your code here
}

// Tests
// should_return_a_number
// return_the_sum_of_all_elements
// return_0_if_the_passed_in_array_is_empty

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
  return [].concat(arr1, arr2, arr3);
}

// Tests
// should_return_an_array
// should_return_an_array_with_the_elements_from_the_first_and_then_the_second_array
// should_handle_empty_arrays_in_the_first_position
// should_handle_empty_arrays_in_the_second_position
// should_handle_empty_arrays_in_the_third_position
// should_handle_empty_arrays_in_all_positions
/*
==========================================================================
*/
// Good Job!
// Don't forget to write you name at the top of this page.


