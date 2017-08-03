const Resting = {
  turn: (context, warrior) => {
    if (context.isUnderAttack(warrior)) {
      context.state = Walking;
      context.state.turn(context, warrior);
    } else if (warrior.health() == 20) {
      context.state = Walking;
      context.state.turn(context, warrior);
    } else {
      warrior.rest();
    }
  }
};

const Attacking = {
  turn: (context, warrior) => {
    if (warrior.feel().isEmpty()) {
      if (warrior.health() < 20) {
        context.state = Resting;
        context.state.turn(context, warrior);
      } else {
        context.state = Walking;
        context.state.turn(context, warrior);
      }
    } else {
      warrior.attack();
    }
  }
};

const Walking = {
  turn: (context, warrior) => {
    if (!warrior.feel().isEmpty()) {
      context.state = Attacking;
      context.state.turn(context, warrior);
    } else {
      warrior.walk();
    }
  }
};

class Player {
  playTurn(warrior) {
    this.state = this.state || Walking;
    this.state.turn(this, warrior);

    this._health = warrior.health();
  }

  isUnderAttack(warrior) {
    return warrior.health() < this._health;
  }
}
