const express = require('express');
const bodyParser = require('body-parser');
const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,

});
  
const app = express();
const PORT = 3001;

app.use(bodyParser.json()); // To parse JSON data
  
app.get('/', (req, res)=>{
    res.status(200);
    console.log(process.env)
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
    });
    res.send("Welcome to root URL of Server");
});

app.get('/hello', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello!</h1>");
});

// User should be able to post the content of the current screen
app.post('/screen', (req, res)=>{

    res.set('Content-Type', 'application/json');
    const inputData = req.body;
    res.body = inputData;
    res.status(200);
    res.send();
})
 console.log(pool); 

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
