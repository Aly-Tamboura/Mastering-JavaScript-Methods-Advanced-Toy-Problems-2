
/*
  =========  ===   ===  =======  ===         ==     =========  =========  ===     ===  =========  ===      =======
  =========  ===   ===  =======  ===        ====    =========  =========  ====   ====  =========  ===      =======
  =========  ===   ===  ===      ===       ==  ==   ===        =========  ===== =====     ===     ===      ===
     ===     =========  =======  ===      ========  ========      ===     === === ===     ===     ===      =======
     ===     =========  ===      ===      ========       ===      ===     ===  =  ===     ===     ===      ===
     ===     ===   ===  ===      ===      ==    ==       ===      ===     ===     ===     ===     ===      ===
     ===     ===   ===  =======  =======  ==    ==  ========      ===     ===     ===   ========  =======  =======
     ===     ===   ===  =======  =======  ==    ==  ========      ===     ===     ===   ========  =======  =======

==========================================================================
*/

// Instructor File

/*
==========================================================================
*/

// Write a function called "isEvenAndGreaterThanTen".

// Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.

// var output = isEvenAndGreaterThanTen(13);
// console.log(output); // --> false

// Starter Code :
function isEvenAndGreaterThanTen(num) {
  // your code here
  return num > 10 && num % 2 === 0 ? true : false;
};

/*
==========================================================================
*/

// Write a function called "areBothOdd".

// Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.

// var output = areBothOdd(1, 3);
// console.log(output); // --> true

// Starter Code :
function areBothOdd(num1, num2) {
  // your code here
  return num1 % 2 !== 0 && num2 % 2 !== 0 ? true : false;
};

/*
==========================================================================
*/
// Write a function called "isEitherEven".

// Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.

// var output = isEitherEven(1, 4);
// console.log(output); // --> true

// Starter Code :
function isEitherEven(num1, num2) {
  // your code here
  return num1 % 2 === 0 || num2 % 2 === 0 ? true : false;
};

/*
==========================================================================
*/

//Write a function called "isEitherEvenOrAreBoth7".

// Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.

// var output = isEitherEvenOrAreBoth7(3, 7);
// console.log(output); // --> false

// var output = isEitherEvenOrAreBoth7(2, 3);
// console.log(output); // --> true

// Starter Code :
function isEitherEvenOrAreBoth7(num1, num2) {
  // your code here
  if(num1 % 2 === 0 || num2 % 2 === 0) {
      return true;
  } else
  if(num1 === 7 && num2 === 7) {
      return true;
  } else {
      return false;
  }
};

/*
==========================================================================
*/

// Write a function called "isOldEnoughToDrink".

// Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.

// Notes:
// * The legal drinking age in the United States is 21.

// var output = isOldEnoughToDrink(22);
// console.log(output); // --> true

// Starter Code :
function isOldEnoughToDrink(age) {
  // your code here
  return age >= 21 ? true : false;
};

/*
==========================================================================
*/

//Write a function called "isOldEnoughToVote".

// Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States.

// Notes:
// * The legal voting age in the United States is 18.

// var output = isOldEnoughToVote(22);
// console.log(output); // --> true

// Starter Code :
function isOldEnoughToVote(age) {
  // your code here
  return age >= 18 ? true : false;
};

/*
==========================================================================
*/
//Write a function called "isOldEnoughToDrive".

// Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States.

// Notes:
// * The legal driving age in the United States is 16.

// var output = isOldEnoughToDrive(22);
// console.log(output); // --> true

// Starter Code :
function isOldEnoughToDrive(age) {
  // your code here
  return age >= 16 ? true : false;
};

/*
==========================================================================
*/

// Write a function called "isOldEnoughToDrinkAndDrive".

// Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States.

// Notes:
// * The legal drinking age in the United States is 21.
// * It is always illegal to drink and drive in the United States.

// var output = isOldEnoughToDrinkAndDrive(22);
// console.log(output); // --> false

// Starter Code :
function isOldEnoughToDrinkAndDrive(age) {
  // your code here
  return false;
};

/*
==========================================================================
*/

// Write a function called "or".

// Given 2 boolean expressions, "or" returns true or false, corresponding to the || operator.

// Notes:
// * Do not use the || operator.
// * Use ! and && operators instead.

// var output = or(true, false);
// console.log(output); // --> true;

// Starter Code :
function or(expression1, expression2) {
  // your code here
   if(expression1) {
      return true;
  } else
  if(expression2) {
      return true;
  } else {
      return false;
  }
};

/*
==========================================================================
*/

// Write a function called "checkAge".

