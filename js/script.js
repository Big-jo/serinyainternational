var double_close = document.getElementById("double_close");
var glass_close = document.getElementById("glass_close");
var planate_close = document.getElementById("planate_close");

var double_door_btn = document.getElementById("double_door_btn");
var glass_insert_btn = document.getElementById("glass_insert_btn");
var planate_door_btn = document.getElementById("planate_door_btn");

var double_door = document.getElementById("double_door");
var glass_insert = document.getElementById("glass_insert");
var planate_door = document.getElementById("planate_door");

double_door_btn.onclick = function () {
    double_door.style.display = "block";
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