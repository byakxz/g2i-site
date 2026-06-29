document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.resultados');
    if (!section) return;

    const carousel = section.querySelector('.conteiner-resultados');
    const controls = section.querySelector('.controles-resultados');
    const cards = Array.from(section.querySelectorAll('.card-resultados'));

    if (!carousel || !controls || cards.length === 0) return;

    const dots = cards.map((card, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'button-controle-resultados';
        dot.setAttribute('aria-label', `Ver resultado ${index + 1}`);

        dot.addEventListener('click', () => {
            card.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        });

        controls.appendChild(dot);
        return dot;
    });

    function setActiveDot(activeIndex) {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
            dot.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
        });
    }

    function updateActiveDot() {
        const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2;
        let activeIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, index) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const distance = Math.abs(carouselCenter - cardCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                activeIndex = index;
            }
        });

        setActiveDot(activeIndex);
    }

    carousel.addEventListener('scroll', () => {
        window.requestAnimationFrame(updateActiveDot);
    }, { passive: true });

    window.addEventListener('resize', updateActiveDot);
    setActiveDot(0);
    updateActiveDot();
});
