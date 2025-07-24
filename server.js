const express = require('express');
const mangoose = require('mangoose');
const app = express();




app.listen(3000, ()=> {
    console.log(`🚀 Server running at http://localhost:${port}`);
    
});

app.get('/', (req,res) => {
    res.send("Hello from the node API Server updated")
});
