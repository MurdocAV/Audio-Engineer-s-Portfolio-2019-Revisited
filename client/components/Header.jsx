import React from 'react'
import Discography from './Discography/Discography'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import {Link, Route} from 'react-router-dom'

function Header (props) {
  return (
    <React.Fragment>
      <div className="title">
        <h1 className="titleHeader">Name Placeholder</h1>
      </div>
      <div className="header">
      </div>
      <div className="nav">
      <Switch>
      <h2 className="home"><Route exact path='/Home' component={Home} /></h2>
            <Route exact path='/Discography' component={Discography} />
            <Route exact path='/Contact' component={Contact} />
      </Switch>
        <h2 className="home"><Route to={'/Home'}>Home</Link></h2>
        <h2 className="discography active"><Route to={'/'}>Discography</Link></h2>
        <h2 className="contact"><Link to={'/'}>Contact</Link></h2>
      </div>
    </React.Fragment>
  )
}

export default Header
