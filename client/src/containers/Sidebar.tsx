import React from 'react';

import './Navbar.css'

import logo from '../images/PONG-logo.png'
import play from '../images/play-icon.png'
import leaderboard from '../images/leaderboard-icon.png'
import chat from '../images/chat-icon.png'
import perfil from '../images/perfil-icon.png'
import exit from '../images/exit-icon.png'

import { Link } from 'react-router-dom';
import { Button, makeStyles, Grid } from '@material-ui/core';

import AuthLinks from '../components/auth-links/AuthLinks';

// const useStyles = makeStyles((theme) => ({
//   navbar: {
//     height: '100vh',
//     width: '25%',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'left',
//     //position: 'fixed',
//     // top: 0,
//     // left: 0,
//     // background: 'white',
//     boxShadow: '0 0 8px 3px rgba(0,0,0,0.2)',
//     zIndex: 999,
//     padding: '20px',
//     [theme.breakpoints.down('md')]: {
//       padding: '0 8px'
//     }
//   },
//   navLinks: {
//     '& > a': {
//       margin: '0 0.3rem'
//     }
//   },
//   authLinks: {
//     '& > a': {
//       textDecoration: 'none',
//       color: 'black'
//     }
//   }
// }));

const Navbar = () => {
//  const classes = useStyles();

  return (

    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="logo button"/>
        </div>
      </Link>
      
      <div className="nav-items">
        <Link to="/">
          <div className="nav-item">
            <img src={play} alt="play button" />
            <p>Play</p>
          </div>
        </Link>

        <Link to="/">
          <div className="nav-item">
            <img src={leaderboard} alt="leaderboard button" />
            <p> Leaderboard </p>
          </div>
        </Link>

        <Link to="/">
          <div className="nav-item">
            <img src={chat} alt="chat button" />
            <p> Chat </p>
          </div>
        </Link>

        <Link to="/">
          <div className="nav-item">
            <img src={perfil} alt="perfil button" />
            <p> Perfil </p>
          </div>
        </Link>

        <Link to="/">
          <div className="nav-item">
            <img src={exit} alt="exit button" />
            <p> Exit </p>
          </div>
        </Link>

      </div>
    </div>

    // <Grid
    //   container
    //   alignItems="center"
    //   justify="space-between"
    //   className={classes.navbar}
    // >
    //   <Grid item className={classes.navLinks}>
    //     <Grid container spacing={2}>
    //       <Grid item xs={3}>
    //         <Link to="/">
    //           <img src={logo} alt="logo"
    //             style={{
    //               color: 'white',
    //               textDecoration: 'none',
    //               height: 'auto',
    //               width: '200px',
    //             }}
    //           />
    //         </Link>
    //       </Grid>
    //       <Grid item xs={9}>
    //         <Link to="/">
    //           <Button
    //             style={{
    //               textDecoration: 'none',
    //               border: '2px #473366 solid',
    //               height: '48px',
    //               width: '80px'
    //             }}
    //           >
    //             Home
    //           </Button>
    //         </Link>
    //       </Grid>
    //       <Grid item xs={10}>
    //         <Link to="/demo">
    //           <Button
    //             style={{
    //               background: '#473366',
    //               color: 'white',
    //               textDecoration: 'none',
    //               height: '48px',
    //               width: '80px'
    //             }}
    //           >
    //             Demo
    //           </Button>
    //         </Link>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid item className={classes.authLinks}>
    //     <AuthLinks />
    //   </Grid>
    // </Grid>
  );
};

export default Navbar;