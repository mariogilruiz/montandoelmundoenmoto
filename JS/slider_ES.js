//------------SLIDER ESPAÑA ----------------

// Selectors
const sliderItems = document.querySelectorAll('.slider__item');

const btnNext = document.querySelector('.slider__arrows--right');
const btnPrev = document.querySelector('.slider__arrows--left');


const Slider = {
    currentItem: 0,

    init: () => {
        Slider.in(Slider.currentItem);
    },

    in: (index) => {
        const item = sliderItems[index];
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
        const item = sliderItems[index];
        const texts = item.querySelectorAll('p')
        const timeline = new TimelineMax();
        timeline
            .staggerTo(texts, .2, { y: 300, autoAlpha: 0, ease: Back.easeIn }, '-0.5')
            .to(item, .2, { scale: .99 })
            .to(item, .2, { left: '100vw' })
            .call(Slider.in, [nextIndex], this, '-=.3')
            .set(texts, { clearProps: 'all' })
    },

    next: () => {
        const next = Slider.currentItem !== sliderItems.length - 1 ? Slider.currentItem + 1 : 0;
        Slider.out(Slider.currentItem, next);
        Slider.currentItem = next;
    },

    prev: () => {
        const prev = Slider.currentItem > 0 ? Slider.currentItem - 1 : sliderItems.length - 1;
        Slider.out(Slider.currentItem, prev);
        Slider.currentItem = prev;
    },
}

// Events
btnNext.addEventListener('click', Slider.next);
btnPrev.addEventListener('click', Slider.prev);

Slider.init();



