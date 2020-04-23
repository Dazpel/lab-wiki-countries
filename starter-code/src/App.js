import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              IronWiki
            </a>
            
          </nav>
          <Home/>
          {/*  This will always show because it not in the switch statement  */}
         
        </div>
      
      </div>
    );
  }
}

export default App;
