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

/*--------------------*/
// Verificar se existe uma quantidade impar de projetos para ajustar a tela
window.onresize = ajustarJanela;

function ajustarJanela() {
    const projectsList = document.querySelectorAll(".js-projects-list li");

    if (projectsList.length) {
        const windowSize = window.matchMedia("(max-width: 800px)").matches;

        console.log(windowSize);

        if (projectsList.length % 2 !== 0 && windowSize) {
            projectsList[projectsList.length - 1].classList.add("full-columns");
        } else {
            projectsList[projectsList.length - 1].classList.remove(
                "full-columns"
            );
        }
    }
}
