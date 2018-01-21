import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
        break
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        )
      default:
        return (
          <li>
            <a href="">Logout</a>
          </li>
        )
        break
    }
  }
  render() {
    console.log(this.props)
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Header)
