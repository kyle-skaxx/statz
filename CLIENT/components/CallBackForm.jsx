import { useState } from 'react'
import axios from 'axios'

function CallBackForm() {
  const [stage, setStage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post('/api/v1/sales-interactions', { stage })
      .then((response) => {
        console.log(response)
        // update store with new interaction here
      })
      .catch((error) => console.log(error))
  }

  return (
    <Flex alignItems={'flex-end'} flexWrap={'wrap'} flexDir={'row'}>
      <Center>
        <FormControl>
          <FormLabel>Interaction</FormLabel>
          <Stack spacing={[1, 5]} direction={['column', 'row']}>
            <Checkbox
              size="lg"
              colorScheme="purple"
              onChange={() => setStage('Contact')}
            >
              Contact
            </Checkbox>
            <Checkbox
              size="lg"
              colorScheme="purple"
              defaultChecked
              onChange={() => setStage('Presentation')}
            >
              Presentation
            </Checkbox>
            <Checkbox
              size="lg"
              colorScheme="purple"
              defaultChecked
              onChange={() => setStage('Close')}
            >
              Close
            </Checkbox>
            <Checkbox
              size="lg"
              colorScheme="purple"
              defaultChecked
              onChange={() => setStage('Sale')}
            >
              Sale
            </Checkbox>
          </Stack>
        </FormControl>
      </Center>
      <Button onClick={handleSubmit}>Submit</Button>
      <AddCallback />
    </Flex>
  )
}

export default CallBackForm
