import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import countries from './countries.json';
import CountryDetail from './CountryDetail';
import 'bootstrap/dist/css/bootstrap.css';

//Home is now wrapped in Switch statement so it's props are full of cool stuff that we can use
class Home extends Component {
  showCountries = () => {
    let links = countries.map((eachCountry, i) => {
      //Loop thru countries.json and create dynamic links
      return (
        <li className="list-group-item list-group-item-action" key={i}>
          <Link to={`/country/${eachCountry.cca3}`}>
            {eachCountry.flag} {eachCountry.name.common}
          </Link>
        </li>
      );
    });
    return links;
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-5" id="leftCol">
              <ul className="list-group">{this.showCountries()}</ul>
            </div>
            <div className="col-7">
              <Switch>
                <Route
                  path="/country/:id"
                  component={(props) => <CountryDetail {...props} />}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
