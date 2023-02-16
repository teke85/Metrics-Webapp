import React from 'react';
import PropTypes from 'prop-types';
import './Wrapper.css';

const PageHeader = (props) => {
  const { map, name, population } = props;
  return (
    <div className="page-header">
      <img src={map} alt={name} className="page-image" />
      <div className="page-title">
        <h2 className="heading-color">{name}</h2>
        <span className="heading-color">{population}</span>
      </div>
    </div>
  );
};
PageHeader.propTypes = {
  name: PropTypes.string,
  population: PropTypes.string,
  map: PropTypes.string,
};

PageHeader.defaultProps = {
  name: '',
  population: '',
  map: '',
};

export default PageHeader;
