const sliderItems_ALB = document.querySelectorAll('.slider__item_ALB');

const btnNext_ALB = document.querySelector('.slider__arrows--right_ALB');
const btnPrev_ALB = document.querySelector('.slider__arrows--left_ALB');

const Slider_ALB = {
    currentItem: 0,

    init: () => {
        Slider_ALB.in(Slider_ALB.currentItem);
    },

    in: (index) => {
        const item = sliderItems_ALB[index];
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
        const item = sliderItems_ALB[index];
        const texts = item.querySelectorAll('p')
        const timeline = new TimelineMax();
        timeline
            .staggerTo(texts, .2, { y: 300, autoAlpha: 0, ease: Back.easeIn }, '-0.5')
            .to(item, .2, { scale: .99 })
            .to(item, .2, { left: '100vw' })
            .call(Slider_ALB.in, [nextIndex], this, '-=.3')
            .set(texts, { clearProps: 'all' })
    },

    next: () => {
        const next = Slider_ALB.currentItem !== sliderItems_ALB.length - 1 ? Slider_ALB.currentItem + 1 : 0;
        Slider_ALB.out(Slider_ALB.currentItem, next);
        Slider_ALB.currentItem = next;
    },

    prev: () => {
        const prev = Slider_ALB.currentItem > 0 ? Slider_ALB.currentItem - 1 : sliderItems_ALB.length - 1;
        Slider_ALB.out(Slider_ALB.currentItem, prev);
        Slider_ALB.currentItem = prev;
    },
}

// Events
btnNext_ALB.addEventListener('click', Slider_ALB.next);
btnPrev_ALB.addEventListener('click', Slider_ALB.prev);

Slider_ALB.init();