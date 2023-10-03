import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import * as authActions from '../redux/actions/auth/actions';

import logo from '../images/PONG-logo.png';
import disk from '../images/disk.png';
import './Authentication.css';


import { Link } from 'react-router-dom';
import { Button, makeStyles, Grid } from '@material-ui/core';

import AuthLinks from '../components/auth-links/AuthLinks';
import LoginButton from "../components/Oauth/login";
import LogoutButton from "../components/Oauth/logout";


const Authentication = () => {
    const [creds, setCreds] = useState({
      email: '',
      password: ''
    });
  
    const dispatch = useDispatch();
    const history = useHistory();
  
    useEffect(() => {
      setCreds({
        email: '',
        password: ''
      });
    }, []);
  
    const onChangeHandler = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { value, id } = e.target;
  
      setCreds((prevState) => ({
        ...prevState,
        [id]: value
      }));
    };
  
    const onSubmitHandler = (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(authActions.login(creds, history));
    };

    return (
    <div className='right'>
      <img className='logo' src={logo} alt="Logo Pong" />
      <p> Play Old Nice Games</p>
      <form
        onSubmit={onSubmitHandler}
        style={{ display: 'flex', 
        flexDirection: 'column',
        width: '350px'
      }}>
        <Button
          type="button"
          style={{
            height: '48px',
            background: '#5CB9BD',
            color: 'white',
          }}>
          42 Intra
        </Button>
        {/* <Button
          type="button"
          style={{
            height: '48px',
            border: '2px solid #EDDF5A',
            color: '#EDDF5A',
            marginTop: '1rem'
          }}>
          Google
        </Button> */}
        <LoginButton />
        <LogoutButton />
      </form>
    </div>
      );
    };
  
  export default Authentication;