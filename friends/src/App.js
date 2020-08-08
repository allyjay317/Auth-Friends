import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Route, useHistory } from 'react-router-dom';
import Axios from 'axios';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import UserPage from './components/UserPage';
import Add from './components/Add';
import FriendPage from './components/FriendPage';

function App() {

  const [error, setError] = useState('')
  const history = useHistory()

  const login = creds => {
    Axios.post('http://localhost:5000/api/login', creds)
      .then(res => {
        console.log(res)
        localStorage.setItem('loginToken', res.data.payload)
        history.push('/userpage')
      })
      .catch(err => {
        console.error(err.message)
        setError(err.message)
      })
  }
  return (
    <div className="App">
      <Header />
      <Route exact path='/' >
        <Login login={login} error={error} />
      </Route>
      <ProtectedRoute path='/userpage' component={UserPage} />
      <ProtectedRoute path='/add' component={Add} />
      <ProtectedRoute path='/friends/:id' component={FriendPage} />
    </div>
  );
}

export default App;
