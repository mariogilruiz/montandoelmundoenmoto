const sliderItems_IT = document.querySelectorAll('.slider__item_IT');

const btnNext_IT = document.querySelector('.slider__arrows--right_IT');
const btnPrev_IT = document.querySelector('.slider__arrows--left_IT');

const Slider_IT = {
    currentItem: 0,

    init: () => {
        Slider_IT.in(Slider_IT.currentItem);
    },

    in: (index) => {
        const item = sliderItems_IT[index];
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
        const item = sliderItems_IT[index];
        const texts = item.querySelectorAll('p')
        const timeline = new TimelineMax();
        timeline
            .staggerTo(texts, .2, { y: 300, autoAlpha: 0, ease: Back.easeIn }, '-0.5')
            .to(item, .2, { scale: .99 })
            .to(item, .2, { left: '100vw' })
            .call(Slider_IT.in, [nextIndex], this, '-=.3')
            .set(texts, { clearProps: 'all' })
    },

    next: () => {
        const next = Slider_IT.currentItem !== sliderItems_IT.length - 1 ? Slider_IT.currentItem + 1 : 0;
        Slider_IT.out(Slider_IT.currentItem, next);
        Slider_IT.currentItem = next;
    },

    prev: () => {
        const prev = Slider_IT.currentItem > 0 ? Slider_IT.currentItem - 1 : sliderItems_IT.length - 1;
        Slider_IT.out(Slider_IT.currentItem, prev);
        Slider_IT.currentItem = prev;
    },
}

// Events
btnNext_IT.addEventListener('click', Slider_IT.next);
btnPrev_IT.addEventListener('click', Slider_IT.prev);

Slider_IT.init();