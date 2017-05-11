const five = require("johnny-five");

before((done) => {
  if (global.board.isReady)
    return done();
  global.board.on('ready', done);
});
