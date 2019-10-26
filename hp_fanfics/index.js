const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//importing our database
const db = require("./db/db");

//to parse json
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//root for get request on the root URL
app.get("/", (req, res) => {
  res.json({ info: "NodeJS, Express and PostgresAPI" });
});


//listen to the port I set
app.listen(port, () => {
  console.log(`App running at ${port}`);
});
