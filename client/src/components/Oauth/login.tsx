// Google OAuth 2.0
import React from 'react';
import { GoogleLogin } from 'react-google-login';

import "./login.css";

// Client ID for Google Cloud Projects
const clientId ="1014151850717-jt2no3c0spm5h4s68icm2eq5p28ept58.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res: any) => {
        console.log("Login Success! Current user: ", res.profileObj);
    }

    const onFailure = (res: any) => {
        console.log("Login Failed! res: ", res);
    }

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;