const express=require('express');
const bodyParser=require('body-parser');
const Date=require(__dirname+"/date.js");

// console.log(Date());

const app=express();

app.set('view engine','ejs');
var items=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/",(req,res)=>{
   

    day=Date();

    console.log(day);
    res.render("list",{kindofDay:day,newlistItems:items})
})

app.post("/",(req,res)=>{
    item=req.body.newItem;
    items.push(item);
    console.log(item);
    res.redirect("/");
})

app.listen(8080,function(){
    console.log("server is running");
})