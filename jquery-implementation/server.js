const express = require("express");
const axios = require("axios");
//const data = require('./mockDB');

const app = express();

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => res.end());

app.get("/users", async (req, res) => {
  try {
    ({data} = await axios.get("https://goodparts.dokku-hosted.thruhere.net/people"));
    res.send(data);
  }catch(err) {
    res.status(500);
    res.end();
  }
});

app.listen(5000, () => console.log("Listening on port 5000"));
