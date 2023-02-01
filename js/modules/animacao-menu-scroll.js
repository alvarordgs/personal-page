export default function animacaoScrollMenu() {
    const menuSections = document.querySelectorAll("[data-scroll]");
    const menuItens = document.querySelectorAll("[data-menu] li");

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;

        menuSections.forEach((section, index) => {
            const sectionTop = section.offsetTop;

            if (scrollTop > sectionTop * 0.6) {
                menuItens[index + 1].classList.add("ativo");
            } else {
                menuItens[index + 1].classList.remove("ativo");
            }
        });
    });
}
