
  var assert = chai.assert;
  var expect = chai.expect;
  var should = chai.should;
  var sinon = sinon;


  describe('Modulo', function() {

    it('it should return a number', function() {
       expect(modulo(4)).to.be.a('number');
    });
    it('it should not use the joinThreeArrays operator', function() {
      expect(modulo.toString()).to.not.include('%');
    });

    it('it should return 0 when there is no remainder', function(){
      expect(modulo(4, 4)).to.eql(0);
    });

    it('it should return a negative number when the first number is negative', function(){
      expect(modulo(-4, 3)).to.eql(-1);
    });

    it('it should return a positive number when the second number is negative', function(){
      expect(modulo(5, -4)).to.eql(1);
    });

    it('it should return 0 when the first number is 0', function(){
      expect(modulo(0, -4)).to.eql(0);
    });

    it('it should return NaN when the first number is NaN', function(){
      expect(modulo('string', -4)).to.eql(NaN);
    });

    it('it should return NaN when the second number is NaN', function(){
      expect(modulo(90, 'string')).to.eql(NaN);
    });

    it('it should return NaN when the second number is 0', function(){
      expect(modulo(90, 0)).to.eql(NaN);
    });

    it('it should return 2 when given 12 and 5', function(){
      expect(modulo(12, 5)).to.eql(2);
    });

    it('it should return 1 when given 1 and 2', function(){
      expect(modulo(1, 2)).to.eql(1);
    });
    it('it should return 2 when given 2 and 3', function(){
      expect(modulo(2, 3)).to.eql(2);
    });
    it('it should return 0 when given 4 and 2', function(){
      expect(modulo(4, 2)).to.eql(0);
    });
  });

  describe('Count Character', function() {
    it('it should return a number', function() {
       expect(countCharacter('jump', 'p')).to.be.a('number');
    });

    it('it should return the number of occurences of a character in a string when the character exists', function() {
      expect(countCharacter('valuable', 'a')).to.eql(2);
    });

    it('it should return the number of occurences of a character in a string when the character does not exist', function() {
      expect(countCharacter('summer', 'z')).to.eql(0);
    });

    it('it should return the number of occurences of a non alphanumeric character in a string when the character exists', function() {
      expect(countCharacter('zulu*', '*')).to.eql(1);
    });
  });

  describe('Get String Length', function() {

    it('it should return a number', function() {
      expect(getStringLength('happy')).to.a('number');
    });

    it('it should not use the native length operator', function() {
      expect(getStringLength.toString()).to.not.include('.length');
    });

    it('it should return the length of a string', function() {
      expect(getStringLength('settriping')).to.eql(10);
    });

    it('it should return the length of an empty string', function() {
      expect(getStringLength('')).to.eql(0);
    });
  });

  describe('Get Index Of', function() {
    it('it should return a number', function() {
       expect(getIndexOf('c', 'cat')).to.be.a('number');
    });

    it('it should not use indexOf', function() {
      expect(getIndexOf.toString()).to.not.contain('.indexOf');
    });

    it('it should return negative 1 when the character does not occur in the string', function() {
      expect(getIndexOf('b', 'hillside')).to.eql(-1);
    });
  });

  describe('Sum Digits', function() {
    it('it should return a number', function() {
      expect(sumDigits(35)).to.be.a('number');
    });

    it('it should sum the digits of a positive number', function() {
      expect(sumDigits(123)).to.eql(6);
    });

    it('it should sum the digits of a negative number', function() {
      expect(sumDigits(-16)).to.eql(5);
    });

    it('it should sum return 0 if the number is 0', function() {
      expect(sumDigits(0)).to.eql(0);
    });
  });

  describe('Get First Element', function() {
    it('it should return a number', function() {
      expect(getFirstElement([1, 2, 3])).to.be.a('number');
    });

    it('it should_return_the_first_element_of_an_array', function() {
      expect(getFirstElement([2, 4, 6])).to.eql(2);
    });

    it('it should_return_undefined_if_the_array_is_empty', function() {
      expect(getFirstElement([])).to.eql(undefined);
    });
  });

