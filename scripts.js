document.addEventListener('scroll', function() {
    const section = document.querySelector('.section');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    const flowers = document.querySelectorAll('.flower');
    const header = document.querySelector('.header');

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
});