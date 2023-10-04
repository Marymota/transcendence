import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import "../../components/Oauth/GoogleOAuth.css";
import React, { useState, useEffect } from 'react';

import logo from '../../images/PONG-logo.png';
import disk from '../../images/disk.png';
import '../../containers/Authentication.css';

import { Button, makeStyles, Grid } from '@material-ui/core';



const GoogleOAuth: React.FC = () => {
  const history = useHistory();

	const handleSuccessResponse = (response: any) => {

  	// Handle successful login here, e.g., store user data in state or context
  	console.log(response);

  	// Redirect to another page after successful login
  	history.push('/menu');
	};


	const handleFailureResponse = (error: any) => {
  // Handle failed login here
  console.error(error);

};

	return (
		<div className='container'>
			<img className='logo' src={logo} alt="Logo Pong" />
			<p> Play Old Nice Games</p>
      <img className='disk' src={disk} alt="Disquete Illustration" />
		  <Button
				type="button"
				style={{
			  	height: '48px',
			 	 	background: '#5CB9BD',
			  	color: 'white',
				}}>
				42 Intra
		  </Button>
		  <div>
				<GoogleLogin
					clientId="1014151850717-jt2no3c0spm5h4s68icm2eq5p28ept58.apps.googleusercontent.com"
					buttonText="Login with Google"
					onSuccess={handleSuccessResponse}
					onFailure={handleFailureResponse}
					cookiePolicy={'single_host_origin'}
				/>
			</div>
	  </div>
	);
};

export default GoogleOAuth;