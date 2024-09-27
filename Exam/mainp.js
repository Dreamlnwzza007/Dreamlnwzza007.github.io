
//  main.js 
   
// POST request using fetch() 
fetch("https://206.189.146.138/api/students", { 
      
    // Adding method type 
    method: "DELETE", 
      
    // Adding body or contents to send 
    body: JSON.stringify({ 
        // order: "7", 
        id: "Punyaphon Patikham", 
        name: "", 
        // status: "Posted", 
    }), 
      
    // Adding headers to the request 
    headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
}) 
  
// Converting to JSON 
.then(response => response.json()) 
  
// Displaying results to console 
.then(json => console.log(json)); 
// 6501075520104 EKKALAK SAMRUENGPunyaphon Patikham