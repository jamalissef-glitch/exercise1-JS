

let password;

do {

 password = prompt("Enter your password (minimum 10 characters)");
} while (password.length < 10);

console.log("Valid password", password);