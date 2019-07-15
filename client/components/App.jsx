import React from 'react'
import Discography from './Discography/Discography.jsx'
import Header from './Header.jsx'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

class App extends React.Component {
// Stateful component
  render() {
    return (
      <Router>
        <Header />
        <Discography />
      </Router>
    )
  }
}

export default App
