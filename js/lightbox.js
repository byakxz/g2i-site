document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SELEÇÃO DOS ELEMENTOS ---
    const openTrigger = document.querySelector('.capa-video');
    const lightbox = document.getElementById('video-popup');
    const iframe = lightbox.querySelector('iframe');
    
    // Seleciona todos os gatilhos de fechamento de uma vez
    const closeTriggers = document.querySelectorAll('.close-lightbox, .close-overlay');

    // --- 2. TRATAMENTO DE ERROS (do seu código) ---
    if (!openTrigger || !lightbox || !iframe) {
        console.error("Erro: Um ou mais elementos essenciais do lightbox não foram encontrados. Verifique as classes e IDs no HTML.");
        return;
    }

    // Guarda a URL original do vídeo para resetar depois
    const originalVideoSrc = iframe.src;

    // --- 3. FUNÇÕES PRINCIPAIS ---

    // Função para ABRIR o lightbox com autoplay (lógica do seu código)
    function openLightbox(event) {
        event.preventDefault();
        
        // Adiciona os parâmetros para autoplay
        let videoUrl = new URL(originalVideoSrc);
        videoUrl.searchParams.set('autoplay', '1');
        videoUrl.searchParams.set('mute', '1'); // Autoplay geralmente requer que o vídeo comece mudo
        iframe.src = videoUrl.toString();
        
        lightbox.classList.add('is-open');
    }

    // Função UNIFICADA para FECHAR o lightbox
    function closeLightbox() {
        lightbox.classList.remove('is-open');
        // Para o vídeo resetando para a URL original, sem autoplay
        iframe.src = originalVideoSrc;
    }

    // --- 4. EVENT LISTENERS ---

    // Abre ao clicar na capa do vídeo
    openTrigger.addEventListener('click', openLightbox);

    // Fecha ao clicar em qualquer um dos botões de fechar (X ou overlay)
    closeTriggers.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            closeLightbox();
        });
    });

    // Fecha ao pressionar a tecla 'Escape' (melhoria de usabilidade)
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
            closeLightbox();
        }
    });
});