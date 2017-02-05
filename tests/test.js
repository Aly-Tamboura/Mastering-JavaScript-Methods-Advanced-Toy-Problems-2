
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
    it('it should return a boolean', function() {
      expect(addToBack(12)).to.be.a('boolean');
    });

    it('it should return the length of three words', function() {
      expect(addToBack(100)).to.eql(false);
    });
  });

  describe('Add to Front', function() {
    it('it should return a boolean', function() {
      expect(addToFront(true, false)).to.be.a('boolean');
    });

    it('it should not use the or || operator', function() {
      expect(addToFront.toString()).to.not.include('||');
    });

    it('it should return true if the first value is true', function() {
      expect(addToFront(true, false)).to.eql(true);
    });

    it('it should return true if the second value is true', function() {
      expect(addToFront(false, true)).to.eql(true);
    });

    it('it should return true both values are true', function() {
      expect(or(true, true)).to.eql(true);
    });
  });

  describe('Remove From Back', function() {

    it('it should return a string', function() {
      expect(removeFromBack('Phil', 25)).to.be.a('string');
    });

    it('it should welcome a 21 year old', function() {
      expect(removeFromBack('Ted', 21)).to.eql("Welcome, Ted!");
    });

    it('it should bounce someone under 21', function() {
      expect(removeFromBack('Kyle', 12)).to.eql("Go home, Kyle!");
    });

    it('it should welcome someone over 21', function() {
      expect(removeFromBack('Granny', 118)).to.eql("Welcome, Granny!");
    });
  });

  describe('Get All Elements But First', function() {

    it('it should return a number', function() {
      expect(getAllElementsButFirst('one', 'seven', 'fifteen')).to.be.a('number');
    });

    it('it should return the maximum length of three words', function() {
      expect(getAllElementsButFirst('one', 'seven', 'fifteen')).to.eql(7);
    });

    it('it should return the maximum length of three words when there is a tie', function() {
      expect(getAllElementsButFirst('one', 'two', 'six')).to.eql(3);
    });

  });

  describe('Get Elements Up To', function() {

    it('it should return a number', function() {
      expect(getElementsUpTo('one', 'seven', 'fifteen')).to.be.a('number');
    });

    it('it should return the minimum length of three words', function() {
      expect(getElementsUpTo('one', 'seven', 'fifteen')).to.eql(3);
    });

    it('it should return the minimum length of three words when there is a tie', function() {
      expect(getElementsUpTo('four', 'five', 'nine')).to.eql(4);
    });

  });

  describe('Get Elements After', function() {

    it('it should return a string', function() {
      expect(getElementsAfter('how', 'is', 'this')).to.be.a('string');
    });

    it('it should return the longest of three words', function() {
      expect(getElementsAfter('hi', 'how', 'are', 'your', 'brothers')).to.eql('brothers');
    });

    it('it should return the first occurrence of a longest word when there is a tie', function() {
      expect(getElementsAfter('one', 'two', 'three', 'four', 'seven')).to.eql('three');
    });
  });

  describe('Get Nth Element', function() {

    it('it should return a string', function() {
      expect(getNthElement(9)).to.be.a('string');
    });

    it('it should return the shortest of three words', function() {
      expect(getNthElement('hi', 'how', 'are', 'your', 'brothers')).to.eql('hi');
    });

    it('it should return the first occurence of a shortest word when there is a tie', function() {
      expect(getNthElement('one', 'two', 'three', 'four')).to.eql('one');
    });
  });

  describe('join Arrays', function() {

    it('it should return a boolean', function() {
      expect(joinArrays('Lacey', 'muddywaters')).to.be.a('boolean');
    });

    it('it should return true if the name is longer than 3 characters and the password is at least 8 characters', function() {
      expect(joinArrays('Butch', 'happyforcoding')).to.eql(true);
    });

    it('it should return false if the name is less than 3 characters', function() {
      expect(joinArrays('Jo', 'happyforcoding')).to.eql(false);
    });

    it('it should return false if the password is not at least 8 characters', function() {
      expect(joinArrays('Jonet', 'pass')).to.eql(false);
    });
  });

  describe('Get All Elements But Last', function() {

    it('it should return a string', function() {
      expect(getAllElementsButLast(9)).to.be.a('string');
    });

    it('it should return A for scores between 90 and 100', function() {
      expect(getAllElementsButLast(99)).to.eql('A');
    });

    it('it should return B for scores between 80 and 89', function() {
      expect(getAllElementsButLast(85)).to.eql('B');
    });

    it('it should return C for scores between 70 and 79', function() {
      expect(getAllElementsButLast(75)).to.eql('C');
    });

    it('it should return D for scores between 60 and 69', function() {
      expect(getAllElementsButLast(61)).to.eql('D');
    });

    it('it should return F for 0', function() {
      expect(getAllElementsButLast(0)).to.eql('F');
    });

    it('it should return INVALID SCORE for scores less than 0', function() {
      expect(getAllElementsButLast(-1)).to.eql('INVALID SCORE');
    });

    it('it should return INVALID SCORE for scores greater than 100', function() {
      expect(getAllElementsButLast(110)).to.eql('INVALID SCORE');
    });
  });

  describe('Remove From Front', function() {

    it('it should return a string', function() {
      expect(removeFromFront(9)).to.be.a('string');
    });

    it('it should return A with a plus for scores between 98 and 100', function() {
      expect(removeFromFront(99)).to.eql('A+');
    });

    it('it should return A for scores between 93 and 97', function() {
      expect(removeFromFront(95)).to.eql('A');
    });

    it('it should return A with a minus for scores between 90 and 92', function() {
      expect(removeFromFront(91)).to.eql('A-');
    });
  });

  describe('Compute Sum of All Elements', function() {

    it('it should return a number', function() {
      expect(computeSumOfAllElements(9)).to.be.a('number');
    });

    it('it should return the summation of numbers up to and including n', function() {
      expect(computeSumOfAllElements(6)).to.eql(21);
    });

    it('it should return the summation of 0', function() {
      expect(computeSumOfAllElements(0)).to.eql(0);
    });
  });

  describe('Join Array of Arrays', function() {

    it('it should return a string', function() {
      expect(joinArrayOfArrays('chiwara', 9)).to.be.a('string');
    });

    it('it should repeat a string a given number of time', function() {
      expect(joinArrayOfArrays('hi', 6)).to.eql('hihihihihihi');
    });

    it('it should repeat a string 0 number of times returning an empty string', function() {
      expect(joinArrayOfArrays('jack', 0)).to.eql('');
    });
  });

  describe('Get All Elements But Nth', function() {

    it('it should return a number', function() {
      expect(getAllElementsButNth(9)).to.be.a('number');
    });

    it('it should return the factorial of n', function() {
      expect(getAllElementsButNth(4)).to.eql(24);
    });

    it('it should return the factorial of 1', function() {
      expect(getAllElementsButNth(1)).to.eql(1);
    });
  });

  describe('Add To Back Of New', function() {

    it('it should return a number', function() {
      expect(addToBackOfNew(10, 100)).to.be.a('number');
    });

    it('it should sum between the first and second number exclusive', function() {
      expect(addToBackOfNew(2, 5)).to.eql(9);
    });

    it('it should sum between the first and second number exclusive with negatives', function() {
      expect(addToBackOfNew(-12, -2)).to.eql(-75);
    });

    it('it should return 0 if the second number is less than the first', function() {
      expect(addToBackOfNew(-12, -20)).to.eql(0);
    });
    it('it should return 0 if the 2 numbers are equal', function() {
      expect(addToBackOfNew(20, 20)).to.eql(0);
    });
  });

  describe('Add To Front Of New', function() {

    it('it should return a number', function() {
      expect(addToFrontOfNew(2, 10)).to.be.a('number');
    });

    it('it should joinArrayOfArrays between the first and second number exclusive', function() {
      expect(addToFrontOfNew(2, 5)).to.eql(24);
    });
  });

  describe('Remove From Back Of New', function() {

    it('it should return a boolean', function() {
      expect(removeFromBackOfNew(10)).to.be.a('boolean');
    });

    it('it should not use the modulo operator', function() {
      expect(removeFromBackOfNew.toString()).to.not.include('%');
    });

    it('it should return true when a number is even', function() {
      expect(removeFromBackOfNew(10)).to.eql(true);
    });
  });

  describe('Compute Sum Of All Elements', function() {

    it('it should return a boolean', function() {
      expect(computeSumOfAllElements(10)).to.be.a('boolean');
    });

    it('it should not use the modulo operator', function() {
      expect(computeSumOfAllElements.toString()).to.not.include('%');
    });

    it('it should `return true when a number is odd', function() {
      expect(computeSumOfAllElements(11)).to.eql(true);
    });

    it('it should return true when a negative number is odd', function() {
      expect(computeSumOfAllElements(-11)).to.eql(true);
    });

    it('it should return false when a number is even', function() {
      expect(computeSumOfAllElements(10)).to.eql(false);
    });

    it('it should return false when a negative number is even', function() {
      expect(computeSumOfAllElements(-10)).to.eql(false);
    });

    it('it should return false when a passed 0', function() {
      expect(computeSumOfAllElements(0)).to.eql(false);
    });
  });

  describe('Join Three Arrays', function() {

    it('it should return a number', function() {
      expect(joinThreeArrays(10)).to.be.a('number');
    });

    it('it should joinThreeArrays two numbers', function() {
      expect(joinThreeArrays(2,5)).to.eql(10);
    });

    it('it should not use the joinThreeArrays operator', function() {
      expect(joinThreeArrays.toString()).to.not.include('*');
    });

    it('it should_joinThreeArrays_negative_numbers', function() {
      expect(joinThreeArrays(-2, -2)).to.eql(4);
    });
  });



