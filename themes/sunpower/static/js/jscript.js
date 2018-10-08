 

$(document).ready(function(){
	  $("div.largeimg").hide();
 	 $(".smallimg").bind('mouseover', function(){
	   	$(".largeimg").stop().fadeOut( 1000);
	    $('#'+$(this).attr("id") + "content").fadeIn("slow");

	   });
	   
});
  
 
