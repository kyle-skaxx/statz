const knex = require('knex')

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './mydatabase.sqlite',
  },
  useNullAsDefault: true,
})

exports.up = function () {
  return db.schema.createTable('sales_interactions', (table) => {
    table.increments('id').primary()
    table.integer('house_number').notNullable()
    table.string('street_address').notNullable()
    table.string('stage').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function () {
  return db.schema.dropTable('sales_interactions')
}
