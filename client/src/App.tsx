import React, { useEffect } from 'react';
import Sidebar from './containers/Sidebar';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

// // Google Oauth imports
import GoogleOAuth from './components/Oauth/GoogleOAuth';

// Client ID for Google Cloud Projects
const clientID ="1014151850717-jt2no3c0spm5h4s68icm2eq5p28ept58.apps.googleusercontent.com";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={GoogleOAuth} />
        <Route path="/menu" component={Sidebar} />
      </Switch>
    </Router>
  );
};

export default App;
