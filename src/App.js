import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import Register from '../src/components/register/register';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Register />
        </div>
      </Provider>
    );
  }
}

export default App;
