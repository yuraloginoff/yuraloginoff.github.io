;(function ($, document, window, undefined) {

	var defaults = {
		onWindowResize : true,
		wrapClass : "bigphoto-wrap",
		imageWrapperWidth : "100%"
	};

	function bigPhoto(element, options) {
		this.config = $.extend({}, defaults, options);
		this.element = element;
		this.imageWrapper = $("."+this.config.wrapClass);
		this.init();
	};

	bigPhoto.prototype = {
		init : function () {
			var self = this;

			this.imageWrapper.width(this.config.imageWrapperWidth);

			this.stretchImages();

			if(this.config.onWindowResize) {
				$(window).resize(function () {
					self.stretchImages();
				});
			}
		},

		stretchImages : function () {
			var wrapWidth = this.imageWrapper.outerWidth();
			this.element.width(wrapWidth);
		}
	};

	$.fn.bigPhoto = function (options) {
		return this.each(function () {
			new bigPhoto($(this), options);
		});
	};

})(jQuery, document, window);