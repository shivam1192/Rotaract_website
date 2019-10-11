require("dotenv").config();
var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/rotaractt');
var nodemailer=require("nodemailer");

var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
var rcoySchema= new mongoose.Schema({
      texti:String,
      imagei:String,
    linki:String,
      hog:String
});
var rcoy = mongoose.model("rcoy", rcoySchema);

var public= require("path").join(__dirname,'/public');
app.use(express.static(public));

app.get("/",function(req,res){
    
        rcoy.find({},function(err,text){
            var t=text.length;


            if(err){
                  console.log("erroe is there");
            }
            else{
                  res.render("home.ejs",{te:text,tep:t});
            }
      });
    
});

app.get("/form",function(req,res){
      res.render("form.ejs");
})

app.post("/form",function(req,res){;
       var tex = req.body.texti;
       var img=req.body.imagei;
  var lnk=req.body.linki;
       var nam=req.body.hog;
       var tw={texti:tex,imagei:img,hog:nam,linki:lnk};
       rcoy.create(tw,function(err,tex){
             if(err){
                   console.log("errorrs is there");
             }
             else{
                  res.redirect("/name");
             }
       });
});
app.get("/name",function(req,res){
      
      rcoy.find({},function(err,text){
            var t=text.length;
            var sum=0;

            if(err){
                  console.log("erroe is there");
            }
            else{
                  res.render("name.ejs",{te:text,tep:t,sum:sum});
            }
      });
});

app.post("/",function(req,res){
      let m,s;
      s=nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:465,
            secure:true,
            auth:{
                  user:process.env.EMAIL,
                  pass:process.env.PASSWORD
            }
      });
   m={
         from:req.body.name+req.body.emails,
         to:process.env.EMAIL,
         subject:'New mssg from contact',
         text:req.body.message
   };

   s.sendMail(m,function(error,response){
            if(error){
                  res.redirect("/");
                  console.log(error);
            }
            else{
                  res.redirect("/");
            }
   });

});
app.listen(4000,function(){
      console.log("you are on port 4000");
});