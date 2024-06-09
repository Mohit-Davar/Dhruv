gsap.to(".rotating-floating", {
    rotate: -12,
    scrollTrigger: {
        delay: 2,
        trigger: ".rotating-floating",
        scroller: 'body',
        // markers: true,
        start: "top 50%",
        end: "top 10%",
        scrub: 2
    }
})