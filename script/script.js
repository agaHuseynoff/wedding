$(function () {
    /*******************************
     ******Menu***********
     *******************************/

    $('.btn-nav').on('click', function () {
        $(this).toggleClass('btn_nav_active');
        $('header').find('nav').toggleClass('active-nav');

        if ($('header').find('nav').hasClass('active-nav')) {
            $('header').find('nav').animate({
                right: '0%'
            })
        } else {
            $('header').find('nav').animate({
                right: '-100%'
            })
        }
    });

    /*******************************
     ******Carousel About***********
     *******************************/

    var action = false,
        clicked = false;
    var Owl = {

        init: function () {
            Owl.carousel();
        },

        carousel: function () {
            var owl;
            $(document).ready(function () {

                owl = $('.aboutCarousel').owlCarousel({
                    items: 1,
                    center: true,
                    nav: true,
                    dots: true,
                    loop: true,
                    margin: 10,
                    dotsContainer: '.test-about',
                    navText: ['prev', 'next'],
                });

                $('.owl-next').on('click', function () {
                    action = 'next';
                });

                $('.owl-prev').on('click', function () {
                    action = 'prev';
                });

                $('.bookmarks-about').on('click', 'li', function (e) {
                    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
                });
            });
        }
    };

    $(document).ready(function () {
        Owl.init();
    });



});

$(function () {
    /*******************************
     ******Carousel Team***********
     *******************************/

    var action = false,
        clicked = false;
    var Owl = {

        init: function () {
            Owl.carousel();
        },

        carousel: function () {
            var owl;
            $(document).ready(function () {

                owl = $('.teamCarousel').owlCarousel({
                    items: 1,
                    center: true,
                    nav: false,
                    dots: false,
                    loop: true,
                    margin: 10,
                    dotsContainer: '.test-team',
                    navText: ['prev', 'next'],
                });

                $('.owl-next').on('click', function () {
                    action = 'next';
                });

                $('.owl-prev').on('click', function () {
                    action = 'prev';
                });

                $('.bookmarks-team').on('click', 'li', function (e) {
                    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
                });
            });
        }
    };

    $(document).ready(function () {
        Owl.init();
    });

})

$(function () {
    /*******************************
     ******Carousel Reviews***********
     *******************************/

    var action = false,
        clicked = false;
    var Owl = {

        init2: function () {
            Owl.carousel();
        },

        carousel: function () {
            var owl;
            $(document).ready(function () {

                owl = $('.reviewsCarousel').owlCarousel({
                    items: 1,
                    center: true,
                    nav: true,
                    dots: true,
                    loop: true,
                    margin: 10,
                    dotsContainer: '.test-reviews',
                    navText: ['prev', 'next'],
                });

                $('.owl-next').on('click', function () {
                    action = 'next';
                });

                $('.owl-prev').on('click', function () {
                    action = 'prev';
                });

                $('.bookmarks-reviews').on('click', 'li', function (e) {
                    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
                });
            });
        }
    };

    $(document).ready(function () {
        Owl.init2();
    });

})

$(function () {
    /*******************************
     ******Carousel lead diary***********
     *******************************/

    if (window.matchMedia('(min-width: 1920px)').matches) {
        $('.leadDiaryCarousel').owlCarousel({
            items: 4,
            loop: false,
            center: true,
            margin: 20,
            nav: true,
            dots: false,
            URLhashListener: true,
            autoplayHoverPause: true,
            startPosition: 'URLHash'
        });
    } else {

        $('.leadDiaryCarousel').owlCarousel({
            items: 3,
            loop: false,
            center: true,
            margin: 20,
            nav: true,
            dots: false,
            URLhashListener: true,
            autoplayHoverPause: true,
            startPosition: 'URLHash'
        });
    }


    $('.leadDiaryCarousel .owl-next span').text('');
    $('.leadDiaryCarousel .owl-prev span').text('');
});


$(function () {
    /*******************************
     ******Carousel photo video***********
     *******************************/

        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
            centerMode: true,

        });
        $('.slider-nav').slick({
            slidesToShow: 1.66,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            centerMode: true,
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            dots: false
        });
    
    
    $('.photo_video span').click(function() {
        if($(this).closest('.photo_video').find('.active')){
            $(this).closest('.photo_video').find('.active').removeClass('active');
            $(this).addClass('active');
        }
    })

});
