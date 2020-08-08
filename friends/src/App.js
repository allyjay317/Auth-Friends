import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Route } from 'react-router-dom';

function App() {

  const login = creds => {

  }
  return (
    <div className="App">
      <Route exact path='/' component={Login} login={login} />
    </div>
  );
}

export default App;
