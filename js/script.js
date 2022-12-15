function interacaoMenu() {
    const itensMenu = document.querySelectorAll(".js-menu li");

    if (itensMenu.length) {
        itensMenu[0].classList.add("ativo");

        function activeMenu() {
            itensMenu.forEach((item) => {
                item.classList.remove("ativo");
            });

            this.classList.add("ativo");
        }

        itensMenu.forEach((item) => {
            item.addEventListener("click", activeMenu);
        });
    }
}

interacaoMenu();
