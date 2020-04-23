import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
//   componentDidMount() {
//     //window.onload happens once when the components first mounts
//     console.log(this);
//   }

  render() {
    return (
      <nav className="nav-style">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

<div>       
        <ul className="list-group">
          {this.showCountries()}
        </ul>
      </div>

export default NavBar;
