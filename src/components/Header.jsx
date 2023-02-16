import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import { FaChevronLeft } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import { BsMicFill } from 'react-icons/bs';
import { updateTitle } from '../redux/title/titleReducer';

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const title = useSelector((state) => state.title);
  const navigate = useNavigate();

  useEffect(() => {
    let dynamicTitle = '';

    switch (location.pathname) {
      case '/':
        dynamicTitle = 'World Population';
        break;
      case '/continent':
        dynamicTitle = 'Continental View';
        break;
      case '/country':
        dynamicTitle = 'Country/State  Information';
        break;
      default:
        dynamicTitle = 'Page Not Found';
        break;
    }

    dispatch(updateTitle(dynamicTitle));
  }, [location, dispatch]);

  return (
    <header className="header" data-testid="header">
      <div className="col-left">
        <FaChevronLeft className="arrow-left" onClick={() => navigate(-1)} />
        <h2 className="year">2023</h2>
      </div>
      <span className="title">{title.title}</span>
      <div className="col-right">
        <BsMicFill className="mic" />
        <IoSettingsSharp className="gear" />
      </div>
    </header>
  );
};

export default Header;
