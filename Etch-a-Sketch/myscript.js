let container = document.querySelector("#container");
const gridSize = document.querySelector("#gridSize");
const colorMode = document.querySelector("#colorMode");
const resetBtn = document.querySelector("#resetBtn");

function createGrid(size = 16) {
    for(let i=1; i<=size * size; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("gridBox");
        newDiv.style.width = `${700 / size}px`;
        newDiv.style.height = `${700 /size}px`;
        newDiv.addEventListener("mouseenter", (e) =>{
            e.target.style.backgroundColor = "black";
        });
        container.appendChild(newDiv);
    }
}

function colorOnEnter(myDiv) {
    myDiv.style.backgroundColor = "black";
}

function randomColor(myDiv) {
    
}

gridSize.addEventListener("click" , () => {
    let gridSizeInput = Number(prompt("Enter a grid number: maximum 64(64x64)"));
    container.textContent = '';
    createGrid(gridSizeInput);
});

colorMode.addEventListener("click", () =>{
    
});

resetBtn.addEventListener("click", () =>{
    let allGridBoxes = document.querySelectorAll(".gridBox");
    console.log(allGridBoxes);
    for (let i = 0; i < allGridBoxes.length; i++) {
        let box = allGridBoxes[i];
        box.style.backgroundColor = "white";
    }
        
});




createGrid();