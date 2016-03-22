import svg4everybody from 'svg4everybody';


$(() => {
	svg4everybody();
});

$(document).ready(function() {


});

(function($) {
	"use strict";

	function dropdown(){


		let toggleBtn =$('.toggle-btn'),
			togglelist =$('.toggle-btn').next('.toggle-list'),
			that = $(this),
			parent = that.parent();

		if (parent.hasClass('disabled')){
			return;
		}

		parent.toggleClass('open');

		function hideClick(e) {
			let target = e.target;
			if (!$(target).is('.toggle-btn') && !$(target).parents().is('.toggle-list')) {
				parent.removeClass('open');
				$(document).off('click',hideClick);
			}

		}

		function hideResize(e) {
			parent.removeClass('open');
			$(window).off('resize.drop');
		}

		$(document).off('click',hideClick);
		$(window).off('resize.drop');

		if (parent.hasClass('open')){
			$(document).on('click',hideClick)
			$(window).on('resize.drop',hideResize);
			}

	}

	$('.toggle-btn').on('click', dropdown);

	/*tabs*/
	$('.tab-link').on('click', function(e){
		e.preventDefault();
		var tabs = $(this).closest('.tabs'),
			item = $(this).closest('.tab-item'),
			itemContent = tabs.find('.tab-content'),
			itemPosition = $(this).attr('href');

		itemContent.filter('' + itemPosition)
			.add(item)
			.addClass('active-tab')
			.siblings()
			.removeClass('active-tab');
	});

	//dot-dot-dot
	function dots(selector,max){
		var productText = $(selector);
		const maxLength = max;
		for (let i = 0; i < productText.length; i++){

			let text = productText[i].innerText;
			let result = truncate(text, maxLength);
			productText[i].innerText = result;
		}
		function truncate(str, maxlength) {
			return (str.length > maxlength) ?
			str.slice(0, maxlength - 3) + '...' : str;
		}
	}
	dots('.product__text',38);
	dots('.product-side__text-link',42);


}(jQuery));


$(document).ready(function() {

	var owl =$(".sort-products__list");

	owl.owlCarousel({
		items: 4, //10 items above 1000px browser width
		navigation : true,
		navigationText : ["",""]
/*		itemsDesktop: [1000, 5], //5 items between 1000px and 901px
		itemsDesktopSmall: [900, 3], // betweem 900px and 601px
		itemsTablet: [600, 2], //2 items between 600 and 0
		itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option*/
	});


});






