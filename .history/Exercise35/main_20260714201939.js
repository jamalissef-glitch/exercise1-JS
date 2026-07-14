

function addItem() {
 const list = document.querySelector("#list");

 const newItem = document.createElement("li");

 newItem.textContent = "Moos";
 list.appendChild(newItem);
}