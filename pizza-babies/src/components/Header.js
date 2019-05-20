import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';

const styleHeader = {
  display: 'flex',
  flexDirection: 'column',
  color: 'white',
  justifyContent: 'center'
}
const titleStyle= {
  display: 'block', 
  width:'100%',
  background:'navy',
  color:'white'
}
const Header = () => (


  <div className="header"  style={styleHeader}>
  <div className="title" style={titleStyle}>
  <h1 style={{textAlign:'center'}}>header</h1>
  </div>
    <ul style={{display: 'flex', color:'navy', justifyContent:'center'}}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/length">Length</Link></li>
      <li><Link to="/Time">Time</Link></li>
      <li><Link to="/Volume">Volume</Link></li>
    </ul>
  </div>
)

export default Header;
