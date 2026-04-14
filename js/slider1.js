document.addEventListener('DOMContentLoaded', () => {

    const sliderContainer = document.querySelector('.itens-s6');

    if (!sliderContainer) {
        return;
    }

    const slides = sliderContainer.querySelectorAll('.div-s6');
    let currentSlideIndex = 0;
    let slideInterval;

    function advanceSlider() {
        currentSlideIndex++;

        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }

        const scrollAmount = slides[currentSlideIndex].offsetLeft - sliderContainer.offsetLeft;
        
        sliderContainer.scrollTo({
            left: scrollAmount
        });
    }

    function startSlider() {
        slideInterval = setInterval(advanceSlider, 4000);
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    startSlider();

    sliderContainer.addEventListener('mouseenter', stopSlider);
    sliderContainer.addEventListener('mouseleave', startSlider);

    sliderContainer.addEventListener('touchstart', stopSlider, { passive: true });
    sliderContainer.addEventListener('touchend', startSlider);

});