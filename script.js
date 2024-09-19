const checker = document.getElementById("test");
let userInput = null;
checker.addEventListener('click', () =>{
    userInput = document.querySelector(".resolutionByUser").value;
    console.log(userInput);

})
const sketchArea = document.querySelector(".sketch-pad");
const smallDivs = document.createElement("div");

