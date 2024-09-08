// SLIDS CONTROLS FOR MOLDED PANEL DOORS
var moldedSlideIndex = 0;
showMoldedSlides();

function showMoldedSlides() {
    var i;
    var moldedSlides = document.getElementsByClassName("moldedSlides");
    for (i = 0; i < moldedSlides.length; i++) {
        moldedSlides[i].style.display = "none";
    }
    moldedSlideIndex++;
    if (moldedSlideIndex > moldedSlides.length) {moldedSlideIndex = 1}
    moldedSlides[moldedSlideIndex-1].style.display = "block";
    setTimeout(showMoldedSlides, 5000); // Change image every 5 seconds
}

// SLIDS CONTROLS FOR DOUBLE DOORS
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("doubleSlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
};

// SLIDS CONTROLS FOR GLASS INSERT DOORS
var glassSlideIndex = 0;
showGlassSlides();

function showGlassSlides() {
    var i;
    var glassSlides = document.getElementsByClassName("glassSlides");
    for (i = 0; i < glassSlides.length; i++) {
        glassSlides[i].style.display = "none";
    }
    glassSlideIndex++;
    if (glassSlideIndex > glassSlides.length) {glassSlideIndex = 1}
    glassSlides[glassSlideIndex-1].style.display = "block";
    setTimeout(showGlassSlides, 5000); // Change image every 5 seconds
}

// SLIDS CONTROLS FOR PLANATE FLUSH DOORS
var planateSlideIndex = 0;
showPlanateSlides();

function showPlanateSlides() {
    var i;
    var planateSlides = document.getElementsByClassName("planateSlides");
    for (i = 0; i < planateSlides.length; i++) {
        planateSlides[i].style.display = "none";
    }
    planateSlideIndex++;
    if (planateSlideIndex > planateSlides.length) {planateSlideIndex = 1}
    planateSlides[planateSlideIndex-1].style.display = "block";
    setTimeout(showPlanateSlides, 5000); // Change image every 5 seconds
}

// Controls for Modal
var molded_close = document.getElementById("close-molded-door");
var double_close = document.getElementById("close-double-door");
var glass_close = document.getElementById("close-glass-insert");
var planate_close = document.getElementById("close-planate-door");

var molded_door_btn = document.getElementById("molded_door_btn");
var double_door_btn = document.getElementById("double_door_btn");
var glass_insert_btn = document.getElementById("glass_insert_btn");
var planate_door_btn = document.getElementById("planate_door_btn");

var molded_door = document.getElementById("modal-molded-door");
var double_door = document.getElementById("modal-double-door");
var glass_insert = document.getElementById("modal-glass-insert");
var planate_door = document.getElementById("modal-planate-door");


molded_door_btn.onclick = function () {
    molded_door.style.display = "block";
    showMoldedSlides();
}

molded_close.onclick = function () {
    molded_door.style.display = "none";
};

double_door_btn.onclick = function () {
    double_door.style.display = "block";
    showSlides();
}

double_close.onclick = function () {
    double_door.style.display = "none";
};

glass_insert_btn.onclick = function () {
    glass_insert.style.display = "block";
    showGlassSlides();
};

glass_close.onclick = function () {
    glass_insert.style.display = "none";
};

planate_door_btn.onclick = function () {
    planate_door.style.display = "block";
};

planate_close.onclick = function () {
    planate_door.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

//   JS for SlideShow on Mobile View







// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
//   }