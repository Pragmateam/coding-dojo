const Resting = {
  turn: (context, warrior) => {
    if (context.isUnderAttack(warrior) && warrior.health() < 10) {
      context.state = WalkingBackward;
      context.state.turn(context, warrior);
    } else if (context.isUnderAttack(warrior) || warrior.health() == 20) {
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
    const inSight = warrior.look().find(view => !view.isEmpty());

    if (inSight && inSight.isEnemy()) {
      context.state = Shooting;
      context.state.turn(context, warrior);
    } else if (warrior.feel().isCaptive()) {
      context.state = Rescuing;
      context.state.turn(context, warrior);
    } else if (warrior.feel().isWall()) {
      context.state = Pivoting;
      context.state.turn(context, warrior);
    } else if (!warrior.feel().isEmpty()) {
      context.state = Attacking;
      context.state.turn(context, warrior);
    } else {
      warrior.walk();
    }
  }
};

const Starting = {
  turn: (context, warrior) => {
    const inSight = warrior.look('backward').find(view => !view.isEmpty());
    if (inSight && inSight.isEnemy()) {
      context.state = Walking;
    } else {
      context.state = WalkingBackward;
    }
    context.state.turn(context, warrior);
  }
};

const WalkingBackward = {
  turn: (context, warrior) => {
    if (warrior.health() < 20 && !context.isUnderAttack(warrior)) {
      context.state = Resting;
      context.state.turn(context, warrior);
    } else if (warrior.feel('backward').isCaptive()) {
      context.state = RescuingBackward;
      context.state.turn(context, warrior);
    } else if (!warrior.feel('backward').isEmpty()) {
      context.state = Walking;
      context.state.turn(context, warrior);
    } else {
      warrior.walk('backward');
    }
  }
};

const Rescuing = {
  turn: (context, warrior) => {
    if (!warrior.feel().isCaptive()) {
      context.state = Walking;
      context.state.turn(context, warrior);
    } else {
      warrior.rescue();
    }
  }
};

const Pivoting = {
  turn: (context, warrior) => {
    warrior.pivot();
    context.state = Walking;
  }
};

const Shooting = {
  turn: (context, warrior) => {
    const inSight = warrior.look().find(view => !view.isEmpty());
    if (!inSight || !inSight.isEnemy()) {
      context.state = Walking;
      context.state.turn(context, warrior);
    } else {
      warrior.shoot();
    }
  }
};

const RescuingBackward = {
  turn: (context, warrior) => {
    if (!warrior.feel('backward').isCaptive()) {
      context.state = WalkingBackward;
      context.state.turn(context, warrior);
    } else {
      warrior.rescue('backward');
    }
  }
};

class Player {
  playTurn(warrior) {
    this.state = this.state || Starting;
    this.state.turn(this, warrior);

    this._health = warrior.health();
  }

  isUnderAttack(warrior) {
    return warrior.health() < this._health;
  }
}
