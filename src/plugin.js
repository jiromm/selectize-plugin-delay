Selectize.define('delayed_select_on_enter', function (options) {
	var self = this;

	this.load = (function(fn) {
		var original = self.load;

		self.enterPressed = false;

		self.on('load', function (result) {
			if (!self.enterPressed) return;

			var code = self.$control_input.val();

			for (var i in result) {
				if (!result.hasOwnProperty(i)) continue;

				if (result[i].code == code) {
					self.addItem(result[i].id);
				}
			}
		});

		return function (e) {
			return original.apply(this, arguments);
		};
	})();

	this.onKeyDown = (function (e) {
		var original = self.onKeyDown;

		return function (e) {
			if (e.keyCode === 13 && this.$control_input.val() !== '') {
				this.enterPressed = true;
			}

			return original.apply(this, arguments);
		};
	})();

	this.addItem = (function (e) {
		var original = self.addItem;

		return function (e) {
			this.enterPressed = false;

			return original.apply(this, arguments);
		};
	})();
});
