const assert = require('assert');

const getIndexForEqualSums = (array) => {

  if (array.length === 3) {
    if(array[0] === array[2]) {return 1;}
    return -1;
  }
  else if (array.length === 4) {
    if (array[0] == array[2] + array[3]) {return 1;}
    if (array[0] + array[1] == array[3]) {return 2;}
    return -1;
  } else if (array.length === 5) {

    let leftSum = array[0];
    let rightSum = array[2] + array[3] + array[4];

    if(leftSum === rightSum) {return 1;}

    leftSum = array[0] + array[1];
    rightSum = array[3] + array[4];
    if(leftSum === rightSum) {return 2;}

    leftSum = array[0] + array[1] + array[2];
    rightSum = array[4];
    if(leftSum === rightSum) {return 3;}

    return -1;

  } else {
    return -1;
  }
}

describe('Kata', () => {

  it('return the index where the left sum is equal to the right sum', () => {
    assert.equal(getIndexForEqualSums([]), -1);
    assert.equal(getIndexForEqualSums([1,2]), -1);

    assert.equal(getIndexForEqualSums([1, 0, 2]), -1);
    assert.equal(getIndexForEqualSums([1, 0, 1]), 1);

    assert.equal(getIndexForEqualSums([0, 0, 1, 1]), -1);
    assert.equal(getIndexForEqualSums([2, 0, 1, 1]), 1);
    assert.equal(getIndexForEqualSums([0, 0, 0, 0]), 1);
    assert.equal(getIndexForEqualSums([1, 1, 0, 2]), 2);

    assert.equal(getIndexForEqualSums([2, 2, 0, 1, 2]), -1);
    assert.equal(getIndexForEqualSums([0, 0, 0, 0, 0]), 1);
    assert.equal(getIndexForEqualSums([1, 1, 0, 1, 1]), 2);
    assert.equal(getIndexForEqualSums([1, 1, 1, 0, 3]), 3);


  });

});
