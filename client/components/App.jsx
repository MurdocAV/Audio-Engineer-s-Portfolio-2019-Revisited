import React from 'react'
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
        {
          // TODO: Add working links to go to different pages on the website.
          // Use <Link activeClassName="active"/> (the activeClassName will help css rendering)
        }
        <Discography />
      </Router>
    )
  }
}

export default App
