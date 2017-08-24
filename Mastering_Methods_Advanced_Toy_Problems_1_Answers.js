
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

var allAnagrams = function(string) {
  // Your code here.
  var uniqueOutput = {};

  (function anagram (ana, str) {
    if (str === '') { uniqueOutput[ana] = 1; }

    for (var i = 0; i < str.length; i++) {
      anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  })('', string);

  return Object.keys(uniqueOutput);
};

/*
==========================================================================
*/

var balancedParens = function(input) {

  var stack = [];
  var pairs = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  for (var i = 0; i < input.length; i++) {
    var chr = input[i];

    if (pairs[chr]) {
      stack.push(chr);
    } else if (chr === '}' || chr === ']' || chr === ')') {
      if (pairs[stack.pop()] !== chr) {
        return false;
      }
    }
  }
  //return false if there are any unclosed brackets
  return stack.length === 0;
};

/*
==========================================================================
*/

var characterFrequency = function(string) {
  var storage = {};
  var result = [];
  for (var i = 0; i < string.length; i++) {
    if(storage[string[i]]) {
      storage[string[i]]++
    } else {
      storage[string[i]] = 1;
    }
  }
  for(var key in storage) {
    result.push([key, storage[key]]);
  }
  return result.sort(function(a, b) {
    if(a[1] > b[1]) {return -1}
    if(a[1] < b[1]) {return 1}
    if(a[0] < b[0]) {return -1}
    if(a[0] > b[0]) {return 1}
 })
};

/*
==========================================================================
*/


var makeChange = function(total) {

  var output = 0;
  var denominations = [1, 2, 5, 10, 20, 50, 100, 200];

  (function recurse (index, tot) {
    var currentDenomination = denominations[index];
    if (index === 0) {
      // support a lowest currency that is not 1
      tot % currentDenomination === 0 && output++;
      return;
    }
    while (tot >= 0) {
      recurse(index - 1, tot);
      tot -= currentDenomination;
    }
  })(denominations.length - 1, total);

  return output;
};

/*
==========================================================================
*/

var swap = function(index1, index2, array) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};

var bubbleSort = function(array) {
  // Your code here.

  if (!Array.isArray(array)) {
    throw new TypeError('bubbleSort accepts only arrays');
  }

  var len = array.length;

  for (var i = 0; i < len; i++) {
    var swaps = 0;

    // Do j < len - 1 - i iterations so we don't consider the final (sorted)
    // element in the array in future iterations
    for (var j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swaps++;
        swap(j, j + 1, array);
      }
    }

    // If no swaps were done during this iteration, then the array is sorted
    // and we can bail out
    if (!swaps) { break; }
  }

  return array;

};

/*
==========================================================================
*/

