import React, { useEffect } from 'react';
import Home from './pages/Home';
import Demo from './pages/Demo';
import Navbar from './containers/Navbar';
import Sidebar from './containers/Sidebar';

import { Switch, Route, useHistory, Redirect } from 'react-router-dom';

import SnackBar from './components/snackbar/SnackBar';
import Login from './pages/Login';
import Register from './pages/Register';

import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from './redux/actions/auth/actions';
import { IStore } from './types';

import PrivateRoute from './components/private-route';

import './App.css';

// // Google Oauth imports
import LoginButton from "./components/Oauth/login";
import LogoutButton from "./components/Oauth/logout";
import { gapi } from 'gapi-script';

// Client ID for Google Cloud Projects
const clientID ="1014151850717-jt2no3c0spm5h4s68icm2eq5p28ept58.apps.googleusercontent.com";

 function App() {

// Google OAuth
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  });

  // Get the token of the user already signed in
  //var accessToken = gapi.auth.getToken().access_token;

  const dispatch = useDispatch();

  const history = useHistory();

  const { currentUser, isLoading } = useSelector((state: IStore) => state.auth);

  useEffect(() => {
    dispatch(getProfile(history));
  }, []);

  return (

    <>
      <div className="App">
        <Navbar />
        {!isLoading ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <PrivateRoute
              isLoggedIn={!!currentUser}
              path="/demo"
              component={Demo}
            />
            <Route>
              <Redirect to="/demo" />
            </Route>
          </Switch>
        ) : (
          <div
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Loading...
          </div>
        )}
      </div>
      <Sidebar/>
      <SnackBar
        position={{ vertical: 'bottom', horizontal: 'left' }}
        duration={3000}
      />
    </>
  );
}

export default App;
