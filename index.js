/* eslint-disable react/react-in-jsx-scope */
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import Toast from 'react-native-toast-message';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
      <Toast ref={ref => Toast.setRef(ref)} />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => Root);
