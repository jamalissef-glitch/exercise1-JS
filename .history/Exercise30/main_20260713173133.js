
async function fetchJSONData() {
 console.log("start fetching data...");
 
 const response = await fetch('data.json');

 const data = await response.json();

 
 console.log("Fetched JSON Data.");
 console.log(data)
}

fetchJSONData()
console.log("This message runs immidietly and is not blocking.")