import { combineReducers, configureStore } from '@reduxjs/toolkit';
import continentsSlice from './continent/continentsSlice';
import countriesSlice from './country/countriesSlice';
import titleReducer from './title/titleReducer';

const reducer = combineReducers({
  continents: continentsSlice,
  countries: countriesSlice,
  title: titleReducer,
});

const store = configureStore({
  reducer,
});

export default store;
