var express = require("express");
var app = express();


app.set("view engine", "ejs");

 app.get("/",function(req,res){
     res.render("home");
 })

 app.get("/contribute",function(req,res){
    res.render("contribute.ejs");
})

app.get("/request",function(req,res){
    res.render("request.ejs");
})

 
app.listen(3000,function()
{
    console.log("It's ON")
 }
 )