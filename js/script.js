/* Author: 
francis baptiste
*/

$(function(){

	$("#click").bind("mouseenter mouseleave", function(){
		$(this).toggleClass("clickHover");
	});

	var offset = window.pageYOffset;

	var currentScroll = $(document).scrollTop();

	var newHeight = window.innerHeight;
	var newWidth = window.innerWidth;

	var parSpeed = 2;

	$("#first").css("height", newHeight);
	$("#third").css("height", newHeight);
	$("#second").css("height", newHeight);
	$("#second2").css("height", newHeight);
	if(newHeight>800){
		parSpeed = 2.5;
	}

	$("#secondContent").css({"margin-left": (newWidth - 600) + "px"});
	$("#secondContent2").css({"margin-left": (newWidth - 600) + "px"});
	$("#firstContent").css({"margin-top": (newHeight-100)+"px", "margin-left":(newWidth - 300) + "px" });

	$("#download").css({"margin-left": (newWidth - (newWidth/2) - 180)+"px", "margin-top": ((newHeight/1.5))+"px"});

	if(newWidth<1300){

	}

	$(window).scroll(function(){
		currentScroll = $(document).scrollTop();
		if(currentScroll<newHeight*2){
			$("#second").css({"background-position": "0 " + ((-currentScroll/parSpeed)-100) + "px"});
		}
		if(currentScroll > newHeight){
			var newSecond2 = newHeight/2 + (-(currentScroll)/parSpeed);
			$("#second2").css({"background-position": "0 " + newSecond2 + "px"});
/*
			var newArrowPos = (50+(currentScroll/3));
			$("#arrow1").css({"background-position" : "0 " + newArrowPos+"px"});
*/
		}
		var newLogoPos = (10+(currentScroll/80));
		if(newLogoPos<35){
			$("#logo").css({"top" : newLogoPos+"%"});
		}
	});

	$("#firstClick").scrollToast("second");
	$("#secondClick").scrollToast("second2");
	$("#thirdClick").scrollToast("third");

});

