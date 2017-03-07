// @prepros-prepend ../../../bower_components/jquery/dist/jquery.min.js
// @prepros-prepend ../../../bower_components/jquery-ui/jquery-ui.min.js
// @prepros-prepend ../../../bower_components/tether/dist/js/tether.min.js
// @prepros-prepend ../../../bower_components/bootstrap/dist/js/bootstrap.min.js

;(function($) {

$(document).ready(function() {

	var overallHeight = $(window).height();
	var overallWidth = $(window).width();

	$(window).resize(function() {
		overallHeight = $(window).height();
		overallWidth = $(window).width();
	});

	// MENU TOGGLE
	$('.menuToggle').click(function() {
		$('.mainNav, .mainShade').toggleClass('on');
		$('body').toggleClass('stuck');
	});

	$('.mainShade, .mainNavClose').click(function() {
		$('.mainShade').toggleClass('on');
		$('.mainNav').toggleClass('on');
		$('body').toggleClass('stuck');
	});

	$(window).resize(function() {
		$('.mainShade').removeClass('on');
		$('.mainNav').removeClass('on');
		$('body').removeClass('stuck');
	});

	// STICKY NAV
	var navTop = $('.mainNav').offset().top;
	var navHeight = $('.mainNav').outerHeight();
	$('.mainNavShim').height(navHeight);
	var scroll = $(window).scrollTop();

	$(window).scroll(function() {
		if (overallWidth >= 992) {
			navHeight = $('.mainNav').outerHeight();
		}
		scroll = $(window).scrollTop();
		doSticky();
	});

	$(window).resize(function() {
		if (overallWidth >= 992) {
			navHeight = $('.mainNav').outerHeight();
		}
	});

	function doSticky() {
		if (overallWidth >= 992) {
			$('.mainNavShim').height(navHeight);
			if (scroll >= navTop) {
				$('.mainNav').addClass('fixed');
				$('.mainNavShim').addClass('on');
				$('.logo').addClass('shrunk');
			} else {
				$('.mainNav').removeClass('fixed');
				$('.mainNavShim').removeClass('on');
				$('.logo').removeClass('shrunk');
			}
		}
	}
	doSticky();

	// HOME PAGE NAV
	if ($('.mastheadHome').length) {
		if (overallWidth >=992) {
			$('.mainNav').insertAfter('.mastheadHome');
		} else {
			$('.mainNav').appendTo('.headerInner');
		}
		navTop = $('.mainNav').offset().top;
	}

	// NAV SETUP
	function navDrops() {
		$('.mainNav > ul li').each(function() {
			if ($('> ul', this).length) {
				$(this).addClass('hasChildren').append('<div class="navDropToggle"></div>');
			}
		});
	}
	navDrops();

	$('.navDropToggle').click(function() {
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			$(this).parent().find('> ul').slideUp();
		} else {
			$(this).addClass('on');
			$(this).parent().find('> ul').slideDown();
		}
	});

	$('.mainNav > ul li.hasChildren').hover(function() {
		$('> ul', this).stop().slideDown(400, 'easeOutQuad');
	}, function() {
		$('> ul', this).stop().slideUp('fast', 'easeOutQuint');
	});

	// NAV SOCIAL SET UP
	var socialCount = $('.navSocial li').length;

	function navSocialSetup() {
		if (socialCount > 3 && overallWidth >= 992) {
			$('.navSocial .hasMore').addClass('on');
			$('.navSocial ul li:gt(2)').appendTo('.navSocialMore');
		} else {
			$('.navSocial .hasMore').removeClass('on');
			$('.navSocialMore li').appendTo('.navSocial ul');
		}
	}
	navSocialSetup();

	$(window).resize(function() {
		navSocialSetup();
	});

	$('.navSocial .hasMore').hover(function() {
		$('.navSocialMore').show();
		$(this).addClass('active');
	}, function() {
		$('.navSocialMore').hide();
		$(this).removeClass('active');
	});

	// TOP ACTIONS
	$('.topActionTab > span').click(function() {
		if ($(this).parent().hasClass('on') && !$('.mastheadHome').length) {
			$('.topActionContent').removeClass('on');
			$(this).parent().removeClass('on');
		} else if ($(this).parent().hasClass('on') && overallWidth < 992) {
			$('.topActionContent').removeClass('on');
			$(this).parent().removeClass('on');
		} else if ($(this).parent().hasClass('login')) {
			$('.topActionContent.find').removeClass('on');
			$('.topActionContent.login').addClass('on');
			$('.topActionTab').removeClass('on');
			$(this).parent().addClass('on');
		} else if ($(this).parent().hasClass('find')) {
			$('.topActionContent.login').removeClass('on');
			$('.topActionContent.find').addClass('on');
			$('.topActionTab').removeClass('on');
			$(this).parent().addClass('on');
		}
	});

	function handleMastheadHome() {
		if ($('.mastheadHome').length) {
			$('.topAction').addClass('home');

			if (overallWidth >= 992) {
				if (!$('.topActionTab.find').hasClass('on')) {
					$('.topActionTab').first().addClass('on');
					$('.topActionTab').first().find('.topActionContent').addClass('on');
				}
			} else {
				$('.topActionContent').removeClass('on');
				$('.topActionTab').removeClass('on');
			}
		} else {
			$('.topActionContent').removeClass('on');
			$('.topActionTab').removeClass('on');
		}
	}
	handleMastheadHome();

	$(window).resize(function() {
		handleMastheadHome();
	});

	// CIRCLE LINKS
	$('.circleLink').hover(function() {
		$(this).addClass('on');
	}, function() {
		$(this).removeClass('on');
	});

});

$(window).on('load', function() {


});

})(jQuery);
