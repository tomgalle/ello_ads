
var origin = window.location.origin;
console.log('this is the origin:' + ' ' + origin);
console.log('this is the window.location:' + ' ' + window.location);
var body = $('body');
var nm =1;
var _l_arr = [0,400,300,150];
    
if (origin === 'https://ello.co') {


	body.append('<div class="ad1"></ad>');
	body.append('<div class="ad2"></ad>');
	body.append('<div class="ad3"></ad>');

     // create ads and appending them to body




     $('.ad1').css({
          'width' : 400,
          'height' : 80,
          'position' : 'absolute',
          'top' : '350' + 'px',
          'left' : '30' + 'px',
          'z-index' : '10000000000'
     });

     $('.ad2').css({
          'width' : 300,
          'height' : 300,
          'position' : 'absolute',
          'top' : '480' + 'px',
          'left' : '30' + 'px',
          'z-index' : '10000000000'
     });

     $('.ad3').css({
          'width' : 150,
          'height' : 500,
          'position' : 'absolute',
          'top' : '150' + 'px',
          'right' : '30' + 'px',
          'z-index' : '10000000000'
     });
	putAd();

}

else {
     // alert('youre NOT on ello!');
}



function putAd(){
	if(nm<=3){
		var tp;
		if(nm == 1){
			tp = "h";
		}
		if(nm == 2){
			tp = "s";
		}
		if(nm == 3){
			tp = "v";
		}

		$.ajax({
			type : 'GET',
			// dataType: 'json',
			url : "https://lolipop-7694c3628d02999d.ssl-lolipop.jp/elload/ad.php?type="+tp,
			cache : false,
			success : function(data) {
				document.getElementsByClassName("ad"+nm)[0].innerHTML = data;
				document.getElementById("img"+nm).style.width = _l_arr[nm]+"px";
				if(nm==3){
					var style = window.getComputedStyle(document.getElementById("img1"),"");
					//console.log(style.height);
					var div_style = window.getComputedStyle(document.getElementsByClassName("ad1")[0],"");
					//console.log(div_style.top);
					var num = (parseInt(div_style.top.split("px")[0])+parseInt(style.height.split("px")[0])+30)+"px";
					document.getElementsByClassName("ad2")[0].style.top = num;
					//console.log(num);
				}
				nm +=1;
				putAd();
			}
		});
	}
}