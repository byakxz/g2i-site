document.addEventListener("DOMContentLoaded", function() {
    const perguntas = document.querySelectorAll('.faq-pergunta');

    perguntas.forEach(pergunta => {
        pergunta.addEventListener('click', () => {
            const item = pergunta.parentElement;

            item.classList.toggle('active');

            perguntas.forEach(outraPergunta => {
                if (outraPergunta !== pergunta) {
                    outraPergunta.parentElement.classList.remove('active');
                }
            });
        });
    });
});