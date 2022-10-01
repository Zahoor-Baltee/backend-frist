const express = require('express');
const mainrouter = require('./routes/mainRoute');
const mongoose = require("mongoose");
const dbCnnection = require('./config/db')
const PORT =  process.env.PORT || 10000;

const app = express();
const cors = require("cors")

app.use(cors({
    origin: "http://192.168.50.194"
}))

const urlParser = express.json();
app.use(urlParser);
app.use(mainrouter);

dbCnnection();




app.get('/',(req,res)=>{
console.log("Server Started");
res.send("Express Docker Heroku Container Registry");
})






app.listen(PORT,()=>{
    console.log(`Server running on port`+PORT);
})