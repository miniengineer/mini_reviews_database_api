module.exports = (knex, data) => {
  const { name, review_title, product, review_text, rating } = data;
  return knex('reviews').insert({ name, review_title, product, review_text, rating }).then(() => {
    return knex('reviews').select();
  });
}
