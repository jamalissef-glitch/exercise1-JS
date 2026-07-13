
async function fetchJSONData() {

 try {
  console.log("start fetching data...");
 
 const response = await fetch('data.json');

 const data = await response.json();

 
 console.log("Fetched JSON Data.");
 console.log(data);

} catch (error) {
 console.error(error);
 }
 
}


fetchJSONData()
console.log("This message runs immidietly and is not blocking.")