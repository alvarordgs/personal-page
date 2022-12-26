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

        if (projectsList.length % 2 !== 0 && windowSize) {
            projectsList[projectsList.length - 1].classList.add("full-columns");
        } else {
            projectsList[projectsList.length - 1].classList.remove(
                "full-columns"
            );
        }
    }
}

/*--------------------*/
//Sroll suave
function scrollSuave() {
    const linksMenu = document.querySelectorAll('.js-menu a[href^="#"]');

    if (linksMenu.length) {
        function smoothScroll(event) {
            event.preventDefault();

            const href = event.currentTarget.getAttribute("href");
            const section = document.querySelector(href);

            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        linksMenu.forEach((link) => {
            link.addEventListener("click", smoothScroll);
        });
    }
}

scrollSuave();

/*--------------------*/
//Animação ao scroll

function animacaoScroll() {
    const sectionsScroll = document.querySelectorAll(".js-scroll");

    if (sectionsScroll.length) {
        function animarScroll() {
            const windowMetade = window.innerHeight * 0.6;

            sectionsScroll.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = sectionTop - windowMetade < 0;

                if (isSectionVisible) {
                    section.classList.add("ativo");
                } else {
                    section.classList.remove("ativo");
                }
            });
        }

        window.addEventListener("scroll", animarScroll);
    }
}

animacaoScroll();
