import React from 'react'
import BigPicture from 'BigPicture'
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
    return opacity
  }
  
  render () {
    return (
      <React.Fragment>
        <div className={this.props.albumClass} onClick={}> 
        <Link to={data.albums.artwork}>
          <BigPicture opacity='0'/>
          <img className = "albumArt"src={data.albums.artwork} alt="Album Art not working"/>
        </Link>
        </div>
      </React.Fragment>
    )
  } 
}


export default Album
