
var scrollTop=function(){
    if($(window).scrollTop()>0){
        $('.art-and-download-wrapper').addClass('active');
        $('.art-and-download-wrapper>.art-and-download>.introduce').addClass('active');
        $('.art-and-download-wrapper>.art-and-download>.introduce>p').addClass('active');
        $('.art-and-download-wrapper>.art-and-download>.introduce>.introduce-video>a.check-detail').addClass('active');
        setTimeout(function () {
            $('.art-and-download-wrapper>.art-and-download>video.top-big-video').removeClass('active');
            $('.art-and-download-wrapper>.art-and-download>video.top-back-video').addClass('active');
        },1000);
        $(window).off('scroll',scrollTop);
    }
}
$(window).on('scroll',scrollTop);