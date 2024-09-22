//slider
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');

sliderValue.textContent = slider.value;
var userInput = 40;
slider.addEventListener('input', function() {
  userInput = slider.value;
  sliderValue.textContent = slider.value;
});


//colorpicker
const colorPicker = document.getElementById('colorPicker');
const coloredDiv = document.getElementById('coloredDiv');

  colorPicker.addEventListener('input', function() {
    coloredDiv.style.backgroundColor = colorPicker.value;
  });


const checker = document.getElementById("test");

checker.addEventListener('click', () =>{
  
    console.log(userInput);
    generateBoxes();
    fillingColorsToDivs();
    //for eraser
    const eraseBotton = document.getElementById("eraser");
    eraseBotton.addEventListener('click',removingColorsFromDivs);  
    const clearBotton = document.getElementById("bottonForClear");
    clearBotton.addEventListener('click', clearColor);

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

};
function fillingColorsToDivs() {
  const smallDivsForColor = document.querySelectorAll(".smallDivs");

  let isMouseDown = false;

  // Mousedown and mouseup event at the document level to track mouse state
  document.addEventListener('mousedown', () => {
    isMouseDown = true;
  });
  
  document.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  smallDivsForColor.forEach(div => {
    // Click event for adding the colored class
    div.addEventListener('click', () => {
    div.style.backgroundColor = colorPicker.value;
      //div.classList.add("coloredDivs");
    });

    // Mouseover event to check if both conditions are true
    div.addEventListener('mouseover', () => {
      if (isMouseDown) {
    div.style.backgroundColor = colorPicker.value;
        
      }
    });
  });
};

//eraser
function removingColorsFromDivs() {
  const smallDivsForColor = document.querySelectorAll(".smallDivs");

  let isMouseDown = false;

  // Mousedown and mouseup event at the document level to track mouse state
  document.addEventListener('mousedown', () => {
    isMouseDown = true;
  });
  
  document.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  smallDivsForColor.forEach(div => {
    // Click event for adding the colored class
    div.addEventListener('click', () => {
    div.style.backgroundColor = 'rgb(250, 214, 214)';
      
    });

    // Mouseover event to check if both conditions are true
    div.addEventListener('mouseover', () => {
      if (isMouseDown) {
    div.style.backgroundColor = 'rgb(250, 214, 214)';
        
      }
    });
  });
};
function clearColor(){
  
  const smallDivsForColor = document.querySelectorAll(".smallDivs");
  smallDivsForColor.forEach(div =>{

    div.style.backgroundColor = 'rgb(250, 214, 214)';
  })
  };
    


