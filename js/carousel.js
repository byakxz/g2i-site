document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-conteiner');
    const carousel = document.querySelector('.section-three');
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');

    if (!container || !carousel || !prevBtn || !nextBtn) return;

    const items = Array.from(carousel.querySelectorAll('.itens-s3'));
    if (items.length === 0) return;

    const scrollToItem = (index) => {
        const targetItem = items[index];
        if (!targetItem) return;

        carousel.scrollTo({
            left: targetItem.offsetLeft,
            behavior: 'smooth'
        });
    };

    const getVisibleIndex = () => {
        const scrollLeft = carousel.scrollLeft;
        let closestIndex = 0;
        let minDistance = Infinity;

        items.forEach((item, index) => {
            const distance = Math.abs(item.offsetLeft - scrollLeft);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        return closestIndex;
    };

    const updateButtonState = () => {
        const currentIndex = getVisibleIndex();
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= items.length - 3;
    };

    prevBtn.addEventListener('click', () => {
        const currentIndex = getVisibleIndex();
        const newIndex = Math.max(currentIndex - 1, 0);
        scrollToItem(newIndex);
    });

    nextBtn.addEventListener('click', () => {
        const currentIndex = getVisibleIndex();
        const newIndex = Math.min(currentIndex + 1, items.length - 1);
        scrollToItem(newIndex);
    });

    let scrollTimeout;
    carousel.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateButtonState, 150);
    });

    updateButtonState();
});
