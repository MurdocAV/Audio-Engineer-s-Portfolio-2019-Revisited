import React from 'react'
import {Link} from 'react-router-dom'

function Header (props) {
  return (
    <React.Fragment>
      <div className="title">
        <h1 className="titleHeader">Name Placeholder</h1>
      </div>
      <div className="header">
      </div>
      <div className="nav">
        <h2 className="home"><Link to={'/'}>Home</Link></h2>
        <h2 className="discography active"><Link to={'/'}>Discography</Link></h2>
        <h2 className="contact"><Link to={'/'}>Contact</Link></h2>
      </div>
    </React.Fragment>
  )
}

export default Header
