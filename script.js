const inputs = document.querySelectorAll(".angle-input");
const isTraingleBtn = document.querySelector("#is-traingle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfTraingles = angle1 + angle2 + angle3;
  return sumOfTraingles;
}

function isTraingle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  console.log(sumOfAngles);
  if (sumOfAngles === 180) {
    outputEl.innerHTML = "Angles form a Traingle";
  } else {
    outputEl.innerHTML = "Angles do not form a Traingle ";
  }
}

isTraingleBtn.addEventListener("click", isTraingle);
