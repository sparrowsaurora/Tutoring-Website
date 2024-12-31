// JavaScript to toggle the menu
document.getElementById("hamburger").addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
});

// makes sure the year is correct on the website
const year = document.querySelector("#current-year")
year.innerHTML = new Date().getFullYear();