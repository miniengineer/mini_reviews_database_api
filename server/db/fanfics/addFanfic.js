module.exports = (knex, data) => {
  const { title, author, genre, fanfic_url } = data;
  return knex("fanfics").insert({ title, author, genre, fanfic_url }, "id").then((id) => {
    return knex("fanfics").where({ id: id[0] }).select();
  });
}
