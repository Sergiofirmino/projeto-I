
exports.up = function(knex) {
    return knex.schema.createTable('pessoas', function (table) {
        table.increments('id');
        table.string('nome').notNullable();
        table.string('email').notNullable().unique();
        table.string('celular').notNullable();
        table.string('profissao').nullable();
        table.string('uf',2).notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pessoas');
};
