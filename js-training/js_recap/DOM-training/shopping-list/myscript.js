function addItemInList(e) {
    function deleteItemFromList(e) {
        itemsList.removeChild(newListItem);
    }
    e.preventDefault();
    let newListItem = document.createElement("li");
    let value = inputText.value;
    newListItem.textContent = value;
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.classList.toggle("deleteButton");
    deleteButton.addEventListener("click" , deleteItemFromList);
    newListItem.appendChild(deleteButton);
    itemsList.appendChild(newListItem);
    inputText.value = "";
    inputText.focus();
}


const addItemButton = document.querySelector("#formButton");
const inputText = document.querySelector("#item");
let itemsList = document.querySelector("#dinamicList");

addItemButton.addEventListener("click", addItemInList);