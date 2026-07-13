// blocking synchronous


function delayBlocking() {
 alert("fetching user name...");
 return "blocking delay complete"
}

console.log("Start Blocking delay");
console.log(delayBlocking);




// non-blocking Asynchronous

function delayBlocking(callback) {
 setTimeout(() => {
  const userName = { name: "Rumeysa", id: 334, };
  callback(userName);
 
 }, 2000);
}

console.log("starting to user name");

delayBlocking(function (user) {
 console.log("here is the user name", user);
});
console.log("print immidietly");
