import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="navigation">2021<span>Resolutions</span></li>
        </ul>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a>MLH</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;