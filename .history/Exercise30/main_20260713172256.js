
async function fetchData() {
 console.log("start fetching data...");
 
 const response = await fetch('data.json');

 // console.log("fetched Data:", data);
 console.log("Data fetching complete. This message runs after data is fetched.");
}

fetchData()
console.log("This message runs immidietly and is not blocking.")