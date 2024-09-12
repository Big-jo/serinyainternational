/////////////////////////////////////////////////////////////////////
// CONTACT US BUTTON & POPUP CONTROLS
var contact = document.getElementById("contact");
var contactList = document.getElementById("contactList");
var closeContact = document.getElementById("closeContact");

// Display the contact list on botton click
contact.onclick = function () {
    contactList.style.display = "block";
};

// Close the contact list on the close botton click
closeContact.onclick = function () {
    contactList.style.display = "none";
};

/////////////////////////////////////////////////////////////////////
// EXPLORE OPTIONS BOTTON CONTROLS
// Function to open the modal
function openModal(modalId) {
    const modal = document.getElementById(modalId); // Get the modal by ID
    modal.style.display = "block"; // Get the modal by ID
    showSlides(slideIndex)
}

// Function to close the modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId); // Get the modal by ID
    modal.style.display = "none"; // Hide the modal
}

// Event listeners for the "Explore Options" buttons
document.getElementById("molded_door_btn").addEventListener("click", function() {
    openModal("molded-door");
});

document.getElementById("double_door_btn").addEventListener("click", function() {
    openModal("modal-double-door");
});

document.getElementById("glass_insert_btn").addEventListener("click", function() {
    openModal("modal-glass-insert");
});

document.getElementById("planate_door_btn").addEventListener("click", function() {
    openModal("modal-planate-door");
});

// Event listeners to close the modals
document.getElementById("close-molded-door").addEventListener("click", function() {
    closeModal("molded-door");
});

document.getElementById("close-double-door").addEventListener("click", function() {
    closeModal("modal-double-door");
});

document.getElementById("close-glass-insert").addEventListener("click", function() {
    closeModal("modal-glass-insert");
});

document.getElementById("close-planate-door").addEventListener("click", function() {
    closeModal("modal-planate-door");
});

// Close the modal if clicked outside of it
window.onclick = function(event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};



////////////////////////////////////////////////////////
let slideIndex = 1;
showSlides(slideIndex);

// Function to increment/decrement slide index
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to show the appropriate slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("moldedSlides");

  // Loop back to first slide if n exceeds the total number of slides
  if (n > slides.length) {
    slideIndex = 1;
  }

  // Loop to last slide if n is less than 1
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide
  slides[slideIndex - 1].style.display = "block";
}


var more = document.getElementById("more");
var less = document.getElementById("less");
var images = document.getElementById("more-images");


more.onclick = function (){
    images.style.display = "flex"
    more.style.display = "none"
    less.style.display = "block"
};

less.onclick = function (){
    images.style.display = "none"
    more.style.display = "block"
    less.style.display = "none"
};