let imageContainer = document.getElementById("image-content");
let cardContent = document.getElementById("card-content");

imageContainer.addEventListener("mouseenter", () => {
cardContent.classList.remove("no-display");
imageContainer.classList.add("aboutme-details");

});

imageContainer.addEventListener("mouseleave", () => {
cardContent.classList.add("no-display");
imageContainer.classList.remove("aboutme-details");

});

        // Navigation bar

let spanSwitch = document.getElementById('switchspan');
let controller = document.getElementById('btnctrl');
let lightWrapper = document.getElementById('light-wrapper');
let navLinks = document.querySelectorAll(".nav-links a");
console.log(navLinks);

spanSwitch.addEventListener('click', function () {
    lightWrapper.classList.toggle('lightwrappertoggle');
    controller.classList.toggle('righttoggle');
    document.body.classList.toggle('styletoggle');
    spanSwitch.classList.toggle('switchtoggle');

    navLinks.forEach(function(link) {
        link.classList.toggle('linkcolor');
    })

});