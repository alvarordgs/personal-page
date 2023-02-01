export default function animacaoScroll() {
    const sectionsScroll = document.querySelectorAll("[data-scroll]");

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
