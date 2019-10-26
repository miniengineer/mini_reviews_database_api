const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//importing knex instanse
const knex = require("./db/knex");

//importing knex query wrapper
const getAllFanfics = require("./db/fanfics/getAllFanfics");
const getByAuthor = require("./db/fanfics/getByAuthor");
const addFanf = require("./db/fanfics/addFanfic");

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

//get all fanfics
app.get("/fanfics", async (req, res) => {
  const allFanfics = await getAllFanfics(knex);
  res.status(200).send(allFanfics);
});


//get fanfics by author
app.get("/:author", async (req, res) => {
  const { author } = req.params;
  const fanficsByAuthor = await getByAuthor(knex, author);
  res.status(200).send(fanficsByAuthor);
});

//add a new fanfic
app.post("/fanfic", async (req, res) => {
  const newFanf = req.body;
  await addFanf(knex, newFanf);
  res.status(200).send(`Fanf was added successfully!`);
})

//listen to the port I set
app.listen(port, () => {
  console.log(`App running at ${port}`);
});
