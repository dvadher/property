$(document).ready(function() {
	/*====================== js for sticky and mobile menu ====================== */
	var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
	$(".main_page").css('min-height', min_height + 'px');
	$(window).resize(function() {
		var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
		$(".main_page").css('min-height', min_height + 'px');
	});

	$(window).scroll(function() {
		var navHeight = $('#custom-header').height();
		var sticky = $('#custom-header');
		if ($(window).scrollTop() > 0) {
			sticky.addClass("sticky")
			$('#dashboard-page').css('padding-top', navHeight + "px");
		} else {
			sticky.removeClass("sticky");
			$('#dashboard-page').css('padding-top', 0);
		}
	});
	$('.jb_front_nav_close button').on('click', function() {
		$('.navbar-collapse').collapse('hide');
	});

	var kursorx = new kursor({
		type: 4,
		color: 'rgba(0,0,0,0)',
	})

/*====================== banner-slider start ====================== */

	var $owl = $('#banner-slider');

	$owl.children().each(function(index) {
		$(this).attr('data-position', index);
	});


/*====================== banner-slider end ====================== */

	/*====================== js for scrollTop ====================== */
	var btn = $('#button');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 500) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, '500');
	});
	/*====================== js for scrollTop ====================== */


/*====================== filter-slider start ====================== */

	$(document).on('click', '.owl-item>div', function() {
		var $speed = 300; // in ms
		$owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
	});
/*====================== filter-slider end ====================== */

/*====================== js for scrollTop ====================== */

	AOS.init({
		duration: 1200,
	})


	$(document).on('click','.btn-reg-body', function(){
		$('.free-register').addClass('show-form');
	});


	$(document).on('click','.close-btn', function(){
		$('.free-register').removeClass('show-form');
	}); 

	$('#sponder-logo').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})

}); /*====================== all js end ====================== */