const ary = document.querySelectorAll(".menu-item");

ary.forEach((a) =>
    a.addEventListener("click", (e) => {
        menubox.classList.add("transparent");
        menubox.classList.add("unvisible");
    })
);

const button_burger = document.querySelector(".button-burger");
const menubox = document.querySelector(".menubox");

button_burger.addEventListener("click", (e) => {
    menubox.classList.toggle("transparent");
    menubox.classList.toggle("unvisible");
});
