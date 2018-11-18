var main = function() {
	$(".preloader")
		.show()
		.delay(1000)
		.fadeOut(500);
	$(".main_image")
		.hide()
		.delay(1000)
		.fadeIn(500);
	$(".main_image_content_wrapper")
		.hide()
		.delay(1500)
		.show("clip", 500);
	$(".main_container")
		.hide()
		.delay(1000)
		.fadeIn(500);
	$(".nav_bar")
		.hide()
		.delay(1250)
		.fadeIn(500);

	// Fade in and out mobile navbar
	let listShown = false;
	$(".nav_menu_mobile_hamburger").click(function() {
		if (listShown) {
			$(".nav_menu_mobile").hide();
			listShown = !listShown;
		} else {
			$(".nav_menu_mobile").fadeIn(250);
			listShown = !listShown;
		}
	});

	// Scroll to view
	function goToByScroll(id) {
		// Remove "link" from the ID
		id = id.replace("_link", "");
		//Scroll
		$("html,body").animate(
			{
				scrollTop: $("#" + id).offset().top - 80
			},
			"slow"
		);
	}

	$(
		".nav_menu > div, .main_image_wrapper_link, .technologies_link, .nav_menu_mobile > div"
	).click(function(e) {
		e.preventDefault();
		let myClass = $(this).attr("class");
		goToByScroll(myClass);
	});

	// Scroll reveals
	$(".reveal_on_scroll").css("opacity", "0");
	$(".photo_of_me img").css("opacity", "0");
	$(".portfolio_container").css("opacity", "0");

	let scroll_pos = 0;
	let tech_pos = 0;
	let portfolio_pos = 0;

	$(window).on("scroll", function() {
		scroll_pos = $(window).scrollTop() + $(window).height();

		tech_pos = $(".reveal_on_scroll").offset().top + 200;

		// $(".Reveal-on-scroll").height();

		about_pos = $(".photo_of_me").offset().top + 200;
		// $(".Photo-of-me").height();

		portfolio_pos = $(".portfolio_container").offset().top + 200;
		// $(".Portfolio-container").height();

		if (scroll_pos > tech_pos - 50) {
			let i = 0;
			for (i = 1; i <= $(".technologies_list").children().length; i++) {
				$(".technologies_list li:nth-child(" + i + ")")
					.delay(250)
					.fadeTo(500, 1);
			}
		}

		if (scroll_pos > about_pos - 1) {
			$(".photo_of_me img").fadeTo(500, 1);
		}

		if (scroll_pos > portfolio_pos - 1) {
			$(".portfolio_container").fadeTo(500, 1);
		}
	});

	//Portfolio item hover text
	if ($(window).width() >= 1024) {
		$(".portfolio_object").hover(
			function() {
				// in
				$(this)
					.find(".portfolio_image_hover_wrapper")
					.show();
			},
			function() {
				// out
				$(this)
					.find(".portfolio_image_hover_wrapper")
					.hide();
			}
		);
	} else {
		$(".portfolio_image_hover_wrapper").show();
	}
};

$(document).on('pagecontainerload', main());
