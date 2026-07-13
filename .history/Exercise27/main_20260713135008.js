
function setAlert(callback) {
 setTimeout(() => {
  const userName = { name: "Rumeysa", id: 334, };
  callback(userName);
 
 }, 2000);
}

console.log("starting to user name");

// setAlert(function (user) {
//  console.log("here is the user name", user);
// })

// console.log("")
