





/* function to find broken images. Returns a string that says either
	"No broken images found"
	or
	"These images failed to load: " followed by the name of the images */
function findBrokenImages() {
	var failedImages = [];
	for (i = 0; i < document.getElementsByTagName("img").length; i++) {
		var pic = document.getElementsByTagName("img")[i];
		if (!pic.complete || pic.naturalHeight === 0) {
			failedImages.push(pic.src);
		} else {
			;
		}
	}

	if (failedImages.length > 0) {
		var failure = " ";
		for (i = 0; i < failedImages.length; i++) {
			failure += failedImages[i];
			failure += "      ";
		}
		return("These images failed to load: " + failure);
	} else {
		return("No broken images found");
	}
}


function checkForMetaDescription(descripContent) {
	var metatags = document.getElementsByTagName("meta");
	if (metatags.description === undefined) {
		throw new Error("there is no description metatag");
	} else {
		if (metatags.description.content === descripContent) {
			return("Everything is fine!")
		}
	}
}


let bioFinMetaDescrip = "※バイオフィニティ® XRは-12.50D ~ -20.00D(0.50Dステップ)までの近視が強い方に対応しています。レンズ仕様はバイオフィニティ®と同等です。";









/* function that will run all tests and console.log results.
	equivalent on Mabl should just store return values in variables
	and put them in the callback */
function runTests() {
	console.log(findBrokenImages());
	// console.log(findBrokenLinks());
}









//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
///////////functions that are yet to be implemented
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


// function to find broken links. Not implemented yet.
function findBrokenLinks() {
	return("Have not yet implemented findBrokenLinks");
}


function videoPlayCheck(vid) {
	// console.log("is this vid valid?" + vid);
	vid.play();
	// sleep(4000);
	setTimeout(function(){
	    //do what you need here
	    // console.log("Inside setTimeout function:  " + vid);
		vid.pause();
		var time = vid.currentTime;
		if (time > 0) {
			console.log("ok! Time is: " + time);
		} else {
			console.log("not ok! Time is: " + time);
		}
	}, 2000);

}

function checkIfVideosPlay() {
	/////IMPORTANT:
	// must find a way to access this first. Currently need to click play button
	var allvids = document.getElementsByTagName("video");
	var vid = allvids[0];
	console.log("Inside 'checkIfVideosPlay': vid is " + vid);
	videoPlayCheck(vid);
}

/*

function findBrokenImages() {
	var failedImages = [];
	for (i = 0; i < document.getElementsByTagName("img").length; i++) {
		var pic = document.getElementsByTagName("img")[i];
		if (!pic.complete || pic.naturalHeight === 0) {
			failedImages.push(pic.src);
		} else {
			;
		}
	}

	if (failedImages.length > 0) {
		var failure = " ";
		for (i = 0; i < failedImages.length; i++) {
			failure += failedImages[i];
			failure += "      ";
		}
		return("These images failed to load: " + failure);
	} else {
		return("No broken images found");
	}
}

function mablJavaScriptStep(mablInputs, callback) {

  // enter code here, return result in callback

  let result = 'sample';
  callback(result);
}




*/




/*
// for checking japan biofinity description meta:


function checkForMetaDescription(descripContent) {
	var metatags = document.getElementsByTagName("meta");
	if (metatags.description === undefined) {
		throw new Error("there is no description metatag");
	} else {
		if (metatags.description.content === descripContent) {
			return("Everything is fine!")
		}
	}
}

/**
 * Run a small snippet of JavaScript during a mabl flow/journey
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {

  // enter code here, return result in callback

  let bioFinMetaDescrip = "※バイオフィニティ® XRは-12.50D ~ -20.00D(0.50Dステップ)までの近視が強い方に対応しています。レンズ仕様はバイオフィニティ®と同等です。";
  callback(checkForMetaDescription(bioFinMetaDescrip));
}
