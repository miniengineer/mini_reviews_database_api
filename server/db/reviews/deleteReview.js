module.exports = (knex, id) => {
  return knex('reviews').where({ id }).del().then(() => {
    return knex('reviews').select();
  });
};
