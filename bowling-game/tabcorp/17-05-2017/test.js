const assert = require('assert');

function isStrike (pins) {
  return pins === 10;
}

class BowlingGame {
  constructor() {
    this.total = 0;
    this.wasStrike = false;
    this.remainingRolls = 2;
  }

  roll(pins) {
    this.remainingRolls -= 1;

    if (this.wasStrike) {
      this.total += pins * 2;
    } else {
      this.total += pins;
    }

    if (isStrike(pins)) {
      this.wasStrike = true;
      this.remainingRolls -= 1;
    } else {
      if (this.remainingRolls === 0) {
        this.wasStrike = false;
      }
    }

    if (this.remainingRolls === 0) {
      this.remainingRolls = 2;
    }
  }

  score() {
    return this.total;
  }
}

describe('Bowling Game', () => {
  let bowlingGame = null;
  beforeEach(() => {
    bowlingGame = new BowlingGame();
  });

  it('scores 0 when no pins are knocked down', () => {
    bowlingGame.roll(0);
    assert.equal(bowlingGame.score(), 0);
  });

  it('scores 1 when 1 pin is knocked down', () => {
    bowlingGame.roll(1);
    assert.equal(bowlingGame.score(), 1);
  });

  it('scores 2 when roll twice and 1 pin is knocked down in each roll', () => {
    bowlingGame.roll(1);
    bowlingGame.roll(1);
    assert.equal(bowlingGame.score(), 2);
  });

  it('scores without bonuses, no strikes and no spares', () => {
    for(i=1; i <= 20; i++) {
      bowlingGame.roll(1);
    }
    assert.equal(bowlingGame.score(), 20);
  });

  it('scores with bonus with strike', () => {
    bowlingGame.roll(10);
    bowlingGame.roll(1);
    bowlingGame.roll(0);
    assert.equal(bowlingGame.score(), 12);

    bowlingGame.roll(10);
    bowlingGame.roll(2);
    bowlingGame.roll(0);
    assert.equal(bowlingGame.score(), 26);

    bowlingGame.roll(10);
    bowlingGame.roll(2);
    bowlingGame.roll(1);
    assert.equal(bowlingGame.score(), 42);
  });

  it('scores with bonus with spare', () => {
    bowlingGame.roll(5);
    bowlingGame.roll(5);

    bowlingGame.roll(6);
    bowlingGame.roll(1);
    assert.equal(bowlingGame.score(), 23);
  });
});
