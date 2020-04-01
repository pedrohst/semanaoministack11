
// para ver todas as opções é "npx knex"

// para ver todas as ações que ja foram feitas é "npx knex migrate:status"

// para rodar é "npx knex migrate:latest"

// para apagar a ultima ação feita é "npx knex migrate:rollback"

exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        
        table.increments();
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
