
var origin = window.location.origin;
console.log('this is the origin:' + ' ' + origin);
console.log('this is the window.location:' + ' ' + window.location);
var body = $('body');
    
if (origin === 'https://ello.co') {

     console.log('adding ads');

     // create ads and appending them to body

	body.append('<div class="ad1"><img src="http://affiliate.rakuten.co.jp/campaign/travel/20101210/img/main_ttl.jpg"></ad>');
	body.append('<div class="ad2"><img src="http://affiliate.rakuten.co.jp/campaign/travel/20101210/img/main_ttl.jpg"></ad>');
	body.append('<div class="ad3"><img src="http://affiliate.rakuten.co.jp/campaign/travel/20101210/img/main_ttl.jpg"></ad>');


     $('.ad1').css({
          'width' : 400,
          'height' : 80,
          'background-color': 'red',
          'position' : 'absolute',
          'top' : '350' + 'px',
          'left' : '30' + 'px',
          'z-index' : '10000000000'
     });

     $('.ad2').css({
          'width' : 300,
          'height' : 300,
          'background-color': 'orange',
          'position' : 'absolute',
          'top' : '480' + 'px',
          'left' : '30' + 'px',
          'z-index' : '10000000000'
     });

     $('.ad3').css({
          'width' : 100,
          'height' : 500,
          'background-color': 'gray',
          'position' : 'absolute',
          'top' : '100' + 'px',
          'right' : '100' + 'px',
          'z-index' : '10000000000'
     });

}

else {
     // alert('youre NOT on ello!');
}