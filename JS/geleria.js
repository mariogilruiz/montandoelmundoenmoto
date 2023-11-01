document.getElementById('selector_galery_ES').onclick = function () { card_galery_ES() };

function card_galery_ES() {

    document.getElementById('content_images_01_ES').classList.toggle("appear_map");
    document.getElementById('content_images_02_FR').classList.remove("appear_map");
    document.getElementById('content_images_03_alpes').classList.remove("appear_map");
    document.getElementById('content_images_04_SLV').classList.remove("appear_map");
    document.getElementById('content_images_05_CRC').classList.remove("appear_map");
    document.getElementById('content_images_06_ALB').classList.remove("appear_map");
    document.getElementById('content_images_07_IT').classList.remove("appear_map");
}

document.getElementById('selector_galery_02_FR').onclick = function () { card_galery_FR() };

function card_galery_FR() {

    document.getElementById('content_images_02_FR').classList.toggle("appear_map");
    document.getElementById('content_images_01_ES').classList.remove("appear_map");
    document.getElementById('content_images_03_alpes').classList.remove("appear_map");
    document.getElementById('content_images_04_SLV').classList.remove("appear_map");
    document.getElementById('content_images_05_CRC').classList.remove("appear_map");
    document.getElementById('content_images_06_ALB').classList.remove("appear_map");
    document.getElementById('content_images_07_IT').classList.remove("appear_map");
}

document.getElementById('selector_galery_03_alpes').onclick = function () { card_galery_alpes() };

function card_galery_alpes() {

    document.getElementById('content_images_03_alpes').classList.toggle("appear_map");
    document.getElementById('content_images_01_ES').classList.remove("appear_map");
    document.getElementById('content_images_02_FR').classList.remove("appear_map");
    document.getElementById('content_images_04_SLV').classList.remove("appear_map");
    document.getElementById('content_images_05_CRC').classList.remove("appear_map");
    document.getElementById('content_images_06_ALB').classList.remove("appear_map");
    document.getElementById('content_images_07_IT').classList.remove("appear_map");
}

document.getElementById('selector_galery_SLV').onclick = function () { card_galery_SLV() };

function card_galery_SLV() {

    document.getElementById('content_images_04_SLV').classList.toggle("appear_map");
    document.getElementById('content_images_01_ES').classList.remove("appear_map");
    document.getElementById('content_images_02_FR').classList.remove("appear_map");
    document.getElementById('content_images_03_alpes').classList.remove("appear_map");
    document.getElementById('content_images_05_CRC').classList.remove("appear_map");
    document.getElementById('content_images_06_ALB').classList.remove("appear_map");
    document.getElementById('content_images_07_IT').classList.remove("appear_map");
}

document.getElementById('selector_galery_CRC').onclick = function () { card_galery_CRC() };

function card_galery_CRC() {

    document.getElementById('content_images_05_CRC').classList.toggle("appear_map");
    document.getElementById('content_images_01_ES').classList.remove("appear_map");
    document.getElementById('content_images_02_FR').classList.remove("appear_map");
    document.getElementById('content_images_03_alpes').classList.remove("appear_map");
    document.getElementById('content_images_04_SLV').classList.remove("appear_map");
    document.getElementById('content_images_06_ALB').classList.remove("appear_map");
    document.getElementById('content_images_07_IT').classList.remove("appear_map");
}

document.getElementById('selector_galery_ALB').onclick = function () { card_galery_ALB() };

function card_galery_ALB() {

    document.getElementById('content_images_06_ALB').classList.toggle("appear_map");
    document.getElementById('content_images_01_ES').classList.remove("appear_map");
    document.getElementById('content_images_02_FR').classList.remove("appear_map");
    document.getElementById('content_images_03_alpes').classList.remove("appear_map");
    document.getElementById('content_images_04_SLV').classList.remove("appear_map");
    document.getElementById('content_images_05_CRC').classList.remove("appear_map");
    document.getElementById('content_images_07_IT').classList.remove("appear_map");
}

document.getElementById('selector_galery_IT').onclick = function () { card_galery_IT() };

function card_galery_IT() {

    document.getElementById('content_images_07_IT').classList.toggle("appear_map");
    document.getElementById('content_images_01_ES').classList.remove("appear_map");
    document.getElementById('content_images_02_FR').classList.remove("appear_map");
    document.getElementById('content_images_03_alpes').classList.remove("appear_map");
    document.getElementById('content_images_04_SLV').classList.remove("appear_map");
    document.getElementById('content_images_05_CRC').classList.remove("appear_map");
    document.getElementById('content_images_06_ALB').classList.remove("appear_map");
}

