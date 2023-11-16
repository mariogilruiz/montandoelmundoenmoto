function createSlider(sliderId, infoContainerId) {
    let currentSlide = 0;
    const slides = document.getElementById(sliderId).children;
    const totalSlides = slides.length;
    const indicatorContainer = document.getElementById(infoContainerId);

    function showSlide(index) {
        if (index < 0) {
            currentSlide = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        for (let i = 0; i < totalSlides; i++) {
            slides[i].style.display = 'none';
        }

        slides[currentSlide].style.display = 'block';
        updateSlideIndicators();
    }

    function updateSlideIndicators() {
        indicatorContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (i === currentSlide) {
                indicator.classList.add('active');
            }
            indicatorContainer.appendChild(indicator);
        }
    }

    function nextSlide_IT() {
        showSlide(currentSlide + 1);
    }

    function prevSlide_IT() {
        showSlide(currentSlide - 1);
    }

    showSlide(currentSlide);

    return {
        nextSlide_IT,
        prevSlide_IT
    };
}

const italiaSlider = createSlider('slider_italia', 'slider-info_italia');

function nextSlide_IT() {
    italiaSlider.nextSlide_IT();
}

function prevSlide_IT() {
    italiaSlider.prevSlide_IT();
}
