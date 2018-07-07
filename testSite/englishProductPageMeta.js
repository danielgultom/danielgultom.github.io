function checkForMetaDescription(descripContent) {
	var metatags = document.getElementsByTagName("meta");
	if (metatags.description === undefined) {
		throw new Error("there is no description metatag");
	} else {
		if (metatags.description.content === descripContent) {
			return("Everything is fine! Matches expected value: " + descripContent);
		} else {
			throw new Error("the description metatag doesn't match the desired product page metatag: '" + descripContent + "'.... instead, it has the following: '" + metatags.description.content);
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
	let metaProdDescrip = "CooperVision are global market leaders in contact lens manufacture. Visit our site to discover the best contact lenses for clear vision.";
	callback(checkForMetaDescription(metaProdDescrip));
}




/*

let metaProdDescrip = "Lentilles de contact  Gamme Avaira Un bain de confort";
callback(checkForMetaDescription(metaProdDescrip));

*/