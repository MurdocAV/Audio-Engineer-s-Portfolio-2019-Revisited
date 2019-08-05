import React from 'react'
import Footer from './Footer'
class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='contactDiv'>
          <h1 className='contactText'>Contact us on 0800 83 83 83, email@gmail.com</h1>
          <div className="contactImg">
            <img className="" src="https://via.placeholder.com/150" alt="placeholder image"/>
          </div>
          {
            //Implement css
          }
          <p className="footer">&copy; Name placeholder. All rights reserved.</p>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default Contact
