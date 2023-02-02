export default function initSkillsDescricao() {}

const descList = document.querySelectorAll('[data-skills="desc"] li');
const iconsList = document.querySelectorAll('[data-skills="icons"] li');
const descFixa = document.querySelector('[data-skills="desc"] p');

descFixa.classList.add("ativo");

function hideDesc() {
    descList.forEach((item) => {
        if (
            item.getAttribute("data-skill") === this.getAttribute("data-icon")
        ) {
            item.classList.remove("ativo");
        }

        descFixa.classList.add("ativo");
    });
}

function showDesc() {
    descFixa.classList.remove("ativo");

    descList.forEach((item) => {
        item.classList.remove("ativo");
        if (
            item.getAttribute("data-skill") === this.getAttribute("data-icon")
        ) {
            item.classList.add("ativo");
        }
    });

    this.addEventListener("mouseleave", hideDesc);
}

iconsList.forEach((icon) => {
    icon.addEventListener("mouseover", showDesc);
});
