
var origin = window.location.origin;
console.log('this is the origin:' + ' ' + origin);
console.log('this is the window.location:' + ' ' + window.location);
var body = $('body');
var nm =1;
    
if (origin === 'https://ello.co') {


	body.append('<div class="ad1"></ad>');
	body.append('<div class="ad2"></ad>');
	body.append('<div class="ad3"></ad>');

     // create ads and appending them to body




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
	putAd();

}

else {
     // alert('youre NOT on ello!');
}



function putAd(){
	if(nm<=3){
		$.ajax({
			type : 'GET',
			// dataType: 'json',
			url : "https://lolipop-7694c3628d02999d.ssl-lolipop.jp/elload/ad.php",
			cache : false,
			success : function(data) {
				document.getElementsByClassName("ad"+nm)[0].innerHTML = data;
				
				nm +=1;
				putAd();
			}
		});
	}
}