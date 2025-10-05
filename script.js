// Helper function: writes any HTML into the #out div
function render(html) {
  document.getElementById("out").innerHTML = html;
}

/* 
  Function 1 — greet()
  ---------------------
  Prompts for a name and displays a greeting
*/
function greet() {
  const name = prompt("What is your name?");
  if (!name) {
    render("<p>No name given!</p>");
    return;
  }
  render(`<p>Hello, ${name}. Nice to see you today!</p>`);
}

/* 
  Function 2 — averageNumbers()
  ------------------------------
  Prompts for numbers separated by commas, finds the average, and shows the list.
*/
function averageNumbers() {
  const nums = prompt("Enter numbers separated by commas:");
  if (!nums) {
    render("<p>No numbers given!</p>");
    return;
  }

  const givenNums = nums.split(",").map((n) => parseFloat(n.trim()));
  if (givenNums.some(isNaN)) {
    render("<p class='text-danger'>Please enter valid numbers!</p>");
    return;
  }

  const sum = givenNums.reduce((a, b) => a + b, 0);
  const avg = sum / givenNums.length;

  const list = givenNums
    .map((n) => `<li class="list-group-item">${n}</li>`)
    .join("");

  render(
    `<p>Average: <strong>${avg.toFixed(
      2
    )}</strong></p><ul class="list-group">${list}</ul>`
  );
}

/* 
  Function 3 — timeOfDay()
  -------------------------
  Displays a greeting based on the current time.
*/
function timeOfDay() {
  const h = new Date().getHours();
  let msg = "";
  if (h < 12) {
    msg = "Top of the morning to ya!";
  } else if (h < 18) {
    msg = "Good Afternoon!";
  } else {
    msg = "Good Evening!";
  }
  render(`<p>${msg}</p>`);
}

/* 
  Function 4 — randomBetween()
  -----------------------------
  Generates a random number between two user inputs.
*/
function randomBetween() {
  const min = parseInt(prompt("Enter a MIN number"));
  const max = parseInt(prompt("Enter a MAX number"));

  if (isNaN(min) || isNaN(max)) {
    render("<p class='text-danger'>Please enter valid numbers.</p>");
    return;
  }
  if (min >= max) {
    render(
      "<p class='text-danger'>Minimum must be less than Maximum number.</p>"
    );
    return;
  }
  const rndNum = Math.floor(Math.random() * (max - min + 1) + min);
  render(
    `<p>Random number between ${min} and ${max}: <strong>${rndNum}</strong></p>`
  );
}

/* 
  Function 5 — clearOutput()
  ---------------------------
  Clears output and resets colors.
*/
function clearOutput() {
  const out = document.getElementById("out");
  out.style.backgroundColor = ""; // remove any custom background
  out.style.color = ""; // reset text color
  render("<p><em>Output cleared.</em></p>");
}

/* ------------------------------------------
  🎯 Student Challenge Section 
------------------------------------------ */

/* 
  Challenge 1 — changeTitle()
  ----------------------------
  Changes the page title text at the top.
*/
function changeTitle() {
  document.querySelector("h1").textContent = "🌟 JavaScript Functions in Action!";
}

/* 
  Challenge 2 — changeTextColor()
  -------------------------------
  Changes only the output TEXT color each time clicked.
*/
let textColorIndex = 0;
const textColors = ["black", "blue", "green", "purple", "red"];

function changeTextColor() {
  const out = document.getElementById("out");
  out.style.color = textColors[textColorIndex];
  textColorIndex = (textColorIndex + 1) % textColors.length;
}

/* 
  Challenge 3 — changeBoxColor()
  -------------------------------
  Changes ONLY the output BOX background color randomly.
*/
function changeBoxColor() {
  const out = document.getElementById("out");

  // remove Bootstrap's bg-light so our custom color shows
  out.classList.remove("bg-light");

  // random RGB generator
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  out.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

/* ------------------------------------------
  Event Listeners
------------------------------------------ */
document.getElementById("btnGreet").addEventListener("click", greet);
document.getElementById("btnAvg").addEventListener("click", averageNumbers);
document.getElementById("btnTime").addEventListener("click", timeOfDay);
document.getElementById("btnRandom").addEventListener("click", randomBetween);
document.getElementById("btnClear").addEventListener("click", clearOutput);

document.getElementById("btnTitle").addEventListener("click", changeTitle);
document.getElementById("btnTextColor").addEventListener("click", changeTextColor);
document.getElementById("btnBoxColor").addEventListener("click", changeBoxColor);
