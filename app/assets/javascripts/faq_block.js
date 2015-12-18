$(document).ready(function(){
	$('.faq-block').click(function(){
		$(this).toggleClass('active');
		$(this).children('.faq-answer').slideToggle(500);
	})
})
