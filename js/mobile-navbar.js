class MobileNavbar {
    constructor(menuTopo, itensLista, itensLinks) {
        this.menuTopo = document.querySelector(menuTopo);
        this.itensLista = document.querySelector(itensLista);
        this.itensLinks = document.querySelectorAll(itensLinks);
        this.activeClass = "active";
        this.bodyActiveClass = "menu-open";
        this.handleClick = this.handleClick.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    setMenuState(isOpen) {
        this.itensLista.classList.toggle(this.activeClass, isOpen);
        this.menuTopo.classList.toggle(this.activeClass, isOpen);
        document.body.classList.toggle(this.bodyActiveClass, isOpen);

        this.menuTopo.setAttribute("aria-expanded", String(isOpen));
        this.menuTopo.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );
    }

    handleClick() {
        const isOpen = !this.itensLista.classList.contains(this.activeClass);
        this.setMenuState(isOpen);
    }

    closeMenu() {
        this.setMenuState(false);
    }

    handleOutsideClick(event) {
        const isOpen = this.itensLista.classList.contains(this.activeClass);
        const clickedInsideMenu = this.itensLista.contains(event.target);
        const clickedToggle = this.menuTopo.contains(event.target);

        if (isOpen && !clickedInsideMenu && !clickedToggle) {
            this.closeMenu();
        }
    }

    handleKeydown(event) {
        if (event.key === "Escape") {
            this.closeMenu();
        }
    }

    handleResize() {
        if (window.innerWidth > 1024) {
            this.closeMenu();
        }
    }

    addClickEvent() {
        if (this.menuTopo) { 
            this.menuTopo.addEventListener("click", this.handleClick);
        }

        this.itensLinks.forEach((link) => {
            link.addEventListener("click", (event) => {
                if (event.currentTarget.closest(".div-dropdown-header")) {
                    return;
                }

                this.closeMenu();
            });
        });

        document.addEventListener("click", this.handleOutsideClick);
        document.addEventListener("keydown", this.handleKeydown);
        window.addEventListener("resize", this.handleResize);
    }

    init() {
        if (this.menuTopo && this.itensLista) { 
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".button-menu-header",
    ".ul-nav-header",
    ".ul-nav-header a"
);

mobileNavbar.init();
