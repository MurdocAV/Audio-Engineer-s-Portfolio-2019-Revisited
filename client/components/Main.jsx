import React from 'react'
import Album from './Album.jsx'
import Header from './Header.jsx'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

function Main (props) {
  // eslint-disable-next-line no-console
  // console.log('Logging props in main:', props)

  return (
    <React.Fragment>
      <Router>
        <Header />
        <Album albumClass="1" />
        <Album albumClass="2" />
        <Album albumClass="3" />
        <Album albumClass="4" />
      </Router>
    </React.Fragment>
  )
}

export default Main
