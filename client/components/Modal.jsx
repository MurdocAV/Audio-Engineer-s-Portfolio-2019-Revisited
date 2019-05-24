import React from 'react'

export default function Modal (props) {
  // Necessary props = {imgId class caption}
  return (
    <div id="myModal" className="class_here">
      <span className="close">&times;</span>
      {console.log('modal is working')}
      <img className="modal-content" id="img_id_here"/>
      <div id="caption_here"></div>
    </div>
  )
}
