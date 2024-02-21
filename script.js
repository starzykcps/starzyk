let heading = document.querySelector("h1");
let button = document.querySelector("button");
button.addEventListener("click", function() {
let userInput = document.querySelector("input").value;
console.log(userInput);
heading.innerHTML = (userInput);
});