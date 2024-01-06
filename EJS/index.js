import express from "express";
const app=express();
const port=3000;


app.get("/", (req, res)=>{
const today = new Date();
const day = today.getDay();
// var day=0;
let dtype="a weekday";
let adv="its time to work hard";
if(day==0||day==6){
     dtype="a weekend";
     adv="its time to take rest";
}
console.log(day);
res.render("index.ejs",{dayType:dtype, advice:adv})
})


app.listen(port,()=>
console.log("Server is running")
);