import React, { Component } from 'react';
import countries from './countries.json';
import { Link } from 'react-router-dom';

class CountryDetail extends Component {
  countryData = (id) => {
    let data;

    countries.map((country, index) => {
      if (country.cca3 === id) {
        data = countries[index];
      }
    });

    return data;
  };

  render() {
      
    let index = this.countryData(this.props.match.params.id);
    const { name, capital, borders, area } = index;

    return (
      <div>
        <p>Official Name: {name.official}</p>
        <p>Capital: {capital}</p>
        <p>
          Area: {area}
          km
        </p>
        <ul>
          {borders.map((border, i) => {
            let b = this.countryData(border);
            return (
              <li key={i}>
                <Link to={`/country/${border}`}>{b.name.common}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CountryDetail;
