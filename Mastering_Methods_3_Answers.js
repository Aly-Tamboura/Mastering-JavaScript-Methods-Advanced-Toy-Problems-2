
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

function modulo(num1, num2) {
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

function countCharacter(str, char) {
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

function getStringLength(string) {
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

function getIndexOf(char, str) {
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

function sumDigits(num) {
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

function getFirstElement(array) {
   if(array.length === 0) {
      return undefined;
  } else {
      return array[0];
  }
};

/*
==========================================================================
*/

function getLastElement(array) {
  if(array.length === 0) {
      return undefined;
  } else {
      return array[array.length - 1];
  }
};

/*
==========================================================================
*/

function addToBack(arr, element) {
  if(element) {
    arr[arr.length] = element;
  }
  return arr;
};

/*
==========================================================================
*/

function addToFront(arr, element) {
  arr.unshift(element);
  return arr;
};

/*
==========================================================================
*/

function removeFromBack(arr) {
  arr.pop();
  return arr;
};

/*
==========================================================================
*/

function getAllElementsButFirst(array) {
  return array.slice(1);
};

/*
==========================================================================
*/

function getElementsUpTo(array, n) {
  return array.length === 1 ? [] : array.slice(0, n);
}

/*
==========================================================================
*/

function getElementsAfter(array, n) {
  return array.length === 1 ? [] : array.slice(n + 1);
};

/*
==========================================================================
*/

function getNthElement(array, n) {
  return array.slice(n, n + 1).pop();
};

/*
==========================================================================
*/

function joinArrays(arr1, arr2) {
  return [].concat(arr1, arr2);
};

/*
==========================================================================
*/

function getAllElementsButLast(array) {
  return array.slice(0, array.length - 1);
};

/*
==========================================================================
*/

function removeFromFront(arr) {
  return arr.slice(1);
};
/*
==========================================================================
*/

function computeSumOfAllElements(arr) {
  var result = arr.reduce(function(item, memo) {
    return item + memo
  }, 0)
  return result;
};

/*
==========================================================================
*/

function joinArrayOfArrays(arr) {
  var storage = [];
  for (var i = 0; i < arr.length; i++) {
    var nestedArr = arr[i]
    for (var j = 0; j < nestedArr.length; j++) {
      storage.push(nestedArr[j])
    }
  }
  return storage;
};

/*
==========================================================================
*/

function getAllElementsButNth(array, n) {
  if(array.length === 1) {return []}
  var storage = [];
  for(var i = 0; i < array.length; i++) {
    if(i !== n) {
      storage.push(array[i]);
    }
 }
 return storage;
};

/*
==========================================================================
*/

function addToBackOfNew(arr, element) {
  var array = arr.slice(0);
  array.push(element);
  return array;
};

/*
==========================================================================
*/

function addToFrontOfNew(arr, element) {
  var array = arr.slice(0);
  array.unshift(element);
  return array;
};

/*
==========================================================================
*/

function removeFromBackOfNew(arr) {
  var array = arr.slice();
  array.pop();
  return array;
};

/*
==========================================================================
*/

function joinThreeArrays(arr1, arr2, arr3) {
  return [].concat(arr1, arr2, arr3);
};

/*
==========================================================================


