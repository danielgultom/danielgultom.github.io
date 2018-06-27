

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

function findBrokenLinks() {
	return("Have not yet implemented findBrokenLinks");
}


////////////////////////////////////////////////////////////
/////////////////////////////////////////// running tests///
////////////////////////////////////////////////////////////


function runTests() {
	console.log(findBrokenImages());
	console.log(findBrokenLinks());
}

