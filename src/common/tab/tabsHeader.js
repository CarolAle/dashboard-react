import React from 'react'

export default props => (
    <div className="card-header">
        <ul className="nav nav-tabs">
            {props.children}
        </ul>
    </div>
)