const assert = require('assert');

const flipThesePancakes = (pancakes) => {
  if (!pancakes.includes('-'))
    return 0;

  if (pancakes[0] === '-'){
    return 1;
  } else if(pancakes[pancakes.length-1] === '-' || pancakes[(pancakes.length - 1) / 2] === '-') {
    return 2;
  }
}

describe('Kata', () => {

  // Pancakes - Number of times to flip
  // - -> 1
  // -+ -> 1
  // +- -> 2
  // +++ -> 0
  // --+- -> 3
  // No pancakes -> 0

  it('returns 0 when no flip is needed', () => {

    const pancakes = ['+', '+', '+']
    const numberOfFlips = flipThesePancakes(pancakes);

    assert.equal(0, numberOfFlips);
  });

  it('returns 1 when the first pancake needs to be flipped', () => {

    const pancakes = ['-']
    const numberOfFlips = flipThesePancakes(pancakes);

    assert.equal(1, numberOfFlips);
  });

  it('returns 2 when the last pancake needs to be flipped', () => {

    let pancakes = ['+','-']
    let numberOfFlips = flipThesePancakes(pancakes);

    assert.equal(2, numberOfFlips);

    pancakes = ['+','+','-']
    numberOfFlips = flipThesePancakes(pancakes);
    assert.equal(2, numberOfFlips);
  });

  it('returns 2 when the middle pancake needs to be flipped', () => {
    let pancakes = ['+','-','+']
    let numberOfFlips = flipThesePancakes(pancakes);

    assert.equal(2, numberOfFlips);

    pancakes = ['+','+','-','+', '+']
    numberOfFlips = flipThesePancakes(pancakes);

    assert.equal(2, numberOfFlips);
  });

});
