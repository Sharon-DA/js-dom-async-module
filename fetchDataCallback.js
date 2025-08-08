function fetchDataWithCallback(callback) {
  setTimeout(function() {
    let error = false; 
    
    try {
      if (error) {
        throw new Error("Fetch Failed");
      }
      callback("Data fetched");
    } catch (err) {
      console.error("Error: " + err.message);
    }
  }, 2000);
}


fetchDataWithCallback(function(message) {
  console.log(message);
});
// Using fetchDataWithCallback
