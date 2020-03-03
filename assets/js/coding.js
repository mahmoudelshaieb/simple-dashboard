
$(document).ready(function() {

    $('#tabs li a').click(function(){
        var getId = $(this).attr('id');
    
        $('#'+getId+'C').show().siblings().hide();
        $('.welcome').hide();

        if (window.matchMedia('(max-width: 1024px)').matches) {
            $('aside.sideNavLeft').css({
                'right': '-500px'
            })
        }
    });
    $('#tabs li').on('click', function() {
        $(this).addClass('active').siblings('li').removeClass('active');
    })

    $('#service-btn').on('click', function() {
        $('aside.sideNavLeft').css({
            'right': 0
        })
    })
    $('#colse-service-btn').on('click', function() {
        $('aside.sideNavLeft').css({
            'right': '-500px'
        })
    })
}) 

