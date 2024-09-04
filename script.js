document.addEventListener("DOMContentLoaded", function () {
	const slides = document.querySelectorAll(".slide");
	let currentSlide = 0;

	function updateSlides() {
		slides.forEach((slide, index) => {
			slide.classList.remove("active", "next", "next-next", "incoming");

			if (index === currentSlide) {
				slide.classList.add("active");
			} else if (index === (currentSlide + 1) % slides.length) {
				slide.classList.add("next");
			} else if (index === (currentSlide + 2) % slides.length) {
				slide.classList.add("next-next");
			}
		});

	
		slides[(currentSlide + 1) % slides.length].classList.add("incoming");
	}

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
		updateSlides();
	}


	updateSlides();


	setInterval(nextSlide, 2800);
});
