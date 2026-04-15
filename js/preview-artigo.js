document.addEventListener('DOMContentLoaded', function() {

        const pageUrl = encodeURIComponent(window.location.href);
        const pageTitle = encodeURIComponent(document.title);
        const shareText = encodeURIComponent("Confira este artigo incrível: " + document.title);

        const shareLinks = {
            'share-facebook':    `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
            'share-linkedin':    `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}`,
            'share-whatsapp':    `https://api.whatsapp.com/send?text=${shareText} ${pageUrl}`,
            'share-twitter':     `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`,
            'tl-share-facebook': `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
            'tl-share-linkedin': `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}`,
            'tl-share-whatsapp': `https://api.whatsapp.com/send?text=${shareText} ${pageUrl}`,
            'tl-share-twitter':  `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`,
        };

        Object.entries(shareLinks).forEach(([id, url]) => {
            const el = document.getElementById(id);
            if (el) el.href = url;
        });
    });