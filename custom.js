/* eslint-disable no-undef */

$(function () {

	if ($(window).width() > 950) {
		if (!$('#MainBody').hasClass('offcanvas-menu-cart')) {
			$('#MainBody').addClass('offcanvas-menu-cart');
		}
        if (!$('.site-mobile-menu-cart-close').hasClass('d-none')) {
			$('.site-mobile-menu-cart-close').addClass('d-none');
		}
	}

	if ($(window).width() < 950) {
		if ($('.site-mobile-menu-cart-close').hasClass('d-none')) {
			$('.site-mobile-menu-cart-close').removeClass('d-none');
		}
	}

	if (JSON.parse(localStorage.cartData).length === 0) {
		if ($('#MainBody').hasClass('offcanvas-menu-cart')) {
			$('#MainBody').removeClass('offcanvas-menu-cart');
		}
	}
	
	var siteMenuClone = function () {
		$('#MainBody').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 950) {
				if ($('#MainBody').hasClass('offcanvas-menu')) {
					$('#MainBody').removeClass('offcanvas-menu');
				}
			}
		})
		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 950) {
				$('.site-mobile-menu-cart-close').addClass('d-none');
				if (!$('#MainBody').hasClass('offcanvas-menu-cart')) {
					if (JSON.parse(localStorage.cartData).length > 0){
						$('#MainBody').addClass('offcanvas-menu-cart');
					}
				}
			} else {
				if ($('.site-mobile-menu-cart-close').hasClass('d-none')) {
					$('.site-mobile-menu-cart-close').removeClass('d-none');
				}
				if ($('#MainBody').hasClass('offcanvas-menu-cart')) {
					$('#MainBody').removeClass('offcanvas-menu-cart');
				}
			}
		})

		$('#MainBody').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('#MainBody').hasClass('offcanvas-menu')) {
				$('#MainBody').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('#MainBody').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		$('#MainBody').on('click', '.js-menu-toggle-cart', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('#MainBody').hasClass('offcanvas-menu-cart')) {
				$('#MainBody').removeClass('offcanvas-menu-cart');
				$this.removeClass('active');
			} else {
				$('#MainBody').addClass('offcanvas-menu-cart');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('#MainBody').hasClass('offcanvas-menu')) {
					$('#MainBody').removeClass('offcanvas-menu');
				}
			}
		});
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu-cart");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($(window).width() < 950) {
					if ($('#MainBody').hasClass('offcanvas-menu-cart')) {
						$('#MainBody').removeClass('offcanvas-menu-cart');
					}
				}
			}
		});
	};
	siteMenuClone();

});

//Cards reveal function
function reveal() {
    var reveals = document.querySelectorAll('.reveal')
    for(var i=0; i< reveals.length;i++){
        var windowHeight=window.innerHeight
        var revealTop = reveals[i].getBoundingClientRect().top
        var revealPOint=-100
        
        if (revealTop < windowHeight - revealPOint) {
            reveals[i].classList.add('active')
        }
    }
}
reveal()

window.addEventListener('scroll',reveal)