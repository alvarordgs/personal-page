export default function initAjustarJanela() {
    window.onresize = ajustarJanela;

    function ajustarJanela() {
        const projectsList = document.querySelectorAll(".js-projects-list li");

        if (projectsList.length) {
            const windowSize = window.matchMedia("(max-width: 800px)").matches;

            if (projectsList.length % 2 !== 0 && windowSize) {
                projectsList[projectsList.length - 1].classList.add(
                    "full-columns"
                );
            } else {
                projectsList[projectsList.length - 1].classList.remove(
                    "full-columns"
                );
            }
        }
    }
}
