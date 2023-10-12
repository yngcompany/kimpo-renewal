jQuery(document).ready(function(){


	/* fixed */	
	var gnbLoc = 120;
		$(window).scroll(function(){
			var winLoc = $(window).scrollTop();
			if(winLoc > gnbLoc){
				$('#header').addClass('fadeInDown bg').css({'position':'fixed','top':'0','width':'100%','z-index':'99999'});
			}else if(winLoc <= gnbLoc){
				headerLoc = (gnbLoc-winLoc);
				$('#header').removeClass('fadeInDown bg').css({'position':'relative','top':'0px'});			
			}
		});	
	

});
