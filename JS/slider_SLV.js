const sliderItems_SLV = document.querySelectorAll('.slider__item_SLV');

const btnNext_SLV = document.querySelector('.slider__arrows--right_SLV');
const btnPrev_SLV = document.querySelector('.slider__arrows--left_SLV');

const Slider_SLV = {
    currentItem: 0,

    init: () => {
        Slider_SLV.in(Slider_SLV.currentItem);
    },

    in: (index) => {
        const item = sliderItems_SLV[index];
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
        const item = sliderItems_SLV[index];
        const texts = item.querySelectorAll('p')
        const timeline = new TimelineMax();
        timeline
            .staggerTo(texts, .2, { y: 300, autoAlpha: 0, ease: Back.easeIn }, '-0.5')
            .to(item, .2, { scale: .99 })
            .to(item, .2, { left: '100vw' })
            .call(Slider_SLV.in, [nextIndex], this, '-=.3')
            .set(texts, { clearProps: 'all' })
    },

    next: () => {
        const next = Slider_SLV.currentItem !== sliderItems_SLV.length - 1 ? Slider_SLV.currentItem + 1 : 0;
        Slider_SLV.out(Slider_SLV.currentItem, next);
        Slider_SLV.currentItem = next;
    },

    prev: () => {
        const prev = Slider_SLV.currentItem > 0 ? Slider_SLV.currentItem - 1 : sliderItems_SLV.length - 1;
        Slider_SLV.out(Slider_SLV.currentItem, prev);
        Slider_SLV.currentItem = prev;
    },
}

// Events
btnNext_SLV.addEventListener('click', Slider_SLV.next);
btnPrev_SLV.addEventListener('click', Slider_SLV.prev);

Slider_SLV.init();