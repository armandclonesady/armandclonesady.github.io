let nav = document.getElementById("nav-phone");
let icon = document.getElementById("hamburger");
let options = document.getElementsByClassName("options");

function showNavOptions() {
    nav.style.maxHeight = "100vh";
    nav.style.transition = "all 0.5s";
    icon.style.display = "none";
    return;
}