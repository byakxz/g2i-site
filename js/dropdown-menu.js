document.addEventListener('DOMContentLoaded', function() {

    const dropdownTriggers = document.querySelectorAll('.div-dropdown');

    dropdownTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function(event) {
            event.stopPropagation();

            const dropdownMenu = this.nextElementSibling;

            document.querySelectorAll('.dropdown-menu.show').forEach(function(openMenu) {
                if (openMenu !== dropdownMenu) {
                    openMenu.classList.remove('show');
                }
            });

            if (dropdownMenu) {
                dropdownMenu.classList.toggle('show');
            }
        });
    });

    window.addEventListener('click', function() {
        document.querySelectorAll('.dropdown-menu.show').forEach(function(openMenu) {
            openMenu.classList.remove('show');
        });
    });
});