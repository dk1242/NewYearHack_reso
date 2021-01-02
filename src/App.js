import React, { Component } from 'react';
import Home from './home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/login/login.js';
import register from './components/login/register';


class App extends Component {
  render() {
    return ( 
      <Router>
      <div className="container">
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />    
      <Route path="/register" component={register} />
          {/* <Header />
          <Main />
          <Footer /> */}
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
