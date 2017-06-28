TurnNumberSequence = function() {
  this._turnNumber = 1;

  this.getNextTurnNumber = function() {
    return this._turnNumber++;
  }
};