describe('Get Last Element', function() {
    it('it should return a number', function() {
      expect(getLastElement([1, 2])).to.be.a('number');
    });

    it('it should return the last element of an array', function() {
      expect(getLastElement([10, 20 , 30])).to.eql(30);
    });

    it('it should return undefined if the array is empty', function() {
      expect(getLastElement([])).to.eql(undefined);
    });
  });

   describe('Add to Back', function() {
    it('it should return an array', function() {
      expect(addToBack([1,2])).to.be.an('array');
    });

    it('it should add an element to the end of an array', function() {
      expect(addToBack([1,2], 3)).to.eql([1, 2, 3]);
    });

    it('it should return the array if no element in present', function() {
      expect(addToBack([1,2])).to.eql([1,2]);
    });
  });

  describe('Add to Front', function() {
    it('it should return an array', function() {
      expect(addToFront([1, 2], 3)).to.be.an('array');
    });

    it('it should add an element to the front of the array', function() {
      expect(addToFront([1, 2], 3)).to.eql([3, 1, 2]);
    });

    it('it should add an element to the end of an empty array', function() {
      expect(addToFront([], 4)).to.eql([4]);
    });

    it('it should be the same array instance that was passed in', function() {
      expect(addToFront([1, 2, 3], 3)).to.eql(addToFront([1, 2, 3], 3));
    });
  });

  describe('Remove From Back', function() {

    it('it should return an array', function() {
      expect(removeFromBack([1,2,3])).to.be.an('array');
    });

    it('it should return the array with the last element removed', function() {
      expect(removeFromBack([1,2,3])).to.eql([1,2]);
    });

    it('it should handle an empty array', function() {
      expect(removeFromBack([])).to.eql([]);
    });
  });

  describe('Get All Elements But First', function() {

    it('it should return an array', function() {
      expect(getAllElementsButFirst([2,3,4,8])).to.be.an('array');
    });

    it('it should return an array with all the elements of the passed in array except for the first', function() {
      expect(getAllElementsButFirst([10, 12, 11, 13])).to.eql([12, 11, 13]);
    });

    it('it should return an empty array when passed in a single element array', function() {
      expect(getAllElementsButFirst([200])).to.eql([]);
    });

    it('it should return an empty array when passed in an empty array', function() {
      expect(getAllElementsButFirst([])).to.eql([]);
    });

  });

  describe('Get Elements Up To', function() {

    it('it should return an array', function() {
      expect(getElementsUpTo([3,4,5])).to.be.an('array');
    });

    it('it should return an array with all the elements of the passed in array up until the nth', function() {
      expect(getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)).to.eql(['a', 'b', 'c']);
    });

    it('it should return an empty array when passed in a single element array', function() {
      expect(getElementsUpTo([3], 1)).to.eql([]);
    });

    it('it should return a mirror of the original array when passed an n out of range', function() {
      expect(getElementsUpTo([2, 33, 4], 12)).to.eql([2, 33, 4]);
    });

    it('it should return an empty array when passed in an empty array', function() {
      expect(getElementsUpTo([])).to.eql([]);
    });
  });

  describe('Get Elements After', function() {

    it('it should return an array', function() {
      expect(getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2)).to.be.an('array');
    });

    it('it should return an array with all the elements of the passed in array after the nth', function() {
      expect(getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2)).to.eql(['d', 'e']);
    });

    it('it should return an empty array when passed in a single element array', function() {
      expect(getElementsAfter(['a'])).to.eql([]);
    });

   it('it should return an empty array when passed an n out of range', function() {
      expect(getElementsAfter(['a', 'b', 'c', 'd', 'e'], 20)).to.eql([]);
    });

   it('it should return an empty array when passed in an empty array', function() {
      expect(getElementsAfter([], 2)).to.eql([]);
    });
  });

  describe('Get Nth Element', function() {

    it('it should return the nth element of an array', function() {
     expect(getNthElement([1, 3, 5], 1)).to.eql(3);
    });

    it('it should return undefined if the array is empty', function() {
      expect(getNthElement([])).to.eql(undefined);
    });
  });

  describe('join Arrays', function() {

    it('it should return an array', function() {
      expect(joinArrays([2], [2])).to.be.a('array');
    });

    it('it should return an array with the elements from the first and then the second array', function() {
      expect(joinArrays([1,2,3], [4,5,6])).to.eql([1,2,3,4,5,6]);
    });

    it('it should handle empty arrays in the first position', function() {
      expect(joinArrays([], [1,2,3])).to.eql([1,2,3]);
    });

    it('it should handle empty arrays in the second position', function() {
      expect(joinArrays([2,4,6], [])).to.eql([2,4,6]);
    });
  });

  describe('Get All Elements But Last', function() {

    it('it should return an array', function() {
      expect(getAllElementsButLast([1])).to.be.a('array');
    });

    it('it should return an array with all the elements of the passed in array except for the last', function() {
      expect(getAllElementsButLast([99, 100, 200])).to.eql([99, 100]);
    });

    it('it should return an empty array when passed in a single element array', function() {
      expect(getAllElementsButLast([100])).to.eql([]);
    });

    it('it should return an empty array when passed in an empty array', function() {
      expect(getAllElementsButLast([])).to.eql([]);
    });
  });

  describe('Remove From Front', function() {

    it('it should return an array', function() {
      expect(removeFromFront([1,2,3])).to.be.a('array');
    });

    it('it should remove the first item from the array', function() {
      expect(removeFromFront([1, 12, 13])).to.eql([12, 13]);
    });
  });

  describe('Compute Sum of All Elements', function() {

    it('it should return a number', function() {
      expect(computeSumOfAllElements([1,2])).to.be.a('number');
    });

    it('it should return the summation of numbers up to and including n', function() {
      expect(computeSumOfAllElements([100, 200, 300])).to.eql(600);
    });

    it('it should return zero for an empty array', function() {
      expect(computeSumOfAllElements([])).to.eql(0);
    });
  });

  describe('Join Array of Arrays', function() {

    it('it should return an array', function() {
      expect(joinArrayOfArrays([1,2,3], [1])).to.be.a('array');
    });

    it('it should return an array with the elements from all the nested arrays', function() {
      expect(joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']])).to.eql([1, 4, true, false, 'x', 'y']);
    });

    it('it should handle empty arrays in the first position', function() {
      expect(joinArrayOfArrays([[], [true, false], ['x', 'y']])).to.eql([true, false, 'x', 'y']);
    });

    it('it should handle empty arrays in the second position', function() {
      expect(joinArrayOfArrays([[2,3], [], ['x', 'y']])).to.eql([2, 3, 'x', 'y']);
    });

    it('it should handle empty arrays in the third position', function() {
      expect(joinArrayOfArrays([[1, 4], [true, false], []])).to.eql([1, 4, true, false,]);
    });

    it('it should handle empty arrays in all positions', function() {
      expect(joinArrayOfArrays([],[],[])).to.eql([]);
    });
  });

  describe('Get All Elements But Nth', function() {

    it('it should return a number', function() {
      expect(getAllElementsButNth([1, 2, 3], 2)).to.be.a('array');
    });

    it('it should return an array with all the elements of the passed in array except for the nth', function() {
      expect(getAllElementsButNth(['a', 'b', 'c'], 1)).to.eql(['a', 'c']);
    });

    it('it should return an empty array when passed in a single element array', function() {
      expect(getAllElementsButNth([1], 1)).to.eql([]);
    });

    it('it should return a mirror of the original array when passed an n out of range', function() {
      expect(getAllElementsButNth([1, 3, 4], 5)).to.eql([1, 3, 4]);
    });

    it('it should return an empty array when passed in an empty array', function() {
      expect(getAllElementsButNth([])).to.eql([]);
    });

  });

  describe('Add To Back Of New', function() {

    var arr = [1,2,3]

    it('it should return an array', function() {
      expect(addToBackOfNew([])).to.be.a('array');
    });

    it('it should add an element to the end of an array', function() {
      expect(addToBackOfNew(arr, 123)).to.eql([1, 2, 3, 123]);
    });

    it('it should add an element to the end of an empty array', function() {
      expect(addToBackOfNew([], 12)).to.eql([12]);
    });

    it('it should leave arr unmodified', function() {
      expect(arr).to.eql([1,2,3]);
    });

  });

  describe('Add To Front Of New', function() {

    var array = [2, 4, 6];

    it('it should return an array', function() {
      expect(addToFrontOfNew(array)).to.be.a('array');
    });

    it('it should add an element to the front of an array', function() {
      expect(addToFrontOfNew(array, 1)).to.eql([1, 2, 4, 6]);
    });

    it('it should add an element to the end of an empty array', function() {
      expect(addToFrontOfNew([], 2)).to.eql([2]);
    });

    it('it should leave arr unmodified', function() {
      expect(array).to.eql([2, 4, 6]);
    });
  });

  describe('Remove From Back Of New', function() {

// Tests
// should_return_an_array
// should_return_an_array_with_the_last_element_of_the_passed_in_array_removed
// should_handle_an_empty_array
// should_leave_arr_unmodified
    var removeArr = [10, 20, 30];
    it('it should return an array', function() {
      expect(removeFromBackOfNew(removeArr)).to.be.a('array');
    });

    it('it should return an array with the last element of the passed in array removed', function() {
      expect(removeFromBackOfNew(removeArr)).to.eql([10, 20]);
    });

    it('it should handle an empty array', function() {
      expect(removeFromBackOfNew([])).to.eql([]);
    });

    it('it should leave arr unmodified', function() {
      expect(removeArr).to.eql([10, 20, 30]);
    });
  });

  describe('Join Three Arrays', function() {

    it('it should return an array', function() {
      expect(joinThreeArrays([], [], [])).to.be.a('array');
    });

    it('it should return an array with the elements from the first and then the second array', function() {
      expect(joinThreeArrays([1,2], [3, 4], [])).to.eql([1, 2, 3, 4]);
    });

    it('it should handle empty arrays in the first position', function() {
      expect(joinThreeArrays([], [3, 4], [5, 6])).to.eql([3, 4, 5, 6]);
    });

    it('it should handle empty arrays in the second position', function() {
      expect(joinThreeArrays([1, 2], [], [3, 4])).to.eql([1, 2, 3, 4]);
    });

    it('it should handle empty arrays in the third position', function() {
      expect(joinThreeArrays([1,2], [3, 4], [])).to.eql([1, 2, 3, 4]);
    });

    it('it should handle empty arrays in all positions', function() {
      expect(joinThreeArrays([1,2], [3, 4], [5, 6])).to.eql([1, 2, 3, 4, 5, 6]);
    });
  });



