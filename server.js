const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb+srv://adminOlivier:rQ4FZyFiqlAYIpmJ@cluster0.n95dhb1.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
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
