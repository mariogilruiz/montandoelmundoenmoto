document.getElementById('selector_galery_ES').onclick = function () { card_galery_ES() };

function card_galery_ES() {

    // añade y elimina las clases al contenedro de las tarjetas de imagenes para aparecer y esconderse

    document.getElementById('content_images_01_ES').classList.toggle("appear_card_galery");
    document.getElementById('content_images_02_FR').classList.remove("appear_card_galery");
    document.getElementById('content_images_03_alpes').classList.remove("appear_card_galery");
    document.getElementById('content_images_04_SLV').classList.remove("appear_card_galery");
    document.getElementById('content_images_05_CRC').classList.remove("appear_card_galery");
    document.getElementById('content_images_06_ALB').classList.remove("appear_card_galery");
    document.getElementById('content_images_07_IT').classList.remove("appear_card_galery");

    // añade borde derecho naranja statico al boton

    document.getElementById('selector_galery_ES').classList.toggle("border_static");
    document.getElementById('selector_galery_02_FR').classList.remove("border_static");
    document.getElementById('selector_galery_03_alpes').classList.remove("border_static");
    document.getElementById('selector_galery_04_SLV').classList.remove("border_static");
    document.getElementById('selector_galery_05_CRC').classList.remove("border_static");
    document.getElementById('selector_galery_05_ALB').classList.remove("border_static");
    document.getElementById('selector_galery_06_IT').classList.remove("border_static");
}

document.getElementById('selector_galery_02_FR').onclick = function () { card_galery_FR() };

function card_galery_FR() {

    document.getElementById('content_images_02_FR').classList.toggle("appear_card_galery");
    document.getElementById('content_images_01_ES').classList.remove("appear_card_galery");
    document.getElementById('content_images_03_alpes').classList.remove("appear_card_galery");
    document.getElementById('content_images_04_SLV').classList.remove("appear_card_galery");
    document.getElementById('content_images_05_CRC').classList.remove("appear_card_galery");
    document.getElementById('content_images_06_ALB').classList.remove("appear_card_galery");
    document.getElementById('content_images_07_IT').classList.remove("appear_card_galery");

    document.getElementById('selector_galery_ES').classList.remove("border_static");
    document.getElementById('selector_galery_02_FR').classList.toggle("border_static");
    document.getElementById('selector_galery_03_alpes').classList.remove("border_static");
    document.getElementById('selector_galery_04_SLV').classList.remove("border_static");
    document.getElementById('selector_galery_05_CRC').classList.remove("border_static");
    document.getElementById('selector_galery_05_ALB').classList.remove("border_static");
    document.getElementById('selector_galery_06_IT').classList.remove("border_static");
}

document.getElementById('selector_galery_03_alpes').onclick = function () { card_galery_alpes() };

function card_galery_alpes() {

    document.getElementById('content_images_03_alpes').classList.toggle("appear_card_galery");
    document.getElementById('content_images_01_ES').classList.remove("appear_card_galery");
    document.getElementById('content_images_02_FR').classList.remove("appear_card_galery");
    document.getElementById('content_images_04_SLV').classList.remove("appear_card_galery");
    document.getElementById('content_images_05_CRC').classList.remove("appear_card_galery");
    document.getElementById('content_images_06_ALB').classList.remove("appear_card_galery");
    document.getElementById('content_images_07_IT').classList.remove("appear_card_galery");

    document.getElementById('selector_galery_ES').classList.remove("border_static");
    document.getElementById('selector_galery_02_FR').classList.remove("border_static");
    document.getElementById('selector_galery_03_alpes').classList.toggle("border_static");
    document.getElementById('selector_galery_04_SLV').classList.remove("border_static");
    document.getElementById('selector_galery_05_CRC').classList.remove("border_static");
    document.getElementById('selector_galery_05_ALB').classList.remove("border_static");
    document.getElementById('selector_galery_06_IT').classList.remove("border_static");
}

document.getElementById('selector_galery_04_SLV').onclick = function () { card_galery_SLV() };

function card_galery_SLV() {

    document.getElementById('content_images_04_SLV').classList.toggle("appear_card_galery");
    document.getElementById('content_images_01_ES').classList.remove("appear_card_galery");
    document.getElementById('content_images_02_FR').classList.remove("appear_card_galery");
    document.getElementById('content_images_03_alpes').classList.remove("appear_card_galery");
    document.getElementById('content_images_05_CRC').classList.remove("appear_card_galery");
    document.getElementById('content_images_06_ALB').classList.remove("appear_card_galery");
    document.getElementById('content_images_07_IT').classList.remove("appear_card_galery");

    document.getElementById('selector_galery_ES').classList.remove("border_static");
    document.getElementById('selector_galery_02_FR').classList.remove("border_static");
    document.getElementById('selector_galery_03_alpes').classList.remove("border_static");
    document.getElementById('selector_galery_04_SLV').classList.toggle("border_static");
    document.getElementById('selector_galery_05_CRC').classList.remove("border_static");
    document.getElementById('selector_galery_05_ALB').classList.remove("border_static");
    document.getElementById('selector_galery_06_IT').classList.remove("border_static");
}

