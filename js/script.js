$('.single-item').slick({
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});
$(document).ready(function () {
	$('.burger-menu').click(function (e) {
		$('.menu').toggleClass('active');
		$('.burger-menu').toggleClass('active');
	});
	$('a', $('.asks-link')).click(function (e) {
		e.preventDefault();
	});
	$('.asks-link').click(function () {
		$('.submenu', this).slideToggle();
		$('i', this).toggleClass('deg');
	})
});