$(document).ready(() => {
    $("header").load("/mostradecursos2024/components/header.txt", () => {
        const header = document.querySelector('header');
        const currentPage = window.location.pathname; 
        const dropdownContents = document.querySelectorAll('.dropdown-content'); 

        function changeHeaderBackground() {
            const yPosition = window.scrollY; 
            const targetY = window.innerHeight * 0.75; 
            
            if (currentPage.includes("sobre")) { 
                header.style.backgroundColor = 'white';
                header.style.color = 'black';
                header.classList.add('active');
                changeNavAfterColor('black');
                dropdownContents.forEach(dropdownContent => {
                    dropdownContent.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                });
            } else {
                if (yPosition >= targetY) {
                    header.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))';
                    header.style.color = 'black';
                    header.classList.add('active');
                    changeNavAfterColor('black');
                    dropdownContents.forEach(dropdownContent => {
                        dropdownContent.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                    });
                } else {
                    header.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))';
                    header.style.color = 'rgba(255, 255, 255, 1)';
                    header.classList.remove('active');
                    changeNavAfterColor('white');
                    dropdownContents.forEach(dropdownContent => {
                        dropdownContent.style.backgroundColor = 'transparent';
                    });
                }
            }
        }

        function changeNavAfterColor(color) {
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.style.setProperty('--after-color', color);
            });
        }

        changeHeaderBackground();
        window.addEventListener('scroll', changeHeaderBackground);
    });

    $("footer").load("/mostradecursos2024/components/footer.txt");


    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.mega-title', {
        opacity: 0,
        y: 65,
        duration: 1.25,
        ease: 'power2.out'
    });

    gsap.utils.toArray('.course-image').forEach(image => {
        gsap.from(image, {
            scrollTrigger: {
                trigger: image,
                start: "top 80%", 
            },
            opacity: 0,
            y: 60,
            duration: 0.85
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