
function changeImage() {

 const image = document.querySelector("img");

 const url = prompt("Please enter your image URL");
 const borderColor = prompt("Please enter your desired border color");
 const width = prompt("Please enter the width size of the image");
 const height = prompt("Please enter the height size of the image");
 const borderRadius = prompt("Please enter the border radius");

 image.src = '';
 image.style.border = `5px solid ${borderColor}`;
 image.style.width = width + "px";
 image.style.height = height + "px";
 image.style.borderRadius = borderRadius + "px";
}