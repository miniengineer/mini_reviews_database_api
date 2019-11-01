module.exports = (knex, product) => {
  return knex('reviews').where({ product }).select();
}
