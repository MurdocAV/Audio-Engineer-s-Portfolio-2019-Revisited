import React from 'react'
import Discography from './Discography/Discography.jsx'
import Header from './Header.jsx'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

function Main (props) {
  // eslint-disable-next-line no-console
  // console.log('Logging props in main:', props)

  return (
    <Router>
      <Header />
      <Discography />
    </Router>
  )
}

export default Main
