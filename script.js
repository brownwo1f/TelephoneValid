const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const checkValidNumber = input => {
    if (input === '') {
      alert('Please provide a phone number');
      return;
    }
}

checkBtn.addEventListener("click", () => {
    checkValidNumber(userInput.value);
    userInput.value = '';
  });