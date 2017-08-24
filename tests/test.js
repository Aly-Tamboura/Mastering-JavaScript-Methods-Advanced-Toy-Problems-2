
  var assert = chai.assert;
  var expect = chai.expect;
  var should = chai.should;
  var not = chai.not;
  var sinon = sinon;


  describe('All Anagrams', function() {

    it('it should return an array', function() {
       expect(allAnagrams('abc')).to.be.a('array');
    });

    it('it should return all Anagrams of a string', function(){
      expect(allAnagrams('opy')).to.eql([ 'opy', 'oyp', 'poy', 'pyo', 'yop', 'ypo' ]);
    });

    it('it should return an array with an empty string when the input is an empty string', function(){
      expect(allAnagrams('')).to.eql(['']);
    });

    it('it should return an empty array when the input is a number', function(){
      expect(allAnagrams(123)).to.eql([]);
    });
  });

  describe('Balanced Parens', function() {
    it('it should return a boolean', function() {
       expect(balancedParens('()')).to.be.a('boolean');
    });

    it('it should return the true of for a set of balanced parens', function() {
      expect(balancedParens('[](){}')).to.eql(true);
    });

    it('it should return the false of for a set of unbalanced parens', function() {
      expect(balancedParens('[(]{)}')).to.eql(false);
    });
  });

  describe('Character Frequency', function() {
    it('it should return an array', function() {
      expect(characterFrequency('alyissocool')).to.a('array');
    });

    it('it should be sorted in descending order by frequency', function() {
      expect(characterFrequency('mississippi')).to.eql([[ 'i', 4 ], [ 's', 4 ], [ 'p', 2 ], [ 'm', 1 ]]);
    });

    it('it should be sorted by ascending order by character', function() {
      expect(characterFrequency('miaaiaaippi')).to.eql([[ 'a', 4 ], [ 'i', 4 ], [ 'p', 2 ], [ 'm', 1 ]]);
    });
  });

  describe('Make Change', function() {
    it('it should return a number', function() {
      expect(makeChange(35)).to.be.a('number');
    });

    it('it should return one if the number one is the input', function() {
      expect(makeChange(1)).to.eql(1);
    });

    it('it should return the number of change available', function() {
      expect(makeChange(9)).to.eql(8);
    });
  });

  describe('Bubble Sort', function() {
    it('it should not use the native .sort() method', function() {
      expect(bubbleSort.toString()).to.not.include('.sort');
    });

    it('it should return an array', function() {
      expect(bubbleSort([1, 2, 3])).to.be.a('array');
    });

    it('it should return a sorted array', function() {
      expect(bubbleSort([12, 4, 60, 100, 1])).to.eql([ 1, 4, 12, 60, 100 ]);
    });
  });

