import React from 'react'
import Discography from './Discography/Discography'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import Header from './Header'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

class App extends React.Component {
  state= {
    currentPage: 'Header'
  }

  render() {
    return (
      <Router>
        <Header />
        <Home />
      </Router>
    )
  }
}

export default App
