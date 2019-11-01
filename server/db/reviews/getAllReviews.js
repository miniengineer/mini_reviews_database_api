module.exports = (knex) => {
  return knex('reviews').select();
}
