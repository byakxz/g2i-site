
document.addEventListener("DOMContentLoaded", function () {
    const openButtons = document.querySelectorAll(".open-lightbox");
    const lightboxes = document.querySelectorAll(".lightbox");
    const closeButtons = document.querySelectorAll(".close-lightbox, .close-overlay");

    openButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            const iframe = target.querySelector("iframe");
            const src = iframe.getAttribute("data-src");
            iframe.setAttribute("src", src);
            target.classList.add("is-open");
            document.body.style.overflow = "hidden";
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const lightbox = this.closest(".lightbox");
            const iframe = lightbox.querySelector("iframe");
            iframe.setAttribute("src", ""); // Remove o vídeo
            lightbox.classList.remove("is-open");
            document.body.style.overflow = "auto";
        });
    });
});

