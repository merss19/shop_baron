import svg4everybody from 'svg4everybody';


$(() => {
	svg4everybody();
});





$(document).ready(function() {

    //menu
    $('.auth-block').on('shown.bs.dropdown', function () {
        let self = $(this);

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
        if(!$(e.target).hasClass('cart__view-cart')&&!$(e.target).hasClass('cart__checkout')){
            e.preventDefault();
            e.stopPropagation();
        }
    }).on('click','.cart__delete', function () {
        console.log('del');
            let $this = $(this),
                list = $this.closest('.cart__list'),
                items = list.find('.cart__item');

            $this.closest('.cart__item ').remove();

            if(items.length==1){
                $this.closest('.cart__item ').remove();
                list.addClass('hide');
                $('.cart__empty').removeClass('hide');
            }
    });

    //cart-page
    $('.products-table__amount-delete').on('click',function(){
        let body = $(this).closest('tbody'),
            cart = $(this).closest('.checkout-cart'),
            trCount = body.find('tr');

        $(this).closest('tr').remove();
            footerBottom();

            if(trCount.length==1){
                cart.find('.checkout-cart__products').addClass('hide');
                cart.find('.checkout-cart__total').addClass('hide');
                cart.find('.checkout-cart__empty ').removeClass('hide');
            }
    });

    //call-back
    $('.call-back-phone').inputmask("+7-(999)-99-99"); //static mask

    $('.call-back__info-item').on('input',function(){
        let name = $('.call-back-name').val();
            if ($('.call-back-phone').inputmask("isComplete")&&!!name){
                $('.call-back__btn').prop("disabled", false);
            }else{
                $('.call-back__btn').prop("disabled", true);
            }

        });



    //slider
    let slider =$(".slider__list");

    slider.owlCarousel({
        pagination : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });

    $(".slider .owl-btns__next").click(function(){
        slider.trigger('owl.next');
    });
    $(".slider .owl-btns__prev").click(function(){
        slider.trigger('owl.prev');
    });

    //products slider

	let products =$(".sort-products__list");

    products.owlCarousel({
		items: 4
	});

    $(".sort-products .owl-btns__next").click(function(){
        products.trigger('owl.next');
    });
    $(".sort-products .owl-btns__prev").click(function(){
        products.trigger('owl.prev');
    });

	//side bar
    let side =$(".side-products__list");

    side.owlCarousel({
        items: 1,
        pagination : false,
        singleItem:true
    });

    $(".owl-btns__next").click(function(){
        let $this = $(this),
            parent = $this.closest('.owl-btns'),
            carousel = parent.siblings('.owl-carousel');
        carousel.trigger('owl.next');
    });
    $(".owl-btns__prev").click(function(){
        let $this = $(this),
            parent = $this.closest('.owl-btns'),
            carousel = parent.siblings('.owl-carousel');
        carousel.trigger('owl.prev');
    });

    //brends
    $('.brends').mouseover(function(){

        $(".brends__next").removeClass('hide');
        $(".brends__prev").removeClass('hide');
    }).mouseout(function(){
        $(".brends__next").addClass('hide');
        $(".brends__prev").addClass('hide');
    });

   let brends =$(".brends__list");

    brends.owlCarousel({
        items: 6,
        pagination : false
    });

    $(".brends__next").click(function(){
        brends.trigger('owl.next');
    });
    $(".brends__prev").click(function(){
        brends.trigger('owl.prev');
    });


	//gallery
    $('.gallery__items ').mouseover(function(e){

	   let target = e.target,
           gallery = target.closest('.gallery'),
           img = $(gallery),
           imageMain = img.find('.gallery__main-img'),
           imageMainSrc = imageMain.attr('src'),
           targetSrc = $(target).attr('src');

           imageMain.attr('src',targetSrc);

   });

	$('.gallery__main').on('click',function(){
		let gallery = $('.gallery-modal');
            gallery.removeClass('hidden');

		let thumbnails = $('.gallery-modal__thumbnails');


        $(gallery).on('click',function(e){
			let target = e.target,
                preview = $('.gallery-modal__preview-img'),
                previewSrc = $(preview).attr('src'),
                targetClass = $(target).attr('class');

			if (targetClass == 'gallery-modal__thumbnails-images'){
				let targetSrc = $(target).attr('src');
				preview.attr('src',targetSrc);

			}else if(targetClass == 'gallery-modal__preview-img'){

			}else{
				gallery.addClass('hidden');
			}

		})

	});

    /*tabs*/
    $('.tab-link').on('click', function(e){
        e.preventDefault();

        let tabs = $(this).closest('.tabs'),
            item = $(this).closest('.tab-item'),
            itemContent = tabs.find('.tab-content'),
            itemPosition = $(this).attr('href');

        itemContent.filter('' + itemPosition)
            .add(item)
            .addClass('active-tab')
            .siblings()
            .removeClass('active-tab');
    });

    //filter

    let filters = [
        {
            "head": "Цена",
            "id": "price",
            "from": 2320,
            "to": "209400"
        },
        {
            "head": "Длина",
            "id": "len",
            "from": "20",
            "to": "150"
        },
        {
            "head": "Ширина",
            "id": "width",
            "from": "4",
            "to": "20"
        },
        {
            "head": "Высота",
            "id": "higth",
            "from": "22",
            "to": "120"
        }
    ];



        let filterLen = filters.length;
        for(let i=0; i < filterLen; i++){
             let filter = $('#'+filters[i].id);
                    console.log(filter);
             filter.ionRangeSlider({
                     type: "double",
                     grid: false,
                     min: filters[i].from,
                     max: filters[i].to,
                     hide_min_max:true,
                     hide_from_to:true,
                     onStart: function (data) {
                     let from = filter.parent().find('.filter__from'),

                     to = filter.parent().find('.filter__to');
                     from.text(data.min);
                     to.text(data.max);
                 }
             });


            filter.on("change", function () {
                let $this = $(this),
                    value = $this.prop("value").split(";"),
                    from = $this.parent().find('.filter-item__from'),
                    to = $this.parent().find('.filter-item__to');

                from.text(value[0]);
                to.text(value[1]);
            });
     }

    //footer
    function footerBottom(){

        let windowHeight = $(window).outerHeight(),
            htmlHeight = $('html').outerHeight(),
            headerHeight = $('.header').outerHeight(),
            contentHeight = $('.content').outerHeight(),
            footerHeight = $('.footer').outerHeight(),
            h = windowHeight - headerHeight - footerHeight;

        if(htmlHeight < windowHeight){
            $('.content').height(h);
            console.log(windowHeight+'-'+htmlHeight);
            console.log('m');
        }
    }
    footerBottom();

    $(window).on("resize",function(){
        footerBottom();
    });

    //dot-dot-dot
    function dots(selector,max){
        let productText = $(selector),
            productTextLen =productText.length;
        const maxLength = max;

        for (let i = 0; i < productTextLen; i++){

            let text = productText[i].innerText,
                arrow = '<a class="more-arrow fa fa-long-arrow-right"></a>',
                result = truncate(text, maxLength);
            productText[i].innerText = result;
            $(productText[i]).append(arrow);
        }
        function truncate(str, maxlength) {
            return (str.length > maxlength) ?
            str.slice(0, maxlength - 3) + '...' : str;
        }
    }
    dots('.product__text',42);
    dots('.product-side__text-link',34);
    dots('.arts__item-desc',282);
    dots('.breadcrumb__link:not(:first-of-type)',40);

});
