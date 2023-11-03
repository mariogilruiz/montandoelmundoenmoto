const sliderItems_FR = document.querySelectorAll('.slider__item_FR');

const btnNext_FR = document.querySelector('.slider__arrows--right_FR');
const btnPrev_FR = document.querySelector('.slider__arrows--left_FR');

const Slider_FR = {
    currentItem: 0,

    init: () => {
        Slider_FR.in(Slider_FR.currentItem);
    },

    in: (index) => {
        const item = sliderItems_FR[index];
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
        const item = sliderItems_FR[index];
        const texts = item.querySelectorAll('p')
        const timeline = new TimelineMax();
        timeline
            .staggerTo(texts, .2, { y: 300, autoAlpha: 0, ease: Back.easeIn }, '-0.5')
            .to(item, .2, { scale: .99 })
            .to(item, .2, { left: '100vw' })
            .call(Slider_FR.in, [nextIndex], this, '-=.3')
            .set(texts, { clearProps: 'all' })
    },

    next: () => {
        const next = Slider_FR.currentItem !== sliderItems_FR.length - 1 ? Slider_FR.currentItem + 1 : 0;
        Slider_FR.out(Slider_FR.currentItem, next);
        Slider_FR.currentItem = next;
    },

    prev: () => {
        const prev = Slider_FR.currentItem > 0 ? Slider_FR.currentItem - 1 : sliderItems_FR.length - 1;
        Slider_FR.out(Slider_FR.currentItem, prev);
        Slider_FR.currentItem = prev;
    },
}

// Events
btnNext_FR.addEventListener('click', Slider_FR.next);
btnPrev_FR.addEventListener('click', Slider_FR.prev);

Slider_FR.init();