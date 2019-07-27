import React from 'react'
import Header from './Header'
import Discography from './Discography/Discography'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import {HashRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
    
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/Discography" component={Discography} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Contact" component={Contact} />
      </Router>
    )
  }
}

export default App
