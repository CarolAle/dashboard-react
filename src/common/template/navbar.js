import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../auth/authActions'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }
    changeOpen() {
        this.setState({ open: !this.state.open })
    }
    render() {
        const { name, email } = this.props.user
        return (

            <ul className="navbar-nav ml-auto">
                <li onMouseLeave={() => this.changeOpen()}
                    className={`nav-item dropdown user user-menu ${this.state.open ? 'show' : ''}`}>
                    <a href="javascript;;" onClick={() => this.changeOpen()}
                        aria-expanded={this.state.open ? 'true' : 'false'}
                        className="nav-link" data-toggle="dropdown">
                        <img src="http://lorempixel.com/160/160/abstract"
                            className="user-image" alt="User"></img>
                        <span className="hidden-xs">{name}</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <a className="dropdown-item">
                            <div className="media" >

                                <img src="http://lorempixel.com/160/160/abstract"
                                    className="img-size-50 mr-3 img-circle" alt="User"></img>

                                <div className="media-body">
                                    <p className="dropdown-item-title">{name}</p>
                                    <p className="text-sm">{email}</p>
                                    <div className="pull-right">
                                        <a href="/" onClick={this.props.logout}
                                            className="btn btn-default btn-flat">Sair</a>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>

        )
    }
}

const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)