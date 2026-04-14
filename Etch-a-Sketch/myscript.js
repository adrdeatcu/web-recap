let container = document.querySelector("#container");
const gridSize = document.querySelector("#gridSize");
const colorMode = document.querySelector("#colorMode");
const blackBtn = document.querySelector("#blackBtn");
const resetBtn = document.querySelector("#resetBtn");

let currentMode = "black"; //choosed as default option

function createGrid(size = 16) {
    for(let i=1; i<=size * size; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("gridBox");
        newDiv.style.width = `${700 / size}px`;
        newDiv.style.height = `${700 /size}px`;
        newDiv.addEventListener("mouseenter", (e) =>{
            if(currentMode === "black") {
                e.target.style.backgroundColor = "black";
            }else {
                e.target.style.backgroundColor = randomColor();
            }
           
        });
        container.appendChild(newDiv);
    }
}

function colorOnEnter(myDiv) {
    myDiv.style.backgroundColor = "black";
}

function randomColor() {
    let colorArray = [];
    for(let i=0; i<3; i++) {
        colorArray[i] = Math.floor(Math.random() * 256);
    }
    let red = colorArray[0];
    let green = colorArray[1];
    let blue = colorArray [2];
    return `rgb(${red} , ${green}, ${blue})`;
}

gridSize.addEventListener("click" , () => {
    let gridSizeInput = Number(prompt("Enter a grid number: maximum 64(64x64)"));
    container.textContent = '';
    createGrid(gridSizeInput);
});

colorMode.addEventListener("click", () =>{
    currentMode = "color";
});

blackBtn.addEventListener("click", () =>{
    currentMode = "black";
});


resetBtn.addEventListener("click", () =>{
    let allGridBoxes = document.querySelectorAll(".gridBox");
    for (let i = 0; i < allGridBoxes.length; i++) {
        let box = allGridBoxes[i];
        box.style.backgroundColor = "#FFDCDC";
    }
        
});




createGrid();