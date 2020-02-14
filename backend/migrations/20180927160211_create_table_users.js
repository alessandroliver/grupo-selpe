
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('telefone').notNull()
        table.string('cpf').notNull().unique()
        table.integer('cursoId').references('id')
            .inTable('categories').notNull()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users')
};
