import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';


const Header = () => (

  <div className="header" >
  <h1 >header</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/length">Length</Link></li>
      <li><Link to="/Time">Time</Link></li>
      <li><Link to="/Volume">Volume</Link></li>
    </ul>
  </div>
)

export default Header;
