document.addEventListener('DOMContentLoaded', () => {

    let tl = new TimelineMax();

    tl.fromTo('.bg-loader', 3, {width: '100%'},
    {width: '0%',delay: 1, ease: Expo.easeInOut})

    .fromTo('.bg-video', 2,
    {width:'0%', opacity: 0},
    {width: "100%", opacity: 1, ease: Expo.easeInOut}, '-=1')

    .fromTo('.navbar', 0.7,
    {y:-50, opacity: 0},
    {y:0, opacity: 1, ease: Expo.easeInOut}, '-=1')

    .fromTo('.container-item-2', 1,
    {y:-50, opacity: 0},
    {y:0, opacity: 1, ease: Expo.easeInOut})

    .fromTo('.spider-text', 1,
    {y:-50, opacity: 0},
    {y:0, opacity: 1, ease: Expo.easeInOut})

    .fromTo('.description', 1,
    {y:-50, opacity: 0},
    {y:0, opacity: 1, ease: Expo.easeInOut})

    
})

