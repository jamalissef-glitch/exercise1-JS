

function fetchuserName() {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   const success = true;
   if (success) {
    resolve({ name: "Sofa", id: 445 });
   } else {
    reject("Fialed to fetch user data");
   }
  }, 2000);
 })
}

fetchuserName()
