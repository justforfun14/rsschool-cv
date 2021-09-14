const ary = document.querySelectorAll(".menu-item");
const button = document.querySelector("#menu-toggle");

ary.forEach((a) =>
    a.addEventListener("click", (e) => {
        button.checked = !button.checked;
    })
);
