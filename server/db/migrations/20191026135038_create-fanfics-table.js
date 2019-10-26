exports.up = function(knex) {
  // create the 'fanfics' table with five columns
  return knex.schema.createTable("fanfics", (t) => {
    t.increments() // auto-incrementing id column
      .index(); // index this column

    t.string("title")
      .notNullable() // add a not-null constraint to this column
      .index(); // index it to make life easier for postgresql

    t.string("author")
      .notNullable()
      .index();

    t.string("genre")
      .notNullable()
      .index();

    t.string("fanfic_url")
      .notNullable()
      .index();
  });
};

exports.down = function(knex) {
  // undo this migration by destroying the 'fanfics' table
  return knex.schema.dropTable("fanfics");
};
