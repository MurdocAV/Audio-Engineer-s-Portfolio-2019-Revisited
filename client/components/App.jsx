import React from 'react'
import Navigation from './Parts/Navigation'
import Discography from './Discography/Discography'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import Welcome from './Parts/Welcome'
import TemporaryDrawer from './Drawer'
import {HashRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
    
  render() {
    return (
      <Router>
        <Navigation />
        <TemporaryDrawer></TemporaryDrawer>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Discography" component={Discography} />
        <Route exact path="/Contact" component={Contact} />
      </Router>
    )
  }
}

export default App
