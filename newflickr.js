
var fl_url,result,selected_size;  
var fl_url_size;
var loop=0;
//alert("who");
fl_url = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=390d39008ba38713f08359f7ac8e819a&per_page=30&format=json&nojsoncallback=1";  
$(document).ready(function(){  
$("#small").click(function(){  
selected_size=75;  
})  
});  
$(document).ready(function(){  
$("#medium").click(function(){  
selected_size=240;  
})  
});  
$(document).ready(function(){  
$("#large").click(function(){  
selected_size=500;  
})  
});  



$(document).ready(function(){


$('#button').click(function(){  

$.getJSON(fl_url,function(json){  

$.each(json.photos.photo,function(i,result){  

fl_url_size = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=390d39008ba38713f08359f7ac8e819a&photo_id="+result.id+"&format=json&nojsoncallback=1";  
$.getJSON(fl_url_size,function(size){
	
$.each(size.sizes.size,function(i,result_size){  
if(result_size.width==selected_size){  
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
$("#results").append('<p><a href="'+result_size.url+'" target="_blank"><img src="'+result_size.source+'"/></a></p>');  
else
{
if(loop==0)
$("#results").append('<div class="row">');
$("#results").append('<div class="col-sm-4 displaypics"><a href="'+result_size.url+'" target="_blank"><img src="'+result_size.source+'"/></a></p></div>');  
if(loop==2)
{
	$("#results").append('</div>');
	loop=-1;
}
loop++;
}
}  
})  
})  
});  
});  
});  
});  