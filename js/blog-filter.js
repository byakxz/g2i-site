document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.s3-filter');
    const blocks = document.querySelectorAll('.s3-category-block');

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const selected = btn.dataset.filter;

            blocks.forEach(block => {
                if (selected === 'all' || block.dataset.category === selected) {
                    block.removeAttribute('hidden');
                } else {
                    block.setAttribute('hidden', '');
                }
            });
        });
    });
});
