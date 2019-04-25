import React from 'react'
import data from '../../data.json'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Modal from './Modal'

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
        stateProperty: ''
      }
    }
  }

  returnModal () {
    <Modal />
  }

  render () {
    const albumClass = this.props.albumClass

    return (
      <React.Fragment>
        <div className={`${albumClass} albums`} onClick={() => this.returnModal()}>
          <Link to={data.albums[albumClass].id}>
            <div className="ablumDiv">
              <img className = "albumArt" src={data.albums[albumClass].artwork}
                onClick={() => console.log("Clicked on " + data.albums[albumClass].albumName)} alt="Album Art not working"/>
            </div>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Album
