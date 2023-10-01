const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const day=require(__dirname+"/date.js");


const app=express();
const items=["buy food","cricket"];
const workItems=[];
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){


    let date=day.getDay();
    res.render("list",{listTitle:date,newItems:items});

});
app.post("/",function(req,res){

    let item=req.body.newItem;
    if(req.body.list==="Work"){

        workItems.push(item);
        res.redirect("/work");
    }
    else{
        
        items.push(item);
        res.redirect("/");
    }
})

app.get("/work",function(req,res){

    res.render("list",{listTitle:"Work List",newItems:workItems});

})
app.get("/about",function(req,res){

    res.render("about");
})

app.listen(process.env.PORT || 3000,function(req,res){

    console.log("server started on port 3000");
});

