const express=require("express");
const app=express();

//importing package
const path=require("path");
const fs=require("fs");

//a middleware to store apply linked files
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
//templates
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

//requst for home page
app.get("/",function(req,res)
{
  res.render("home");
});
//request for browse
app.get("/browse",function(req,res)
{
   const filedatapath=path.join(__dirname,"data.json");
 const filedata=fs.readFileSync(filedatapath);
 const storedrestuarents=JSON.parse(filedata);
   res.render("Browse",{numberofrestuarents:storedrestuarents.length,Restaurant:storedrestuarents})
});


//request for share
app.get("/share",function(req,res)
{
    
   res.render("Share");
});

//request after submission
app.get("/dataa",function(req,res)
{
   res.render("form");
});
//request for about 
app.get("/about",function(req,res)
{
   res.render("about");
});
//storing the data after form submission
app.post("/data",function(req,res)
{
   const data=req.body
 const filedatapath=path.join(__dirname,"data.json");
 const filedata=fs.readFileSync(filedatapath);
 const exsistingusers=JSON.parse(filedata);
 exsistingusers.push(data);
 fs.writeFileSync(filedatapath,JSON.stringify(exsistingusers));
 console.log(exsistingusers);
 res.redirect("/dataa");
});
//to do
//browse details of restaurants
app.get("/view/:id",function(req,res)
{
   const restaurantId=req.params.id
   res.render("view_restaurants",{id:restaurantId})
});
app.listen(3000);






