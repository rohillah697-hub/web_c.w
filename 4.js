// step 1 //
const express = require ("express");

// step 2
const app = express();

// step 3

app.get("/",(req,res) =>{
    res.send("about page");
});

app.get("/about",(req,res)=>{
    res.send("about page");
});

app.listen(8080,()=>{
    console.log("serer started");

});

