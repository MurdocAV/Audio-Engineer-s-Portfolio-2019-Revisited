import React from 'react'
import Modal from 'react-bootstrap/Modal'

class Zoom extends React.Component {
    state = {
        show: false
    }

    setShow(boolean) {
        // sets the show value to the given boolean param
        this.setState({show: boolean})
    }

    example() {

        return (
            <React.Fragment>
                {console.log(this.props.info)}
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
                        <img className='albumModal' src={this.props.src} alt=""/> 
                        { /* {TODO: Create another component to see the track list} */}
                        <p>Track List...</p>
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