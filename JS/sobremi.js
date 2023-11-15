// -------- efecto texto inicial de las pages comunes aparareciendo desde eje Y 

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("h4_content_02_about");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 170) {
            hiddenDivph.classList.add("apper_text_pages");
        }
    });
});

//------ efecto aparacion de los div desde el eje Y


document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("content_02_about_02");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            hiddenDivph.classList.add("appear_slow");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("content_02_about_03");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 800) {
            hiddenDivph.classList.add("appear_slow");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("content_02_about_04");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 1200) {
            hiddenDivph.classList.add("appear_slow");
        }
    });
});



//slider o1

let currentSlide = 0;
const slides = document.getElementById('slider').children;
const totalSlides = slides.length;
const indicatorContainer = document.getElementById('slider-info');

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

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Mostrar la primera imagen al cargar la página
showSlide(currentSlide);

// Auto avanzar cada 10 segundos
setInterval(nextSlide, 10000);



