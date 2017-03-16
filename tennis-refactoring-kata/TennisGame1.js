var TennisGame1 = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

TennisGame1.prototype.getScore = function() {
    var score = "";
    var tempScore = 0;
    if (this.m_score1 === this.m_score2) {
        score = getDescriptionForEqualScore(this.m_score1);
    }
    else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        score = getWinnerOrAdvantage(this.m_score1, this.m_score2);
    }
    else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.m_score1;
            else {
                score += "-";
                tempScore = this.m_score2;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
};

function getDescriptionForEqualScore(scoreParameter) {
  const scoreDescriptions = {
    0: 'Love-All',
    1: 'Fifteen-All',
    2: 'Thirty-All'
  }
  return scoreDescriptions[scoreParameter] || 'Deuce'
}

function getWinnerOrAdvantage(scorePlayer1, scorePlayer2) {
  const leaderPlayer = getLeaderPlayer(scorePlayer1, scorePlayer2);

  if (isThereAWinner(scorePlayer1, scorePlayer2))
    return "Win for " + leaderPlayer;

  return "Advantage " + leaderPlayer;
}

function isThereAWinner(scorePlayer1, scorePlayer2) {
  return Math.abs(scorePlayer1 - scorePlayer2) >= 2;
}

function getLeaderPlayer(scorePlayer1, scorePlayer2) {
  if (scorePlayer1 > scorePlayer2)
    return 'player1';

  return 'player2';
}


if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
