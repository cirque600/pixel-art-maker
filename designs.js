
const colorInput = document.getElementById('colorPicker');

const canvas = document.getElementById('pixelCanvas');

const btnSubmit = document.querySelector("[type='submit']");

// Event listener when changing color
colorInput.addEventListener('change', selectColor);

// Event Listener when submit is clicked
btnSubmit.addEventListener("click", makeGrid);

// Cvent listener when color is chosen
canvas.addEventListener("click", colorCell);

//color selector
function selectColor(){
    let selectedColor = colorInput.value;
    canvas.style.color = selectedColor;
    return selectedColor;
}

// When canvas size is submitted, clears canvas and adds rows/columns
function makeGrid(evt) {
    clearCanvas();

    const row = document.getElementById("inputHeight").value;

    const col = document.getElementById("inputWidth").value;

    evt.preventDefault();

    for (let i = 0; i < row; i++) {
        let createRow = canvas.insertRow();
        for (let j = 0; j < col; j++) {
            createRow.insertCell();
        }
    }
}

// Colors the cell with given color when cell is clicked
function colorCell(evt){
    if(evt.target.nodeName == "TD") {
        evt.target.style.backgroundColor = selectColor();
    }
}

// Clears the canvas when submit clicked
function clearCanvas(){
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
      }
}

