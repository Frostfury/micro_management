var express = require("express");
var app = express();
var bodyparser=require("body-parser");

var supplies = [
    {name: "Food", Amount: 300, Area:"kakkanad" , Contact:8769865243},
    {name: "Cloth", Amount: 120, Area:"Kaloor" , Contact:8549865243},
    {name: "Food", Amount: 0, Area:"kakkanad" , Contact:9898567483},
    {name: "Medicine",  Amount: 10, Area:"Eloor" , Contact:5979384567},
    {name: "Medicine",  Amount: 5, Area:"palarivottom" , Contact:89864234},
    {name: "Bed", Amount: 6, Area:"kalamashery" , Contact:8989795932},
    {name: "Napkins", Amount: 20, Area:"kaloor" , Contact:7070654367},
    {name: "Soap", Amount: 12, Area:"fort kochi" , Contact:9034567821},
    {name: "Cloth", Amount: 30, Area:"edapally" , Contact:8756556788},
    {name: "Napkins", Amount: 10, Area:"Eloor" , Contact:9090654367}
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
    var name = req.body.Item;
    var Amount = req.body.Amount;
    var Area = req.body.Area;
    var Contact = req.body.Contact;
    var newSupplies = {name: name, Amount: Amount,Area:Area,Contact:Contact}
    supplies.push(newSupplies);
    res.redirect("/Supply");
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