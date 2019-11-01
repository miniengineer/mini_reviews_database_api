module.exports = (knex, id) => {
  return knex("fanfics").where({ id }).del().then(() => {
    return knex("fanfics").select();
  });
};
