exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments();
      users
        .string("name", 128)
        .notNullable()
        .unique();
      users.string("password", 128).notNullable();
    })
    .createTable("notes", notes => {
      notes.increments();
      notes.string("title").notNullable();
      notes.string("description").notNullable();
      notes
        .integer("user_id")
        .unsigned()
        .notNullable()
        .reference("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("notes");
};
