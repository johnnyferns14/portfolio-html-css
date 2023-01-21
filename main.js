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