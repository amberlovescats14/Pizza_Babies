import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Header extends Component {
  render() {
    return (
      <div>
      <ul style={{display: 'flex', listStyle: 'none'}}>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/length">Length</Link> </li>
        <li> <Link to="/time">Time</Link> </li>
     </ul>
      </div>
    )
  }
}

export default Header
