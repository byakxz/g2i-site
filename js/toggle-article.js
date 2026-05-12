let emailModalShown = false;

document.addEventListener('DOMContentLoaded', () => {
    const buttonText = document.getElementById('buttontext');
    if (buttonText) {
        buttonText.textContent = 'Veja mais';
    }

    const article = document.querySelector('article');
    if (article) {
        article.classList.add('visible');
    }
});

function togglearticle() {
    const wrapper = document.getElementById('content-wrapper');
    const button = document.getElementById('toggle-button');
    const buttonText = document.getElementById('buttontext');
    const mainContainer = document.getElementById('article-container');

    wrapper.classList.toggle('expanded');
    button.classList.toggle('expanded');

    if (wrapper.classList.contains('expanded')) {
        buttonText.textContent = 'Veja menos';
        mainContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

        if (!emailModalShown) {
            emailModalShown = true;
            const overlay = document.getElementById('email-modal-overlay');
            if (overlay) overlay.classList.add('active');
        }
    } else {
        buttonText.textContent = 'Veja mais';
    }
}

function closeEmailModal() {
    const overlay = document.getElementById('email-modal-overlay');
    if (overlay) overlay.classList.remove('active');
}

function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
        closeEmailModal();
    }
}