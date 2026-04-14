document.addEventListener('DOMContentLoaded', function() {

        const pageUrl = encodeURIComponent(window.location.href);
        const pageTitle = encodeURIComponent(document.title);
        const shareText = encodeURIComponent("Confira este artigo incrível: " + document.title);

        const facebookLink = document.getElementById('share-facebook');
        const linkedinLink = document.getElementById('share-linkedin');
        const whatsappLink = document.getElementById('share-whatsapp');
        const twitterLink = document.getElementById('share-twitter');

        if (facebookLink) {
            facebookLink.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
        }
        if (linkedinLink) {
            linkedinLink.href = `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}`;
        }
        if (whatsappLink) {
            whatsappLink.href = `https://api.whatsapp.com/send?text=${shareText} ${pageUrl}`;
        }
        if (twitterLink) {
            twitterLink.href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
        }
    });