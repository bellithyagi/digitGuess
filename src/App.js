import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import Register from '../src/components/register/register';
import Login from '../src/components/login/login';
import Dashboard from '../src/components/dashboard/dashboard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            {/* <Register />
            <Login /> */}
            <Dashboard />
        </div>
      </Provider>
    );
  }
}

export default App;
