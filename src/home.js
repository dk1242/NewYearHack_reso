import React, { Component } from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './components/main/main'


class Home extends Component {
    render() {
      return ( 
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
      );
    }
  }
  
  export default Home;