
chrome.browserAction.onClicked.addListener( function(tab) {

var origin = window.location.origin;
console.log('this is the origin:' + ' ' + origin);
console.log('this is the window.location:' + ' ' + window.location);
var body = $('body');
	
console.log('getting ads');
console.log(body);

alert('action');


if (origin = 'https://ello.co/') {

	// create ads and appending them to body

	body.append('<div class="ad1"></ad>');
	body.append('<div class="ad2"></ad>');
	body.append('<div class="ad3"></ad>');

	$('.ad1').css({
		'width' : 300,
		'height' : 50,
		'background-color': 'red',
		'position' : 'absolute',
		'top' : '350' + 'px',
		'left' : '20' + 'px',
		'z-index' : '10000000000'
	});

	$('.ad2').css({
		'width' : 350,
		'height' : 350,
		'background-color': 'orange',
		'position' : 'absolute',
		'top' : '600' + 'px',
		'right' : '50' + 'px'
	});

	$('.ad3').css({
		'width' : 50,
		'height' : 600,
		'background-color': 'gray',
		'position' : 'absolute',
		'top' : '50' + 'px',
		'right' : '100' + 'px'
	});


}

else {
	alert('youre NOT on ello!');

}



});


