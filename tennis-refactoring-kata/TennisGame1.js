const SCORE_TO_DESCRIPTION = {
  0: 'Love',
  1: 'Fifteen',
  2: 'Thirty',
  3: 'Forty'
};

const NewGame = {
  p1Scores (context) {
    context.p1Score++;
    context.state = P1Leading;
  },
  p2Scores (context) {
    context.p2Score++;
    context.state = P2Leading;
  },
  getScore (context) {
    return 'Love-All';
  }
};

const P1Leading = {
  p1Scores (context) {
    context.p1Score++;
    if (context.p1Score === 4) context.state = P1Wins;
  },
  p2Scores (context) {
    context.p2Score++;
    if (context.p1Score === context.p2Score) {
      context.state = {
        1: FifteenAll,
        2: ThirtyAll,
        3: Deuce
      }[context.p2Score];
    }
  },
  getScore (context) {
    return `${SCORE_TO_DESCRIPTION[context.p1Score]}-${SCORE_TO_DESCRIPTION[context.p2Score]}`
  }
};

const P2Leading = {
  p1Scores (context) {
    context.p1Score++;

    if (context.p1Score === context.p2Score) {
      context.state = {
        1: FifteenAll,
        2: ThirtyAll,
        3: Deuce
      }[context.p2Score];[context.p1Score];
    }
  },
  p2Scores (context) {
    context.p2Score++;
    if (context.p2Score === 4) context.state = P2Wins;
  },
  getScore (context) {
    const map = {
      0: 'Love',
      1: 'Fifteen',
      2: 'Thirty',
      3: 'Forty'
    };
    return `${map[context.p1Score]}-${map[context.p2Score]}`
  }
};

const FifteenAll = {
  p1Scores (context) {
    context.p1Score++;
    context.state = P1Leading;
  },
  p2Scores (context) {
    context.p2Score++;
    context.state = P2Leading;
  },
  getScore (context) {
    return 'Fifteen-All'
  }
};

const ThirtyAll = {
  p1Scores (context) {
    context.p1Score++;
    context.state = P1Leading;
  },
  p2Scores (context) {
    context.p2Score++;
    context.state = P2Leading;
  },
  getScore (context) {
    return 'Thirty-All'
  }
};

const Deuce = {
  p1Scores (context) {
    context.p1Score++;
    context.state = P1Advantage;
  },
  p2Scores (context) {
    context.p2Score++;
    context.state = P2Advantage;
  },
  getScore (context) {
    return 'Deuce'
  }
};

const P1Advantage = {
  p1Scores (context) {
    context.p1Score++;
    context.state = P1Wins;
  },
  p2Scores (context) {
    context.p2Score++;
    context.state = Deuce;
  },
  getScore (context) {
    return `Advantage ${context.p1Name}`
  }
};

const P2Advantage = {
  p1Scores (context) {
    context.p1Score++;
    context.state = Deuce;
  },
  p2Scores (context) {
    context.p2Score++;
    context.state = P2Wins;
  },
  getScore (context) {
    return `Advantage ${context.p2Name}`
  }
};

const P1Wins = {
  p1Scores (context) {},
  p2Scores (context) {},
  getScore (context) {
    return `Win for ${context.p1Name}`
  }
};

const P2Wins = {
  p1Scores (context) {},
  p2Scores (context) {},
  getScore (context) {
    return `Win for ${context.p2Name}`
  }
};

var TennisGame1 = function(player1, player2) {
  const self = {
    state: NewGame,
    p1Score: 0,
    p2Score: 0,
    p1Name: player1,
    p2Name: player2
  };

  return {
    wonPoint: (playerName) => {
      if (playerName === player1) self.state.p1Scores(self);
      else self.state.p2Scores(self);
    },
    getScore: () => self.state.getScore(self)
  };
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
