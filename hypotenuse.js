const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  console.log(a, b);
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  const ans = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(ans);
  outputEl.innerHTML = "Length of Hypotenuse is " + lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
