import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Aniket1";
const yourPassword = "Rawat123";
const yourAPIKey = "496fd418-df80-40d4-a1f0-68656fccb911";
const yourBearerToken = "4e404e87-7b42-47b8-bb86-3a7bca42285a";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/random"
    );

    const result = response.data;
    console.log(result);
    // console.log(result);
    res.render("index.ejs", { content: result });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/all?page=2",
      {
        auth: {
          username: yourUsername,
          password: yourPassword,
        },
      }
    );

    console.log(response);
    // console.log(result);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(404).send("Unauthorizes access:" + error.message);
  }
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/filter",
      {
        params: {
          score: 5,
          apiKey: yourAPIKey,
        },
      }
    );

    const result = response.data;
    console.log(result);
    // console.log(result);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});
//TODO 4: Write your code here to hit up the /filter endpoint
//Filter for all secrets with an embarassment score of 5 or greater
//HINT: You need to provide a query parameter of apiKey in the request.

//TODO 5: Write your code here to hit up the /secrets/{id} endpoint
//and get the secret with id of 42
//HINT: This is how you can use axios to do bearer token auth:
// https://stackoverflow.com/a/52645402
/*
  
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/secrets/2",
      {
        headers: {
          Authorization: `Bearer ${yourBearerToken}`,
        },
      }
    );

    const result = response.data;
    console.log(result);
    // console.log(result);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
