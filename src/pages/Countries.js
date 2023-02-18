import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Navbar, Nav, Form, FormControl, Button,
} from 'react-bootstrap';
import { getCountries } from '../Redux/Country/countriesSlice';
import Country from '../components/Country';
import Wrapper from '../components/Wrapper';

const Countries = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const continent = JSON.parse(searchParams.get('continent') || '{}');

  const {
    region, map, population, name, noOfCountries,
  } = continent;
  const { countries, status, error } = useSelector((state) => state.countries);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (
      countries.length === 0
      || region !== countries[0].region
      || name !== countries[0].continent
    ) {
      dispatch(getCountries({ region, name }));
    }
  }, [countries, dispatch, name, region]);

  const handleCountryClick = (country) => {
    navigate(`/country?country=${JSON.stringify(country)}`);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = countries.filter(
    (country) => country.name.toLowerCase().includes(searchTerm.toLowerCase()),
    [searchTerm],
  );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="main-container">
      <Wrapper
        className="heading-color"
        map={map}
        name={name}
        population={population}
      />
      <div className="title-sec">
        <h4 className="heading-color">
          {noOfCountries}
          {' '}
          Countries in
          {name}
        </h4>
      </div>
      <Navbar>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleSearch} />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Nav className="navbar">
          {filteredCountries.map((country) => (
            <Nav.Link
              className="nav-item"
              key={country.id}
              to={country.path}
              onClick={() => {
                handleCountryClick(country);
              }}
            >
              <Country country={country} />
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Countries;
