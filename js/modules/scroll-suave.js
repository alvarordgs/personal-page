export default function scrollSuave() {
    const linksMenu = document.querySelectorAll('[data-menu] a[href^="#"]');

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
