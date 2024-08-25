const express = require("express")
const app = express();

const port = 8080;


app.listen(port,()=>
console.log(`Server is listening on ${port}`));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/register',(req,res)=>{
    let {username,password} = req.query;
    
    res.send(`GET REQUEST Hello ${username}`);

})

app.post('/register',(req,res)=>{
    let {username,password} = req.body;
    res.send(`POST Request, Hello ${username}`)
})