const sliderItems_CRC = document.querySelectorAll('.slider__item_CRC');

const btnNext_CRC = document.querySelector('.slider__arrows--right_CRC');
const btnPrev_CRC = document.querySelector('.slider__arrows--left_CRC');

const Slider_CRC = {
    currentItem: 0,

    init: () => {
        Slider_CRC.in(Slider_CRC.currentItem);
    },

    in: (index) => {
        const item = sliderItems_CRC[index];
        const texts = item.querySelectorAll('p')
        const timeline = new TimelineMax();

        TweenMax.set(item, { scale: .99 });
        TweenMax.set(item, { left: '-100vw' });

        timeline
            .to(item, .2, { left: 0, delay: .3 })
            .to(item, .2, { scale: 1 })
            .staggerFrom(texts, .2, { y: 300, autoAlpha: 0, ease: Back.easeOut }, 0.2)
    },

    out: (index, nextIndex) => {
        const item = sliderItems_CRC[index];
        const texts = item.querySelectorAll('p')
        const timeline = new TimelineMax();
        timeline
            .staggerTo(texts, .2, { y: 300, autoAlpha: 0, ease: Back.easeIn }, '-0.5')
            .to(item, .2, { scale: .99 })
            .to(item, .2, { left: '100vw' })
            .call(Slider_CRC.in, [nextIndex], this, '-=.3')
            .set(texts, { clearProps: 'all' })
    },

    next: () => {
        const next = Slider_CRC.currentItem !== sliderItems_CRC.length - 1 ? Slider_CRC.currentItem + 1 : 0;
        Slider_CRC.out(Slider_CRC.currentItem, next);
        Slider_CRC.currentItem = next;
    },

    prev: () => {
        const prev = Slider_CRC.currentItem > 0 ? Slider_CRC.currentItem - 1 : sliderItems_CRC.length - 1;
        Slider_CRC.out(Slider_CRC.currentItem, prev);
        Slider_CRC.currentItem = prev;
    },
}

// Events
btnNext_CRC.addEventListener('click', Slider_CRC.next);
btnPrev_CRC.addEventListener('click', Slider_CRC.prev);

Slider_CRC.init();