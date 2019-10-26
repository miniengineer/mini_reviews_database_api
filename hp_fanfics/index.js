const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//importing knex instanse
const knex = require("./db/knex");

//importing knex query wrapper
const getAllFanfics = require("./db/fanfics/getAllFanfics");

//to parse incoming json
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

app.get("/fanfics", async (req, res) => {
  const allFanfics = await getAllFanfics(knex);
  res.status(200).send(allFanfics);
});



//listen to the port I set
app.listen(port, () => {
  console.log(`App running at ${port}`);
});
