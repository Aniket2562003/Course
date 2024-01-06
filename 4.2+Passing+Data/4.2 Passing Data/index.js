import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var l=0;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
 

function Fullname(req,res,next){
  var Lengthname = req.body["fName"] + req.body["lName"];
  l =Lengthname.length;
  next();
}
app.use(Fullname);


app.post("/submit", (req, res) => {  

  res.render("index.ejs",{numberofletters:l});
  // console.log(l);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  
});
