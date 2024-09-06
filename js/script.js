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
}

// Controls for Modal
var double_close = document.getElementById("close-double-door");
var glass_close = document.getElementById("close-glass-insert");
var planate_close = document.getElementById("close-planate-door");

var double_door_btn = document.getElementById("double_door_btn");
var glass_insert_btn = document.getElementById("glass_insert_btn");
var planate_door_btn = document.getElementById("planate_door_btn");

var double_door = document.getElementById("modal-double-door");
var glass_insert = document.getElementById("modal-glass-insert");
var planate_door = document.getElementById("modal-planate-door");

double_door_btn.onclick = function () {
    double_door.style.display = "block";
    showSlides();
}

double_close.onclick = function () {
    double_door.style.display = "none";
};

glass_insert_btn.onclick = function () {
    glass_insert.style.display = "block";
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