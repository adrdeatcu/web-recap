let container = document.querySelector("#container");
const gridSize = document.querySelector("#gridSize");

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

gridSize.addEventListener("click" , () => {
    let gridSizeInput = Number(prompt("Enter a grid number: maximum 64(64x64)"));
    container.textContent = '';
    createGrid(gridSizeInput);
});

function randomColor(myDiv) {
    
}


createGrid();