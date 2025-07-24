const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app = express();

dotenv.config();

mongoose.connect(process.env.Mongo_URL)
.then(()=>{
    console.log("connected to the database");
    app.listen(3000, ()=> {
    console.log(`🚀 Server running at port 3000`);
    
});
})
.catch(()=>{
    console.log("Database connection failed");
    
})

app.get('/', (req,res) => {
    res.send("Hello from the node API Server updated")
});
