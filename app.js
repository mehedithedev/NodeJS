const express = require('express');
const ejs = require('ejs')
const app = express();
const port = 3000
app.set('views', "./views")
app.set("view engine", "ejs")

app.get("/home", (req,res)=>{

    let message = "Hello world"

    
    res.render("home", {message})
})

app.listen(port, ()=>{
    console.log('Server started on port 3000')
})