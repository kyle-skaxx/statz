const faker = require('faker')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('sales_interactions')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('sales_interactions').insert([
        {
          house_number: 123,
          street_address: 'Main Street',
          stage: ['intro'],
        },
        {
          house_number: 456,
          street_address: 'Maple Avenue',
          stage: ['intro', 'presentation'],
        },
        {
          house_number: 789,
          street_address: 'Park Boulevard',
          stage: ['intro', 'presentation', 'close'],
        },
        {
          house_number: 321,
          street_address: 'Elm Street',
          stage: ['intro', 'presentation', 'close', 'sale'],
        },
      ])
    })
}
