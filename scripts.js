document.addEventListener('scroll', function() {
    const section = document.querySelector('.section');
    const place = document.querySelector('.place');
    const sectionPosition = section.getBoundingClientRect().top;
    const placePosition = place.getBoundingClientRect().top;
    const placeHeight = place.getBoundingClientRect().height;
    const screenPosition = window.innerHeight / 1.3;
    const flowers = document.querySelectorAll('.flower');
    const header = document.querySelector('.header');
    const placeFlowers = place.querySelectorAll('.flower.place-left-bottom, .flower.place-right-bottom');

    if (sectionPosition < screenPosition) {
        section.classList.add('visible');
        flowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '0';
        });
        header.style.opacity = '0';
    } else {
        flowers.forEach(flower => {
            flower.style.opacity = '1';
        });
        header.style.opacity = '1';
    }

    if (placePosition < window.innerHeight / 2 && placePosition > -placeHeight / 2) {
        placeFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '1';
        });
        place.style.opacity = '1';
    } else {
        placeFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '0';
        });
        place.style.opacity = '0';
    }
});