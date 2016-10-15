$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});
$(document).ready(function() {
	// Header main-nav
	$('.main-nav li a').click(function(){
		$('a.active').removeClass('active');
		$(this).addClass('active');
	});

	// Owl-Carousel (screenshots)
	$('.screenshots-carousel').owlCarousel({
		loop:true,
		items:4,
		margin:30,
		dots:true,
		responsive: {
			0: {
				center:true,
				items:1.5,
				dots:false
			},
			600: {
				items:3,
				dots:true,
			},
			992: {
				items:4,
				dots:true,
			}
		}
	});
	$('.reviews-carousel').owlCarousel({
		loop:true,
		items:1,
		responsive: {
			0: {
				dots:false,
			},
			600: {
				dots:true,
			}
		}
	});
	$(function(){
		if($(window).width() <= 600) {
			$('.owl-carousel').parent().css('padding', '0');
		}
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});
