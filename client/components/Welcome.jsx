import React from 'react'
import {Redirect} from 'react-router-dom'

class Welcome extends React.Component {

    render() {
        return (
            <React.Fragment>
              <Redirect
                to={{
                  pathname: "/Discography"
                }}
              />
            </React.Fragment>
        )
    }
}

export default Welcome
