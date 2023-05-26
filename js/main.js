$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 0) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }
    });


    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/_xCBIOdUd0o',
        containment: '#video',
        autoPlay: false,
        mute: true,
        showControls: false,
        playOnlyIfVisible: true
    });

    $('.main_content02 .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    });
    $('.main_content02 .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });

    $('.main_slide').on('init afterChange', function (e, s, c) {
        let _this = $(this).find('.slick-current');
        _this.addClass('on').siblings().removeClass('on');
        $('.main_visual .num').text(c ? c + 1 : 1);
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3500,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });


});