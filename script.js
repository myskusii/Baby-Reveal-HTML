let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let mid = document.querySelector(".mid");
let number = 18000;

let flash = document.querySelector(".container div");

btn.onclick = function () {
  container.style.transform = "rotate(" + number + "deg)";
  number += 18000;
}

mid.onclick = function() {
  container.style.transform = "rotate(" + number + "deg)";
  number += 18000;
}

