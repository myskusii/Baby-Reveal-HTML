let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let mid = document.querySelector(".mid");
let number = 240;

let flash = document.querySelector(".container div");

btn.onclick = function () {
  container.style.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 10000);
}

mid.onclick = function() {
  container.style.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 10000);
}

