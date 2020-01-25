# Banco de ados para GraphQL - Usuário e Perfis

## Install dependencies :
- npm -i knex mysql
- npx knex init -> init the knex file

## Migrations :
### All create migrations has the date and time when create this is important to control. 
npx knex migrate:make tabela_perfis
npx knex migrate:make tabela_usuarios
npx knex migrate:make tabela_usuarios_perfis

### Implement of each type of migration
```
exports.up = function(knex) {
  
};
```
#### This is used for evoluate the database.Examples:
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
