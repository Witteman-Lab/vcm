$(function() {
	let $window = $(window),
		$document = $(document),
		selector = "input[type=\"range\"]",
		$element = $(selector),
		activeSliderId,
		// Send to the Manager the list of the sliders (as jQuery objects)
		manager = new Manager([$("#rangeslider0"), $("#rangeslider1")]),
		// For responsiveness, but not fully implemented yet
		isLandscapeMode = false;
	
	// Initialize the orientation class
	manager.setOrientationClass(isLandscapeMode);
	
	/**************************************************/
	// For responsiveness, but not fully implemented yet
	/**************************************************/
	/* $window.on("resize", function(e) {
		isLandscapeMode = this.innerWidth > this.innerHeight;
		manager.setOrientationClass(isLandscapeMode);
	}); */
	/**************************************************/
	
	/**
	 * When the user interacts anywhere on the slider (the bar, the handle)
	 * Get the slider's id (js-rangeslider-0, js-rangeslider-1)
	 * 		that's how the library names its sliders
	 * Split it using "-" and concatenate the last 2 parts to form the initial slider's id (rangeslider0, rangeslider1)
	 * ".rangeslider" corresponds to the class of the objects created by the rangeslider library
	 */
	$document.on("mousedown touchstart pointerdown", ".rangeslider", function() {
		let a_activeSliderId = this.id.split("-");
		activeSliderId = a_activeSliderId[1] + a_activeSliderId[2];
	});
	
	/**
	 * Because both sliders move every time we move one or the other, checks whether the slider that is moving is the one used (or active)
	 * Avoids infinite calls to the manageConstraints function
	 */
	$document.on("input", selector, function() {
		$("#"+this.id+"_value").get(0).value = this.value;
		if(this.id == activeSliderId) manager.manageConstraints(this);
	});

	// Basic rangeslider initialization
	$element.rangeslider({
		// Feature detection, default is "true".
		// Set this to "false" if you want to use the polyfill also in browsers which support the native <input type="range"> element.
		polyfill: false
		
		//onInit: function() {},
		//onSlide: function(position, value) {},
		//onSlide: manager.manageSliders()
		//onSlideEnd: function(position, value) {}
		
	});
});