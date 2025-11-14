//the code written here is not very efficient as it doesnot take advantage of the event
//delegation property. That's why there is a good amount of redundent code. I might or might
//not comeback again to improve the code for betterness and make it more effective.

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
    div.style.backgroundColor = '#242424';
      
    });

    // Mouseover event to check if both conditions are true
    div.addEventListener('mouseover', () => {
      if (isMouseDown) {
    div.style.backgroundColor = '#242424';
        
      }
    });
  });
};
function clearColor(){
  
  const smallDivsForColor = document.querySelectorAll(".smallDivs");
  smallDivsForColor.forEach(div =>{

    div.style.backgroundColor = '';
  })
  };
    
//function to download canvas as image

function downloadCanvas() {
  const canvas = document.querySelector('.sketch-pad');

  //create a temp canvas
  const tempCanvas = document.createElement('canvas');
  const ctx = tempCanvas.getContext('2d');

  //set canvas size
  tempCanvas.width = canvas.offsetWidth;
  tempCanvas.height = canvas.offsetHeight;

  //draw background color
  ctx.fillStyle = '#242424'; 
  ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

  //Get all colored divs
  const divs = canvas.querySelectorAll('.smallDivs');
  const gridSize = Math.sqrt(divs.length);
  const cellWidth = tempCanvas.width / gridSize;
  const cellHeight = tempCanvas.height / gridSize;

  //draw each colored cell
  divs.forEach((div, index) => {
    const bgColor = window.getComputedStyle(div).backgroundColor;
    if (bgColor &&bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
            const row = Math.floor(index / gridSize);
            const col = index % gridSize;
            ctx.fillStyle = bgColor;
            ctx.fillRect(col * cellWidth, row * cellHeight, cellWidth, cellHeight);
  }
  });

  //download
  const link = document.createElement('a');
  link.download = 'etch_a_sketch_image.png';
  link.href = tempCanvas.toDataURL('image/png');
  link.click();
};
