fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    // Check if the response is empty or not OK
    if (!response.ok || response.status === 204) return {}; 
    return response.text().then(text => text ? JSON.parse(text) : {});
  })
  .then(data => console.log(data))
  .catch(error => console.error('Parsing failed:', error));