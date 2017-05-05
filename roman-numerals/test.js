const assert = require('assert');

function validate(number) {
  if (number > 3000)
    throw new Error('number too big');
  else if(number < 1)
    throw new Error('number too low');
}

function convertToRoman(number) {
  validate(number);
  const mapping = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  };

  if (mapping[number]) return mapping[number];
}

describe('Roman Numerals', () => {

  it('should return error if entry number is equal or less than 0', () => {
    assert.throws(()=>{convertToRoman(0)}, /number too low/);
    assert.throws(()=>{convertToRoman(-1)}, /number too low/);
  });

  it('should return error if entry number is bigger than 3000', () => {
    assert.throws(()=>{convertToRoman(3001)}, /number too big/);
    assert.throws(()=>{convertToRoman(3002)}, /number too big/);
  });

  it('should not error for numbers between 0 and 3000', () => {
    assert.doesNotThrow(() => {convertToRoman(2)}, /number too low/);
    assert.doesNotThrow(() => {convertToRoman(2)}, /number too big/);
    assert.doesNotThrow(() => {convertToRoman(1)}, /number too low/);
    assert.doesNotThrow(() => {convertToRoman(3000)}, /number too big/);
  });

  it('should return I for 1', () => {
    assert.equal(convertToRoman(1), 'I');
  });

  it('should return V for 5', () => {
    assert.equal(convertToRoman(5), 'V');
  });

  it('should return X for 10', () => {
    assert.equal(convertToRoman(10), 'X');
  });

  it('should return L for 50', () => {
    assert.equal(convertToRoman(50), 'L');
  });

  it('should return C for 100', () => {
    assert.equal(convertToRoman(100), 'C');
  });

  it('should return D for 500', () => {
    assert.equal(convertToRoman(500), 'D');
  });

  it('should return M for 1000', () => {
    assert.equal(convertToRoman(1000), 'M');
  });

});
