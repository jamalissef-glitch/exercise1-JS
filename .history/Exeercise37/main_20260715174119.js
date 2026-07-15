
const colorPicker = document.querySelector("#colorPicker");
const colorPreview = document.querySelector("#colorPreview");
const colorHistory = document.querySelector("#colorHistory");
const colorHistoryButton = document.querySelector("#colorHistoryButton");

// event for color changes

colorPicker.addEventListener('input', function () {
 const selectedColor = colorPicker.value;
 colorPreview.style.backgroundColor = selectedColor;
 addColorToHistory(selectedColor);
});

// function add the selected color to the history

function addColorToHistory(color) {
 const li = document.createElement('li');
 li.textContent = color;
 li.style.color = color;
 colorHistory.appendChild(li);
}

clearHistoryButton.addEventListener('click', function () {
 colorHistory.innerHTML = '',;
});