let container = document.querySelector("#container");

function createGrid() {
    for(let i=1; i<=256; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("gridBox");
        newDiv.addEventListener("mouseenter", () =>{
            colorOnEnter(newDiv);
        });
        container.appendChild(newDiv);
    }
}

function colorOnEnter(myDiv) {
    myDiv.style.backgroundColor = "black";
}



createGrid();