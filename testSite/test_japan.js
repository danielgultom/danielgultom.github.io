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
	let biofinmetadescrip = "※バイオフィニティ® XRは-12.50D ~ -20.00D(0.50Dステップ)までの近視が強い方に対応しています。レンズ仕様はバイオフィニティ®と同等です。";
	callback(checkForMetaDescription(biofinmetadescrip));
}

