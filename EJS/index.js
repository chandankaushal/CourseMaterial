const express = require("express");

const app = express();

const port = 8080;

const path = require("path");

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));

app.set("views",path.join(__dirname,"/views"))

app.set("view engine","ejs");

app.listen(port,()=>
{
    console.log("Listening on port",port);
})
app.get("/rolldice",(req,res)=>
{
    let ranNum = Math.floor(Math.random()*6) + 1
    res.render("rollDice.ejs",{num:ranNum})
});
app.get("/",(req,res)=>{
    res.render("home")
});

app.get("/ig/:username",(req,res)=>
{
    const Instadata = require("./data.json")
    let {username} = req.params;
    let data = Instadata[username];
    if(data)
    {
        res.render("ig.ejs",{data});
    }
    else{
        res.render("Error.ejs")
    }

})

