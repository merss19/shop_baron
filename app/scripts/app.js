import svg4everybody from 'svg4everybody';


$(() => {
	svg4everybody();
});





$(document).ready(function() {

    //menu
    $('.auth-block').on('shown.bs.dropdown', function () {
        var self = $(this);
       function hideResize(){
        let width = $(window).width();
           if(width > 745){
               self.removeClass('open');
           }
        };
        $(window).on('resize.drop',hideResize);
    });

	//cart
	$('.cart__content').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log(4444);
    });

    //call-back
    $(document).ready(function(){

        $('.call-back-phone').inputmask("+7-(999)-99-99"); //static mask

        $('.call-back__info-item').on('input',function(){
            let name = $('.call-back-name').val();
                if ($('.call-back-phone').inputmask("isComplete")&&!!name){
                    $('.call-back__btn').prop("disabled", false);
                }else{
                    $('.call-back__btn').prop("disabled", true);
                }

            });
    });


    //slider
    var slider =$(".slider__list");
    slider.owlCarousel({
        pagination : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    $(".slider .owl-btns__next").click(function(){
        slider.trigger('owl.next');
    });
    $(".slider .owl-btns__prev").click(function(){
        slider.trigger('owl.prev');
    });

    //products

	var owl =$(".sort-products__list");

	owl.owlCarousel({
		items: 4, //10 items above 1000px browser width
/*		itemsDesktop: [1000, 5], //5 items between 1000px and 901px
		itemsDesktopSmall: [900, 3], // betweem 900px and 601px
		itemsTablet: [600, 2], //2 items between 600 and 0
		itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option*/
	});

    $(".sort-products .owl-btns__next").click(function(){
        owl.trigger('owl.next');
    });
    $(".sort-products .owl-btns__prev").click(function(){
        owl.trigger('owl.prev');
    });

	//side bar
    var side =$(".side-products__list");
    side.owlCarousel({
        items: 1,
        pagination : false,
        singleItem:true//10 items above 1000px browser width
        /*		itemsDesktop: [1000, 5], //5 items between 1000px and 901px
         itemsDesktopSmall: [900, 3], // betweem 900px and 601px
         itemsTablet: [600, 2], //2 items between 600 and 0
         itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option*/
    });

    $(".owl-btns__next").click(function(){
        var $this = $(this),
            parent = $this.closest('.owl-btns'),
            carousel = parent.siblings('.owl-carousel');
        carousel.trigger('owl.next');
    });
    $(".owl-btns__prev").click(function(){
        var $this = $(this),
            parent = $this.closest('.owl-btns'),
            carousel = parent.siblings('.owl-carousel');
        carousel.trigger('owl.prev');
    });

    //brends
    $('.brends').mouseover(function(){
        console.log('prev');
        $(".brends__next").removeClass('hide');
        $(".brends__prev").removeClass('hide');
    }).mouseout(function(){
        $(".brends__next").addClass('hide');
        $(".brends__prev").addClass('hide');
    });

    var brends =$(".brends__list");
    brends.owlCarousel({
        items: 6,
        pagination : false,//10 items above 1000px browser width
        /*		itemsDesktop: [1000, 5], //5 items between 1000px and 901px
         itemsDesktopSmall: [900, 3], // betweem 900px and 601px
         itemsTablet: [600, 2], //2 items between 600 and 0
         itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option*/
    });

    $(".brends__next").click(function(){
        brends.trigger('owl.next');
    });
    $(".brends__prev").click(function(){
        brends.trigger('owl.prev');
    });




    $('.gallery__items ').mouseover(function(e){
	   console.log($('.gallery-modal'));
	   let target = e.target;
	   let gallery = target.closest('.gallery');
	   let img = $(gallery);
	   let imageMain = img.find('.gallery__main-img');
	   let imageMainSrc = imageMain.attr('src');
	   let targetSrc = $(target).attr('src');
	   imageMain.attr('src',targetSrc);

   });

	$('.gallery__main').on('click',function(){
		let gallery = $('.gallery-modal');
		gallery.removeClass('hidden');

		let thumbnails = $('.gallery-modal__thumbnails');
		console.log(thumbnails);

		$(gallery).on('click',function(e){
			let target = e.target;
			let preview = $('.gallery-modal__preview-img');
			let previewSrc = $(preview).attr('src');
			let targetClass = $(target).attr('class');

			if (targetClass == 'gallery-modal__thumbnails-images'){
				let targetSrc = $(target).attr('src');
				preview.attr('src',targetSrc);
				console.log(previewSrc);
			}else{
				gallery.addClass('hidden');
			}

		})

	});

	$("#sl").ionRangeSlider({
		type: "double",
		grid: true,
		min: 0,
		max: 1000,
		from: 200,
		to: 800,
		prefix: "P"
	});

	//$("#price").ionRangeSlider();
});





(function($) {
	"use strict";

	function dropdown(){


		let toggleBtn =$('.toggle-btn'),
			togglelist =toggleBtn.next('.toggle-list'),
			that = $(this),
			parent = that.parent();

		if (parent.hasClass('disabled')){
			return;
		}
		if (that.hasClass('filter__form-top')){
			if(!that.hasClass('filter-drop')){
				that.addClass('filter-drop');
			}else{
				that.removeClass('filter-drop');
			}
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

		/*if (parent.hasClass('open')){
			$(window).on('resize.drop',hideResize);
		}*/
		/*var item = new Slider('.slider');*/
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
	function dots(selector,max,bool){
		var productText = $(selector);
		const maxLength = max;
		for (let i = 0; i < productText.length; i++){

			let text = productText[i].innerText,
                arrow = '<a class="more-arrow fa fa-long-arrow-right"></a>',
                result = truncate(text, maxLength);
			productText[i].innerText = result;
            if(!bool){
                $(productText[i]).append(arrow);
            }

		}
		function truncate(str, maxlength) {
			return (str.length > maxlength) ?
			str.slice(0, maxlength - 3) + '...' : str;
		}
	}
	dots('.product__text',34);
	dots('.product-side__text-link',34);
    dots('.arts__item-desc',180);
    dots('.breadcrumb__link:not(:first-of-type)',40,true);


}(jQuery));
