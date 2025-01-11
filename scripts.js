document.addEventListener('scroll', function() {
    const section = document.querySelector('.section');
    const place = document.querySelector('.place');
    const dresscode = document.querySelector('.dresscode');
    const itinerary = document.querySelector('.itinerary');
    const gift = document.querySelector('.gift');
    const notes = document.querySelector('.notes');
    const sectionPosition = section.getBoundingClientRect().top;
    const placePosition = place.getBoundingClientRect().top;
    const dresscodePosition = dresscode.getBoundingClientRect().top;
    const itineraryPosition = itinerary.getBoundingClientRect().top;
    const giftPosition = gift.getBoundingClientRect().top;
    const notesPosition = notes.getBoundingClientRect().top;
    const placeHeight = place.getBoundingClientRect().height;
    const dresscodeHeight = dresscode.getBoundingClientRect().height;
    const itineraryHeight = itinerary.getBoundingClientRect().height;
    const giftHeight = gift.getBoundingClientRect().height;
    const notesHeight = notes.getBoundingClientRect().height;
    const screenPosition = window.innerHeight / 1.3;
    const flowers = document.querySelectorAll('.flower');
    const header = document.querySelector('.header');
    const placeFlowers = place.querySelectorAll('.flower.place-left-bottom, .flower.place-right-bottom');
    const dresscodeFlowers = dresscode.querySelectorAll('.flower.dresscode-left-bottom, .flower.dresscode-right-bottom');
    const itineraryFlowers = itinerary.querySelectorAll('.flower.itinerary-left-bottom, .flower.itinerary-right-bottom, .flower.itinerary-right-top');
    const giftFlowers = gift.querySelectorAll('.flower.gift-left-bottom, .flower.gift-right-bottom, .flower.gift-left-top');
    const notesFlowers = notes.querySelectorAll('.flower.notes-left-bottom, .flower.notes-right-bottom');

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

    if (giftPosition < window.innerHeight / 2 && giftPosition > -giftHeight / 2) {
        giftFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '1';
        });
        gift.style.opacity = '1';
    } else {
        giftFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '0';
        });
        gift.style.opacity = '0';
    }

    if (notesPosition < window.innerHeight / 2 && notesPosition > -notesHeight / 2) {
        notesFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '1';
        });
        notes.style.opacity = '1';
    } else {
        notesFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '0';
        });
        notes.style.opacity = '0';
    }
});

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Account number copied to clipboard: ' + text);
}

document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Coba memulai pemutaran musik
    backgroundMusic.play().catch(error => {
        console.log('Autoplay tidak diizinkan oleh browser. Musik akan diputar setelah interaksi pengguna.');
    });

    // Tambahkan event listener untuk memulai musik setelah interaksi pengguna
    document.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
        }
    });
});

function openInvitation() {
    const intro = document.getElementById('intro');
    intro.classList.add('fade-out');
    setTimeout(() => {
        intro.style.display = 'none';
        document.getElementById('invitation').style.display = 'block';
    }, 1000);
}