import { LIGHT_MODE, DARK_MODE, LOGIN, LOGOUT } from './actiontype';

export const lightMode = () => ({
  type: 'LIGHT_MODE',
  data: 1,
});
export const darkMode = () => ({
  type: 'DARK_MODE',
  data: 2,
});
export const login = data => ({
  type: 'LOGIN',
  email: data,
});
export const logout = () => ({
  type: 'LOGOUT',
});
