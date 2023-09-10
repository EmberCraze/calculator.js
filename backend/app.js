const express = require('express');
  
const app = express();
const PORT = 3001;

app.use(express.json());


// Import the routes
const screensRoutes = require('./src/routes/screen.js');


 // Use the routes
app.use('/screen', screensRoutes); 


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
