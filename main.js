let imageContainer = document.getElementById("card");
let cardContent = document.getElementById("card-content");
let profileImg = document.getElementById("profile-img");

imageContainer.addEventListener("mouseenter", () => {
cardContent.classList.remove("no-display");
imageContainer.classList.add("aboutme-details");
profileImg.classList.add("image-hover");

});

imageContainer.addEventListener("mouseleave", () => {
cardContent.classList.add("no-display");
imageContainer.classList.remove("aboutme-details");
profileImg.classList.remove("image-hover");

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

const contactSection = document.getElementById("contactSection");
const contactForm = document.getElementById('myForm');
const queryName = document.querySelector('input[name="name"]');
const queryEmail = document.querySelector('input[name="email"]');
const queryContact = document.querySelector('input[name="contact"]');
const queryComment = document.getElementById('queryArea');
const btnSubmit = document.querySelector('input[type="submit"]');
const pElement = document.querySelector('.pContact');
const numnum = document.getElementById('num');
const sidebar = document.querySelector(".sidebar");

// Enable / Disable the form button
function btnDisplay() {

const textInputs = [queryName, queryEmail, queryContact, queryComment];
for (let i=0; i<textInputs.length; i++) {
  textInputs[i].addEventListener('keyup', function(e) {

    if (queryName.value == "" || queryEmail.value == "" || queryContact.value == "" || queryComment.value == "") {
      btnSubmit.disabled=true;
    }
    else {
      btnSubmit.disabled=false;
    }
  });
}

}

btnDisplay();


//button click event
btnSubmit.addEventListener('click', function(e) {
    alert(`Thank you ${queryName.value} for entering the information 
  but the form was not submitted since the functionality
  has not been added as yet. Stay tuned!!`);
  contactForm.reset();

});


//contact form toggle



function contactFormToggle() {
  sidebar.addEventListener('click', function(event) {
   // if(contactForm != event.target) return;
    if (contactSection.style.right === '-18.4em') {
      contactSection.style.right = "-0.2em";
      contactSection.style.transition = "right 0.7s ease-in";
    }

    else {
      contactSection.style.right = "-18.4em";
      contactSection.style.transition = "right 0.7s ease-in";
    }

  });
};

contactFormToggle();
