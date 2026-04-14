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
    } else {
        buttonText.textContent = 'Veja mais';
    }
}