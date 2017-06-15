
Alarm = function(sensor, min, max) {

	this._lowPressureThreshold = min;
	this._highPressureThreshold = max;
	this._sensor = sensor;
	this._alarmOn = false;
};

Alarm.prototype = {

	check: function () {

		var psiPressureValue = this._sensor.popNextPressurePsiValue();

		if (psiPressureValue < this._lowPressureThreshold || this._highPressureThreshold < psiPressureValue)
		{
			this._alarmOn = true;
		}
	},

	alarmOn: function () {
		 return this._alarmOn;
	}

};
