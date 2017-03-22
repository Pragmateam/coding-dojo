// NEW GAME
// P1 LEADING
// P2 LEADING
// DEUCE
// P1 ADV
// P2 ADV
// P1 WIN (END)
// P2 WIN (END)

// const NewGameState = {
//   wonPoint: (context, playerName) => {
//     context.state = Player1Leading;
//   },
//   getScore: () => {}
// };
//
// const Tennis = (player1, player2) {
//   const state = NewGameState;
//
//   return {
//     wonPoint: () => state.wonPoint(),
//     getScore: () => state.getScore()
//   };
// }


var TennisGame1 = function(player1Name, player2Name) {
    this.scores = {};
    this.scores[player1Name] = 0;
    this.scores[player2Name] = 0;
    this.playName1 = player1Name;
    this.playName2 = player2Name;
    this.score = 'Love-All';
    // this.state =
};

TennisGame1.prototype.wonPoint = function(playerName) {
    this.scores[playerName] = this.scores[playerName] + 1;
    this.score = computeScore(this.scores);
};

TennisGame1.prototype.getScore = function() {
    return this.score;
};

function computeScore(scores) {
  var score = '';
  const [scorePlayer1, scorePlayer2] = Object.values(scores);
  if (scorePlayer1 === scorePlayer2) {
      score = getDescriptionForEqualScore(scorePlayer1);
  }
  else if (scorePlayer1 >= 4 || scorePlayer2 >= 4) {
      score = getWinnerOrAdvantage(scores);
  }
  else {
    score = getPointScore(scores);
  }
  return score;
}

function getDescriptionForEqualScore(scoreParameter) {
  const scoreDescriptions = {
    0: 'Love-All',
    1: 'Fifteen-All',
    2: 'Thirty-All'
  }
  return scoreDescriptions[scoreParameter] || 'Deuce'
}

function getWinnerOrAdvantage(scores) {
  const leaderPlayer = getLeaderPlayer(scores);

  if (isThereAWinner(scores))
    return "Win for " + leaderPlayer;
  return "Advantage " + leaderPlayer;
}

function isThereAWinner(scores) {
  const [scorePlayer1, scorePlayer2] = Object.values(scores);
  return Math.abs(scorePlayer1 - scorePlayer2) >= 2;
}

function getLeaderPlayer(scores) {
  const [player1Name, player2Name] = Object.keys(scores);
  if (scores[player1Name] > scores[player2Name])
    return player1Name;
  return player2Name;
}

function getPointScore(scores){
  const pointDescription =  {
    0: 'Love',
    1: 'Fifteen',
    2: 'Thirty',
    3: 'Forty'
  }
  const [scorePlayer1, scorePlayer2] = Object.values(scores);
  return pointDescription[scorePlayer1]+ '-'+ pointDescription[scorePlayer2];
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
