describe('Turn Ticket Dispenser', function () {

  describe('TurnTicketDispenser', function () {

    it('dispenses tickets having one ticket dispenser', function () {
      var numberSequence = new TurnNumberSequence();
      var ticketDispenser = new TicketDispenser(numberSequence);
      var ticket1 = ticketDispenser.getTurnTicket();
      var ticket2 = ticketDispenser.getTurnTicket();

      expect(ticket2.turnNumber()).toEqual((ticket1.turnNumber() + 1));
    });

    it('Dispenses tickets having two ticket dispensers', function () {
      var numberSequence = new TurnNumberSequence();
      var ticketDispenserA = new TicketDispenser(numberSequence);
      var ticketDispenserB = new TicketDispenser(numberSequence);

      expect(ticketDispenserA.getTurnTicket()).toEqual(new TurnTicket(1));
      expect(ticketDispenserB.getTurnTicket()).toEqual(new TurnTicket(2));
      expect(ticketDispenserA.getTurnTicket()).toEqual(new TurnTicket(3));
    });

     it('Dispenses tickets having two ticket dispensers', function () {
      var numberSequence1 = new TurnNumberSequence();
      var numberSequence2 = new TurnNumberSequence();
      var ticketDispenserA = new TicketDispenser(numberSequence1);
      var ticketDispenserB = new TicketDispenser(numberSequence2);

      expect(ticketDispenserA.getTurnTicket()).toEqual(new TurnTicket(1));
      expect(ticketDispenserB.getTurnTicket()).toEqual(new TurnTicket(1));
    });
  });
});
