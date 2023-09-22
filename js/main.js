gsap.registerPlugin(ScrollTrigger);

gsap.from('div[class^="macaroon"]', {
        scrollTrigger:
            {
                trigger:'.main_navigation',
                start: '-150 0',
                scrub: true
            },
            autoAlpha: 0,
            scale: 0.3,
            stagger: 0.1
    })
gsap.from('div[class^="penut"]', {
        scrollTrigger:
            {
                trigger:'.main_navigation',
                start: '-100 0',
                scrub: true
            },
        autoAlpha: 0,
        rotation: 360,
        stagger: 0.1
    })
gsap.from('div[class^="mint"]', {
    scrollTrigger:
        {
            trigger:'.main_navigation',
            start: '-50 0',
            scrub: true
        },
    autoAlpha: 0,
    stagger: 0.1
})
gsap.to('.logo', {
    scrollTrigger:
        {
            trigger:'.main_navigation',
            start: '0 0',
            scrub: true
        },
    scale: 0.5
})

gsap.from('.category_item', {
    scrollTrigger:
        {
            trigger:'.banner_bg',
            start: '-100 0',
            scrub: true
        },
    autoAlpha: 0,
    duration: 0.8,
    x:50,
    stagger: 1
})

gsap.from('.anim_items', {
    scrollTrigger:
        {
            trigger:'.category_list',
            start: '100 0',
            scrub: true,
            //markers: true
        },
    autoAlpha: 0,
    x:-50,
    stagger: 0.6
})


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
    $('.bonds_slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: true
    });
});

