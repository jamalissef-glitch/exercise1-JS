
async function fetchJSONData() {
 console.log("start fetching data...");
 
 const response = await fetch('data.json');

 
 console.log("Fetched JSON Data.");
}

fetchJSONData()
console.log("This message runs immidietly and is not blocking.")