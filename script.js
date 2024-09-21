const checker = document.getElementById("test");
let userInput = null;
checker.addEventListener('click', () =>{
    userInput = document.querySelector(".resolutionByUser").value;
    console.log(userInput);
    generateBoxes();

})
function generateBoxes(){
const sketchArea = document.querySelector(".sketch-pad");
sketchArea.innerHTML = '';
const size = 550;
const boxSize = size / userInput;

for(let i = 0; i < userInput*userInput; i++){
    const tinyBox = document.createElement("div");
    tinyBox.classList.add("smallDivs");
    tinyBox.style.width = `${boxSize}px`;
    tinyBox.style.height = `${boxSize}px`;
    sketchArea.appendChild(tinyBox);
}
 const smallDivsForColor = document.querySelectorAll(".smallDivs");
 smallDivsForColor.forEach(div => {
    div.addEventListener('click', () =>{
        div.classList.add("coloredDivs");
        
    })
    div.addEventListener('mouseenter', () =>{
        div.classList.add("coloredDivs");
    })
    div.addEventListener('mouseleave', () =>{
        div.classList.add("coloredDivs");
    })
});
};

