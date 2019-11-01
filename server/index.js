const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//importing knex instanse
const knex = require("./db/knex");

//importing knex query wrapper
// const getAllFanfics = require("./db/fanfics/getAllFanfics");
// const getByAuthor = require("./db/fanfics/getByAuthor");
const addReview = require("./db/reviews/addReview");
// const updateFanf = require("./db/fanfics/updateFanfic");
const deleteReview = require("./db/reviews/deleteReview");

//to parse incoming json
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', "*");
  res.header('Access-Control-Allow-Methods', "*");
  next();
});

//root for get request on the root URL
app.get("/", (req, res) => {
  res.json({ info: "NodeJS, Express and PostgresAPI" });
});

// //get all fanfics
// app.get("/fanfics", async (req, res) => {
//   const allFanfics = await getAllFanfics(knex);
//   res.status(200).send(allFanfics);
// });


// //get fanfics by author
// app.get("/:author", async (req, res) => {
//   const { author } = req.params;
//   const fanficsByAuthor = await getByAuthor(knex, author);
//   res.status(200).send(fanficsByAuthor);
// });

//add a new review
app.post("/review", async (req, res) => {
  const newReview = req.body;
  const updatedState = await addReview(knex, newReview);
  res.status(200).send(updatedState);
});

// //patch fanfic's URL
// app.patch("/:id", async (req, res) => {
//   const { id } = req.params;
//   const { fanfic_url } = req.body;
//   const patchedFanf = await updateFanf(knex, id, fanfic_url);
//   res.status(200).send(patchedFanf);
// });

//delete review
app.delete("/review/:id", async (req, res) => {
  const { id } = req.params;
  const remainingReviews = await deleteReview(knex, id);
  res.status(200).send(remainingReviews);
});

//listen to the port I set
app.listen(port, () => {
  console.log(`App running at ${port}`);
});
