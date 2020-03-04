
$(document).ready(function() {

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

    // hover on nav Links
    $('.dropdown').hover(
        function() {
            $(this).addClass('show');
            if($(this).hasClass('show')) {
                $(this).find('.dropdown-menu ').addClass('show');
            }
        },  function() {
            $(this).removeClass('show');
            if(!$(this).hasClass('show')) {
                $(this).find('.dropdown-menu ').removeClass('show');
            }
        }
    );

    $('#tabs li a').click(function(e){
        e.preventDefault();
        var getId = $(this).attr('id');
    
        $('#'+getId+'C').show().siblings().hide();
        $('.welcome').hide();

        if (window.matchMedia('(max-width: 1024px)').matches) {
            closeNav();
        }
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
})

