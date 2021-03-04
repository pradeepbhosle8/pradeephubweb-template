$(document).ready(function () {

    var swiper = new Swiper('.swiper-container-hero', {


        autoplay: {

            delay: 4000,
            disableOnInteraction: false,
        }
        , loop: true,
        pagination: {

        	el: '.swiper-pagination',
        	clickable: true,
        	
        }


    });

    var swiper2 = new Swiper('.swiper-container-offer', {
        autoplay: {

            delay: 3000,
            disableOnInteraction: false,
        }
        , loop: true,
        pagination: {

            el: '.swiper-pagination',
            clickable: true,

        },

    });

    var swiper3 = new Swiper('.swiper-mostvisite', {

        // init: false,

        autoplay: {

            delay: 3000,
            disableOnInteraction: false,
        }
        , loop: true,
        pagination: {

            el: '.swiper-pagination',
            clickable: true,

        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,

            },
            768: {
                slidesPerView: 2,

            },
            1024: {
                slidesPerView: 3,

            },
        }

    });

    var swiper4 = new Swiper('.swiper-container-dealers-items', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop:true,
        autoplay: {

            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320:{
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 3,
               
            },
            768: {
                slidesPerView: 4,
               
            },
            1024: {
                slidesPerView: 5,
               
            },
        }

    });



});