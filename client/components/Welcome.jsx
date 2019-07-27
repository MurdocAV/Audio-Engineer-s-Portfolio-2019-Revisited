import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class StaticModal extends React.Component {
  state = {
    show: false
  }

  setShow (boolean) {
    // sets the show value to the given boolean param
    this.setState({
      show: boolean
    })
  }

  example() {
  
    return (
      <React.Fragment>
        <Button variant="primary" onClick={() => this.setShow(true)}>
          Custom Width Modal
        </Button>
  
        <Modal
          show={this.state.show}
          onHide={() => this.setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src="https://via.placeholder.com/470" alt=""/>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
  
  render () {
    return(this.example())
  };
}

export default StaticModal