let container = document.querySelector(".container");
let mid = document.querySelector(".mid");
let number = Math.ceil(Math.random() * 10000);

mid.onclick = function () {
  container.style.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 10000);
}
