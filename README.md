# Mini Reviews Database

This solo project was created during my time as a student at Code Chrysalis.

# About

Simple reviews application that lets you to create, retrieve, update and delete reviews.
Enjoy using it ^^

# Getting started

For this API you will need to have PostgreSQl installed on your machine.
You can do it from [here](https://www.postgresql.org/download/).

The default name of the database is `reviews`. Please edit the database configuration file in case you want to name it differently.

To run the app:

### Step 1. Set up the client side

1. navigate to the client folder `cd client`

2. install dependencies `yarn`

3. create a production build `yarn build`

3. launch ONLY the client `yarn start`

### Step 2. Set up the server side

1. navigate to the server folder `cd server`

2. install dependencies `npm i`

3. launch the server `npm start`


DONE! Now you can see your reviews application running on http://localhost:4000

# Demo

![Demo](https://github.com/miniengineer/mini_reviews_database_api/blob/master/mini_database_demo.gif)

# API endpoints

**GET ./reviews** - Get all reviews

**POST ./review** - Add a new review

**PATCH ./review/:id** - Edit a review

**DELETE ./review/:id** - Delete a review

