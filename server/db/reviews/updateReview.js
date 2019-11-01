module.exports = (knex, id, review_title, review_text, rating) => {
  return knex('reviews').where({ id }).update({ review_title, review_text, rating }).then(() => {
    return knex('reviews').where({ id }).select();
  });
}
