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
    const myDiv = document.querySelectorAll('.smallDivs');

    let isMouseOver = false;
    let isMouseDown = false;
    myDiv.forEach(div =>{
        div.addEventListener('mouseover', function() {
            isMouseOver = true;
            checkCombinedEvent();
          });
          
          // Mouseout event to reset flag when the mouse leaves the div
          div.addEventListener('mouseout', function() {
            isMouseOver = false;
          });
          
          // Mousedown event
          div.addEventListener('mousedown', function() {
            isMouseDown = true;
            checkCombinedEvent();
          });
          
          // Mouseup event to reset flag when the mouse button is released
          div.addEventListener('mouseup', function() {
            isMouseDown = false;
          });
          
          // Function to check if both conditions are true
          function checkCombinedEvent() {
            if (isMouseOver && isMouseDown) {
              console.log('Mouse is over the div and mouse is down');
              // You can add any action you want here
            }
          }

    })
    // Mouseover event
   
    

});
};

