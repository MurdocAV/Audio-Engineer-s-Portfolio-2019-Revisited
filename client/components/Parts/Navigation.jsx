import React from 'react'
import {NavLink, IndexLink} from 'react-router-dom'

class Navigation extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="title">
                    <h1 className="titleHeader">Azaan Virk</h1>
                </div>
                <div className="nav">
                    <NavLink className="homeLink" activeClassName="active" to={'/Home'}>Home</NavLink>
                    <NavLink
                        className="aboutLink"
                        activeClassName="active"
                        to={'/About'}>About</NavLink>
                    <NavLink className="projectsLink" activeClassName="active" to={'/Projects'}>Projects</NavLink>
                    <NavLink className="exampleFormLink" activeClassName="active" to={'/ExampleForm'}>Example Form</NavLink>
                    <NavLink className="referencesLink" activeClassName="active" to={'/References'}>References</NavLink>
                    <NavLink className="emailLink" activeClassName="active" to={'/Email'}>Email</NavLink>
                    <NavLink className="hiringLink" activeClassName="active" to={'/Hiring'}>Hiring</NavLink>
                    <NavLink className="documentationLink" activeClassName="active" to={'/Documentation'}>Documentation</NavLink>
                </div>
            </div>
        )
    }
}

export default Navigation
