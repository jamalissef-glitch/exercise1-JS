// promise 

function fetchuserName() {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   const success = true;
   if (success) {
    resolve({ name: "Sofa", id: 445 });
   } else {
    reject("Failed to fetch user data");
   }
  }, 2000);
 })
}


async function displayunserName() {
 try {
  console.log("star fetch user name..."),
   const user = await fetchuserName();
  console.log("user name", user);
 } catch (error) {
  console.log("Error", error)
 }
}

displayunserName()
