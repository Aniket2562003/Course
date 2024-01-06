import express from "express";
const app = express();
const port =4000;
app.get("/",(req, res)=>{
    res.send("<h1>Hello<h1>");
})
app.get("/about",(req, res)=>{
    res.send("<h1>Hello My name is Aniket Rawat</h1>");
})
app.get("/contact",(req, res)=>{
    res.send("<h1>Call at 8448552450</h1>");
})
app.listen(port, () =>{
    console.log("Server running on port 4000 ");
})

