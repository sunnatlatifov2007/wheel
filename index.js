let speed = 60;
let max = 750;
let temp = 20;
let wheel19 = 19;
let carPrice = 89990; 
let conditionerPrice = 0;
let longRangePrice = 0;

let speedscreen = document.querySelector(".km");
let maxscreen = document.querySelector(".kmmax");
let speedup = document.querySelectorAll(".btns button")[0];
let speeddown = document.querySelectorAll(".btns button")[1];

let temperature = document.querySelector(".degree");
let tup = document.querySelectorAll(".btns2 button")[0];
let tdown = document.querySelectorAll(".btns2 button")[1];

let price = document.querySelector(".dollar");
let wheel = document.querySelector(".wheel19");
let bigger = document.querySelectorAll(".btns3 button")[0];
let lower = document.querySelectorAll(".btns3 button")[1];

let conditionerCheckbox = document.querySelectorAll(".switch input")[0];
let longRangeCheckbox = document.querySelectorAll(".switch input")[1];

let wheelImage = document.getElementById("wheelImage");

function rotateWheelBasedOnSpeed() {
  if (speed === 0) {
    wheelImage.style.animation = "none";
    return;
  }
  let rotationSpeed = Math.max(0.5, 10 - speed / 30); 
  wheelImage.style.animation = `spin ${rotationSpeed}s linear infinite`;
}


function newdisplay() {
  speedscreen.textContent = `${speed} км/ч`;
  maxscreen.textContent = `${max}км`;
  temperature.textContent = `${temp}°`;
  wheel.textContent = `${wheel19}`;
  price.textContent = `$${carPrice.toLocaleString()}`;

  totalprice = carPrice + conditionerPrice + longRangePrice;
  price.textContent = `$${totalprice.toLocaleString()}`
}


conditionerCheckbox.addEventListener("change", () => {
  if (conditionerCheckbox.checked) {
    conditionerPrice = 100;
  } else {
    conditionerPrice = 0;
  }
  newdisplay();
});

longRangeCheckbox.addEventListener("change", () => {
  if (longRangeCheckbox.checked) {
    longRangePrice = 100;
  } else {
    longRangePrice = 0;
  }
  newdisplay();
});





bigger.addEventListener("click", () => {
  if (wheel19 < 25) {
    wheel19 += 1;
    carPrice -= 5;
    if (carPrice < 0) carPrice = 0;
  
  }
  newdisplay();
});

lower.addEventListener("click", () => {
  if (wheel19 > 14) {
    wheel19 -= 1;
    carPrice += 5;
  }
  newdisplay();
});

newdisplay(); 



tup.addEventListener("click", () => {
  if (temp < 40) {
    temp += 1;
    max -= 5;
    if (max < 0) max = 0;
  }
  newdisplay();
});

tdown.addEventListener("click", () => {
  if (temp > -10) {
    temp -= 1;
    max += 5;
    if (max > 750) max = 750;
  }
  newdisplay();
});



speedup.addEventListener("click", () => {
  if (speed < 280) {
    speed += 20;
    max -= 20;
    if (max < 0) max = 0;
    newdisplay();
    rotateWheelBasedOnSpeed();
  }
});


speeddown.addEventListener("click", () => {
  if (speed > 0) {
    speed -= 20;
    max += 20;
    if (max > 750) max = 750;
    newdisplay()
    rotateWheelBasedOnSpeed()
  }

});

newdisplay();




  
