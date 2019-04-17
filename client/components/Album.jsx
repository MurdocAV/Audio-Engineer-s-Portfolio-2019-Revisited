import React from 'react'
import BigPicture from './BigPicture'
import data from '../../data.json'
import {HashRouter as Router, Route, Link} from 'react-router-dom'


/* 
Change the first div under render to use the functions of GitHub framework to 
become functioning on click.




*/

class Album extends React.Component {
  constructor () {
    super()

    this.state = {
      style: 
      {
        height: '10vh',
        width: 'auto',
        backgroundColor: "none"
      }
    }
  }
  
  zoom () {
    this.setState({style:
      {
        textAlign: "center",
        height: "50vh",
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
        <div className={this.props.albumClass} onClick={() => console.log('Hello')}> 
        <Link to={data.albums[this.props.albumClass].id}>
          <BigPicture opacity='0'/>
          <img className = "albumArt"src={data.albums[this.props.albumClass].artwork} alt="Album Art not working"/>
        </Link>
        </div>
      </React.Fragment>
    )
  } 
}


export default Album
