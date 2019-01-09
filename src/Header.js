import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import logo from './img/logo.png';
import img from './img/img.jpg';
import mobile from './img/mobile.png';

class Header extends Component  {

  render(){
    return(
<div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <h3><img src ={mobile} alt="mobile" className="App-mobile"/>{this.props.header.header}</h3>
         <div>
     <ul id="nav">
<li><Link to="/home">Home</Link>

  <ul>
    <li><a href="#link1">{this.props.header.london}</a></li>
    <li><a href="#link2">{this.props.header.paris}</a></li>
    <li><a href="#link3">{this.props.header.tokyo}</a>
      <ul style={{float:'left'}}>
        <li><Link to="/contact">{this.props.header.contact}</Link></li>
        <li><a href="#">{this.props.header.todo}</a></li>
      </ul>
    </li>
  </ul>
</li>
</ul>
</div>
</header>

</div>

);
  }

  }
  export default Header;
