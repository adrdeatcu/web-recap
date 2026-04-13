function addItemInList(e) {
    e.preventDefault();
    let newListItem = document.createElement("li");
    let value = inputText.value;
    newListItem.textContent = value;
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.classList.toggle("deleteButton");
    newListItem.appendChild(deleteButton);
    itemsList.appendChild(newListItem);
    inputText.value = "";

}



const addItemButton = document.querySelector("#formButton");
const inputText = document.querySelector("#item");
let itemsList = document.querySelector("#dinamicList");

addItemButton.addEventListener("click", addItemInList);