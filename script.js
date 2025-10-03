// Helper function: writes any HTML into the #out div
function render(html) {
  document.getElementById("out").innerHTML = html;
}

/* 
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet() {
  // TODO: Write your code here
  const name = prompt("What is your name?");
  if (!name) {
    render("<p> No name given! </p>");
    return;
  }
  render(`<p> Hello, ${name}. Nice to see you today!`);
}

/* 
  Function 2 — averageNumbers()
  ------------------------------
  - Prompt the user for a list of numbers separated by commas
  - Split the input into an array, turn into numbers
  - Calculate the average
  - Display the average AND the list of numbers
*/
function averageNumbers() {
  // TODO: Write your code here
  const nums = prompt("Enter numbers seperated by commas:");
  if (!nums) {
    render("<p> No numbers given! </p>");
    return;
  }

  const givenNums = nums.split(",").map((n) => parseFloat(n.trim()));

  const sum = givenNums.reduce((a, b) => a + b, 0);

  const avg = sum / givenNums.length;

  const list = givenNums
    .map((n) => `<li class="list-group-item"> ${n}</li>`)
    .join("");

  render(
    `</p> Average: <strong>${avg.toFixed(
      2
    )} </strong> </p> <ul class="list-group"> ${list} </ul>`
  );
}

/* 
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function timeOfDay() {
  // TODO: Write your code here
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
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween() {
  // TODO: Write your code here
  const min = parseInt(prompt("Enter a MIN number"));
  const max = parseInt(prompt("Enter a MAX number"));

  if (isNaN(min) || isNaN(max)) {
    render("<p class='text-danger'> Please enter valid numbers.</p>");
    return;
  }
  if (min > max) {
    render(
      "<p class='text-danger'> Minimum must be less than Maximum number.</p>"
    );
    return;
  }
  const rndNum = Math.floor(Math.random() * (max - min + 1) + min);
  render(
    `<p> Random number between ${min} and ${max}: <strong>${rndNum}</strong></p>`
  );
}

/* 
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput() {
  // TODO: Write your code here
}

// ---- Event listeners for the demo buttons ----
document.getElementById("btnGreet").addEventListener("click", greet);
document.getElementById("btnAvg").addEventListener("click", averageNumbers);
document.getElementById("btnTime").addEventListener("click", timeOfDay);
document.getElementById("btnRandom").addEventListener("click", randomBetween);
document.getElementById("btnClear").addEventListener("click", clearOutput);

/* 
  ------------------------------------------
  Student Challenge Section 
  ------------------------------------------
  Add 3 new functions here, each with its own button in index.html:
  
  1) Change the page title text to something new.
  2) Cycle the output box text color (switch to a different color each time clicked).
  3) Change BOTH the text and background color of #out.

  Write each function below, and don’t forget to connect each one 
  to a new button in index.html using addEventListener.
*/
