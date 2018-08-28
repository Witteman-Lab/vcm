/**
 * Constructor and properties
 * 	graphOrientation: the bar chart can be displayed horizontally or vertically (for responsiveness, but not fully implemented yet)
 * 	sliders: to keep track of the sliders in the interface
 * TODO: Make the object language-independant, so we don't have to use 2 distinct objects for 2 languages
 */
function Manager (slidersList) {
	this.graphOrientation;
	this.sliders = new Array();
	
	for (let i = 0; i < slidersList.length; i++) {
		this.sliders.push(slidersList[i]);
	}
}

/**
 * Prototype for managing the methods
 * 	manageBarCharts(): 
 * 	setOrientationClass(): 
 * 	selectBestOption(): 
 * 	manageConstraints(): 
 */
Manager.prototype = {
    constructor: Manager,
    
	/**
	 * Manage the bar chart according to the sliders position
	 */
	manageBarCharts : function () {
		
		let percent,
			percents = new Array();
		const UNIT = "%";
		
		// Store the values of the sliders
		for (let i = 1; i <= this.sliders.length; i++) {
			percent = this.sliders[i-1].val();
			percents.push(percent);
		}
		
		for (let i = 1; i <= percents.length; i++) {
			let percent = percents[i-1];
			
			// GRAPH VERTICAL DISPLAY
			if(this.graphOrientation === "vertical") {
				// Transposed from setOrientationClass()
				$(".container").removeClass("horizontal").addClass("vertical");
				
				let pOffset = 100 - percent + UNIT;
				$("#bar" + i).css("height", percent + UNIT);
				$("#bar" + i).css("top", pOffset);
				
				// Necessary to "reset" the width when orientation changes
				$(".progress-fill").css("width", "100" + UNIT);
			
			// GRAPH HORIZONTAL DISPLAY
			} else {
				// Transposed from setOrientationClass()
				$(".container").removeClass("vertical").addClass("horizontal");
				
				$("#bar" + i).css("width", percent + UNIT);
				
				// Necessary to "reset" the height and position when orientation changes
				$(".progress-fill").css("height", "100" + UNIT);
				$(".progress-fill").css("top", "0");
			}
		}
		
		this.selectBestOption(percents);
    },
    
	/**
	 * Set the orientation of the .container class to vertical or horizontal (toggle) depending on the device orientation
	 * TODO: Test on Android for values of the orientation property
	 */
	setOrientationClass : function (isLandscapeMode) {
		
		if(!isLandscapeMode) {
			$(".container").removeClass("horizontal").addClass("vertical");
			this.graphOrientation = "vertical";
		} else {
			$(".container").removeClass("vertical").addClass("horizontal");
			this.graphOrientation = "horizontal";
		}
		
		this.manageBarCharts();
    },
    
	/**
	 * Select the best option depending on the position of the sliders
	 * TODO: Make that part language independant
	 */
	selectBestOption : function (percents) {
		const label1 = "Chirurgie 1",
			  label2 = "Chirurgie 2",
			  BESTOPTIONTEXT = " correspond le mieux à ce qui vous importe";
		
		if (percents[0] > percents[1]){	
			$("#option1_value").html(label1);
			$("#option1_text span").last().html(BESTOPTIONTEXT);
			$("#option1_text").addClass("options");
			
			$("#option2_value").html(label2);
			$("#option2_text span").last().html("");
			$("#option2_text").removeClass("options");
		} else if (percents[1] > percents[0]) {
			$("#option2_value").html(label2);
			$("#option2_text span").last().html(BESTOPTIONTEXT);
			$("#option2_text").addClass("options");
			
			$("#option1_value").html(label1);
			$("#option1_text span").last().html("");
			$("#option1_text").removeClass("options");
		} else {
			$("#option1_value").html(label1);
			$("#option2_value").html(label2);
			$("#option1_text span").last().html("");
			$("#option2_text span").last().html("");
			$("#option1_text").removeClass("options");
			$("#option2_text").removeClass("options");
		}
    },
	
	/**
	 * Manage the constraints of the sliders
	 * The oppositeSliderNumber works only if the sliders' ids end by 0 and 1 respectively
	 * 		which might be a problem when other ids are used, but it allows to limit the code
	 */
	manageConstraints : function (slider) {

        // Compute the opposite value of the slider being used
		let oppositeValue = 100 - slider.value;
		
		// Get the last id's character (0 or 1)
		let sliderNumber = slider.id.substr(slider.id.length-1);

		// Get the opposite of sliderNumber
		let oppositeSliderNumber = ~~(sliderNumber == false);
		
		// Apply the new value to the other slider
		$("#rangeslider" + oppositeSliderNumber).val(oppositeValue).change();
		
		// Call to adapt the bar chart to the new values
		this.manageBarCharts();
    }
}