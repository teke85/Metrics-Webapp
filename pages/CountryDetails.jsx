import React from 'react';
import { useLocation } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import './CountryDetails.css';

const CountryDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const country = JSON.parse(searchParams.get('country') || '{}');

  const {
    name, population, area, official, capital, lat, lng, flag,
  } = country;

  return (
    <div className="main-container">
      <Wrapper
        className="heading-color"
        map={country.map}
        name={country.name}
        population={country.population}
      />
      <div className="section-title">
        <h4 className="heading-color">{name}</h4>
        <img src={flag} alt="" />
      </div>
      <div className="main-container">
        <div className="item">
          <span className="heading-color">Official Name</span>
          <span className="heading-color">{official}</span>
        </div>
        <div className="item heading-color">
          Capital
          <span>{capital}</span>
        </div>
        <div className="item heading-color">
          Population
          <span>{population}</span>
        </div>
        <div className="item heading-color">
          Area
          <span>
            {area}
            {' '}
            sq. km
          </span>
        </div>
        <div className="item heading-color">
          Latitude
          <span>{lat}</span>
          Longitude
          <span>{lng}</span>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
