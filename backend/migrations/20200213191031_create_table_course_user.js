exports.up = function(knex, Promise) {
    return knex.schema.createTable('course_user', table => {
        table.integer('id_user').notNull()
        table.integer('id_course').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('course_user')
};