document.getElementById('selector_galery_05_CRC').onclick = function () { card_galery_CRC() };

function card_galery_CRC() {

    document.getElementById('content_images_05_CRC').classList.toggle("appear_card_galery");
    document.getElementById('content_images_01_ES').classList.remove("appear_card_galery");
    document.getElementById('content_images_02_FR').classList.remove("appear_card_galery");
    document.getElementById('content_images_03_alpes').classList.remove("appear_card_galery");
    document.getElementById('content_images_04_SLV').classList.remove("appear_card_galery");
    document.getElementById('content_images_06_ALB').classList.remove("appear_card_galery");
    document.getElementById('content_images_07_IT').classList.remove("appear_card_galery");

    document.getElementById('selector_galery_ES').classList.remove("border_static");
    document.getElementById('selector_galery_02_FR').classList.remove("border_static");
    document.getElementById('selector_galery_03_alpes').classList.remove("border_static");
    document.getElementById('selector_galery_04_SLV').classList.remove("border_static");
    document.getElementById('selector_galery_05_CRC').classList.toggle("border_static");
    document.getElementById('selector_galery_05_ALB').classList.remove("border_static");
    document.getElementById('selector_galery_06_IT').classList.remove("border_static");
}

document.getElementById('selector_galery_05_ALB').onclick = function () { card_galery_ALB() };

function card_galery_ALB() {

    document.getElementById('content_images_06_ALB').classList.toggle("appear_card_galery");
    document.getElementById('content_images_01_ES').classList.remove("appear_card_galery");
    document.getElementById('content_images_02_FR').classList.remove("appear_card_galery");
    document.getElementById('content_images_03_alpes').classList.remove("appear_card_galery");
    document.getElementById('content_images_04_SLV').classList.remove("appear_card_galery");
    document.getElementById('content_images_05_CRC').classList.remove("appear_card_galery");
    document.getElementById('content_images_07_IT').classList.remove("appear_card_galery");

    document.getElementById('selector_galery_ES').classList.remove("border_static");
    document.getElementById('selector_galery_02_FR').classList.remove("border_static");
    document.getElementById('selector_galery_03_alpes').classList.remove("border_static");
    document.getElementById('selector_galery_04_SLV').classList.remove("border_static");
    document.getElementById('selector_galery_05_CRC').classList.remove("border_static");
    document.getElementById('selector_galery_05_ALB').classList.toggle("border_static");
    document.getElementById('selector_galery_06_IT').classList.remove("border_static");
}

document.getElementById('selector_galery_06_IT').onclick = function () { card_galery_IT() };

function card_galery_IT() {

    document.getElementById('content_images_07_IT').classList.toggle("appear_card_galery");
    document.getElementById('content_images_01_ES').classList.remove("appear_card_galery");
    document.getElementById('content_images_02_FR').classList.remove("appear_card_galery");
    document.getElementById('content_images_03_alpes').classList.remove("appear_card_galery");
    document.getElementById('content_images_04_SLV').classList.remove("appear_card_galery");
    document.getElementById('content_images_05_CRC').classList.remove("appear_card_galery");
    document.getElementById('content_images_06_ALB').classList.remove("appear_card_galery");

    document.getElementById('selector_galery_ES').classList.remove("border_static");
    document.getElementById('selector_galery_02_FR').classList.remove("border_static");
    document.getElementById('selector_galery_03_alpes').classList.remove("border_static");
    document.getElementById('selector_galery_04_SLV').classList.remove("border_static");
    document.getElementById('selector_galery_05_CRC').classList.remove("border_static");
    document.getElementById('selector_galery_05_ALB').classList.remove("border_static");
    document.getElementById('selector_galery_06_IT').classList.toggle("border_static");
}

//ampliar imagen

// const image = document.querySelector('.slider__item img');
// let ampliado = false;

// image.addEventListener('click', () => {
//     if (ampliado) {
//         image.classList.remove('ampliado');
//         image.classList.add('img_galery');
//     } else {
//         image.classList.remove('img_galery');
//         image.classList.add('ampliado');
//     }

//     ampliado = !ampliado;
// });



