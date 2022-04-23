// Selectors
let userWeight = document.querySelector('#user-weight');
let userWeight2 = document.querySelector('#user-weight2');
let userWeight3 = document.querySelector('#user-weight3');
let userWeight4 = document.querySelector('#user-weight4');
let userWeight5 = document.querySelector('#user-weight5');
let userWeight6 = document.querySelector('#user-weight6');
let userWeight7 = document.querySelector('#user-weight7');
const submitButton = document.querySelector('.form-button');
const userWeightInput = document.querySelector('.userWeightInput');

// Event Listeners
// submitButton.addEventListener('click', averageWeight);
userWeight.addEventListener('keyup', averageWeight);

// Functions
function averageWeight(event) {
    let userWeightArr = [];
    // push user values into array

    userWeightArr.push(parseInt(userWeight.value));
    userWeightArr.push(parseInt(userWeight2.value));
    userWeightArr.push(parseInt(userWeight3.value));
    userWeightArr.push(parseInt(userWeight4.value));
    userWeightArr.push(parseInt(userWeight5.value));
    userWeightArr.push(parseInt(userWeight6.value));
    userWeightArr.push(parseInt(userWeight7.value));

    console.log(userWeightArr);
    // Sum all numbers in an array
    const sum = userWeightArr.reduce((a, b) => a + b, 0);
    console.log(sum);
    // Average all numbers by array.length
    const average = sum / userWeightArr.length;
    console.log(average);
    // Display average on screen to user
    userWeightInput.innerText = average;
}
