# Banco de ados para GraphQL - Usuário e Perfis

## Install dependencies :
- npm -i knex mysql
- npx knex init -> init the knex file

## Migrations :
### All create migrations has the date and time when create this is important to control. 
- npx knex migrate:make tabela_perfis
- npx knex migrate:make tabela_usuarios
- npx knex migrate:make tabela_usuarios_perfis

### Implement of each type of migration
```
exports.up = function(knex) {
  
};
```
#### This is used for evaluate the database.Examples:
- Add a new column 
- Modify a existing column
- Drop a table

```
exports.down = function(knex) {
  
};
```
#### This is used to make the opposite of up. Examples:
- If in up you create a table in down you will drop.
- If in up you alter a column in down you will revert the operation

#### A simple example how to use the migrations:
```
exports.up = function(knex) {
  return knex.schema.createTable('perfis', table => {
    table.increments('id').primary()
    table.string('nome').notNull().unique()
    table.string('rotulo').notNull()
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('perfis')
};
```
#### Commands to execute migrations:
- When you want the latest -> npx knex migrate:latest

#### Somes comands in create migrations.
```
exports.up = function(knex) {
  return knex.schema.createTable('usuarios', table => { // Create the table
    table.increments('id').primary() // Increments the value
    table.string('name').notNull() // Not null
    table.string('email').notNull().unique()
    table.string('password',60).notNull()
    table.boolean('active').notNull().defaultTo(true) // DefaultTo -> Default value
    table.timestamp('date_created').defaultTo(knex.fn.now()) // knex.fn.now() define the exact hour
  })
};
exports.us = function(knex) {
    return knex.schema.createTable('users_profiles', table => {
    table.integer('users_id').unsigned() // Avoid conflicts
    table.integer('profiles_id').unsigned()
    table.foreigner('user_id').references('users.id')
    table.foreigner('profile_id').references('profiles.id') // How to reference one key in a table 
    table.primary(['user_id', 'profile_id']) // How to use group keys
  })
};
  } )
}

```  