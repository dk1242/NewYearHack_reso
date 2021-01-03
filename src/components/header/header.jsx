import React, { Component } from 'react';
import Nav from './nav';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <Nav />
          <div className="top">
              <h1>NEW YEAR <br/>NEW RESOLUTIONS</h1>
              <div>
                  <p>This new year, take a resolution for yourself and let the WORLD KNOW!</p>
                  <div><a href="/register" className="contact">Log In/Sign Up</a></div>
                  <div><a href="/reso" className="contact">RESOLUTIONS</a></div>
              </div>
          </div>
      </header>
    )
  }
}

export default Header;