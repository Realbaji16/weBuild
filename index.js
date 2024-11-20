const navbarshow = document.getElementById("navbar-icon");
const navbarhide = document.getElementById('close-navbar')
const navbar = document.getElementById("dropdown-nav");
const textLogo = document.querySelectorAll(".text-logo");
const contactUs = document.querySelectorAll(".contact");
const portfolio = document.querySelectorAll(".portfolio");




navbarshow.addEventListener("click", function() {
    navbar.classList.remove("original");
    navbar.classList.add("clicked");
    console.log("clicked");
});
navbarhide.addEventListener("click", function() {
    navbar.classList.add("original");
    
    console.log("unclicked");
});
textLogo.forEach(function(logo) {
    logo.addEventListener("click", function() {
        window.location.href = "./index.html";
    });
});

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
