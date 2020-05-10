import React from 'react'
import Menu from './menu'

export default props => (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
         <a href="/#/" className="brand-link logo">
            <span className="logo-mini"><b>My</b>M</span>
            <span className="logo-lg">
                <i className="fa fa-money"></i>
                <b> My</b> Money
            </span>
        </a> 
        <section className="sidebar">
            <Menu />
        </section>
    </aside>
)