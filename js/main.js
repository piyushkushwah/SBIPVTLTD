 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

 // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
 // 'size': 'invisible',
	//  'callback': function(response) {
	//  // reCAPTCHA solved, allow signInWithPhoneNumber.
	//  onSignInSubmit();
 // }
 // });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

	function validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return  re.test(String(email).toLowerCase());
	}
	$('document').ready(function ($) {
		$('.popUp').click(function (e) {
			$(this).css('display','none');
			$('.popUp-support-close').css('height','28px');
			$('.popUp-support').css('height','400px');
			$('.popUp-support-close').css('height','28px');
		});
		$('#otp').hide();
		$('#submit-support').hide();
		$('#support-btn').click(function () {
			if(validateEmail($('#email').val())){
				$('#email').css('border-color','red');
			}else{
				$('#email').css('border-color','grey');
			}
			if($('#name').val() !== '' && $('#mobileNo').val() !== '' &&validateEmail($('#email').val())){
				window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
				firebase.auth().signInWithPhoneNumber('+91'+$('#mobileNo').val(), window.recaptchaVerifier)
					.then(function(confirmationResult) {
						window.confirmationResult = confirmationResult;
						if(confirmationResult){
							$('#recaptcha-container').hide();
						}
					});
				$('#name').hide(200);
				$('#mobileNo').hide(200);
				$('#email').hide(200);
				$(this).hide(200);
				$('#otp').show(500);
				$('#submit-support').show(500);
			}else{
				$('#name').css('border-color','red');
				$('#mobileNo').css('border-color','red');
				$('#email').css('border-color','red');
			}
		});
		$('#submit-support').click(function () {
			if($('#otp').val() !== ''&&$('#otp').val().length ===6){
			$('.popUp-support').hide(500);
			$('.popUp').hide(500);
				$('#otp').css('border-color','grey');
				var data = {
					name:$('#name').val(),
					email:$('#email').val(),
					phone:$('#mobileNo').val()
				};
				$.post('https://shivbhairavinfrastructures.com/apis/queries/',data,function (e) {
					if(e.success === 1){
						alert('Successfully Sent');
						// window.location.reload();
					}
				});
			}else{
				$('#otp').css('border-color','red');
			}
		});
		$('#contact-us-support-open').click(function (e) {
			$('.popUp-support-close').css('height','28px');
			$('.popUp-support').css('height','350px');
			$('.popUp-support-close').css('height','28px');
		});
		$('.popUp-support-close').click(function (e) {
			$('.popUp').css('display','unset');
			$('.popUp-support').css('height','0');
			$('.popUp-support-close').css('height','0');
		});

		const project2Images = [ 'https://res.cloudinary.com/aman-anand/image/upload/v1581452938/shivbhairav/mainProj/madanpur/madanpur_plotting_map-1_dkdlip.png',
			'https://res.cloudinary.com/aman-anand/image/upload/v1581452932/shivbhairav/mainProj/madanpur/madanpur_schedule-2_ves5ev.png',
			'https://res.cloudinary.com/aman-anand/image/upload/v1581452949/shivbhairav/mainProj/madanpur/madanpur_village_map-1_wuwumd.png',
			'https://res.cloudinary.com/aman-anand/image/upload/v1581452938/shivbhairav/mainProj/madanpur/scan0998-1_tvjcgz.png' ];
		for(let i = 0; i< project2Images.length;i++){
		$('#project2-images').append(`<div class="col-lg-4  p-3" >
                <a href="${project2Images[i]}" target="_blank">
                <img src="${project2Images[i]}"  class="project2-images" 
                style="width: 20rem;height: 15rem;object-fit: contain" alt="">
                </a>
            </div>`);
		}
		const project1Images = [ 'https://res.cloudinary.com/aman-anand/image/upload/v1581452076/shivbhairav/mainProj/anandVihar/anand_vihar_schedule-1_jdjwdo.png',
			'https://res.cloudinary.com/aman-anand/image/upload/v1581452059/shivbhairav/mainProj/anandVihar/anand_vihar_schedule-3_aajll6.png',
			'https://res.cloudinary.com/aman-anand/image/upload/v1581452046/shivbhairav/mainProj/anandVihar/av01_mthf5v.png',
			'https://res.cloudinary.com/aman-anand/image/upload/v1581452069/shivbhairav/mainProj/anandVihar/av02_nuh40n.png',
			'https://res.cloudinary.com/aman-anand/image/upload/v1581452077/shivbhairav/mainProj/anandVihar/av03_o1bijc.png',
			'https://res.cloudinary.com/aman-anand/image/upload/v1581452065/shivbhairav/mainProj/anandVihar/kolya_schedule_2_ufzpbf.png',
			'https://res.cloudinary.com/aman-anand/image/upload/v1581450565/shivbhairav/mainProj/anandVihar/Scan1-min-min_yd22cc.jpg',
			'https://res.cloudinary.com/aman-anand/image/upload/v1581450548/shivbhairav/mainProj/anandVihar/Scan10001-min-min_e8maan.jpg' ];
		for(let i = 0; i< project1Images.length;i++){
		$('#project1-images').append(`<div class="col-lg-4  p-3" >
                <a href="${project1Images[i]}" target="_blank">
                <img src="${project1Images[i]}"  class="project2-images" 
                style="width: 20rem;height: 20rem;object-fit: cover" alt="">
                </a>
            </div>`);
		}
	});


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
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
		});
		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('.appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});

	$('.appointment_time').timepicker();




})(jQuery);
