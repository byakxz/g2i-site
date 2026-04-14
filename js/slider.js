document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-conteiner');
    if (!container) return;

    const slider = container.querySelector('.section-three');
    const dotsContainer = container.querySelector('.carousel-dots');
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    const slides = Array.from(slider.children);

    if (!slider || !slides.length) return;

    function updateButtonState() {
        if (!prevBtn || !nextBtn) return;
        prevBtn.disabled = slider.scrollLeft < 10;
        nextBtn.disabled = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10;
    }

    function scrollSlider(direction) {
        const slideWidth = slides[0].offsetWidth;
        const gap = parseFloat(window.getComputedStyle(slider).gap);
        slider.scrollBy({ left: direction * (slideWidth + gap), behavior: 'smooth' });
    }
    
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => scrollSlider(-1));
      nextBtn.addEventListener('click', () => scrollSlider(1));
      slider.addEventListener('scroll', updateButtonState);
    }
    
    slides.forEach((slide, index) => {
        slide.dataset.index = index;
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        dot.dataset.index = index;
        if(dotsContainer) dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => {
            slide.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        });
    });

    const dots = container.querySelectorAll('.carousel-dot');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeIndex = entry.target.dataset.index;
                dots.forEach(d => d.classList.remove('active'));
                if (dots[activeIndex]) dots[activeIndex].classList.add('active');
            }
        });
    }, { root: slider, threshold: 0.5 });

    slides.forEach(slide => observer.observe(slide));

    updateButtonState();
});