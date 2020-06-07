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

 (function ($) {

 	"use strict";

 	$(window).stellar({
 		responsive: true,
 		parallaxBackgrounds: true,
 		parallaxElements: true,
 		horizontalScrolling: false,
 		hideDistantElements: false,
 		scrollProperty: 'scroll'
 	});

 	function openMap() {

 	}

 	function validateEmail(email) {
 		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 		return re.test(String(email).toLowerCase());
 	}
 	$('document').ready(function ($) {
 		$('#custom-open-map').click(function (e) {//23.395268, 85.329576
 			// window.open('https://www.google.com/maps/search/?api=1&query=23.395268, 85.329576', '_blank');
 			window.open('https://goo.gl/maps/Pf9yAyg9Ts2JmYqm9', '_blank');

 		});
 		$('#custom-open-map-main-office').click(function (e) {
 			window.open('https://www.google.com/maps/search/?api=1&query=23.636494, 85.284578', '_blank');

 		});

 		$('.popUp').click(function (e) {
 			$(this).css('display', 'none');
 			$('.popUp-support-close').css('height', '28px');
 			$('.popUp-support').css('height', '400px');
 			$('.popUp-support-close').css('height', '28px');
 		});
 		$('#otp').hide();
 		$('#submit-support').hide();
 		$('#support-btn').click(function () {
 			if (validateEmail($('#email').val())) {
 				$('#email').css('border-color', 'red');
 			} else {
 				$('#email').css('border-color', 'grey');
 			}
 			if ($('#name').val() !== '' && $('#mobileNo').val() !== '' && validateEmail($('#email').val())) {
 				window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
 				firebase.auth().signInWithPhoneNumber('+91' + $('#mobileNo').val(), window.recaptchaVerifier)
 					.then(function (confirmationResult) {
 						window.confirmationResult = confirmationResult;
 						if (confirmationResult) {
 							$('#recaptcha-container').hide();
 						}
 					});
 				$('#name').hide(200);
 				$('#mobileNo').hide(200);
 				$('#email').hide(200);
 				$(this).hide(200);
 				$('#otp').show(500);
 				$('#submit-support').show(500);
 			} else {
 				$('#name').css('border-color', 'red');
 				$('#mobileNo').css('border-color', 'red');
 				$('#email').css('border-color', 'red');
 			}
 		});
 		$('#submit-support').click(function () {
 			if ($('#otp').val() !== '' && $('#otp').val().length === 6) {
 				$('.popUp-support').hide(500);
 				$('.popUp').hide(500);
 				$('#otp').css('border-color', 'grey');
 				var data = {
 					name: $('#name').val(),
 					email: $('#email').val(),
 					phone: $('#mobileNo').val()
 				};
 				$.post('https://shivbhairavinfrastructures.com/apis/queries/', data, function (e) {
 					if (e.success === 1) {
 						alert('Successfully Sent');
 						// window.location.reload();
 					}
 				});
 			} else {
 				$('#otp').css('border-color', 'red');
 			}
 		});
 		$('#contact-us-support-open').click(function (e) {
 			$('.popUp-support-close').css('height', '28px');
 			$('.popUp-support').css('height', '350px');
 			$('.popUp-support-close').css('height', '28px');
 		});
 		$('.popUp-support-close').click(function (e) {
 			$('.popUp').css('display', 'unset');
 			$('.popUp-support').css('height', '0');
 			$('.popUp-support-close').css('height', '0');
 		});

 		const project2Images = [
			'https://res.cloudinary.com/aman-anand/image/upload/v1582530879/shivBhairav2020/projects/madanpur/madanpur_village_map-1_wuwumd_ytrads.png',
			'https://res.cloudinary.com/aman-anand/image/upload/v1582530880/shivBhairav2020/projects/madanpur/scan0998-1_tvjcgz_dlqmdq.png',
			 
			 'https://res.cloudinary.com/aman-anand/image/upload/v1582530879/shivBhairav2020/projects/madanpur/madanpur_schedule-2_ves5ev_dyndt1.png',
 			'https://res.cloudinary.com/aman-anand/image/upload/v1582805251/shivBhairav2020/projects/madanpur/madanpur_plotting_map-1_2_ssjfsj.png'
 			
			 
			 
 		];
 		for (let i = 0; i < project2Images.length; i++) {
 			$('#project2-images').append(`<div class="col-lg-4  p-3" >
                <a href="${project2Images[i]}" target="_blank">
                <img src="${project2Images[i]}"  class="project2-images" 
                style="width: 20rem;height: 15rem;object-fit: contain" alt="">
                </a>
            </div>`);
 		}
 		const project1Images = [
			'https://res.cloudinary.com/aman-anand/image/upload/v1582530878/shivBhairav2020/projects/anandVihar/av02_nuh40n_x5fbqn.png',
			'https://res.cloudinary.com/aman-anand/image/upload/v1582530878/shivBhairav2020/projects/anandVihar/av03_o1bijc_yqynnr.png',
 			'https://res.cloudinary.com/aman-anand/image/upload/v1582530878/shivBhairav2020/projects/anandVihar/anand_vihar_schedule-1_jdjwdo_pvlcn4.png',
 			'https://res.cloudinary.com/aman-anand/image/upload/v1582530878/shivBhairav2020/projects/anandVihar/kolya_schedule_2_ufzpbf_ujmiki.png',
 			'https://res.cloudinary.com/aman-anand/image/upload/v1582530878/shivBhairav2020/projects/anandVihar/anand_vihar_schedule-3_aajll6_xc5gpg.png',
			 'https://res.cloudinary.com/aman-anand/image/upload/v1582805038/shivBhairav2020/projects/anandVihar/anandviharPlotting_gmvulf.png',
			 'https://res.cloudinary.com/aman-anand/image/upload/v1582530877/shivBhairav2020/projects/anandVihar/Scan1-min-min_yd22cc_vcortj.jpg',
			 'https://res.cloudinary.com/aman-anand/image/upload/v1582530878/shivBhairav2020/projects/anandVihar/Scan10001-min-min_e8maan_sodpfe.jpg'
			 
 		];
 		// const project1Images = ['https://res.cloudinary.com/aman-anand/image/upload/v1582530877/shivBhairav2020/projects/anandVihar/Scan1-min-min_yd22cc_vcortj.jpg',
 		// 	'https://res.cloudinary.com/aman-anand/image/upload/v1582530878/shivBhairav2020/projects/anandVihar/Scan10001-min-min_e8maan_sodpfe.jpg',
 		// 	'https://res.cloudinary.com/aman-anand/image/upload/v1582530878/shivBhairav2020/projects/anandVihar/anand_vihar_schedule-1_jdjwdo_pvlcn4.png',
 		// 	'https://res.cloudinary.com/aman-anand/image/upload/v1582530878/shivBhairav2020/projects/anandVihar/kolya_schedule_2_ufzpbf_ujmiki.png',
 		// 	'https://res.cloudinary.com/aman-anand/image/upload/v1582530878/shivBhairav2020/projects/anandVihar/anand_vihar_schedule-3_aajll6_xc5gpg.png',
 		// 	'https://res.cloudinary.com/aman-anand/image/upload/v1582530879/shivBhairav2020/projects/anandVihar/av01_mthf5v_oymk3r.png',
 		// 	'https://res.cloudinary.com/aman-anand/image/upload/v1582530878/shivBhairav2020/projects/anandVihar/av02_nuh40n_x5fbqn.png',
 		// 	'https://res.cloudinary.com/aman-anand/image/upload/v1582530878/shivBhairav2020/projects/anandVihar/av03_o1bijc_yqynnr.png'
 		// ];
 		for (let i = 0; i < project1Images.length; i++) {
 			$('#project1-images').append(`<div class="col-lg-4  p-3" >
                <a href="${project1Images[i]}" target="_blank">
                <img src="${project1Images[i]}"  class="project2-images" 
                style="width: 20rem;height: 20rem;object-fit: cover" alt="">
                </a>
			</div>`);
			// if(i==project1Images.length-1){
			// 	$('#project1-images').append(`<div class="col-lg-4  p-3" >
            //     <a href="/project-gallery.html" target="">
            //     <img src="https://res.cloudinary.com/aman-anand/image/upload/v1583609731/shivBhairav2020/projects/anandVihar/project_gallary/1_yuvml6.jpg"  class="project2-images" 
            //     style="width: 20rem;height: 20rem;object-fit: cover" alt="">
            //     Project Gallery</a>
            // </div>`);
			// }
 		}
 		const anandVihar_gallery = [ 
			 'https://res.cloudinary.com/aman-anand/image/upload/v1583609731/shivBhairav2020/projects/anandVihar/project_gallary/1_yuvml6.jpg',
			 'https://res.cloudinary.com/aman-anand/image/upload/v1583609734/shivBhairav2020/projects/anandVihar/project_gallary/2_aotvhj.jpg',
			 'https://res.cloudinary.com/aman-anand/image/upload/v1583609732/shivBhairav2020/projects/anandVihar/project_gallary/3_tdjcve.jpg',
			 'https://res.cloudinary.com/aman-anand/image/upload/v1583609735/shivBhairav2020/projects/anandVihar/project_gallary/4_jlrwue.jpg',
			 'https://res.cloudinary.com/aman-anand/image/upload/v1583609736/shivBhairav2020/projects/anandVihar/project_gallary/5_f3nfzn.jpg',
			 'https://res.cloudinary.com/aman-anand/image/upload/v1583609732/shivBhairav2020/projects/anandVihar/project_gallary/6_hbgkzf.jpg',
			 'https://res.cloudinary.com/aman-anand/image/upload/v1583609732/shivBhairav2020/projects/anandVihar/project_gallary/7_cuvk8v.jpg',
			 'https://res.cloudinary.com/aman-anand/image/upload/v1583609733/shivBhairav2020/projects/anandVihar/project_gallary/8_jpjavo.jpg',
			 'https://res.cloudinary.com/aman-anand/image/upload/v1583609735/shivBhairav2020/projects/anandVihar/project_gallary/9_nuhl5x.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609737/shivBhairav2020/projects/anandVihar/project_gallary/10_i3hh0v.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609738/shivBhairav2020/projects/anandVihar/project_gallary/11_jrzskn.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609739/shivBhairav2020/projects/anandVihar/project_gallary/12_mpd9mb.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609737/shivBhairav2020/projects/anandVihar/project_gallary/13_zwumud.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609568/shivBhairav2020/projects/anandVihar/project_gallary/day_2-_1_n6tre4.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609563/shivBhairav2020/projects/anandVihar/project_gallary/day_2-_2_g0xil7.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609557/shivBhairav2020/projects/anandVihar/project_gallary/day_2-_3_ryghbe.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609599/shivBhairav2020/projects/anandVihar/project_gallary/day_2-_4_qll1w6.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609579/shivBhairav2020/projects/anandVihar/project_gallary/day_2-_5_ay072a.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609567/shivBhairav2020/projects/anandVihar/project_gallary/day_2-_6_ohmgeh.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609576/shivBhairav2020/projects/anandVihar/project_gallary/day_2-_7_iqrglm.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609621/shivBhairav2020/projects/anandVihar/project_gallary/day_2-_8_lkf0un.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609577/shivBhairav2020/projects/anandVihar/project_gallary/day_2-_9_lf2dos.jpg', 
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609621/shivBhairav2020/projects/anandVihar/project_gallary/day_2-_10_t4jx6k.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609588/shivBhairav2020/projects/anandVihar/project_gallary/day_2-_11_t4bzjc.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609603/shivBhairav2020/projects/anandVihar/project_gallary/day_2-_12_r54pkj.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609599/shivBhairav2020/projects/anandVihar/project_gallary/day_2-_13_dhpqr1.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609610/shivBhairav2020/projects/anandVihar/project_gallary/day_2-_14_r090mw.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609607/shivBhairav2020/projects/anandVihar/project_gallary/day_2-_15_bj6dpj.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609614/shivBhairav2020/projects/anandVihar/project_gallary/day_2-_16_q88qwc.jpg',
		 'https://res.cloudinary.com/aman-anand/image/upload/v1583609620/shivBhairav2020/projects/anandVihar/project_gallary/day_2-_17_ymtuot.jpg',
		 
		];
		 let k="day";
		 let p=1;
 		for (let i = 0; i < anandVihar_gallery.length; i++) {
			 // $('#project-gallery-images').append(`<div class="col-lg-4  p-3" >
			 if(i!==0 && i%7==0){
				 p++;
			 }
 			$(`#${k+p}`).append(`<div class="col-lg-4  p-3" >
                <a href="${anandVihar_gallery[i]}" target="_blank">
                <img src="${anandVihar_gallery[i]}"  class="project2-images" 
                style="width: 20rem;height: 20rem;object-fit: cover" alt="">
                </a>
            </div>`);
 		}
 	});


 	var fullHeight = function () {

 		$('.js-fullheight').css('height', $(window).height());
 		$(window).resize(function () {
 			$('.js-fullheight').css('height', $(window).height());
 		});

 	};
 	fullHeight();

 	// loader
 	var loader = function () {
 		setTimeout(function () {
 			if ($('#ftco-loader').length > 0) {
 				$('#ftco-loader').removeClass('show');
 			}
 		}, 1);
 	};
 	loader();

 	// Scrollax
 	$.Scrollax();

 	var carousel = function () {
 		$('.home-slider').owlCarousel({
 			loop: true,
 			autoplay: true,
 			margin: 0,
 			animateOut: 'fadeOut',
 			animateIn: 'fadeIn',
 			nav: false,
 			autoplayHoverPause: false,
 			items: 1,
 			navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
 			responsive: {
 				0: {
 					items: 1
 				},
 				600: {
 					items: 1
 				},
 				1000: {
 					items: 1
 				}
 			}
 		});
 		$('.carousel-testimony').owlCarousel({
 			autoplay: true,
 			center: true,
 			loop: true,
 			items: 1,
 			margin: 30,
 			stagePadding: 0,
 			nav: false,
 			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
 			responsive: {
 				0: {
 					items: 1
 				},
 				600: {
 					items: 1
 				},
 				1000: {
 					items: 3
 				}
 			}
 		});

 	};
 	carousel();

 	$('nav .dropdown').hover(function () {
 		var $this = $(this);
 		// 	 timer;
 		// clearTimeout(timer);
 		$this.addClass('show');
 		$this.find('> a').attr('aria-expanded', true);
 		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
 		$this.find('.dropdown-menu').addClass('show');
 	}, function () {
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
 	var scrollWindow = function () {
 		$(window).scroll(function () {
 			var $w = $(this),
 				st = $w.scrollTop(),
 				navbar = $('.ftco_navbar'),
 				sd = $('.js-scroll-wrap');

 			if (st > 150) {
 				if (!navbar.hasClass('scrolled')) {
 					navbar.addClass('scrolled');
 				}
 			}
 			if (st < 150) {
 				if (navbar.hasClass('scrolled')) {
 					navbar.removeClass('scrolled sleep');
 				}
 			}
 			if (st > 350) {
 				if (!navbar.hasClass('awake')) {
 					navbar.addClass('awake');
 				}

 				if (sd.length > 0) {
 					sd.addClass('sleep');
 				}
 			}
 			if (st < 350) {
 				if (navbar.hasClass('awake')) {
 					navbar.removeClass('awake');
 					navbar.addClass('sleep');
 				}
 				if (sd.length > 0) {
 					sd.removeClass('sleep');
 				}
 			}
 		});
 	};
 	scrollWindow();


 	var counter = function () {

 		$('#section-counter').waypoint(function (direction) {

 			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

 				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
 				$('.number').each(function () {
 					var $this = $(this),
 						num = $this.data('number');
 					console.log(num);
 					$this.animateNumber({
 						number: num,
 						numberStep: comma_separator_number_step
 					}, 7000);
 				});

 			}

 		}, {
 			offset: '95%'
 		});

 	}
 	counter();

 	var contentWayPoint = function () {
 		var i = 0;
 		$('.ftco-animate').waypoint(function (direction) {

 			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

 				i++;

 				$(this.element).addClass('item-animate');
 				setTimeout(function () {

 					$('body .ftco-animate.item-animate').each(function (k) {
 						var el = $(this);
 						setTimeout(function () {
 							var effect = el.data('animate-effect');
 							if (effect === 'fadeIn') {
 								el.addClass('fadeIn ftco-animated');
 							} else if (effect === 'fadeInLeft') {
 								el.addClass('fadeInLeft ftco-animated');
 							} else if (effect === 'fadeInRight') {
 								el.addClass('fadeInRight ftco-animated');
 							} else {
 								el.addClass('fadeInUp ftco-animated');
 							}
 							el.removeClass('item-animate');
 						}, k * 50, 'easeInOutExpo');
 					});

 				}, 100);

 			}

 		}, {
 			offset: '95%'
 		});
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
 			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
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