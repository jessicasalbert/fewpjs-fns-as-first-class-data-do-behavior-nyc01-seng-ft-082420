/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
<<<<<<< HEAD
=======

>>>>>>> 12cca4173aa457f3b55ddb7771e1de142d8aa891
function greet(time) {
  const hour = parseInt(time.slice(0, 3))
  if (hour < 12) {
    return "Good Morning"
  } else if (hour <= 17) {
    return "Good Afternoon"
  } else
  return "Good Evening"
}

function displayMessage(string) {
<<<<<<< HEAD
  document.getElementById("greeting").textContent = string;
=======
  document.getElementById("greeting").innerText = string;
>>>>>>> 12cca4173aa457f3b55ddb7771e1de142d8aa891
}