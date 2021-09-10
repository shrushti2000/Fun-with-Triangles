const sides = document.querySelectorAll(".side-input");
const areabtn = document.querySelector("#calculate-area");
const outputEl = document.querySelector("#outputEl");

function calculateArea(b, h) {
  return 0.5 * b * h;
}

function findArea() {
  const area = calculateArea(Number(sides[0].value), Number(sides[1].value));
  outputEl.innerHTML = "Area is " + area;
}

areabtn.addEventListener("click", findArea);
