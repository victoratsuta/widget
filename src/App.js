import React, { Component } from 'react';

import { Provider } from 'react-redux';

import store from './store';

import Feedback from './components/Feedback';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Feedback />
      </Provider>
    );
  }
}
