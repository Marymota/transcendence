// Google OAuth 2.0
import React from 'react';
import { GoogleLogout } from 'react-google-login';

// Client ID for Google Cloud Projects
const clientID ="1014151850717-jt2no3c0spm5h4s68icm2eq5p28ept58.apps.googleusercontent.com";

function Logout() {

    const onSuccess = () => {
        console.log("Log out successful!:");
    }

    return (
        <div id="signInButton">
            <GoogleLogout
                clientId={clientID}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;