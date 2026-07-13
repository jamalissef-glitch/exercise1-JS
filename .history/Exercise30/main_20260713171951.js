
async function fetchData() {
 console.log("start fetching data...");
 
 const response = await fetch('data.json');

 console.log("fetched Data:", data);
 console.log("this message runs immidietly and is nit blocked.");
}

fetchData()