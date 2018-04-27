// Color generation section
// source: inspired by stackoverflow Anatoliy

// getRandColor: gets entirely random color
function getRandColor() {
	var choices = '0123456789ABCDEF';
	var color = '#';
	color += get1rand();
	color += get1rand();
	color += get1rand();
	return color;
}


// randOneCol: returns 2 characters within hexa range
// Whole thing entirely random.
function get1rand() {
	var choices = '0123456789ABCDEF';
	var color = '';
	for (var i = 0; i < 2; i++){
		color += choices[Math.floor(Math.random() * 16)];
	}
	return color;
}