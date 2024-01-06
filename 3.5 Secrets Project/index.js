//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 4000;
var Password="";


///check
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});



function password(req, res, next) {
    console.log(req.body);
    Password = req.body["password"];
    next();
  }
  
  app.use(password);



app.post("/check",(req, res)=> {
    if(Password=="ILoveProgramming"){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        alert("Wrong Password");
        res.sendFile(__dirname + "/public/index.html");
    }
  })




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
