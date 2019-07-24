import React from 'react'

class Modal extends React.Component {
  // Necessary props = {imgId class caption}

  render () {  
  return (
    <div id="myModal" className="class_here">
      <span className="close">&times;</span>
      {console.log('modal is working')}
      <img className="modal-content" id="img_id_here"/>
      <div id="caption_here"></div>
    </div>
    )
  }
}

export default Modal

