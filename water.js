document.addEventListener('scroll', function() {
    const intro = document.querySelector('.intro-section');
    const introPosition = intro.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (introPosition < screenPosition) {
        intro.classList.add('active');
    }
});
