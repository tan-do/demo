 function scrollTan(){


              function(scrollName,topPx,scrollTime){
     	 $(scrollName).click(function(){   
		        $("html,body").animate({scrollTop:topPx},scrollTime);
		    });  
              	
     }


 }

scrollTan();

