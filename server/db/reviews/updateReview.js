module.exports = (knex, id, fanfUrl) => {
  return knex("fanfics").where({ id }).update({ fanfic_url: fanfUrl }).then(() => {
    return knex("fanfics").where({ id }).select();
  });
}
