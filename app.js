var main = function() {
	window.onload = function() {
		// Load views
		$(".Preloader")
			.show()
			.delay(500)
			.fadeOut(500);
		$(".Main-image")
			.hide()
			.delay(1000)
			.fadeIn(500);
		$(".Main-image-content-wrapper")
			.hide()
			.delay(1500)
			.show("clip", 500);
		$(".Main-container")
			.hide()
			.delay(1000)
			.fadeIn(500);
		$(".Nav-bar")
			.hide()
			.delay(1250)
			.fadeIn(500);

		// Fade in and out mobile navbar
		let listShown = false;
		$(".Nav-menu-mobile-hamburger").click(function() {
			if (listShown) {
				$(".Nav-menu-mobile").hide();
				listShown = !listShown;
			} else {
				$(".Nav-menu-mobile").fadeIn(250);
				listShown = !listShown;
			}
		});

		// Scroll to view
		function goToByScroll(id) {
			// Remove "link" from the ID
			id = id.replace("-link", "");
			//Scroll
			$("html,body").animate(
				{
					scrollTop: $("#" + id).offset().top - 80
				},
				"slow"
			);
		}

		$(
			".Nav-menu > div, .Main-image-wrapper-link, .Technologies-link, .Nav-menu-mobile > div"
		).click(function(e) {
			e.preventDefault();
			let myClass = $(this).attr("class");
			goToByScroll(myClass);
		});

		// Scroll reveals
		$(".Reveal-on-scroll").css("opacity", "0");
		$(".Photo-of-me img").css("opacity", "0");
		$(".Portfolio-container").css("opacity", "0");

		let scroll_pos = 0;
		let tech_pos = 0;
		let portfolio_pos = 0;

		$(window).on("scroll", function() {
			scroll_pos = $(window).scrollTop() + $(window).height();

			tech_pos = $(".Reveal-on-scroll").offset().top + 200;

			// $(".Reveal-on-scroll").height();

			about_pos = $(".Photo-of-me").offset().top + 200;
			// $(".Photo-of-me").height();

			portfolio_pos = $(".Portfolio-container").offset().top + 200;
			// $(".Portfolio-container").height();

			if (scroll_pos > tech_pos - 50) {
				let i = 0;
				for (
					i = 1;
					i <= $(".Technologies-list").children().length;
					i++
				) {
					$(".Technologies-list li:nth-child(" + i + ")")
						.delay(250)
						.fadeTo(500, 1);
				}
			}

			if (scroll_pos > about_pos - 1) {
				$(".Photo-of-me img").fadeTo(500, 1);
			}

			if (scroll_pos > portfolio_pos - 1) {
				$(".Portfolio-container").fadeTo(500, 1);
			}
		});

		//Portfolio item hover text
		if ($(window).width() >= 1024) {
			$(".Portfolio-object").hover(
				function() {
					// in
					$(this)
						.find(".Portfolio-image-hover-wrapper")
						.show();
				},
				function() {
					// out
					$(this)
						.find(".Portfolio-image-hover-wrapper")
						.hide();
				}
			);
		} else {
			$(".Portfolio-image-hover-wrapper").show();
		}
	};
};

$(document).ready(main);
