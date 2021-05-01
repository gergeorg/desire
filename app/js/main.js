$(function () {
    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });

    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay:true,
        autoplaySpeed:3500,
    });


    $('.contacts-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
    });

    $('.article-slider__box').slick({
      prevArrow: '<button type="button" class="article-slider__btn article-slider__prev btn"></button>',
      nextArrow: '<button type="button" class="article-slider__btn article-slider__next btn"></button>',
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.category-office'
        }
    });
})

