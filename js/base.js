$(function() {

    $('#menu-btn').on('click', function() {
        $(this).toggleClass('is-active');
        if ($(this).hasClass('is-active')) {
            $('#menu').addClass('open');
        } else {
            $('#menu').removeClass('open');
        }
    });
});
