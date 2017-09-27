Selectize.define('delayed_select', function (options) {
	var self = this;
	var defaults = {
		filter: false,
		selectSingleMatch: true
	};

	self.__ds = {
		enterPressed: false,
		options: $.extend({}, defaults, options || {})
	};


	this.load = (function(fn) {
		var original = self.load;

		self.__ds.enterPressed = false;

		self.on('load', function (result) {
			if (!self.__ds.enterPressed) return;

			if (self.__ds.options.selectSingleMatch && typeof result !== 'undefined' && result.length == 1) {
				self.addItem(result.shift().id);
				return;
			}

			var code = self.$control_input.val();

			for (var i in result) {
				if (!result.hasOwnProperty(i)) continue;

				if (self.__ds.options.filter(code, result[i])) {
					self.addItem(result[i].id);
					return;
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
				this.__ds.enterPressed = true;
			}

			return original.apply(this, arguments);
		};
	})();

	this.addItem = (function (e) {
		var original = self.addItem;

		return function (e) {
			this.__ds.enterPressed = false;

			return original.apply(this, arguments);
		};
	})();
});
