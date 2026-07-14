
function changeImage() {

 const image = document.querySelector("img");

 const url = prompt("Please enter your image URL");
 const borderColor = prompt("Please enter your desired border color");
 const width = prompt("Please enter the width size of the image");
 const height = prompt("Please enter the height size of the image");
 const borderRadius = prompt("Please enter the border radius");

 image.src = 'https://images.unsplash.com/photo-1758186469716-9a75c3e69d01?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
 image.style.border = `5px solid ${borderColor}`;
 image.style.width = width + "px";
 image.style.height = height + "px";
 image.style.borderRadius = borderRadius + "px";
}