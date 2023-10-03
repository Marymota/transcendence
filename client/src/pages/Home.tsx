import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import Authentication from '../containers/Authentication';

import { useDispatch } from 'react-redux';
import * as authActions from '../redux/actions/auth/actions';

import './Home.css';

import logo from '../images/PONG-logo.png';
import disk from '../images/disk.png';


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
    <div className='container'>

      <div className='left'>
        <img className='disk' src={disk} alt="Disquete Illustration" />
      </div>
      <div className= 'right'>
        <Authentication />
      </div>
 
    </div>
  );
};

export default Login;