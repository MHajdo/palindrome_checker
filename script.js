const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

function palindromeChecker(str) {
    const regex = /\s*\W*[_]*/gi;
    const reversedString = str.replace(regex, "").split("").reverse().join("").toLowerCase();

    return str.replace(regex, "").toLowerCase() === reversedString;
}


checkButton.addEventListener("click", () => {
    if (textInput.value === "") {
        alert("Please input a value")
    } else if (palindromeChecker(textInput.value)) {
        resultDiv.innerHTML = `
        <p class="palindrome"><strong>${textInput.value}</strong> is a palindrome</p>`
    } else {
        resultDiv.innerHTML = `
        <p class="not-palindrome"><strong>${textInput.value}</strong> is not a palindrome</p>`
    }
})