
const colorPicker = document.querySelector("#colorPicker");
const colorPreview = document.querySelector("#colorPreview");
const colorHistory = document.querySelector("#colorHistory");
const clearHistoryButton = document.querySelector("#clearHistoryButton");

// event for color changes

colorPicker.addEventListener('input', function (event) {
 const selectedColor = event.target.value;
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
 colorHistory.innerHTML = '';
});