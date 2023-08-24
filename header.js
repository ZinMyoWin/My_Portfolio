const hamberger = document.querySelector(".hamburger-menu");
const navContents = document.querySelector(".nav-contents");

hamberger.addEventListener("click", () => {
    hamberger.classList.toggle("active");
    navContents.classList.toggle("active");
})

document.querySelectorAll(".navbar-links").forEach(n => n.addEventListener("click", () => {
    hamberger.classList.remove("active");
    navContents.classList.remove("active");
}))
