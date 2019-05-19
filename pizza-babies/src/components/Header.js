import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';
// import Router from './Router'
// import App from '../App'


const Header = () => (
  <div className="header">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/length">Length</Link></li>
      <li><Link to="/Time">Time</Link></li>
      <li><Link to="/Volume">Volume</Link></li>
    </ul>
  </div>
)

export default Header;
