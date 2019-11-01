exports.up = function(knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments().index().notNullable(); //auto-incrementing index

    table.string('name').index().notNullable(); //reviewer's name

    table.string('review_title').index().notNullable(); //title of the review

    table.string('product').index().notNullable(); //product being reviewed

    table.text('review_text').index().notNullable(); //actual review

    table.string('rating').index(); //rating of the product

    table.timestamp('created_at').defaultTo(knex.fn.now()); //review date
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('reviews');
};
