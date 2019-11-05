module.exports = (knex, product, rating) => {
  return knex('reviews').where({ product, rating }).select();
};
