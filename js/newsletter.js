function closeEmailModal() {
    document.getElementById('email-modal-overlay').style.display = 'none';
}

function handleOverlayClick(event) {
    if (event.target === document.getElementById('email-modal-overlay')) {
        closeEmailModal();
    }
}

async function inscreverNewsletter() {
    const email = document.getElementById('email-modal-input').value;

    if (!email) return;

    const dados = new URLSearchParams({
        email: email,
        token_rdstation: 'e67b31499fe98cbdea9f465e0567b538',
        identificador: 'newsletter-popup-blog',
    });

    try {
        await fetch('https://www.rdstation.com.br/api/1.2/conversions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: dados.toString(),
        });
    } catch (erro) {}

    // Troca o conteúdo pelo agradecimento
    document.querySelector('.blog-email').innerHTML = `
        <span class="be-titulo">Obrigado por se inscrever! 🎉</span>
        <p class="be-subtitulo">Em breve você receberá novidades no seu e-mail.</p>
    `;

    // Fecha após 2 segundos
    setTimeout(() => closeEmailModal(), 2000);
}

setTimeout(() => {
    document.getElementById('email-modal-overlay').style.display = 'flex';
}, 5000);