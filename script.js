/*
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'next', 'previous');

            if (index === currentSlide) {
                slide.classList.add('active');
            } else if (index === (currentSlide + 1) % slides.length) {
                slide.classList.add('next');
            } else if (index === (currentSlide + 2) % slides.length) {
                slide.classList.add('previous');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    // Initialize the first slide
    updateSlides();

    // Automatically change slides every 3 seconds
    setInterval(nextSlide, 3000);
});
*/


/*
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'next', 'previous', 'behind-previous');

            if (index === currentSlide) {
                slide.classList.add('active');
            } else if (index === (currentSlide + 1) % slides.length) {
                slide.classList.add('next');
            } else if (index === (currentSlide + 2) % slides.length) {
                slide.classList.add('previous');
            } else if (index === (currentSlide + 3) % slides.length) {
                slide.classList.add('behind-previous');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    // Initialize the first slide
    updateSlides();

    // Automatically change slides every 3 seconds
    setInterval(nextSlide, 3000);
});
*/

/*

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'next', 'previous');

            if (index === currentSlide) {
                slide.classList.add('active');
            } else if (index === (currentSlide + 1) % slides.length) {
                slide.classList.add('next');
            } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
                slide.classList.add('previous');
            }
        });
    }

    function nextSlide() {
        // Deactivate current slide
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    // Initialize the first slide
    updateSlides();

    // Automatically change slides every 3 seconds
    setInterval(nextSlide, 3000);
});
*/


/*

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'next', 'previous');

            if (index === currentSlide) {
                slide.classList.add('active');
            } else if (index === (currentSlide + 1) % slides.length) {
                slide.classList.add('next');
            } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
                slide.classList.add('previous');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    // Initialize the first slide
    updateSlides();

    // Automatically change slides every 3 seconds
    setInterval(nextSlide, 3000);
});

*/

/*
the initial final one
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'next', 'previous');

            if (index === currentSlide) {
                slide.classList.add('active');
            } else if (index === (currentSlide + 1) % slides.length) {
                slide.classList.add('next');
            } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
                slide.classList.add('previous');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

   
    updateSlides();


    setInterval(nextSlide, 3000);
});
*/

/*
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'next', 'previous');

            if (index === currentSlide) {
                slide.classList.add('active');
            } else if (index === (currentSlide + 1) % slides.length) {
                slide.classList.add('next');
            } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
                slide.classList.add('previous');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    // Initialize the first slide
    updateSlides();

    // Automatically change slides every 3 seconds
    setInterval(nextSlide, 6000);
});
*/


/* Lsat final version

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'next', 'incoming');

            if (index === currentSlide) {
                slide.classList.add('active');
            } else if (index === (currentSlide + 1) % slides.length) {
                slide.classList.add('next');
            }
        });

        // Add the incoming class to the next slide so it comes from the top
        slides[(currentSlide + 1) % slides.length].classList.add('incoming');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    // Initialize the first slide
    updateSlides();

    // Automatically change slides every 3 seconds
    setInterval(nextSlide, 2000);
});

*/
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'next', 'next-next', 'incoming');

            if (index === currentSlide) {
                slide.classList.add('active');
            } else if (index === (currentSlide + 1) % slides.length) {
                slide.classList.add('next');
            } else if (index === (currentSlide + 2) % slides.length) {
                slide.classList.add('next-next');
            }
        });

        // Add the incoming class to the slide that will become active next
        slides[(currentSlide + 1) % slides.length].classList.add('incoming');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    // Initialize the first slide
    updateSlides();

    // Automatically change slides every 2 seconds
    setInterval(nextSlide, 2000);
});


