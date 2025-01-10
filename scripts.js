document.addEventListener('scroll', function() {
    const section = document.querySelector('.section');
    const place = document.querySelector('.place');
    const dresscode = document.querySelector('.dresscode');
    const itinerary = document.querySelector('.itinerary');
    const sectionPosition = section.getBoundingClientRect().top;
    const placePosition = place.getBoundingClientRect().top;
    const dresscodePosition = dresscode.getBoundingClientRect().top;
    const itineraryPosition = itinerary.getBoundingClientRect().top;
    const placeHeight = place.getBoundingClientRect().height;
    const dresscodeHeight = dresscode.getBoundingClientRect().height;
    const itineraryHeight = itinerary.getBoundingClientRect().height;
    const screenPosition = window.innerHeight / 1.3;
    const flowers = document.querySelectorAll('.flower');
    const header = document.querySelector('.header');
    const placeFlowers = place.querySelectorAll('.flower.place-left-bottom, .flower.place-right-bottom');
    const dresscodeFlowers = dresscode.querySelectorAll('.flower.dresscode-left-bottom, .flower.dresscode-right-bottom');
    const itineraryFlowers = itinerary.querySelectorAll('.flower.itinerary-left-bottom, .flower.itinerary-right-bottom, .flower.itinerary-right-top');

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

    if (dresscodePosition < window.innerHeight / 2 && dresscodePosition > -dresscodeHeight / 2) {
        dresscodeFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '1';
        });
        dresscode.style.opacity = '1';
    } else {
        dresscodeFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '0';
        });
        dresscode.style.opacity = '0';
    }

    if (itineraryPosition < window.innerHeight / 2 && itineraryPosition > -itineraryHeight / 2) {
        itineraryFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '1';
        });
        itinerary.style.opacity = '1';
    } else {
        itineraryFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '0';
        });
        itinerary.style.opacity = '0';
    }
});