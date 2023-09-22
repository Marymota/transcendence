import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import * as authActions from '../redux/actions/auth/actions';

import logo from '../images/PONG-logo.png';
import disk from '../images/play-icon.png';


const Login = () => {
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
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#463366'
      }}
    >
      <img src={disk} alt="Disquete Illustration" />
      <div
        style={{
          margin: '30px 0',
          width: '350px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <img src={logo} alt="Logo Pong" />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          color: 'white',
          padding: '25px'
        }}>
          <div>New member?</div>
          <div>
            <Link
              style={{
                textDecoration: 'none', 
                marginLeft: '0.5rem',
                color: 'white'
            }}
              to="/register"
            >
              Create an account
            </Link>
          </div>
        </div> 
      </div>

      <form
        onSubmit={onSubmitHandler}
        style={{ display: 'flex', 
        flexDirection: 'column', 
        width: '350px'
      }}
      >
        {/* <TextField
          style={{
            margin: '0.5rem 0',
            backgroundColor: 'white'
          }}
          variant="outlined"
          id="email"
          type="email"
          onChange={onChangeHandler}
          value={creds.email}
          label="Email"
          required
        />
        <TextField
          style={{ 
            margin: '0.5rem 0',
            backgroundColor: 'white'
          }}
          variant="outlined"
          id="password"
          type="password"
          onChange={onChangeHandler}
          value={creds.password}
          label="Password"
          required
        /> */}
        <Button
          type="button"
          style={{
            height: '48px',
            background: '#5CB9BD',
            color: 'white',
          }}>
          42 Intra
        </Button>
        <Button
          type="button"
          style={{
            height: '48px',
            border: '2px solid #EDDF5A',
            color: '#EDDF5A',
            marginTop: '1rem'
          }}>
          Google
        </Button>
        {/* <Button
          type="submit"
          style={{
            height: '48px',
            background: '#FF0083',
            color: 'white',
            marginTop: '2rem'
          }}>
          Send
        </Button> */}
      </form>
    </div>
  );
};

export default Login;
