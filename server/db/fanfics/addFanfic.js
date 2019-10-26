module.exports = (knex, data) => {
  const { title, author, genre, fanfic_url } = data;
  return knex("fanfics").insert({ title, author, genre, fanfic_url }).then(() => );
}
