
var fl_url,result,selected_size;
var fl_url_size;
var loop=0;

/* The following url containes the object in JSON format and it accepts 30 pictures at a time
The method used "flickr.photos.getRecent"*/
fl_url = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=390d39008ba38713f08359f7ac8e819a&per_page=30&format=json&nojsoncallback=1";



/* The following code sets the size of pictures requested by the user*/
$(document).ready(function(){
  $("#small").click(function(){
  selected_size=75;
  });
});

$(document).ready(function(){
  $("#medium").click(function(){
  selected_size=240;
  });
});

$(document).ready(function(){
  $("#large").click(function(){
  selected_size=500;
  });
});



$(document).ready(function(){

  $("#button").click(function(){

    $.getJSON(fl_url,function(json){

      $.each(json.photos.photo,function(i,result){

        fl_url_size = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=390d39008ba38713f08359f7ac8e819a&photo_id="+result.id+"&format=json&nojsoncallback=1";

          $.getJSON(fl_url_size,function(size){

            $.each(size.sizes.size,function(i,result_size){
              if(result_size.width==selected_size)
              {
                if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
                  {
                     $("#results").append("<p><a href='"+result_size.url+"' target='_blank'><img src='"+result_size.source+"'/></a></p>");
                  }

                else
                {
                     //This if is used to make sure that a new row is starting and to append class="row" in the beginning
                     if(loop==0)
                     {
                       $("#results").append("<div class='row'>");
                     }
                     $("#results").append("<div class='col-sm-4 displaypics'><a href='"+result_size.url+"'' target='_blank'><img src='"+result_size.source+"'/></a></p></div>");
                     if(loop==2)
                     {
                       //This if is used to append </div> after the third element of the row and makes the next pictures to appear in the next row
                       $("#results").append("</div>");
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