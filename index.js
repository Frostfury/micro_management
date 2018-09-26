var express = require("express");
var app = express();
var bodyparser=require("body-parser");

var supplies = [
    {name: "Salmon Creek", Amount: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
    {name: "Granite Hill", Amount: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
    {name: "Mountain Goat's Rest", Amount: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"}
];
var user;
var newUser;
app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine", "ejs");

 app.get("/",function(req,res){
     res.render("home");
 });
 app.get("/new",function(req,res){
    res.render("new");
});

app.get("/Supply",function(req,res){
    res.render("Supply",{supplies:supplies});
})

app.post("/Supply", function(req, res){
    var name = req.body.name;
    var Amount = req.body.Amount;
    var Area = req.body.Area;
    var Contact = req.body.Contact;
    var newSupplies = {name: name, Amount: Amount,Area:Area,Contact:Contact}
    supplies.push(newSupplies);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

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