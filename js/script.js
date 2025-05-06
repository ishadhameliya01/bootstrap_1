$(document).ready(function(){
    $("#slider").owlCarousel({
        items:1,
        nav:false,
        dots:true,
        margin:0,
        center:true,
        loop:true
    });

    var owl = $('#slider');
    owl.owlCarousel();
    owl.on('changed.owl.carousel', function(event) {
        new WOW().init();
    })
    new WOW().init();
    AOS.init();



    //services slider
    $("#testimonial").owlCarousel({
            items: 1,
            nav:true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            margin:0,  
            responsive: {
                0: {
                  items: 1
                },
                768: {
                  items: 2
                },
                992: {
                  items: 3
                }
            }
    });

    $("#project").owlCarousel({
        items: 1,
        nav:true,
        loop: true,
        dots:false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        margin:20,  
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            1000:{
                items:3
            }
        }
    });

    $("#testimonial2").owlCarousel({
        items: 1,
        nav:false,
        loop: true,
        dots:false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        margin:20,  
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            },
            1000:{
                items:2
            }
        }
    });

    $("#brand").owlCarousel({
        items: 5,
        nav:false,
        loop: true,
        dots:false,
        margin:0,  
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            1000:{
                items:5
            }
        }
    });

    $("#brand_slider").owlCarousel({
        items: 5,
        nav:false,
        loop: true,
        dots:false,
        margin:20,  
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            1000:{
                items:5
            }
        },
    });


    // scroll to top

    $('#scrollToTopBtn').hide();
    $('#scrollToTopBtn').click(function(){
        $('html,body').animate({scrollTop:0},300)
    })


    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        if (scrollPos > 150) {
            $('#mainHeader').addClass('fixed_header');
            $('body').addClass('fixed-header-padding');
            $('#scrollToTopBtn').fadeIn();
        } else {
            $('#mainHeader').removeClass('fixed_header');
            $('body').removeClass('fixed-header-padding');
            $('#scrollToTopBtn').fadeOut();
        }
    });
    

    

    
  });
