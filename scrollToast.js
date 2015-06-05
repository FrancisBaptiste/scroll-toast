/*
scrollToast: a simple auto-scrolling jquery plugin
written by Francis Baptiste
http://francisbaptiste.com
info@francisbaptiste.com
*/


(function($, window, document, undefined){

	$.fn.extend({
		scrollToast: function(options, more){


			//var options = $.extend(defaults, options);

			return this.each(function(){
		

		/*
		-------------------------------------------------------------------------------------
		Variables: storing all our important information
		-------------------------------------------------------------------------------------
		*/
		//these variables retrieve the element we'll be scrolling too
		//and stores that element's scrolling position relative to the top of the window
		var el = document.getElementById(options);		
		var elPos = $(el).offset();	
		var screenHeight = window.innerHeight;
		var currentScrollPos = document.body.scrollTop;
		var easeRate = 8;
		var scrolling = 0;

		/*
		-------------------------------------------------------------------------------------
		Event Listeners: for updating our variables and triggering the scroll
		-------------------------------------------------------------------------------------
		*/
		//this event listener will keep us up to date on our current scrolling position
		$(window).scroll(function(){
			currentScrollPos = $(document).scrollTop();
		});

		//this listener will update the variable for screenHeight
		$(window).resize(function(){
			screenHeight = window.innerHeight;
		});

		//this is the main listener for triggering the whole scrolling action
		$(this).bind('click', function(){
			if(scrolling == 0){
				scrollToPos(elPos.top);
				scrolling = 1;
			}
		});


		/*
		-------------------------------------------------------------------------------------
		Main function: this is the logic for the scrolling. Hardly more than
		an easing function.
		-------------------------------------------------------------------------------------
		*/
		function scrollToPos(thisPos){
			var i = 1;
			
			//this is to make sure we don't get stuck if the element's scroll position is further
			//down the page than the browser can go
			var maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			if(thisPos>maxScroll){
				thisPos = maxScroll;
			}
		
			var myInterval = setInterval(function(){
				var dist = 0;
				var nextPos = 0;
				if(thisPos>currentScrollPos){
					dist = thisPos - currentScrollPos;
					nextPos = currentScrollPos + ((dist+i)/easeRate);
				}else{
					dist = thisPos - currentScrollPos;
					nextPos = currentScrollPos + ((dist-i)/easeRate);
				}
				window.scrollTo(0, nextPos);
				if(Math.abs(thisPos-nextPos) <= 2){
					window.scrollTo(0, thisPos);
					clearInterval(myInterval);
					scrolling = 0;
				}
				i++;
			}, 33);		
		}


			});
		}

	});	


}) (jQuery, window, document);