// Cambios en la función createSlider
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

    function nextSlide_CRC() {
        showSlide(currentSlide + 1);
    }

    function prevSlide_CRC() {
        showSlide(currentSlide - 1);
    }

    showSlide(currentSlide);

    // Auto avanzar cada 10 segundos
    // setInterval(nextSlide, 10000);

    return {
        nextSlide_CRC,
        prevSlide_CRC
    };
}

// Llamada a la función para el slider
const croaciaSlider = createSlider('slider_croacia', 'slider-info_croacia');

function nextSlide_CRC() {
    croaciaSlider.nextSlide_CRC();
}

function prevSlide_CRC() {
    croaciaSlider.prevSlide_CRC();
}