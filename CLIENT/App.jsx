import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import CallBackForm from './CallBackForm'
import SalesInteractionsForm from './SalesInteractionsForm'

function App() {
  return (
    <Router>
      <Route exact path="/" component={CallBackForm} />
      <Route path="/create" component={SalesInteractionsForm} />
    </Router>
  )
}

export default App
