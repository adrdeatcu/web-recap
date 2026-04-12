const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Hello, this is the glorious text-content!";

container.appendChild(content);

const firstParagraph = document.createElement("p");
firstParagraph.textContent = "Hey I'm red!";
firstParagraph.style.color = "red";

const headerThreeFirst = document.createElement("h3");
headerThreeFirst.textContent = "I'm a blue h3!";
headerThreeFirst.style.color = "blue";

content.appendChild(firstParagraph);
content.appendChild(headerThreeFirst);

const blackDiv = document.createElement("div");
blackDiv.style.backgroundColor = "pink";
blackDiv.style.border="2px solid black";

const headerOneFirst = document.createElement("h1");
const secondParagraph = document.createElement("p");
const changeBg = document.createElement("button");

headerOneFirst.textContent = "I'm in a div";
secondParagraph.textContent = "ME TOO!";
changeBg.textContent = "change BG";

blackDiv.appendChild(headerOneFirst);
blackDiv.appendChild(secondParagraph);
blackDiv.appendChild(changeBg);

changeBg.addEventListener("click", function (e) { 
    e.target.style.backgroundColor = "blue";
})



container.append(blackDiv);