// Given a person's name and age, "checkAge" returns one of two messages:

// "Go home, {insert_name_here}!", if they are younger than 21.
// "Welcome, {insert_name_here}!", if they are 21 or older.

// Naturally, replace "{insert_name_here}" with the given name. :)

// var output = checkAge('Adrian', 22);
// console.log(output); // --> 'Welcome, Adrian!'

// Starter Code :
function checkAge(name, age) {
  // your code here
  if(age >= 21) {
      return "Welcome, " + name + "!";
  } else {
      return "Go home, " + name + "!";
  }
};

/*
==========================================================================
*/
// Write a function called "findMaxLengthOfThreeWords".

// Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

// var output = findMaxLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 3

// Starter Code :
function findMaxLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var len = 0;
  for(var i = 0; i < arguments.length; i++) {
      if(arguments[i].length > len) {
          len = arguments[i].length;
      }
  }
  return len;
};

/*
==========================================================================
*/

// Write a function called "findMinLengthOfThreeWords".

// Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

// var output = findMinLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 1

// Starter Code :
function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var len = Number.POSITIVE_INFINITY;
  for(var i = 0; i < arguments.length; i++) {
      if(arguments[i].length < len) {
          len = arguments[i].length;
      }
  }
  return len;
};

/*
==========================================================================
*/

// Write a function called "findShortestOfThreeWords".

// Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

// Notes:
// * If there are ties, it should return the first word in the parameters list.

// var output = findShortestOfThreeWords('a', 'two', 'three');
// console.log(output); // --> 'a'

// Starter Code :
function findShortestOfThreeWords(word1, word2, word3) {
  // your code here
   var len = Number.POSITIVE_INFINITY;
  var word = '';
  for(var i = 0; i < arguments.length; i++) {
      if(arguments[i].length < len) {
          len = arguments[i].length;
          word = arguments[i];
      }
  }
  return word;
};

/*
==========================================================================
*/

// Write a function called "getLongestOfThreeWords".

// Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

// Notes:
// * If there is a tie, it should return the first word in the tie.

// var output = getLongestOfThreeWords('these', 'three', 'words');
// console.log(output); // --> 'these'

// Starter Code :
function getLongestOfThreeWords(word1, word2, word3) {
  // your code here
  var len = 0;
  var word = '';
  for(var i = 0; i < arguments.length; i++)
    if(arguments[i].length > len) {
        len = arguments[i].length;
        word = arguments[i];
    }
    return word;
};

/*
==========================================================================
*/

// Write a function called "areValidCredentials".

// Given a name and a password, "areValidCredentials", returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.

// var output = areValidCredentials('Ritu', 'mylongpassword')
// console.log(output); // --> true

// Starter Code :
function areValidCredentials(name, password) {
  // your code here
  return name.length > 3 && password.length > 8 ? true: false;
};

/*
==========================================================================
*/
// Write a function called "convertScoreToGrade".

// Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

// Notes:
// * (100 - 90) --> 'A'
// * (89  - 80) --> 'B'
// * (79  - 70) --> 'C'
// * (69  - 60) --> 'D'
// * (59  -  0) --> 'F'
// * If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.

// var output = convertScoreToGrade(91);
// console.log(output); // --> 'A'

// Starter Code :
function convertScoreToGrade(score) {
  // your code here
   if(score > 100 || score < 0) {
      return "INVALID SCORE";
  }
   if(score >= 90) {
      return 'A';
   } else
    if(score <= 89 && score >= 80) {
        return 'B';
    } else
    if(score <= 79 && score >= 70) {
        return 'C';
    } else
    if(score <= 69 && score >= 60) {
        return 'D';
    } else
    if(score <= 59 && score >= 0) {
        return 'F';
    }
};

/*
==========================================================================
*/

// Write a function called "convertScoreToGradeWithPlusAndMinus".

// Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

// Notes:
// * (100 - 90) --> 'A'
// * (89  - 80) --> 'B'
// * (79  - 70) --> 'C'
// * (69  - 60) --> 'D'
// * (60  -  0) --> 'F'
// * If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
// * If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
// * If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
// * There are is no F+ and there is no F-.

// var output = convertScoreToGradeWithPlusAndMinus(91);
// console.log(output); // --> 'A-'


