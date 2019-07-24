import React from 'react'
import {Link, IndexLink, Route} from 'react-router-dom'

class Header extends React.Component {
  
  //TODO: Run a function on click of a link to add the class of active to the clicked link.
  logEvent (e) {
    console.log(e)
  }


  render () {
    return (
    <div className="header">
      <div className="title">
        <h1 className="titleHeader">Name Placeholder</h1>
      </div>
      <div className="nav">
        {/* NB First link also has experimental code. */}
        <Link onClick={e => logEvent(e)} className="homeLink" to={'/Home'}>Home</Link>
        <Link className="discographyLink" activeClassName="active" to={'/Discography'}>Discography</Link>
        <Link className="contactLink" activeClassName="active" to={'/Contact'}>Contact</Link>
      </div>
    </div>
    )
  }
}

export default Header
