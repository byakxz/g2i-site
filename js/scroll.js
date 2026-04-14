function smoothScrollTo(targetSelector, duration = 1000) {
    const target = document.querySelector(targetSelector);
    if (!target) {
        console.error(`Elemento alvo não encontrado para o seletor: ${targetSelector}`);
        return;
    }

    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.addEventListener("DOMContentLoaded", function() {

    const linksDeScroll = document.querySelectorAll('.btn-scroll');
    
    linksDeScroll.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const idAlvo = this.getAttribute('href');

            smoothScrollTo(idAlvo, 1000);
        });
    });

    if (window.location.hash) {
        const isScrollLink = document.querySelector(`.btn-scroll[href="${window.location.hash}"]`);
        if (isScrollLink) {
            setTimeout(() => {
                smoothScrollTo(window.location.hash, 1000);
            }, 100); 
        }
    }
});