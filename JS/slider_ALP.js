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

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Mostrar la primera imagen al cargar la página
    showSlide(currentSlide);

    // Auto avanzar cada 10 segundos
    // setInterval(nextSlide, 10000);

    // Devolver las funciones para que estén disponibles externamente
    return {
        nextSlide,
        prevSlide
    };
}

// Llamada a la función para el slider "slider_alpes"
const alpesSlider = createSlider('slider_alpes', 'slider-info_alpes');


// Ahora, las funciones nextSlide y prevSlide estarán disponibles en el ámbito global
function nextSlide() {
    alpesSlider.nextSlide();
}

function prevSlide() {
    alpesSlider.prevSlide();
}

