// Selectors
let userWeight = document.querySelector("#user-weight");
const submitButton = document.querySelector(".form-button");

// Event Listeners
submitButton.addEventListener("click", averageWeight);

// Functions
function averageWeight(event) {
   event.preventDefault();
   console.log(userWeight.value);
   let userWeight = [];
   // get user input from table cell
   // push into array and total up the sum
   // cl the sum
   // display sum in average weight box
}
