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
  });
}

fetchuserName()
  .then(user => {
    console.log("User:", user);
  })
  .catch(error => {
    console.error("Error:", error);
  });