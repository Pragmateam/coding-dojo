TicketDispenser = function(turnNumberSequence) {
  this.getTurnTicket = function () {

      var newTurnNumber = turnNumberSequence.getNextTurnNumber();
      var newTurnTicket = new TurnTicket(newTurnNumber);

      return newTurnTicket;
  }
};
