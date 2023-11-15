// Modificación para permitir la selección de fotos desde los indicadores
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
            // Agregar un evento de clic para cambiar la diapositiva
            indicator.addEventListener('click', function () {
                showSlide(i);
            });
            indicatorContainer.appendChild(indicator);
        }
    }

    function nextSlide_ESP() {
        showSlide(currentSlide + 1);
    }

    function prevSlide_ESP() {
        showSlide(currentSlide - 1);
    }

    // Mostrar la primera imagen al cargar la página
    showSlide(currentSlide);

    // Auto avanzar cada 10 segundos
    // setInterval(nextSlide, 10000);

    // Devolver las funciones para que estén disponibles externamente
    return {
        nextSlide_ESP,
        prevSlide_ESP
    };
}

// Llamada a la función para el slider "slider_alpes"
const españaSlider = createSlider('slider_españa', 'slider-info_españa');

function nextSlide_ESP() {
    españaSlider.nextSlide_ESP();
}

function prevSlide_ESP() {
    españaSlider.prevSlide_ESP();
}
