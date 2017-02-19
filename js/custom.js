$(function(){

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.content').css({'padding-bottom':height_footer, 'padding-top':height_header});
	
	
}

// nav open	
	$('.nav-icon__link').click(function(){
		$('.nav-list').toggleClass('active'),
		$(".nav-icon").toggleClass('active'),
		$("body").toggleClass('overflow')				 
		return false;
	});




