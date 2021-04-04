var express = require('express');
var path = require('path');
 
const app = express();
const port = 8080;
const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

app.use(express.urlencoded({ extended: false })); 
//setting up view engine
app.set('view engine', 'hbs') 
app.set('views',path.join(__dirname, 'views')); 

app.use(express.static(path.join(__dirname, "public")));
app.get("/",(req,res)=>{
	res.render("index",{messages});
});
app.get("/new",(req,res)=>{
	res.render("form");

});
app.post("/new",(req,res)=>{
	messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
	res.redirect("/");
});
app.listen(port,()=>{
	console.log("server succesfully started");
});