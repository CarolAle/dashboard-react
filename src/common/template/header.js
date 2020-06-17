import React from 'react'
import Navbar from './navbar'

export default props => (
    <nav  className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/" className="nav-link" data-widget="pushmenu" role="button">
                        <i className="fa fa-bars"></i>
                    </a>
                    
                </li>
            </ul>
            <Navbar />
    </nav>
)