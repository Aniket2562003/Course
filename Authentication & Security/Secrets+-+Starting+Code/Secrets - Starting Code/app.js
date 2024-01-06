const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const Userschema = {
  email: String,
  password: String,
};
const User = new mongoose.model("User", Userschema);

app.get("/", function (req, res) {
  res.render("home.ejs");
});
app.get("/register", function (req, res) {
  res.render("register.ejs");
});
app.get("/login", function (req, res) {
  res.render("login.ejs");
});

app.post("/register", function (req, res) {
  const newUser = new User({
    email: req.body.username,
    password: req.body.password,
  });

  newUser
    .save()
    .then(() => {
      res.render("secrets.ejs");
    })
    .catch((err) => {
      console.error(err);
      res.send("An error occurred while registering the user.");
    });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
