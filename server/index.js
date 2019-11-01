const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//importing knex instanse
const knex = require("./db/knex");

//importing knex query wrapper
const getAllReviews = require("./db/reviews/getAllReviews");
// const getByAuthor = require("./db/fanfics/getByAuthor");
const addReview = require("./db/reviews/addReview");
const updateReview = require("./db/reviews/updateReview");
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

//get all reviews
app.get("/reviews", async (req, res) => {
  const allReviews = await getAllReviews(knex);
  res.status(200).send(allReviews);
});


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

//patch review's title, text, rating
app.patch("/review/:id", async (req, res) => {
  const { id } = req.params;
  const { review_title, review_text, rating } = req.body;
  const patchedReview = await updateReview(knex, id, review_title, review_text, rating);
  res.status(200).send(patchedReview);
});

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
