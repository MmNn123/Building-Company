$(document).ready(function(e) {
   $(".remove").click(function(){
	   $(".remove").css("display","none");
	   $(".frame").css("display","none");
	   $(".navbar-default").css("top","0");
	}) 
	
	
   $(".picofgallery").hover(function(){
	   $(".backofpic").toggle();
	   $(".information").fadeToggle(function(){
		   $(".information").animate({top:"70%"});
		   });
	   })
   $(".picofgallery2").hover(function(){
	   $(".backofpic2").toggle();
	   $(".information2").fadeToggle(function(){
		   $(".information2").animate({top:"70%"});
		   });
	   })
   $(".picofgallery3").hover(function(){
	   $(".backofpic3").toggle();
	   $(".information3").fadeToggle(function(){
		   $(".information3").animate({top:"70%"});
		   });
	   })
   $(".picofgallery4").hover(function(){
	   $(".backofpic4").toggle();
	   $(".information4").fadeToggle(function(){
		   $(".information4").animate({top:"70%"});
		   });
	   })  
   $(".picofgallery5").hover(function(){
	   $(".backofpic5").toggle();
	   $(".information5").fadeToggle(function(){
		   $(".information5").animate({top:"70%"});
		   });
	   })  
   $(".picofgallery6").hover(function(){
	   $(".backofpic6").toggle();
	   $(".information6").fadeToggle(function(){
		   $(".information6").animate({top:"70%"});
		   });
	   }) 
	   
$(".all").click(function(){
	 $(".picofgallery2").show(1000);
	 $(".picofgallery4").show(1000);
	 $(".picofgallery5").show(1000);
	 $(".picofgallery6").show(1000);
	 $(".picofgallery3").show(1000);
	 $(".picofgallery").show(1000);
	 })	   
 $(".building").click(function(){
	 $(".picofgallery2").hide(1000);
	 $(".picofgallery4").hide(000);
	 $(".picofgallery5").hide(000);
	 $(".picofgallery6").hide(000);
	 $(".picofgallery3").show(1000);
	 $(".picofgallery").show(1000);
	 }) 
 $(".Interior").click(function(){
	 $(".picofgallery").hide(1000);
	 $(".picofgallery3").hide(00);
	 $(".picofgallery4").hide(000);
	 $(".picofgallery5").hide(1000);
	 $(".picofgallery2").fadeIn(1000);
	 $(".picofgallery6").fadeIn(1000);
	 })
 $(".Isolation").click(function(){
	 $(".picofgallery").hide(1000);
	 $(".picofgallery3").hide(1000);
	 $(".picofgallery4").fadeIn(1000);
	 $(".picofgallery5").hide(1000);
	 $(".picofgallery2").hide(1000);
	 $(".picofgallery6").hide(1000);
	 })
 $(".House").click(function(){
	 $(".picofgallery").hide(500);
	 $(".picofgallery3").hide(500);
	 $(".picofgallery4").fadeIn(500);
	 $(".picofgallery5").show(500);
	 $(".picofgallery2").hide(500);
	 $(".picofgallery6").hide(500);
	 }) 	   
	       
});
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
       // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
  });
});
$(document).ready(function(){

		$('.clc').click(function(){
    $('html, body').animate({scrollTop: $( $.attr(this, 'href') ).offset().top -50
	},3000);
    return false;
});
});

$(document).ready(function(){
	var sec = $("#sec2").offset().top;
	
	$(window).scroll(function(){
		
	var pos=$(window).scrollTop();
	if(pos > sec)
	{
		$(".navbar-default").css("background-color","#ccc");
		
		$(".navbar-default .navbar-nav>li>a").css("color","black");
	}
	else
	{
		$(".navbar-default").css("background","none");
		
		$(".navbar-default .navbar-nav>li>a").css("color","#FFF");
	}
	})
});
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});
$(document).ready(function(e) {
    $("#name").click(function(){
		$("#name").css("border","2px solid #ccc")
		$("#email").css("border","")
		$("#message").css("border","")
		})
	$("#email").click(function(){
		$("#email").css("border","2px solid #ccc")
		$("#name").css("border","")
		$("#message").css("border","")
		})
	$("#message").click(function(){
		$("#message").css("border","2px solid #ccc")
		$("#name").css("border","")
		$("#email").css("border","")
		
		})
});
$(document).ready(function() {
 
  $("#owl").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});
$(document).ready(function(e) {
    $(".foot").click(function(){
		$('html,body').animate({
			scrollTop:$ ($.attr(this,'href')).offset().top},2000);
		
		
		
		});
	
	
	
	
});
$(document).ready(function(e) {
var buttom = document.getElementById("up");
window.onscroll = function() {
    "use strict";
    if(window.pageYOffset >=638) {
        buttom.style.display = "block";
    } else {
        buttom.style.display = "none";
    }
};
buttom.onclick = function () {
    scrollTo(0, 0);
}
});