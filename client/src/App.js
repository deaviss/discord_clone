import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Context from './Store/context';

import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { LocalSeeOutlined } from '@material-ui/icons';


function App() {
  const { state, actions } = useContext(Context)
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Verify token
      fetch('http://localhost:1234/verifyToken?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            actions({ type: "setToken", payload: token })
            console.log("token set!")
            setLoggedIn(true)
          } else {
            console.log('error')
          }
        });
    } else {
      console.log('not logged in')
      setLoggedIn(false)
    }
  }, [])

  return (
    <>
      {(loggedIn === false) ? <LoginPage /> : (
        <Router>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            {/* <Route path="/login">
              <LoginPage />
            </Route> */}
            {/* <Route path="/register">
              <RegisterPage />
            </Route> */}
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
