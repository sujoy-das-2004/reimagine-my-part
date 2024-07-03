const cursor = document.querySelector('.section-2-container');
const section = document.querySelector('.section-2');

let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
    section.addEventListener('touchstart', () => {
        gsap.to(cursor, { opacity: 1, duration: 3 });

        section.addEventListener('touchmove', handleTouchMove);
    });

    section.addEventListener('touchend', () => {
        section.removeEventListener('touchmove', handleTouchMove);
    });
} else {
    section.addEventListener('mouseenter', () => {
        gsap.to(cursor, { opacity: 1, duration: 3 });

        section.addEventListener('mousemove', handleMouseMove);
    });

    section.addEventListener('mouseleave', () => {
        section.removeEventListener('mousemove', handleMouseMove);
    });
}

function handleMouseMove(e) {
    const mouseX = window.innerWidth - e.clientX;
    const mouseY = window.innerHeight - e.clientY;
    gsap.to(cursor, { 
        left: mouseX, 
        top: mouseY, 
        duration: 2.1, 
        ease: 'power1.out' 
    });
}

function handleTouchMove(e) {
    const touchX = window.innerWidth - e.touches[0].clientX;
    const touchY = window.innerHeight - e.touches[0].clientY;
    gsap.to(cursor, { 
        left: touchX, 
        top: touchY, 
        duration: 2.1, 
        ease: 'power1.out' 
    });
}

document.addEventListener(isTouchDevice ? "touchmove" : "mousemove", function(dets) {
    document.querySelectorAll(".img").forEach((elem) => {
        const position = elem.getAttribute("value");
        let x = (window.innerWidth - (isTouchDevice ? dets.touches[0].clientX : dets.clientX) * position) / 50;
        let y = (window.innerHeight - (isTouchDevice ? dets.touches[0].clientY : dets.clientY) * position) / 50;

        elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
        gsap.to(elem, {
            transform: `translateX(${x}px) translateY(${y}px)`
        });
    });
});


// swiper js
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});
