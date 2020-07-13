exports.up = function (knex) {
  return knex.schema.createTable("puppies", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("owner");
    table.string("breed");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("puppies");
};
