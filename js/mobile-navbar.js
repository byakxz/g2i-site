class MobileNavbar {
    constructor(menuTopo, itensLista, itensLinks) {
        this.menuTopo = document.querySelector(menuTopo);
        this.itensLista = document.querySelector(itensLista);
        this.itensLinks = document.querySelectorAll(itensLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.itensLista.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        if (this.menuTopo) { 
            this.menuTopo.addEventListener("click", this.handleClick);
        }
    }

    init() {
        if (this.menuTopo && this.itensLista) { 
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".menu-topo",
    ".itens-topo",
    ".itens-topo li"
);

mobileNavbar.init();