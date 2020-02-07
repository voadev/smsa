const express = require("express");
const path = require("path");
const cors = require('cors');

const app = express();
const port = process.env.PORT || "8000";

app.use(cors());

// maybe use Router() and separate API calls
// into different files in the future.

app.get("/", (req, res) => {
  console.log("request made");
  res.sendFile(__dirname + '/mockData.json');
  
}).on("error", (err) => {
  console.log("Error: " + err);
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

