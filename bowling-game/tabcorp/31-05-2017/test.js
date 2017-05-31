const assert = require('assert');

describe('Bowling Game', () => {

  const createGame = () => {
    let rollsResult = []
    return {
      roll: function(pinsTakenDown) {
        rollsResult.push(pinsTakenDown)
      },
      score: function() {
        const pinsTakenDownToRolls = function(pinsTakenDown) {
          const roll = {
            pinsTakenDown: pinsTakenDown,
            strike: false
          }
          if (pinsTakenDown === 10) {
            roll.strike = true
          }
          return roll;
        }
        const toSumOfPinsTakenDown = (previousSum, currentRoll) => {
          return previousSum + currentRoll.pinsTakenDown;
        }

        const rolls = rollsResult.map(pinsTakenDownToRolls)
        return rolls.reduce(toSumOfPinsTakenDown, 0);
      }
    }
  };

  it('if there are no roll the score is zero', () => {
    const game = createGame()
    assert.equal(game.score(), 0);
  });

  it('returns the sum of the pins without strikes and spares', () => {
      const game = createGame()
      game.roll(4)
      game.roll(5)
      game.roll(4)
      assert.equal(game.score(), 13);
  });

  // it('spare adds the next result to the previous one', () => {
  //     const game = createGame()
  //     game.roll(4) // +4
  //     game.roll(6) // +10 + spare 4 from next = 14
  //     game.roll(4) // +4 = 18
  //     assert.equal(game.score(), 18);
  // });

});
