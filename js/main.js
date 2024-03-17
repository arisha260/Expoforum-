//! Меню бургер
const burger = document.querySelector(".header__burger");
burger.addEventListener("click", function () {
    const menu = document.querySelector(".header__nav");
    burger.classList.toggle("active");
    menu.classList.toggle("active-menu");
    document.body.classList.toggle('stop-body');
})