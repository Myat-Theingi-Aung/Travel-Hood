$(document).ready(function () {
    $('.btn-toggle').on('click', function () {
        let topVal = 33;
        if ($(this).hasClass('hb-open')) {
            topVal = -800;
            $(this).removeClass('hb-open');
        } else {
            $(this).addClass('hb-open');
        }

        $('.nav').stop().animate({
            top: topVal
        }, 300);
    });

    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();

    // Click function
    $('#tabs-nav li').click(function () {
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });

    $(".container").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: true,
        nextArrow: '.arrow.next',
        prevArrow: '.arrow.prev',
        dots: true,
    });
});