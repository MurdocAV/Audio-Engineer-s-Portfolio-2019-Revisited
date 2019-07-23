import React from 'react'
import {Link, Route} from 'react-router-dom'

function Header (props) {
  return (
    <div className="header">
      <div className="title">
        <h1 className="titleHeader">Name Placeholder</h1>
      </div>
      <div className="nav">
        <h2 className="homeLink"><Link to={'/Home'}>Home</Link></h2>
        <h2 className="discographyLink active"><Link to={'/Discography'}>Discography</Link></h2>
        <h2 className="contactLink"><Link to={'/Contact'}>Contact</Link></h2>
      </div>
    </div>
  )
}

export default Header
