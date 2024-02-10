const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const checkValidNumber = (input) => {
    let res = '';
    if (input === '') {
      alert('Please provide a phone number');
      return;
    }
    res =  /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(input); /* ^(1\s|1)? - EITHER starts with 1 and space OR only 1
     (\(\d{3}\)|\d{3}) - cluster of 3 digits within () OR without () (-|\s)? - EITHER "-" OR space  \d{3} - 3 digits (-|\s)? - - EITHER "-" OR space
      \d{4}$ - 4 digits in the LAST */
    createPTag(res);
}

const createPTag = (bool) => {
    const p = document.createElement("p");
    p.innerText = bool ? `Valid US number: ${userInput.value}` : `Invalid US number: ${userInput.value}`;
    resultsDiv.appendChild(p);
}


checkBtn.addEventListener("click", () => {
    checkValidNumber(userInput.value);
});

userInput.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        checkValidNumber(userInput.value);
    }
});

clearBtn.addEventListener("click",()=>{
    userInput.value = '';
    resultsDiv.replaceChildren();
})