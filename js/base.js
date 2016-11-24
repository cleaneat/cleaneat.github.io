if (window.location.host === 'cleaneat.se') {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-87912595-1', 'auto');
    ga('send', 'pageview');
}

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
