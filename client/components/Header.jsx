import React from 'react'
import {Link, IndexLink, Route} from 'react-router-dom'

class Header extends React.Component {
  
  render () {
    return (
    <div className="header">
      <div className="title">
        <h1 className="titleHeader">Name Placeholder</h1>
      </div>
      <div className="nav">
        <Link className="homeLink" to={'/Home'}>Home</Link>
        <Link className="discographyLink" activeClassName="active" to={'/Discography'}>Discography</Link>
        <Link className="contactLink" activeClassName="active" to={'/Contact'}>Contact</Link>
      </div>
    </div>
    )
  }
}

export default Header
