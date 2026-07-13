
async function() {
 console.log("start fetching date...");
 
 const response = await fetch('data.json');

 console.log("fetched Date:", data);
}