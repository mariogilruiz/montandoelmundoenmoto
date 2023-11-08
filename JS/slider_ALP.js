const sliderItems_ALP = document.querySelectorAll('.slider__item_ALP');

const btnNext_ALP = document.querySelector('.slider__arrows--right_ALP');
const btnPrev_ALP = document.querySelector('.slider__arrows--left_ALP');

const Slider_ALP = {
    currentItem: 0,

    init: () => {
        Slider_ALP.in(Slider_ALP.currentItem);
    },

    in: (index) => {
        const item = sliderItems_ALP[index];
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
        const item = sliderItems_ALP[index];
        const texts = item.querySelectorAll('p')
        const timeline = new TimelineMax();
        timeline
            .staggerTo(texts, .2, { y: 300, autoAlpha: 0, ease: Back.easeIn }, '-0.5')
            .to(item, .2, { scale: .99 })
            .to(item, .2, { left: '100vw' })
            .call(Slider_ALP.in, [nextIndex], this, '-=.3')
            .set(texts, { clearProps: 'all' })
    },

    next: () => {
        const next = Slider_ALP.currentItem !== sliderItems_ALP.length - 1 ? Slider_ALP.currentItem + 1 : 0;
        Slider_ALP.out(Slider_ALP.currentItem, next);
        Slider_ALP.currentItem = next;
    },

    prev: () => {
        const prev = Slider_ALP.currentItem > 0 ? Slider_ALP.currentItem - 1 : sliderItems_ALP.length - 1;
        Slider_ALP.out(Slider_ALP.currentItem, prev);
        Slider_ALP.currentItem = prev;
    },
}

// Events
btnNext_ALP.addEventListener('click', Slider_ALP.next);
btnPrev_ALP.addEventListener('click', Slider_ALP.prev);

Slider_ALP.init();