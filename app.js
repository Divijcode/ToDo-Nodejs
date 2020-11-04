const express =require("express");
const app=express();
const BodyParser=require ("body-parser");



app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(BodyParser.urlencoded({extended:true}));

let list=["Eat","Sleep","Code"];
let newitem="";

app.get("/",function(req,res){

  res.render("todo",{list:list});
});


app.post("/",function(req,res){
  newitem=req.body.newitem;
   list.push(newitem);
   res.redirect("/");
});


app.listen(3000,function(){
  console.log("server started");
});
