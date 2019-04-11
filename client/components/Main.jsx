import React from 'react'
import Album from './Album.jsx'
import Header from './Header.jsx'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

function Main (props) {
  // eslint-disable-next-line no-console
  console.log('Logging props in main:', props)

  return (
    <React.Fragment>
      <Router>
        <Header />
        <Album albumClass="a1" />
        <Album albumClass="a2" />
        <Album albumClass="a3" />
        <Album albumClass="a4" />
      </Router>
    </React.Fragment>
  )
}

export default Main
