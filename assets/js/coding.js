
$(document).ready(function() {

    // set primary nav fixed when scroll
    $(window).scroll(function() {
        if($(window).scrollTop() > 80) {
            $('.topNav nav').css({
                'background-color': 'hsla(223, 59%, 27%, .8)',
                'backdrop-filter': 'saturate(180%) blur(15px)'
            })
        }else {
            $('.topNav nav').css({
                'background-color': 'hsla(223, 59%, 27%, 1)',
                'backdrop-filter': 'none'
            })
        }
    })


    function openNav() {
        $('aside.sideNavLeft').animate({
            'right': 0
        }, 600)
        $('.blur').fadeIn();
    }

    function closeNav() {
        $('aside.sideNavLeft').animate({
            'right': '-500px'
        }, 500)
        $('.blur').fadeOut();
    }

    function openNav_f() {
        $('aside.sideNavRight').animate({
            'left': 0
        }, 400)
    }

    function closeNav_f() {
        $('aside.sideNavRight').animate({
            'left': '-500px'
        }, 500)
    }

    // hover on nav Links
    // $('.dropdown').hover(
    //     function() {
    //         $(this).addClass('show');
    //         if($(this).hasClass('show')) {
    //             $(this).find('.dropdown-menu ').addClass('show');
    //         }
    //     },  function() {
    //         $(this).removeClass('show');
    //         if(!$(this).hasClass('show')) {
    //             $(this).find('.dropdown-menu ').removeClass('show');
    //         }
    //     }
    // );

    $('#tabs li .list-group .list-group-item').click(function(e){  
        e.preventDefault();

        $('#tab1C').show();
        $('#tab2C').show();
        $('#tab3C').hide();
        $('#tab4C').hide();
        $('.welcome').hide();

        if (window.matchMedia('(max-width: 1170px)').matches) {
            closeNav();
        }
    });

    $('#tabs li a').click(function(e){
        e.preventDefault();
        // var getId = $(this).attr('id');
    
        // $('#'+getId+'C').show().siblings().hide();
        // $('.welcome').hide();

        // if (window.matchMedia('(max-width: 1024px)').matches) {
        //     closeNav();
        // }
    });

    $('#tabs .nav-item').on('click', function() {
        $(this).find('.list-group').slideToggle();
    });

    $('#tabs li').on('click', function() {
        $(this).addClass('active').siblings('li').removeClass('active');
    })

    $('#service-btn').on('click', function() {
        openNav();
    })

    $('#colse-service-btn').on('click', function() {
        closeNav();
    })
    $('.blur').on('click', function() {
        closeNav();
    })

    $('#featured-btn').on('click', function() {
        openNav_f();
    })
    $('#colse-featured-btn').on('click', function() {
        closeNav_f();
    })
})

