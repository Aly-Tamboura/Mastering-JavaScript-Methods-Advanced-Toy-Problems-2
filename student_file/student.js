
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

// Given a single input string, write a function that produces all possible anagrams
// of a string and outputs them as an array. At first, don't worry about
// repeated strings.  What time complexity is your solution?
//
// Extra credit: Deduplicate your return array without using uniq().

// example usage:
// var anagrams = allAnagrams('abc');
// console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
//


/*
==========================================================================
*/
 // write a function that takes a string of text and returns true if
 // the parentheses are balanced and false otherwise.
 //
 // Example:
 //   balancedParens('(');  // false
 //   balancedParens('()'); // true
 //   balancedParens(')(');  // false
 //   balancedParens('(())');  // true
 //
 // Step 2:
 //   make your solution work for all types of brackets
 //
 // Example:
 //  balancedParens('[](){}'); // true
 //  balancedParens('[({})]');   // true
 //  balancedParens('[(]{)}'); // false
 //
 // Step 3:
 // ignore non-bracket characters
 // balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 // balancedParens(' var hubble = function() { telescopes.awesome();'); // false

var balancedParens = function(input) {
  // Your code here.
};

/*
==========================================================================
*/

// Write a function that takes as its input a string and returns an array of
//  arrays as shown below sorted in descending order by frequency and then by
//  ascending order by character.
//
//       :: Example ::
//
//  characterFrequency('mississippi') ===
//  [
//    ['i', 4],
//    ['s', 4],
//    ['p', 2],
//    ['m', 1]
//  ]
//
//       :: Example2 ::
//
//  characterFrequency('miaaiaaippi') ===
//  [
//    ['a', 4],
//    ['i', 4],
//    ['p', 2],
//    ['m', 1]
//  ]
//
//       :: Example3 ::
//
//  characterFrequency('mmmaaaiiibbb') ===
//  [
//    ['a', 3],
//    ['b', 3],
//    ['i', 3],
//    ['m', 3]
//  ]

var characterFrequency = function(string) {
  // Your code here.
};

/*
==========================================================================
*/

// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
// 1p piece
// 2p piece
// 5p piece
// 10p piece
// 20p piece
// 50p piece
// £1 (100p)
// £2 (200p)
// It is possible to make £2 in the following way:
// 1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
// How many different ways can £2 be made using any number of coins?
// example usage of `makeChange`:
// aka, there's only one way to make 1p. that's with a single 1p piece
// makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
// makeChange(2) === 2

var makeChange = function(total) {
 // Your code here.
};

/*
==========================================================================
*/

// Bubble sort is the most basic sorting algorithm in all of Computer
// Sciencedom. It works by starting at the first element of an array and
// comparing it to the second element; if the first element is greater than the
// second element, it swaps the two. It then compares the second to the third,
// and the third to the fourth, and so on; in this way, the largest values
// "bubble" to the end of the array. Once it gets to the end of the array, it
// starts over and repeats the process until the array is sorted numerically.
//
// Implement a function that takes an array and sorts it using this technique.
// Don't use JavaScript's built-in sorting function (Array.prototype.sort).
//
// QUERY: What's the time complexity of your algorithm? If you don't already
// know, try to intuit this without consulting the Googles.
//
// Extra credit: Optimization time! During any given pass, if no elements are
// swapped we can assume the list is sorted and can exit the function early.
// After this optimization, what is the time complexity of your algorithm?
//
// Moar credits: Do you need to consider every element every time you iterate
// through the array? Make it happen, boss. Again: Has the time complexity of
// your algorithm changed?

// Example usage:
// bubbleSort([2, 1, 3]); // yields [1, 2, 3]

// Feel free to add helper functions if needed.

var bubbleSort = function(array) {
  // Your code here.
};

/*
==========================================================================
*/
// Good Job!
// Don't forget to write you name at the top of this page.


