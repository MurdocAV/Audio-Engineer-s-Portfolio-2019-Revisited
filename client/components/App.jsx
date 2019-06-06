import React from 'react'
import Album from './Discography/Album.jsx'
import Header from './Discography/Header.jsx'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

function Main (props) {
  // eslint-disable-next-line no-console
  // console.log('Logging props in main:', props)

  return (
    <Router>
      <Header />
      <Album albumClass="1" />
      <Album albumClass="2" />
      <Album albumClass="3" />
      <Album albumClass="4" />
    </Router>
  )
}

export default Main
