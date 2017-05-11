const five = require("johnny-five");
const mocha = require('mocha');
let leds = [];

const turnOffLeds = () => {
  leds.forEach((led) => led.off());
};

const setGreen = () => {
  const ledGreen = leds[1];
  turnOffLeds()
  ledGreen.on();
};

const setRed = () => {
  const ledRed = leds[0];
  turnOffLeds();
  ledRed.on();
};

module.exports = MyReporter;
function MyReporter(runner) {
  mocha.reporters.Base.call(this, runner);
  let hasFailures = false;

  runner.on('fail', function() {
    hasFailures = true;
  });

  runner.on('end', function(){
    leds = five.Leds([13, 10]);
    if (hasFailures)
      setRed()
    else
      setGreen()
  });
}
