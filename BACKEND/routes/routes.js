const express = require('express')
const router = express.Router()

router.post('/sales-interactions', (req, res) => {
  knex('sales_interactions')
    .insert({
      house_number: req.body.house_number,
      street_address: req.body.street_address,
      stage: req.body.stage,
    })
    .then(() => res.sendStatus(201))
    .catch((error) => res.status(500).json({ error }))
})

module.exports = router
