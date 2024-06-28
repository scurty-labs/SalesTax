const state = document.getElementById("state");
const phone = document.getElementById("phoneList");
const inputField = document.getElementById("input");
const button = document.getElementById("calculate")

function popDropDownState (data,dropDownId) {
    const dropdown = document.getElementById(dropDownId);
    for (const state in data) {
        const option = document.createElement("option");
        option.value = data[state];
        option.textContent = state;
        dropdown.appendChild(option);
    }
}

function popDropDownTax (data,dropDownId) {
    const dropdown = document.getElementById(dropDownId);
    for (const phone in data) {
        const option = document.createElement("option");
        option.value = phone;
        option.textContent = phone;
        dropdown.appendChild(option);
        }
};

popDropDownState(stateSalesTaxRates,"state");
popDropDownTax(phoneModelAndPrice,"phoneList");

 function roundNumber(num) {
    return Math.round(num * 100) / 100;
};


function calcTax () {
    const tax = document.getElementById("input");
    const state = document.getElementById("state"); 
    const resultBox = document.getElementById("result");
    let test = phoneModelAndPrice[tax];
    let x = state.value * phoneModelAndPrice[tax.value];
    let z = roundNumber(x);
    resultBox.innerHTML = z;
};

button.addEventListener("click", calcTax);
