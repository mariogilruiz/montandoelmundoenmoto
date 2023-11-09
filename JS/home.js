//h2 hidden 

document.addEventListener("DOMContentLoaded", function () {
    const elementToHide = document.getElementById("hideOnScroll");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 340) {
            elementToHide.classList.add("hidden");
            elementToHide.classList.remove("hidden_back");

        } else {
            elementToHide.classList.remove("hidden");
            elementToHide.classList.add("hidden_back");
        }
    });
});


//home hidden

document.addEventListener("DOMContentLoaded", function () {
    const elementToHide = document.getElementById("container");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 900) {
            elementToHide.classList.add("hidden_hoome");
            elementToHide.classList.remove("hidden_home_back");

        } else {
            elementToHide.classList.remove("hidden_hoome");
            elementToHide.classList.add("hidden_home_back");
        }
    });
});


// div effect --- HOME

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDiv = document.getElementById("content_02");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 120) {
            hiddenDiv.classList.add("appear");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDiv03 = document.getElementById("content_03");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 920) {
            hiddenDiv03.classList.add("appear");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("content_ph");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 2137) {
            hiddenDivph.classList.add("apper_ph");
        }
    });
});


//  const imageNames = ["img_01.webp", "img_02.jpg", "img_03.webp"];

const backgroundDiv = document.getElementById("background-div");
const imageNames = ["img_01.webp", "img_03.webp", "img_02.jpg", "img_04.jpg"];
let currentIndex = 0;
const intervalTime = 10000; // Intervalo de cambio de imagen en milisegundos

function changeImageWithZoom() {
    const nextImage = imageNames[currentIndex];

    // Desactivar la transición temporalmente
    backgroundDiv.style.transition = "none";

    // Forzar un nuevo frame antes de cambiar la imagen y aplicar la escala final
    requestAnimationFrame(() => {
        backgroundDiv.style.backgroundImage = `url("images/${nextImage}")`;
        backgroundDiv.style.transform = "scale(1.1)";

        // Forzar un nuevo frame antes de aplicar la escala inicial y activar la transición
        requestAnimationFrame(() => {
            backgroundDiv.style.transition = `transform ${intervalTime / 1000}s ease-in-out`;  // Reactivar la transición
            backgroundDiv.style.transform = "scale(1)";
        });
    });

    currentIndex = (currentIndex + 1) % imageNames.length;
}

setInterval(() => {
    changeImageWithZoom();
}, intervalTime);

// Cambiar la imagen al cargar la página
changeImageWithZoom();










































