$(document).ready(() => {
    $("header").load("/components/header.html", () => {
        const header = document.querySelector('header');
        const currentPage = window.location.pathname; 

        function changeHeaderBackground() {
            const yPosition = window.scrollY; 
            const targetY = 750; 

            if (currentPage.includes("sobre")) { 
                header.style.backgroundColor = 'white';
                header.style.color = 'black';
            } else {
                if (yPosition >= targetY) {
                    header.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))';
                    header.style.color = 'black';
                } else {
                    header.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))';
                    header.style.color = 'rgba(255, 255, 255, 1)';
                }
            }
        }

        changeHeaderBackground();
        window.addEventListener('scroll', changeHeaderBackground);
    });

    $("footer").load("/components/footer.html");

    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.mega-title', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.utils.toArray('.course-image').forEach(image => {
        gsap.from(image, {
            scrollTrigger: {
                trigger: image,
                start: "top 80%", 
            },
            opacity: 0,
            y: 30,
            duration: 1
        });
    });

    const images = document.querySelectorAll('.course-image');

    images.forEach(image => {

        image.addEventListener('mouseenter', () => {
            gsap.to(image, {
                scale: 1.1, 
                duration: 0.3, 
                ease: 'power2.out'
            });
        });

        image.addEventListener('mouseleave', () => {
            gsap.to(image, {
                scale: 1, 
                duration: 0.3, 
                ease: 'power2.out'
            });
        });
    });
});