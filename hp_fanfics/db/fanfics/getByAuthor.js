module.exports = (knex, author) => {
  return knex("fanfics").where({ author }).select("title");
}
