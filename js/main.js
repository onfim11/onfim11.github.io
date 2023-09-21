$(document).ready(function(){
    $('.excellence_slider').slick({
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<span class="left_arrow"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M11.8176 15L13 13.8333L9.11486 10L13 6.16667L11.8176 5L6.75 10L11.8176 15Z" fill="#292929" fill-opacity="0.8"/>\n' +
            '</svg></span>',
        nextArrow:'<span class="right_arrow"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M8.18243 5L7 6.16667L10.8851 10L7 13.8333L8.18243 15L13.25 10L8.18243 5Z" fill="#292929" fill-opacity="0.8"/>\n' +
            '</svg></span>'
    });
})