// Starter Code :
function convertScoreToGradeWithPlusAndMinus(score) {
  // your code here
  if(score > 100 || score < 0) {
      return 'INVALID SCORE';
  } else
    if(score <= 100 && score >= 98) {
      return 'A+';
   } else
    if(score <= 97 && score >= 92) {
        return 'A';
    } else
    if(score <= 91 && score >= 90) {
        return 'A-';
    } else
    if(score <= 89 && score >= 88) {
      return 'B+';
   } else
    if(score <= 87 && score >= 83) {
        return 'B';
    } else
    if(score <= 82 && score >= 80) {
        return 'B-';
    } else
     if(score <= 79 && score >= 78) {
      return 'C+';
   } else
    if(score <= 77 && score >= 73) {
        return 'C';
    } else
    if(score <= 72 && score >= 70) {
        return 'C-';
    } else
    if(score <= 69 && score >= 68) {
      return 'D+';
   } else
    if(score <= 67 && score >= 63) {
        return 'D';
    } else
    if(score <= 62 && score >= 60) {
        return 'D-';
    } else
    if(score <= 59 && score >= 0) {
        return 'F';
    }
};

/*
==========================================================================
*/

// Write a function called "computeSummationToN".

// Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.

// Notes:
// * If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.

// var output = computeSummationToN(6);
// console.log(output); // --> 21

// Starter Code :
function computeSummationToN(n) {
  // your code here
  var sum = 0;
  for(var i = 1; i <= n; i++) {
      sum += i;
  }
  return sum;
};

/*
==========================================================================
*/

// Write a function called "repeatString".

// Given a string and a number, "repeatString" returns the given string repeated the given number of times.

// var output = repeatString('code', 3);
// console.log(output); // --> 'codecodecode'

// Starter Code :
function repeatString(string, num) {
  // your code here
 var word = "";
 for(var i = 0; i < num; i++) {
  word += string;
 }
 return word;
};

/*
==========================================================================
*/

// Write a function called "computeFactorialOfN".

// Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

// var output = computeFactorialOfN(3);
// console.log(output); // --> 6

// var output = computeFactorialOfN(4);
// console.log(output); // --> 24

// Starter Code :
function computeFactorialOfN(n) {
  // your code here
  if(n <= 1) {
      return 1;
  } else
  return n * computeFactorialOfN(n -1);
};

/*
==========================================================================
*/

// Write a function called "computeSumBetween".

// Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.

// Notes:
// * The sum between 1 and 4 is 1 + 2 + 3 = 6.
// * If num2 is not greater than num1, it should return 0.

// var output = computeSumBetween(2, 5);
// console.log(output); // --> 9

// Starter Code :
function computeSumBetween(num1, num2) {
  // your code here
  var sum = 0
  for(var i = num1; i < num2; i++) {
      sum += i;
  }
  return sum;
};

/*
==========================================================================
*/

// Write a function called "multiplyBetween".

// Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.

// Notes:
// * The product between 1 and 4 is 1 * 2 * 3 = 6.
// * If num2 is not greater than num1, it should return 0.

// var output = multiplyBetween(2, 5);
// console.log(output); // --> 24

// Starter Code :
function multiplyBetween(num1, num2) {
  // your code here
  if(num2 <= num1) {
     return 0;
 } else
 var sum = 1
  for(var i = num1; i < num2; i++) {
      sum *= i;
  }
  return sum;
};

/*
==========================================================================
*/

// Write a function called "isEvenWithoutModulo".

// Given a number, "isEvenWithoutModulo" returns whether it is even.

// Notes:
// * It does so without using the modulo operator (%).
// * It should work for negative numbers and zero.

// var output = isEvenWithoutModulo(8);
// console.log(output); // --> true

// Starter Code :
function isEvenWithoutModulo(num) {
  // your code here
  var b = num / 2;
  var a = Number.isInteger(b);
  if(a) {
    return true
  }
  return false;
};

/*
==========================================================================
*/

// Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

// Note:
// * It does so without using the modulo operator (%).
// * It should work for negative numbers and zero.

// var output = isOddWithoutModulo(17);
// console.log(output); // --> true

// Starter Code :
function isOddWithoutModulo(num) {
  // your code here
  var b = num / 2;
  var a = Number.isInteger(b);
  if(a) {
    return false
  }
  return true;
};

/*
==========================================================================
*/

// Write a function called "multiply".

// Given 2 numbers, "multiply" returns their product.

// Notes:
// * It should not use the multiply operator (*).\

// var output = multiply(4, 7);
// console.log(output); // --> 28

// Starter Code :
function multiply(num1, num2) {
  // your code here
  var sum = 0;
  for(var i = 1; i <= Math.abs(num2); i++) {
      sum += num1;
  }
  if(num2 < 0) {
      return -sum
  } else
  return sum;
};

/*
==========================================================================
*/














