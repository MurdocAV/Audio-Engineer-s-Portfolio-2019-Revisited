import React from 'react'
import data from '../../../data.json'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
// TODO: Implement working modal
import Zoom from './Zoom'

/*
Change the first div under render to use the functions of GitHub framework to
become functioning on click.
*/

class Album extends React.Component {
  constructor () {
    super()

    this.state = {
      activeModal: false
    }
  }

  returnModal () {
    this.setState({activeModal: !this.state.activeModal})
    return
  }

  render () {
    const albumClass = this.props.albumClass

    return (
      <React.Fragment>
        <div className={`${albumClass} albums`}>
            <div className="ablumDiv">
              <Zoom className="albumLink" class="albumArt" src={data.albums[albumClass].artwork} alt="Album Art not working" info={data.albums[albumClass]}/>
              {/* <img className = "albumArt" src={data.albums[albumClass].artwork}
                // TODO: On clicking on an artwork open up modal with background greyed out and have details of descriptors (Track list, relase --> refer to data.json) of the album.
                onClick={() => this.returnModal()}
                alt="Album Art not working"/> */}
            </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Album
