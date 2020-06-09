import React from 'react'

export default props => (
    <li className="nav-item">
        <a href={props.path} className="nav-link">
            <i className={`fa fa-${props.icon}`}></i> <p>{props.label}</p>
        </a>
    </li>
)