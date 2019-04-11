import React from 'react'
import data from '../../data.json'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

class Album extends React.Component {
  constructor () {
    super()

    this.state = {
      style: 
      {
        height: 'auto',
        width: 'auto',
        backgroundColor: "none"
      }
    }
  }
  
  zoom = () => {
    this.setState({style:
      {
        "textAlign": "center",
        height: "50rem",
        width: "auto",
        background: "gray"
      }
    })
  }

  bigPicture = () => {
    
  }
  
  render () {
    return (
      <React.Fragment>
        <div className={this.props.albumClass} onClick={}> 
        <Link to={data.albums.artwork}>
          {console.log("Current styles:",this.props.albumClass)}
          <img className = "albumArt"src={data.albums.artwork} alt="Album Art not working"/>
          </Link>
        </div>
      </React.Fragment>
    )
  } 
}


export default Album
