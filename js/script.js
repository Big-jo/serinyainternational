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

///////////////////////////////////////////////////////////////////////
// GALLERY CONTORLS
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

// //////////////////////////////////////////////////////////////////////
// // Variables for all modals and buttons
// const moldedDoorModal = document.getElementById('molded-door');
// const doubleDoorModal = document.getElementById('double-door');
// const glassInsertModal = document.getElementById('modal-glass-insert');
// const planateDoorModal = document.getElementById('modal-planate-door');

// const moldedDoorBtn = document.getElementById('molded_door_btn');
// const doubleDoorBtn = document.getElementById('double_door_btn');
// const glassDoorBtn = document.getElementById('glass_door_btn');
// const planateDoorBtn = document.getElementById('planate_door_btn');

// const closeMolded = document.getElementById('close-molded-door');
// const closeDouble = document.getElementById('close-double-door');
// const closeGlassInsert = document.getElementById('close-glass-insert');
// const closePlanate = document.getElementById('close-planate-door');

// // Open Modal Functions
// moldedDoorBtn.onclick = function() {
//     moldedDoorModal.style.display = 'block';
// };

// doubleDoorBtn.onclick = function() {
//     doubleDoorModal.style.display = 'block';
// };

// glassDoorBtn.onclick = function() {
//     glassInsertModal.style.display = 'block';
// };

// planateDoorBtn.onclick = function() {
//     planateDoorModal.style.display = 'block';
// };

// // Close Modal Functions
// closeMolded.onclick = function() {
//     moldedDoorModal.style.display = 'none';
// };

// closeDouble.onclick = function() {
//     doubleDoorModal.style.display = 'none';
// };

// closeGlassInsert.onclick = function() {
//     glassInsertModal.style.display = 'none';
// };

// closePlanate.onclick = function() {
//     planateDoorModal.style.display = 'none';
// };

// // SlideShow Logic
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls for different modals
// function plusSlides(n, modalType) {
//     showSlides(slideIndex += n, modalType);
// }

// // Display slides for different modals
// function showSlides(n, modalType) {
//     let slides, i;

//     switch(modalType) {
//         case 'molded':
//             slides = document.getElementsByClassName('moldedSlides');
//             break;
//         case 'double':
//             slides = document.getElementsByClassName('doubleSlides');
//             break;
//         case 'glass':
//             slides = document.getElementsByClassName('glassSlides');
//             break;
//         case 'planate':
//             slides = document.getElementsByClassName('planateSlides');
//             break;
//     }

//     if (n > slides.length) { slideIndex = 1; }
//     if (n < 1) { slideIndex = slides.length; }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     slides[slideIndex - 1].style.display = 'block';
// }

// // Event Listeners for the modal controls
// document.querySelector('.prev').addEventListener('click', function() {
//     plusSlides(-1, 'molded');
// });
// document.querySelector('.next').addEventListener('click', function() {
//     plusSlides(1, 'molded');
// });

// document.querySelector('.prevDouble').addEventListener('click', function() {
//     plusSlides(-1, 'double');
// });
// document.querySelector('.nextDouble').addEventListener('click', function() {
//     plusSlides(1, 'double');
// });

// document.querySelector('.prevGlass').addEventListener('click', function() {
//     plusSlides(-1, 'glass');
// });
// document.querySelector('.nextGlass').addEventListener('click', function() {
//     plusSlides(1, 'glass');
// });

// document.querySelector('.prevPlanate').addEventListener('click', function() {
//     plusSlides(-1, 'planate');
// });
// document.querySelector('.nextPlanate').addEventListener('click', function() {
//     plusSlides(1, 'planate');
// });
