import axios from 'axios'

axios
  .post('/api/v1/sales-interactions', {
    house_number: 123,
    street_address: 'Main St',
    stage: 'prospecting',
  })
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
