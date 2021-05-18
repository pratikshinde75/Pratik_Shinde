const express = require("express");
const bodyParser = require("body-parser");
const { Console } = require("console");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req, res){
Console.log(req.body);
res.send("Thanks for poasting the form");
});
app.listen("3000",function(){
    console.log("server has started on port 3000");
});