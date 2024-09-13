
//////////////////////////////////////////////////////////////////////
// MODAL AND SLIDES CONTROL for MOLDED PANEL DOORS
// Get elements
const moldedDoorBtn = document.getElementById('molded_door_btn');
const moldedModal = document.getElementById('molded-door');
const moldedCloseBtn = document.querySelector('.molded-close-btn');
const moldedSlides = document.querySelectorAll('.molded-Slides');
const moldedPrevBtn = document.querySelector('.molded-prev');
const moldedNextBtn = document.querySelector('.molded-next');

let currentMoldedSlide = 0;

// Function to show the modal
function showMoldedModal() {
    moldedModal.style.display = 'block';
    showMoldedSlide(currentMoldedSlide);
}

// Function to hide the modal
function closeMoldedModal() {
    moldedModal.style.display = 'none';
}

// Function to show the current slide
function showMoldedSlide(index) {
    // Hide all slides
    moldedSlides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Loop the index if out of bounds
    if (index >= moldedSlides.length) {
        currentMoldedSlide = 0;
    } else if (index < 0) {
        currentMoldedSlide = moldedSlides.length - 1;
    }

    // Display the current slide
    moldedSlides[currentMoldedSlide].style.display = 'block';
}

// Event listeners for modal open, close, next, and previous
moldedDoorBtn.addEventListener('click', showMoldedModal);
moldedCloseBtn.addEventListener('click', closeMoldedModal);

moldedNextBtn.addEventListener('click', () => {
    currentMoldedSlide++;
    showMoldedSlide(currentMoldedSlide);
});

moldedPrevBtn.addEventListener('click', () => {
    currentMoldedSlide--;
    showMoldedSlide(currentMoldedSlide);
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === moldedModal) {
        closeMoldedModal();
    }
});

//////////////////////////////////////////////////////////////////////
// MODAL AND SLIDES CONTROL for DOUBLE DOORS
// Get elements
const doubleDoorBtn = document.getElementById('double_door_btn');
const doubleModal = document.getElementById('double-door');
const doubleCloseBtn = document.querySelector('.double-close-btn');
const doubleSlides = document.querySelectorAll('.double-slides');
const doublePrevBtn = document.querySelector('.double-prev');
const doubleNextBtn = document.querySelector('.double-next');

let doubleCurrentSlide = 0;

// Function to show the modal
function showDoubleModal() {
    doubleModal.style.display = 'block';
    showDoubleSlide(doubleCurrentSlide);
}

// Function to hide the modal
function closeDoubleModal() {
    doubleModal.style.display = 'none';
}

// Function to show the current slide
function showDoubleSlide(index) {
    // Hide all slides
    doubleSlides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Loop the index if out of bounds
    if (index >= doubleSlides.length) {
        doubleCurrentSlide = 0;
    } else if (index < 0) {
        doubleCurrentSlide = doubleSlides.length - 1;
    }

    // Display the current slide
    doubleSlides[doubleCurrentSlide].style.display = 'block';
}

// Event listeners for modal open, close, next, and previous
doubleDoorBtn.addEventListener('click', showDoubleModal);
doubleCloseBtn.addEventListener('click', closeDoubleModal);

doubleNextBtn.addEventListener('click', () => {
    doubleCurrentSlide++;
    showDoubleSlide(doubleCurrentSlide);
});

doublePrevBtn.addEventListener('click', () => {
    doubleCurrentSlide--;
    showDoubleSlide(doubleCurrentSlide);
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === doubleModal) {
        closeDoubleModal();
    }
});

//////////////////////////////////////////////////////////////////////
// MODAL AND SLIDES CONTROL for GLASS INSERT DOORS
// Get elements
const glassDoorBtn = document.getElementById('glass_door_btn');
const glassModal = document.getElementById('glass-door');
const glassCloseBtn = document.querySelector('.glass-close-btn');
const glassSlides = document.querySelectorAll('.glass-slides');
const glassPrevBtn = document.querySelector('.glass-prev');
const glassNextBtn = document.querySelector('.glass-next');

let glassCurrentSlide = 0;

// Function to show the modal
function showGlassModal() {
    glassModal.style.display = 'block';
    showGlassSlide(glassCurrentSlide);
}

// Function to hide the modal
function closeGlassModal() {
    glassModal.style.display = 'none';
}

// Function to show the current slide
function showGlassSlide(index) {
    // Hide all slides
    glassSlides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Loop the index if out of bounds
    if (index >= glassSlides.length) {
        glassCurrentSlide = 0;
    } else if (index < 0) {
        glassCurrentSlide = glassSlides.length - 1;
    }

    // Display the current slide
    glassSlides[glassCurrentSlide].style.display = 'block';
}

// Event listeners for modal open, close, next, and previous
glassDoorBtn.addEventListener('click', showGlassModal);
glassCloseBtn.addEventListener('click', closeGlassModal);

glassNextBtn.addEventListener('click', () => {
    glassCurrentSlide++;
    showGlassSlide(glassCurrentSlide);
});

glassPrevBtn.addEventListener('click', () => {
    glassCurrentSlide--;
    showGlassSlide(glassCurrentSlide);
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === glassModal) {
        closeGlassModal();
    }
});

//////////////////////////////////////////////////////////////////////
// MODAL AND SLIDES CONTROL for PLANATE FLUSH DOORS
// Get elements
const planateDoorBtn = document.getElementById('planate_door_btn');
const planateModal = document.getElementById('planate-door');
const planateCloseBtn = document.querySelector('.planate-close-btn');
const planateSlides = document.querySelectorAll('.planate-Slides');
const planatePrevBtn = document.querySelector('.planate-prev');
const planateNextBtn = document.querySelector('.planate-next');

let currentPlanateSlide = 0;

// Function to show the modal
function showPlanateModal() {
    planateModal.style.display = 'block';
    showPlanateSlide(currentPlanateSlide);
}

// Function to hide the modal
function closePlanateModal() {
    planateModal.style.display = 'none';
}

// Function to show the current slide
function showPlanateSlide(index) {
    // Hide all slides
    planateSlides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Loop the index if out of bounds
    if (index >= planateSlides.length) {
        currentPlanateSlide = 0;
    } else if (index < 0) {
        currentPlanateSlide = planateSlides.length - 1;
    }

    // Display the current slide
    planateSlides[currentPlanateSlide].style.display = 'block';
}

// Event listeners for modal open, close, next, and previous
planateDoorBtn.addEventListener('click', showPlanateModal);
planateCloseBtn.addEventListener('click', closePlanateModal);

planateNextBtn.addEventListener('click', () => {
    currentPlanateSlide++;
    showPlanateSlide(currentPlanateSlide);
});

planatePrevBtn.addEventListener('click', () => {
    currentPlanateSlide--;
    showPlanateSlide(currentPlanateSlide);
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === planateModal) {
        closePlanateModal();
    }
});