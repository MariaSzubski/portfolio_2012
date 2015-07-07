$(document).ready(function() {

	/* change technique nav active class */
	$('#projNav li').click(
		function(navActive) {
	        navActive.preventDefault();
	        var $this = $(this);
	        $this.closest('ul').children('li').removeClass('active');
	        $this.addClass('active');
		 	}
 	);
 	
 	
	/* slideshows */
	$('.slides').slides({
		preload: true,
		preloadImage: 'assets/loading.gif',
		effect: 'fade',
		crossfade: true
	});	
 	
 	
 
 
 	/* header resize 
 	
	$(function(){
		$('#header').data('size','big');
	});

	$(window).scroll(function(){
		if($(document).scrollTop() > 0){
			if($('#header').data('size') == 'big'){
				$('#header').data('size','small');
				$('#header').stop().animate({
					height:'40px',
					paddingTop:'10',
					paddingBottom:'0',
					backgroundColor:'585858'
				},600);
			}
		}
		else{
			if($('#header').data('size') == 'small'){
				$('#header').data('size','big');
				$('#header').stop().animate({
					height:'40px',
					paddingTop:'20',
					paddingBottom:'10',
					backgroundColor:' 4acba2'
				},400);
			}  
		}
	});


	/* anchors */

	
	$("div#topLink").click(
		function () {
			$.scrollTo('a[id="a_top"]', 300, {easing:'swing'} );//specify an easing equation);
		}
	);
	
	$("div#al_aboutme").click(
		function () {
			$.scrollTo('a[id="a_aboutme"]', 500, {easing:'swing'} );//specify an easing equation);
		}
	);

	$("div#al_projects").click(
		function () {
			$.scrollTo('a[id="a_nsight"]', 500, {easing:'swing'} );//specify an easing equation);
		}
	);

	$("div#al_nsight").click(
		function () {
			$.scrollTo('a[id="a_nsight"]', 500, {easing:'swing'} );//specify an easing equation);
		}
	);

	$("div#al_ikea").click(
		function () {
			$.scrollTo('a[id="a_ikea"]', 500, {easing:'swing'} );//specify an easing equation);
		}
	);


	$("div#al_urban").click(
		function () {
			$.scrollTo('a[id="a_urban"]', 500, {easing:'swing'} );//specify an easing equation);
		}
	);
	
	$("div#al_power").click(
		function () {
			$.scrollTo('a[id="a_power"]', 500, {easing:'swing'} );//specify an easing equation);
		}
	);

	$("div#al_nbc").click(
		function () {
			$.scrollTo('a[id="a_nbc"]', 500, {easing:'swing'} );//specify an easing equation);
		}
	);
	
	$("div#al_kca").click(
		function () {
			$.scrollTo('a[id="a_kca"]', 500, {easing:'swing'} );//specify an easing equation);
		}
	);

	
	$("div#al_n64").click(
		function () {
			$.scrollTo('a[id="a_n64"]', 500, {easing:'swing'} );//specify an easing equation);
		}
	);
	
	$("div#al_jcp").click(
		function () {
			$.scrollTo('a[id="a_jcp"]', 500, {easing:'swing'} );//specify an easing equation);
		}
	);
	
	$("div#al_dresden").click(
		function () {
			$.scrollTo('a[id="a_dresden"]', 500, {easing:'swing'} );//specify an easing equation);
		}
	);




	
});