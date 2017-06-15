describe('Tyre Pressure Monitoring System', function () {

	describe('Alarm', function () {

		var createSensorWithPressure = function (pressure){
			return {
				popNextPressurePsiValue: function () {
					return pressure;
				}
			}
		}

		it('sets the alarm on if the pressure is below the minimum allowed pressure', function () {
			var min = 10,
					max = 20

			var target = new Alarm(createSensorWithPressure(9), min, max);
			target.check();

			expect(target.alarmOn()).toEqual(true);

		});

		it('sets the alarm on if the pressure is above the maximum allowed pressure', function () {
			var min = 10,
					max = 20

			var target = new Alarm(createSensorWithPressure(21), min, max);
			target.check();

			expect(target.alarmOn()).toEqual(true);

		});

		it('keep the alarm off when the pressure is within the minimum & maximum allowed pressure', function () {
			var min = 10,
					max = 20

			var target = new Alarm(createSensorWithPressure(15), min, max);
			target.check();

			expect(target.alarmOn()).toEqual(false);

		});

		it('keeps the alarm off if the pressure is equal to the minimum allowed', function () {
			var min = 10,
					max = 20

			var target = new Alarm(createSensorWithPressure(10), min, max);
			target.check();

			expect(target.alarmOn()).toEqual(false);

		});

		it('keeps the alarm off if the pressure is equal to the maximum allowed', function () {
			var min = 10,
					max = 20

			var target = new Alarm(createSensorWithPressure(20), min, max);
			target.check();

			expect(target.alarmOn()).toEqual(false);

		});

	});

});
