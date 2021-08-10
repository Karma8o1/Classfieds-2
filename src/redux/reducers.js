/* eslint-disable prettier/prettier */
import { LIGHT_MODE, DARK_MODE, LOGIN, LOGOUT } from './actionType';
import { combineReducers } from 'redux';
const initialState = {
  text: '#fff',
  back: '#000',
  sudo: '#333',
  sudoback: '#000',
  number: 0,
  loggedin: true,
  email:null,
};
const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIGHT_MODE':
      return {
        text: '#000',
        back: '#fff',
        sudo: '#333',
        sudoback: '#000',
        number: action.data,
      };
    case 'DARK_MODE':
      return {
        text: '#fff',
        back: '#000',
        sudo: '#999',
        sudoback: '#fff',
        number: action.data,
      };
  }
  return state;
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, loggedin: true, email: action.email };
    case 'LOGOUT':
      return { ...state, loggedin: false };
  }
  return state;
};

export const rootReducer = combineReducers({
  mode: modeReducer,
  log: loginReducer,
});
