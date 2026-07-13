// promise 

function fetchuserName() {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   const success = false;
   if (success) {
    resolve({ name: "Sofa", id: 445 });
   } else {
    reject("Fialed to fetch user data");
   }
  }, 2000);
 })
}

console.log("Print immidietly")

fetchuserName()
 .then(name => console.log("user Name", name))
 .catch (error => console.error("Error:", error));