
const colorPicker = document.querySelector("#colorPicker");
const colorPreview = document.querySelector("#colorPreview");
const colorHistory = document.querySelector("#colorHistory");
const colorHistoryButton = document.querySelector("#colorHistoryButton");

// event for color changes

colorPicker.removeEventListener('input', function () {
 const selectedColor = colorPicker.value;
 colorPreview.computedStyleMap.backgroundColor = selectedColor;
 addColorToHistory(selectedColor);
})