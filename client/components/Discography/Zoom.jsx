import React from 'react'
import Modal from 'react-bootstrap/Modal'

class Zoom extends React.Component {
    state = {
        show: false,
        trackList: this.props.info.trackList
    }

    setShow(boolean) {
        // sets the show value to the given boolean param
        this.setState({show: boolean})
    }

    returnTrackList() {
        let trackHtml = this.state.trackList.map(track => {
            let output = (<li key={track.trackId}>{`No#${track.trackId}: ${track.title}`}</li>)
            return output
        })

        return trackHtml
    }

    example() {

        return (
            <React.Fragment>
                <img
                    className='albumLink albumArt'
                    src={this.props.src}
                    onClick={() => this.setShow(true)}/>

                <Modal
                    size="xl"
                    show={this.state.show}
                    onHide={() => this.setShow(false)}
                    centered={true}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            {this.props.info.albumName}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="modalContent">
                            <img className='albumModal' src={this.props.src} alt=""/> 
                            <div className="trackList">
                            {this.returnTrackList()}
                            </div>
                        </div>
                    </Modal.Body>

                </Modal>
            </React.Fragment>
        )
    }

    render() {
        return (this.example())
    }
}

export default Zoom